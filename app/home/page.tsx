import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { logout } from "../actions/auth"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <span className="font-bold text-2xl">AI Trip Planner</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            My Trips
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Profile
          </Link>
          <form action={logout}>
            <Button variant="ghost" className="text-sm font-medium">
              Logout
            </Button>
          </form>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Welcome to Your AI Trip Planner
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Let's start planning your next adventure!
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="destination">Where do you want to go?</Label>
                    <Input id="destination" placeholder="Enter a destination" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dates">When do you want to travel?</Label>
                    <Input id="dates" placeholder="Enter travel dates" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="budget">What's your budget?</Label>
                    <Input id="budget" placeholder="Enter your budget" />
                  </div>
                  <Button type="submit">Generate Trip Plan</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 AI Trip Planner. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

