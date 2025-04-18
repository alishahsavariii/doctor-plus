import { ApiResponseType } from "@/types/api-response.type";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

import * as jose from "jose";

type parseBodyResult<T> = [error: null, data: T] | [error: string, data: null];

const alg = "HS256";
const secret = new TextEncoder().encode(process.env.TOKEN_SECRET);

export async function parseBody<T>(
  request: Request
): Promise<parseBodyResult<T>> {
  try {
    const body = await request.json();
    return [null, body];
  } catch (error) {
    if (error instanceof Error) {
      return [error.message, null];
    }
    if (typeof error === "string") {
      return [error, null];
    }

    return ["خطا رخ داده است.", null];
  }
}

export async function wrapWithTryCatch<T>(
  callback: () => Promise<ApiResponseType<T>>
): Promise<ApiResponseType<T>> {
  try {
    return await callback();
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json(
      { error: "خطای غیرمنتظره رخ داد." },
      { status: 500 }
    );
  }
}

export async function setAuthCookie(): Promise<void> {
  const cookieStore = cookies();

  const token = await new jose.SignJWT()
    .setProtectedHeader({ alg })
    .setIssuedAt()
    .setExpirationTime("3d")
    .sign(secret);

  cookieStore.set(process.env.TOKEN_KEY!, token, {
    secure: true,
    httpOnly: true,
    sameSite: "none",
    maxAge: 3 * 24 * 3600,
  });
}

export async function removeAuthCookie(): Promise<void> {
  const cookieStore = cookies();
  cookieStore.delete(process.env.TOKEN_KEY!);
}

export async function isSignedIn(request: NextRequest): Promise<boolean> {
  const token = request.cookies.get(process.env.TOKEN_KEY!)?.value;

  if (!token) {
    return false;
  }

  try {
    await jose.jwtVerify(token, secret);
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}
