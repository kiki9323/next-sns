import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { NextResponse } from "next/server";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
} = NextAuth({
  // 넥스트가 기본적으로 제공해주는 페이지 말고 커스텀 페이지 등록
  pages: {
    signIn: "/i/flow/login",
    newUser: "/i/flow/signup",
  },
  // next auth tutorial에 있다. 복사해서 가져오기.
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const authResponse = await fetch(`${process.env.AUTH_URL}/api/login`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: credentials.username,
            password: credentials.password,
          }),
        });
        console.log(authResponse);
        if (!authResponse.ok) {
          return null;
        }

        const user = await authResponse.json();
        console.log("user", user);
        return {
          email: user.id,
          name: user.nickname,
          image: user.image,
          ...user,
        };
      },
    }),
  ],
});
