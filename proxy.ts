import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyToken } from "./app/lib/auth";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const isLoginPage = request.nextUrl.pathname === "/login";

  if (!token) {
    if (!isLoginPage) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    return NextResponse.next();
  }

  const valid = await verifyToken(token);

  if (!valid) {
    const response = NextResponse.redirect(new URL("/login", request.url));
    response.cookies.delete("token");
    return response;
  }

  if (isLoginPage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/dashboard/:path*"],
};
