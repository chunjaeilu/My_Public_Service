import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../components/Header";
import TopList from "../components/TopList";

export default function Home({ topList }) {
  return (
    <div className="wrap">
      <Header />
      <TopList topList={topList} />
    </div>
  );
}
