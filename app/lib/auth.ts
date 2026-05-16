import { JWTPayload, jwtVerify, SignJWT } from "jose";

const secret = new TextEncoder().encode(process.env.JWT_SECRET || "");

if (!process.env.JWT_SECRET) {
  console.warn("JWT_SECRET não está configurada.");
}

export async function createToken(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);

    return payload;
  } catch (error) {
    return null;
  }
}
