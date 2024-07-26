import { NextResponse } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request:any) {
    const token = request.cookies.get('token')?.value;


    if (!token) {
        return new NextResponse(JSON.stringify({ message: "please provide a token" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }

    try {
        const {payload} = await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET!));
        if(payload){
            const response = NextResponse.next();
            response.headers.set("user", JSON.stringify(payload))
            return response;
        }else{
            return new NextResponse(JSON.stringify({ message: "invalid token" }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }
    } catch (error) {
        return new NextResponse(JSON.stringify({ message: "invalid token" }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' }
        });
    }
   

}

export const config = {
    matcher: ['/api/user/:path*'],
};
