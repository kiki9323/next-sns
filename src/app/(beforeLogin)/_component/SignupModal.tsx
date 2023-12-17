import BackButton from "./BackButton";
import { redirect } from "next/navigation";
import style from "./signup.module.css";

export default function SignupModal() {
  const submit = async (formData: FormData) => {
    "use server"; // 클라에서 보이지 않는 소스코드 (프론트엔드 서버이다)
    let shouldRedirect = false;
    try {
      // DB 접속해서 가져오면 됨.
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
        {
          method: "post",
          body: formData,
          credentials: "include", // 이 옵션이 있어야 쿠키가 전달이 됨. (로그인한 사람이 재회원가입 막기같은..)
        }
      );

      console.log(response.status);
      if (response.status === 403) {
        return { message: "user_exists" };
      }
      console.log(await response.json());
      shouldRedirect = true;
    } catch (error) {
      console.error(error);
      return;
    }

    if (shouldRedirect) {
      redirect("/home"); // try/catch 안에서 redirect하면 안 된다.
    }
  };

  return (
    <>
      <div className={style.modalBackground}>
        <div className={style.modal}>
          <div className={style.modalHeader}>
            <BackButton />
            <div>계정을 생성하세요.</div>
          </div>
          <form action={submit}>
            <div className={style.modalBody}>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="id">
                  아이디
                </label>
                <input
                  id="id"
                  name="id"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="name">
                  닉네임
                </label>
                <input
                  id="name"
                  name="name"
                  className={style.input}
                  type="text"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="password">
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  className={style.input}
                  type="password"
                  placeholder=""
                  required
                />
              </div>
              <div className={style.inputDiv}>
                <label className={style.inputLabel} htmlFor="image">
                  프로필
                </label>
                <input
                  id="image"
                  name="image"
                  className={style.input}
                  type="file"
                  accept="image/*"
                  required
                />
              </div>
            </div>
            <div className={style.modalFooter}>
              <button className={style.actionButton}>가입하기</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
