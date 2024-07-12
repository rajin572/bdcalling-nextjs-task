"use server";

import { signIn, signOut } from "@/auth";
import { revalidatePath } from "next/cache";

export async function doLogout() {
  await signOut({ redirectTo: "/" });
}

export async function doCredentialLogin(values: {
  email: string;
  password: string;
}) {
  console.log("formData", values);

  try {
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
    });
    revalidatePath("/");
    return response;
  } catch (err) {
    throw err;
  }
}
