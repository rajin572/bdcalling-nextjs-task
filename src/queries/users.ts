import User from "@/models/userModel";

export async function createUser(user: {
  username: any;
  password: string;
  email: any;
  address: any;
  contactNumber: any;
}) {
  try {
    await User.create(user);
  } catch (e) {
    if (e instanceof Error) {
      throw new Error(e.message);
    } else {
      throw new Error("An unexpected error occurred");
    }
  }
}

export async function getUserByEmail(email: any) {
  const user = await User.findOne({ email: email }).select("-password").lean();
  return user;
}
