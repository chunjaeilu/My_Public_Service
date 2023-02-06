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

  // topList
  const [topList, setTopList] = useState([]);

  // 서비스목록 불러오기
  const getServiceListData = async () => {
    const response = await axios.get(API_URL);
    console.log(response.data.data);
    let data = response.data.data;

    // showList 가공
    data.sort((a, b) => b.조회수 - a.조회수);
    const top10List = data.slice(0, 10);
    setTopList([...top10List]);
  };
  console.log(topList);
  // 마운트시 api 호출
  useEffect(() => {
    getServiceListData();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home topList={topList} />} />
        <Route path="/search" element={<Search />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
