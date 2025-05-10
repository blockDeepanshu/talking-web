import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const session = req.cookies.get("sessionId");

  if (!session) {
    res.cookies.set("sessionId", crypto.randomUUID());
  }
  return res;
}
