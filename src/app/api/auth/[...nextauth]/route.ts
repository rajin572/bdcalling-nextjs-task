import NextAuth, {
  NextAuthOptions,
  User as NextAuthUser,
  Account,
} from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/connect";
import User, { IUser } from "@/models/userModel"; // Make sure IUser is defined in userModel

interface Credentials {
  email: string;
  password: string;
}

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: Credentials | undefined) {
        if (!credentials) {
          return null;
        }

        await connectDB();
        try {
          const user = await User.findOne({ email: credentials.email })
            .lean()
            .exec();
          if (user && !Array.isArray(user)) {
            const typedUser = user as unknown as IUser;
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              typedUser.password
            );
            if (isPasswordCorrect) {
              return {
                ...typedUser,
                id: typedUser._id.toString(),
              } as NextAuthUser;
            }
          }
          return null;
        } catch (err: unknown) {
          if (err instanceof Error) {
            throw new Error(err.message);
          }
          throw new Error("An unexpected error occurred");
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({
      user,
      account,
    }: {
      user: NextAuthUser;
      account: Account | null;
    }) {
      if (account?.provider === "credentials") {
        return true;
      }
      if (account?.provider === "github") {
        await connectDB();
        try {
          const existingUser = await User.findOne({ email: user.email });
          if (!existingUser) {
            const newUser = new User({
              email: user.email,
            });
            await newUser.save();
            return true;
          }
          return true;
        } catch (err) {
          return false;
        }
      }
      return false;
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
