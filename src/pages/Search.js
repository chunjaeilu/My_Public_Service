// Search.js
import Header from "../components/Header";
import Nav from "../components/Nav";
import ShowItems from "../components/ShowItems";

export default function Search({ showList, getSearchData }) {
  return (
    <div className="wrap">
      <Header getSearchData={getSearchData} />
      <main>
        <div className="inputs">
          <p></p>
        </div>
        <ShowItems showList={showList} />
      </main>
      <Nav />
    </div>
  );
}
