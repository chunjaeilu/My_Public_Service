import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ShowItems from "./components/ShowItems";

function App() {
  const API_KEY =
    "2rRLJsTlQ8FptpGLqMHFM0BXJA5f4jBxNUlKeLQRYwOI4QpobCOT2pVOw9ddrq273ybB5XcgQjf4J8GGVAhfrg==";
  const URL = "https://api.odcloud.kr/api/gov24/v1/";
  const api_list = ["serviceList", "serviceDetail", "supportConditions"];
  let API_URL = `${URL}${api_list[0]}?&page=1&perPage=1000&serviceKey=${API_KEY}`;

  // 서비스리스트
  const [serviceList, setServiceList] = useState([]);
  // 검색결과 반영
  const [search, setSearch] = useState([]);
  // 검색어
  const [searchInput, setSearchInput] = useState("");
  // show
  const [showList, setShowList] = useState([]);

  // 소속기관Arr
  const majorArr = [
    "교육부",
    "국세청",
    "금융위원회",
    "해양수산부",
    "관세청",
    "통계청",
    "통일부",
    "법무부",
    "대검찰청",
    "국방부",
    "행정안전부",
    "경찰청",
    "보건복지부",
    "질병관리청",
    "기상청",
    "문화체육관광부",
    "여성가족부",
    "농촌진흥청",
    "산림청",
    "중소벤처기업부",
    "특허청",
    "산업통상자원부",
    "식품의약품안전처",
    "환경부",
    "고용노동부",
    "농림축산식품부",
    "문화재청",
    "국토교통부",
    "방위사업청",
    "과학기술정보통신부",
  ];
  // 서비스목록 불러오기
  const getServiceListData = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data.data);
    let data = response.data.data;

    const major = data.map((e) => e.소관기관명);

    const set = new Set(major);
    console.log(set);
    // serviceList 업데이트
    setServiceList([...data]);

    // showList 가공
    data.sort((a, b) => b.조회수 - a.조회수);
    const topList = data.slice(0, 10);
    setShowList([...topList]);
    console.log(topList);
  };

  // onChange 함수
  const onChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  };

  // 조건검색 함수
  const getSearchData = (searchInput) => {
    if (searchInput.length === 0) {
      getServiceListData();
    } else {
      let filteredSearch = serviceList.filter((item) =>
        item.서비스명.includes(searchInput)
      );
      setSearch([...filteredSearch]);

      filteredSearch.sort((a, b) => b.조회수 - a.조회수);

      setShowList([...filteredSearch]);
    }
  };
  console.log(search);

  // 마운트시 api 호출
  useEffect(() => {
    getServiceListData();
  }, []);

  return (
    <div className="wrap">
      <h1>나의 공공서비스</h1>
      <h3>공공서비스 목록</h3>
      <input type="text" placeholder="검색어 입력" onChange={onChange} />
      <button onClick={() => getSearchData(searchInput)}>검색</button>
      {showList.length !== 0 ? (
        <ShowItems showList={showList} />
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}

export default App;
