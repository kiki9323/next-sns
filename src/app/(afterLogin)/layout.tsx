import FollowRecommend from "./_component/FollowRecommend";
import Image from "next/image";
import Link from "next/link";
import LogoutButton from "./_component/LogoutButton";
import Loopy from "../../../public/Loopy.jpeg";
import NavMenu from "./_component/NavMenu";
import RightSearchZone from "./_component/RightSearchZone";
import TrendSection from "./_component/TrendSection";
import style from "@/app/(afterLogin)/layout.module.css";
import { auth } from "@/auth";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default async function AfterLoginLayout({ children, modal }: Props) {
  const session = await auth();

  return (
    <div className={style.container}>
      <header className={style.leftSectionWrapper}>
        <div className={style.leftSection}>
          <div className={style.leftSectionFixed}>
            <Link href="/home" className={style.logo}>
              <div className={style.logoPill}>
                <Image src={Loopy} alt="루피 로고" width={40} />
              </div>
            </Link>
            {session?.user && (
              <>
                <nav>
                  <ul>
                    <NavMenu />
                  </ul>
                  <Link href="/compose/tweet" className={style.postButton}>
                    게시하기
                  </Link>
                </nav>
                <LogoutButton />
              </>
            )}
          </div>
        </div>
      </header>
      <div className={style.rightSectionWrapper}>
        <div className={style.rightSectionInner}>
          <main className={style.main}>{children}</main>
          <section className={style.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={style.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
