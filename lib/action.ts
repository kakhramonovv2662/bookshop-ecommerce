"use server";

import { sql } from "@vercel/postgres";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function updateBooks(id: string, formData: FormData) {
  const status = formData.get("status");

  await sql`
    UPDATE products
    SET status = ${status as string}
    WHERE id = ${id}
  `;

  revalidatePath("/dashboard");
  redirect("/dashboard");
}

import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}
