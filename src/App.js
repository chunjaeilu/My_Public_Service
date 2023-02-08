import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

function App() {
  const API_KEY =
    "2rRLJsTlQ8FptpGLqMHFM0BXJA5f4jBxNUlKeLQRYwOI4QpobCOT2pVOw9ddrq273ybB5XcgQjf4J8GGVAhfrg==";
  const URL = "https://api.odcloud.kr/api/gov24/v1/";
  const api_list = ["serviceList", "serviceDetail", "supportConditions"];
  let API_URL = `${URL}${api_list[0]}?&page=1&perPage=1000&serviceKey=${API_KEY}`;

  // 서비스리스트
  const [serviceList, setServiceList] = useState([]);

  // show리스트
  const [showList, setShowList] = useState([]);

  // topList
  const [topList, setTopList] = useState([]);

  // 서비스목록 불러오기
  const getServiceListData = async () => {
    const response = await axios.get(API_URL);
    // console.log(response.data.data);
    let data = response.data.data;

    // showList 가공
    data.sort((a, b) => b.조회수 - a.조회수);
    setServiceList([...data]);
    const top10List = data.slice(0, 10);
    setTopList([...top10List]);
  };

  // 조건검색 함수
  const getSearchData = (searchInput, selectedDepart, selectedSubDepart) => {
    console.log();
    let selectedList = serviceList;

    if (
      // 기관/부서선택 [o] & 검색어입력 [o]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart !== "부서명" &&
      searchInput.length !== 0
    ) {
      selectedList = selectedList.filter(
        (item) =>
          item.소관기관명 === selectedDepart.depart &&
          item.부서명 === selectedSubDepart &&
          item.서비스명.includes(searchInput)
      );
    } else if (
      // 기관/부서선택 [o] & 검색어입력 [x]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart !== "부서명" &&
      searchInput.length === 0
    ) {
      selectedList = selectedList.filter(
        (item) =>
          item.소관기관명 === selectedDepart.depart &&
          item.부서명 === selectedSubDepart
      );
    } else if (
      // 기관[o] & 부서 [x] & 검색어입력 [x]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length === 0
    ) {
      selectedList = selectedList.filter(
        (item) => item.소관기관명 === selectedDepart.depart
      );
    } else if (
      // 기관[o] & 부서 [x] & 검색어입력 [o]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length !== 0
    ) {
      selectedList = selectedList.filter(
        (item) =>
          item.소관기관명 === selectedDepart.depart &&
          item.서비스명.includes(searchInput)
      );
    } else if (
      // 기관[x] & 부서 [x] & 검색어입력 [o]
      selectedDepart.depart === "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length !== 0
    ) {
      selectedList = selectedList.filter((item) =>
        item.서비스명.includes(searchInput)
      );
    } else if (
      // 기관[x] & 부서 [x] & 검색어입력 [x]
      selectedDepart.depart === "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length === 0
    ) {
    }
    setShowList([...selectedList]);
  };

  // 마운트시 api 호출
  useEffect(() => {
    getServiceListData();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home topList={topList} getSearchData={getSearchData} />}
        />
        <Route
          path="/search"
          element={
            <Search
              serviceList={serviceList}
              showList={showList}
              getSearchData={getSearchData}
            />
          }
        />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
