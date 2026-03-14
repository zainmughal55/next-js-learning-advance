import { NextRequest, NextResponse } from "next/server";

// Custom Matcher redirection
// export function proxy(request: NextRequest) {
//   return NextResponse.redirect(new URL("/", request.url));
// }

// export const config = {
//   matcher: "/profile"
// }

// Conditional Statement
// export function proxy(request: NextRequest) {
//   if (request.nextUrl.pathname === "/profile") {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// Header and Cookies
export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  const themePreference = request.cookies.get("theme")
  if (!themePreference) {
    response.cookies.set("theme", "dark");
  }
  response.headers.set("X-Custom-Header", "Hello from the proxy!");
  return response;
}