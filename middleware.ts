import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {

  const token = request.cookies.get("token")?.value;
  const signingUp = request.cookies.get("signingup")?.value;

  const url = request.nextUrl.clone();
  // Allow access to login and signup pages if no token is provided
  if (
    (url.pathname === "/auth/login" || url.pathname === "/auth/signup") &&
    !token
  ) {
    return NextResponse.next();
  }

  // Redirect authenticated users away from login and signup pages
  if (
    (url.pathname === "/auth/login" || url.pathname === "/auth/signup") &&
    token
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users away from protected routes
  if (url.pathname === "/checkout" && !token) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }


  if (url.pathname === "/auth/verification" && signingUp === "true") {
    return NextResponse.next();
  }

  if(url.pathname === "/auth/verification" && (signingUp === "false" || !signingUp)){
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  let verified = request.cookies.get("verified")?.value;


  if (url.pathname === '/welcome' && verified  === "true") { 
      // Create a new response to modify headers
      const response = NextResponse.next();

      console.log("removing cookies")
      // Set the 'verified' cookie
      response.cookies.set('verified', '', { httpOnly: true, maxAge: 0, path: '/', sameSite: 'strict' });
      response.cookies.set('signingup', '', { httpOnly: true, maxAge: 0, path: '/', sameSite: 'strict' });
      return response;
  }


  if(url.pathname === "/welcome" && !verified){
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
  matcher: [
    "/api/user/cart/:path*",
    "/api/user/carts/:path*",
    "/auth/login",
    "/auth/signup",
    "/checkout",
    "/auth/verification",
    "/welcome"
  ],
};
