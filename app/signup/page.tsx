import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "../actions/auth"

export default function SignupPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 flex items-center justify-center">
        <div className="w-full max-w-md space-y-8 px-4 py-8 bg-white shadow-lg rounded-lg">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
            <p className="text-gray-500">Sign up to start planning your trips with AI</p>
          </div>
          <form action={signup} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Enter your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" placeholder="Enter your email" required type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" required type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" name="confirm-password" required type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign Up
            </Button>
          </form>
          <div className="text-center">
            <p className="text-sm text-gray-500">
              Already have an account?{" "}
              <Link className="text-blue-500 hover:underline" href="/login">
                Log in
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

