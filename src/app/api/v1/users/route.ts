import { redirect } from "next/navigation"

export async function GET() {
  redirect("/api/v2/users") // Redirect to the v2 users API route
  return new Response("v1 Users API Route")
}