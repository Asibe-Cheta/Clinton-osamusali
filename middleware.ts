import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === "/favicon.ico") {
    return NextResponse.redirect(
      new URL("/brand/favicon.png", request.url),
      307
    );
  }
}

export const config = {
  matcher: "/favicon.ico",
};
