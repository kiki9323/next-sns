"use client";

import SearchForm from "./SearchForm";
import style from "./rightSearchZone.module.css";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RightSearchZone() {
  const [selectedOption, setSelectedOption] = useState("all");

  const onChangeAll = () => {
    setSelectedOption("all");
  };
  const onChangeFollow = () => {
    setSelectedOption("follow");
  };

  const pathname = usePathname();
  if (pathname === "/explore") return null;

  if (pathname === "/search") {
    return (
      <div>
        <h5 className={style.filterTitle}>검색 필터</h5>
        <div className={style.filterSection}>
          <div>
            <label>사용자</label>
            <div className={style.radio}>
              <div>모든 사용자</div>
              <input
                type="radio"
                name="pf"
                // defaultChecked
                checked={selectedOption === "all"}
                onChange={onChangeAll}
              />
            </div>
            <div className={style.radio}>
              <div>내가 팔로우하는 사람들</div>
              <input
                type="radio"
                name="pf"
                value="on"
                checked={selectedOption === "follow"}
                onChange={onChangeFollow}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ marginBottom: 60, width: "inherit" }}>
      <SearchForm />
    </div>
  );
}
