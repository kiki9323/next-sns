"use client";

import style from "./logoutButton.module.css";

export default function LogoutButton() {
  const me = {
    id: "kiki",
    nickname: "킥킥",
    image: "/Loopy.jpeg", // TODO: 서버 쪽 이미지 가져올 예정
  };

  const onLogout = () => {};

  return (
    <button className={style.logOutButton} onClick={onLogout}>
      <div className={style.logOutUserImage}>
        <img src={me.image} alt={me.id} />
      </div>
      <div className={style.logOutUserName}>
        <div>{me.nickname}</div>
        <div>@{me.id}</div>
      </div>
    </button>
  );
}
