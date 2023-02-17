import Header from "../components/Header";
import TopList from "../components/TopList";
import Theme from "../components/Theme";
import Nav from "../components/Nav";
import Loading from "../components/Loading";

export default function Home({ topList, getSearchData, getDetailData }) {
  return (
    <div className="wrap">
      <Header getSearchData={getSearchData} />
      <main>
        {topList.length !== 0 ? (
          <>
            <TopList topList={topList} getDetailData={getDetailData} />
            <Theme getSearchData={getSearchData} />
          </>
        ) : (
          <Loading desc="서비스 목록을 불러오는 중" />
        )}
      </main>
      <Nav />
    </div>
  );
}
