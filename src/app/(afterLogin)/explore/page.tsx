import SearchForm from "../_component/SearchForm";
import Trend from "../_component/Trend";
import style from "./explore.module.css";

export default function Explore() {
  return (
    <div className={style.main}>
      <div style={{ width: "inherit" }}>
        <SearchForm />
      </div>
      <div className={style.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
