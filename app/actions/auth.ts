"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"

export async function login(formData: FormData) {
  const email = formData.get("email") as string
  const password = formData.get("password") as string

  // In a real application, you would validate the credentials here
  // For this example, we'll just check if the email and password are not empty
  if (email && password) {
    // Set a cookie to simulate a logged-in state
    cookies().set("user", email, { secure: true, httpOnly: true })
    redirect("/home")
  }

  return { error: "Invalid credentials" }
}

export async function signup(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const password = formData.get("password") as string
  const confirmPassword = formData.get("confirm-password") as string

  // In a real application, you would validate the input and create a new user account
  // For this example, we'll just check if all fields are filled and passwords match
  if (name && email && password && confirmPassword && password === confirmPassword) {
    // Set a cookie to simulate a logged-in state
    cookies().set("user", email, { secure: true, httpOnly: true })
    redirect("/home")
  }

  return { error: "Invalid input or passwords do not match" }
}

export async function logout() {
  cookies().delete("user")
  redirect("/")
}

