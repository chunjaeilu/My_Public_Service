// Search.js
import Header from "../components/Header";
import Nav from "../components/Nav";
import ShowItems from "../components/ShowItems";

export default function Search({ showList, getSearchData, getDetailData }) {
  return (
    <div className="wrap">
      <Header getSearchData={getSearchData} />
      <main>
        <ShowItems showList={showList} getDetailData={getDetailData} />
      </main>
      <Nav />
    </div>
  );
}
