import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;

  const url = request.nextUrl.clone();

  // Allow access to login and signup pages if no token is provided
  if ((url.pathname === "/login" || url.pathname === "/signup") && !token) {
    return NextResponse.next();
  }

  // Redirect authenticated users away from login and signup pages
  if ((url.pathname === "/login" || url.pathname === "/signup") && token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users away from protected routes
  if (url.pathname === "/checkout" && !token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  if (!token) {
    return new NextResponse(
      JSON.stringify({ message: "please provide a token" }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  try {
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.JWT_SECRET!)
    );
    if (payload) {
      const response = NextResponse.next();
      response.headers.set("user", JSON.stringify(payload));
      return response;
    } else {
      return new NextResponse(JSON.stringify({ message: "invalid token" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
  } catch (error) {
    return new NextResponse(JSON.stringify({ message: "invalid token" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export const config = {
  matcher: ["/api/user/:path*", "/login", "/signup", "/checkout"],
};
