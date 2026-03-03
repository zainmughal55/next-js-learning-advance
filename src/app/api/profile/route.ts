import { headers, cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // const requestHeaders = new Headers(request.headers);
  // console.log(requestHeaders.get("Authorization"));
  const headerList = await headers();
  console.log(headerList.get("Authorization"));

  const theme = request.cookies.get("theme");
  console.log("Theme from cookies:", theme);

  const cookieStore = await cookies();
  cookieStore.set("limit", '20');
  const limit = cookieStore.get("limit");
  console.log("Limit from cookie store:", limit);

  return new Response("<h1>Profile API Route</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark",
    }
  });
}