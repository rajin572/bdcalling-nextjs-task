import { auth } from "@/auth";
import { getUserByEmail } from "@/queries/users";
import { connectDB } from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: any) => {
  const session = await auth();

  if (!session?.user) {
    return new NextResponse(`You are not authenticated!`, {
      status: 401, // Use 401 for unauthorized status
    });
  }

  await connectDB();

  try {
    const user = await getUserByEmail(session?.user?.email);
    return new NextResponse(JSON.stringify(user), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new NextResponse(
      error instanceof Error ? error.message : "An unexpected error occurred",
      {
        status: 500,
      }
    );
  }
};
