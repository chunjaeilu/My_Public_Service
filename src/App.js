import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import ShowItems from "./components/ShowItems";

function App() {
  const API_KEY =
    "2rRLJsTlQ8FptpGLqMHFM0BXJA5f4jBxNUlKeLQRYwOI4QpobCOT2pVOw9ddrq273ybB5XcgQjf4J8GGVAhfrg==";
  const URL = "https://api.odcloud.kr/api/gov24/v1/";
  const api_list = ["serviceList", "serviceDetail", "supportConditions"];
  let API_URL = `${URL}${api_list[0]}?&page=1&perPage=10&serviceKey=${API_KEY}`;

  // 서비스리스트
  const [serviceList, setServiceList] = useState([]);
  // 검색결과 반영
  const [search, setSearch] = useState([]);
  // 검색어
  const [searchInput, setSearchInput] = useState("");
  // show
  const [showList, setShowList] = useState([]);

  //numArr [1~10]
  // const numArr10 = Array.from({ length: 10 }, (_, index) => index + 1);

  // 서비스목록 불러오기

  const getServiceListData = async () => {
    API_URL = `${URL}${api_list[0]}?&page=1&perPage=1000&serviceKey=${API_KEY}`;
    const response = await axios.get(API_URL);
    console.log(response.data.data);
    const data = response.data.data;
    setServiceList(serviceList.concat(data));
  };

  const getShowList = () => {
    let newArr = [...serviceList];
    newArr.sort((a, b) => b.조회수 - a.조회수);
    const topList = newArr.slice(0, 10);
    setShowList([...topList]);
  };

  // 조건검색 함수
  const getSearchData = (searchInput) => {
    const filteredSearch = serviceList.filter(
      (item) => item.소관기관명 === searchInput
    );
    setSearch(search.concat(filteredSearch));
    setServiceList([...search]);

    console.log(search);
  };

  // onChange 함수
  const onChange = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  };

  useEffect(() => {
    getServiceListData();
  }, []);

  useEffect(() => {
    getShowList();
  }, [serviceList]);

  return (
    <div className="wrap">
      <h1>나의 공공서비스</h1>
      <h3>공공서비스 목록</h3>
      <input type="text" placeholder="검색어 입력" onChange={onChange} />
      <button onClick={() => getSearchData(searchInput)}>검색</button>
      {serviceList.length !== 0 ? (
        <ShowItems showList={showList} />
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}

export default App;
