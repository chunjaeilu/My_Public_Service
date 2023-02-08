// Theme.js
import { Link } from "react-router-dom";

export default function Theme({ getSearchData }) {
  const imgSrc = [
    "./src/images/covid.jpg",
    "./src/images/disabled.jpg",
    "./src/images/lowincome.jpg",
    "./src/images/small_business.jpg",
    "./src/images/infant.jpg",
    "./src/images/elder.jpg",
    "./src/images/youth.jpg",
    "./src/images/housing.jpg",
  ];

  return (
    <div className="theme-box">
      <h2>추천테마로 찾기</h2>
      <div className="theme-list">
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("코로나", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[0]})` }}
          >
            <p>코로나</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("장애인", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[1]})` }}
          >
            <p>장애인</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("저소득", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[2]})` }}
          >
            <p>저소득층</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("소상공", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[3]})` }}
          >
            <p>소상공인</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("출산", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[4]})` }}
          >
            <p>출산&육아</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("노인", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[5]})` }}
          >
            <p>노인</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("청년", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[6]})` }}
          >
            <p>청년</p>
          </div>
        </Link>
        <Link to="/search">
          <div
            className="theme"
            onClick={() => {
              getSearchData("주거", { depart: "소관기관" }, "부서명");
            }}
            style={{ backgroundImage: `url(${imgSrc[7]})` }}
          >
            <p>주거</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
