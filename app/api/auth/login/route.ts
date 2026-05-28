import { createToken } from "@/app/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  const { email, password } = body;

  if (email === "" || password === "") {
    return NextResponse.json({ message: "invalid credentials" }, { status: 401 });
  }

  const token = await createToken({
    id: 1,
    email,
  });

  const response = NextResponse.json({
    success: true,
  });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });

  return response;
}
