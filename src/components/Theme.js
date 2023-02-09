// Theme.js
import { Link } from "react-router-dom";

export default function Theme({ getSearchData }) {
  const themeArr = [
    { theme: "코로나", searchWord: "코로나", imgSrc: "./src/images/covid.jpg" },
    {
      theme: "장애인",
      searchWord: "코로나",
      imgSrc: "./src/images/disabled.jpg",
    },
    {
      theme: "저소득층",
      searchWord: "저소득",
      imgSrc: "./src/images/low_income.jpg",
    },
    {
      theme: "소상공인",
      searchWord: "소상공",
      imgSrc: "./src/images/small_business.jpg",
    },
    {
      theme: "출산/육아",
      searchWord: "출산",
      imgSrc: "./src/images/infant.jpg",
    },
    { theme: "노인", searchWord: "노인", imgSrc: "./src/images/elder.jpg" },
    { theme: "청년", searchWord: "청년", imgSrc: "./src/images/youth.jpg" },
    { theme: "주거", searchWord: "주거", imgSrc: "./src/images/housing.jpg" },
  ];
  return (
    <div className="theme-box">
      <h2>추천테마로 찾기</h2>
      <div className="theme-list">
        {themeArr.map((e, i) => (
          <Link to="/search" key={i}>
            <div
              className="theme"
              onClick={() => {
                getSearchData(e.searchWord, { depart: "소관기관" }, "부서명");
              }}
              style={{ backgroundImage: `url(${e.imgSrc})` }}
            >
              <p>{e.theme}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
