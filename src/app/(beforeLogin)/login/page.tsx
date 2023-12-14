"use client";

import Main from "@/app/(beforeLogin)/_component/Main";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();
  router.replace("i/flow/login");
  return <Main />;
}

/**
 * 뒤로가기 할 때 차이점이 있다.
 *
 * router.push // 히스토리에 남긴다.
 * localhost:3001 -> localhost:3001/login -> localhost:3001/i/flow/login
 * 바로 전 단계로 돌아가서 login에서 리다이렉트 해주면 루프가 돔
 *
 * router.replace가 되어진 곳을 건너 뛴다. // 히스토리에 남지 않는다.
 * localhost:3001 -> localhost:3001/i/flow/login
 */
