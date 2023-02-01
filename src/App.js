import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const API_KEY = `2rRLJsTlQ8FptpGLqMHFM0BXJA5f4jBxNUlKeLQRYwOI4QpobCOT2pVOw9ddrq273ybB5XcgQjf4J8GGVAhfrg%3D%3D`;

  const API_URL = `http://apis.data.go.kr/6260000/BusanPetAnimalInfoService/getPetAnimalInfo?serviceKey=${API_KEY}&numOfRows=30&pageNo=1&resultType=json`;

  const getAnimalData = () => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => console.log(data.getPetAnimalInfo));
  };

  useEffect(() => {
    getAnimalData();
  }, []);

  return (
    <>
      <h1>RESCUE119</h1>
      <p>부산시 동물구조 현황</p>
      <a href={API_URL}>보기</a>
    </>
  );
}

export default App;
