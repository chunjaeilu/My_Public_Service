import Header from "../components/Header";
import TopList from "../components/TopList";
import Theme from "../components/Theme";
import Nav from "../components/Nav";

export default function Home({ topList, getSearchData, getDetailData }) {
  return (
    <div className="wrap">
      <Header getSearchData={getSearchData} />
      <main>
        <TopList topList={topList} getDetailData={getDetailData} />
        <Theme getSearchData={getSearchData} />
      </main>
      <Nav />
    </div>
  );
}
