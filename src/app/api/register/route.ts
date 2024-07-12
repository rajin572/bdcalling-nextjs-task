import { NextResponse } from "next/server";
import { createUser } from "@/queries/users";
import bcrypt from "bcryptjs";
import { connectDB } from "@/utils/connect";
import User from "@/models/userModel";

export const POST = async (request: any) => {
  const { username, email, password, address, contactNumber } =
    await request.json();

  console.log("Received data:", {
    username,
    email,
    password,
    address,
    contactNumber,
  });

  // Create a DB Connection
  try {
    await connectDB();
  } catch (e) {
    console.error("Database connection error:", e);
    return new NextResponse(
      e instanceof Error ? e.message : "An unexpected error occurred",
      {
        status: 500,
      }
    );
  }

  // Encrypt the password
  const hashedPassword = await bcrypt.hash(password, 5);
  // Form a DB payload
  const newUser = {
    username,
    password: hashedPassword,
    email,
    address,
    contactNumber,
  };

  // Update the DB
  try {
    await createUser(newUser);
  } catch (err) {
    console.error("Error creating user:", err);
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
