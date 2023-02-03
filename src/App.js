import "./App.css";
// import { useState, useEffect } from "react";
// import Items from "./components/Items";

function App() {
  const API_KEY = "063b6a61-eb28-4e98-a95d-d6796590353f";

  const API_URL = `http://api.kcisa.kr/openapi/service/rest/convergence/conver6?serviceKey=${API_KEY}`;

  // const [infos, setInfos] = useState([]);

  const getArthallData = () => {
    fetch(API_URL, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        // const items = data.response.body.items.item;
        // 데이터를 state에 저장
        console.log(data.response.body.items.item);
        // setInfos(items);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  // useEffect(() => {
  //   getAnimalData();
  // }, []);
  getArthallData();
  return (
    <div className="wrap">
      <h1>RESCUE119</h1>
      <h3>부산시 동물구조 현황</h3>
      {/* {infos.length !== 0 ? <Items infos={infos} /> : <p>로딩중...</p>} */}
    </div>
  );
}

export default App;
