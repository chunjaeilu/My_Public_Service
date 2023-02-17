import Choosed from "../components/Choosed";
import Header from "../components/Header";
import Loading from "../components/Loading";
import Nav from "../components/Nav";

export default function Detail({ getSearchData, choosedItem }) {
  return (
    <div className="wrap">
      <Header getSearchData={getSearchData} />
      <main>
        {choosedItem.length !== 0 ? (
          <Choosed choosedItem={choosedItem} />
        ) : (
          <Loading desc="상세정보를 불러오는 중" />
        )}
      </main>
      <Nav />
    </div>
  );
}
