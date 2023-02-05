import { useState, useEffect } from "react";
import "./App.css";
import Items from "./components/Items";

function App() {
  const API_KEY =
    "2rRLJsTlQ8FptpGLqMHFM0BXJA5f4jBxNUlKeLQRYwOI4QpobCOT2pVOw9ddrq273ybB5XcgQjf4J8GGVAhfrg==";

  const URL = "https://api.odcloud.kr/api/gov24/v1/";

  const api_list = ["serviceList", "serviceDetail", "supportConditions"];

  let API_URL = `${URL}${api_list[0]}?&page=1&perPage=10&serviceKey=${API_KEY}`;
  const [serviceList, setServiceList] = useState([]);
  // pages Arr [1~100]
  const numArr100 = Array.from({ length: 100 }, (_, index) => index + 1);

  // 서비스목록 불러오기
  const getServiceListData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const items = data.data;

        // 데이터를 state에 저장
        setServiceList(items);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const [search, setSearch] = useState([]);
  // 조건검색 함수

  const getSearchData = async (major) => {
    for (const page of numArr100) {
      API_URL = `${URL}${api_list[0]}?&page=${page}&perPage=100&serviceKey=${API_KEY}`;
      const res = await fetch(API_URL);
      const data = await res.json();
      const filteredSearch = data.data.filter(
        (item) => item.소관기관명 === major
      );
      setSearch([...search, ...filteredSearch]);
    }
  };
  console.log(search);

  // const getSearchData = (major) => {
  //   numArr100.map((page) => {
  //     API_URL = `${URL}${api_list[0]}?&page=${page}&perPage=100&serviceKey=${API_KEY}`;
  //     fetch(API_URL)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         let searchItems = data.data;

  //         searchItems.map((item) => {
  //           return item.소관기관명 == major
  //             ? setSearch([...search, item])
  //             : setSearch([...search]);
  //         });
  //         const filteredSearch = searchItems.filter(
  //           (item) => item.소관기관명 === major
  //         );
  //         setSearch([...search, filteredSearch]);
  //       })
  //       .catch((e) => {
  //         console.log(e);
  //       });
  //   });
  // };

  useEffect(() => {
    getServiceListData();
    getSearchData("해양수산부");
  }, []);

  return (
    <div className="wrap">
      <h1>나의 공공서비스</h1>
      <h3>공공서비스 목록</h3>
      {serviceList.length !== 0 ? (
        <Items serviceList={serviceList} />
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}

export default App;
