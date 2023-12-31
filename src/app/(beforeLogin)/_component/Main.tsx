'use client'

import Image from "next/image";
import Link from "next/link";
import Loopy from "../../../../public/Loopy.jpeg";
import styles from "@/app/page.module.css";

export default function Main() {
  return (
    <>
      <div className={styles.left}>
        <Image src={Loopy} alt="logo" width={250} height={250} />
      </div>
      <div className={styles.right}>
        <h1>지금 일어나고 있는 일</h1>
        <h2>지금 가입하세요!</h2>
        <Link href="/i/flow/signup" className={styles.signup}>
          계정 만들기
        </Link>
        <h3>이미 트위터에 가입하셨나요?</h3>
        <Link href="/login" className={styles.login}>
          로그인
        </Link>
      </div>
    </>
  );
}
