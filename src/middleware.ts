// config는 미들웨어를 적용할 라우터를 적어준다.

import { NextResponse } from "next/server";
import { auth } from "./auth";

export async function middleware() {
  const session = await auth();
  if (!session) {
    return NextResponse.redirect("http://localhost:3000/i/flow/login");
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/compose/tweet", "/home", "/explore", "/messages", "/search"],
};
