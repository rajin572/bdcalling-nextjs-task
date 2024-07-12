import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/connect";
import User from "@/models/userModel";

export const POST = async (request: any) => {
  const { username, email, password, address, contactNumber } =
    await request.json();

  try {
    await connectDB();
  } catch (e) {
    return new NextResponse(
      e instanceof Error ? e.message : "An unexpected error occurred",
      {
        status: 500,
      }
    );
  }

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = {
    username,
    password: hashedPassword,
    email,
    address,
    contactNumber,
  };

  try {
    await createUser(newUser);
  } catch (err) {
    return new NextResponse(
      err instanceof Error ? err.message : "An unexpected error occurred",
      {
        status: 500,
      }
    );
  }

  return new NextResponse("User has been created", {
    status: 201,
  });
};
