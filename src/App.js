import "./App.css";
import { useState, useEffect } from "react";
import Items from "./components/Items";

function App() {
  const API_KEY = `2rRLJsTlQ8FptpGLqMHFM0BXJA5f4jBxNUlKeLQRYwOI4QpobCOT2pVOw9ddrq273ybB5XcgQjf4J8GGVAhfrg%3D%3D`;

  const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&numOfRows=10&pageNo=5&resultType=json`;

  const [animals, setAnimals] = useState([]);

  const getAnimalData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        const items = data.getPetAnimalInfo.body.items.item;
        // 데이터를 state에 저장
        setAnimals(items);
      })
      .catch((e) => {
        console.log(e);
      });
  };
  useEffect(() => {
    getAnimalData();
  }, []);
  console.log(animals);
  return (
    <div className="wrap">
      <h1>RESCUE119</h1>
      <h3>부산시 동물구조 현황</h3>
      {animals.length !== 0 ? <Items animals={animals} /> : <p>로딩중...</p>}
    </div>
  );
}

export default App;
