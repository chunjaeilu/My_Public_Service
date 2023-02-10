import Choosed from "../components/Choosed";
import Header from "../components/Header";
import Nav from "../components/Nav";

export default function Detail({ getSearchData, choosedItem }) {
  return (
    <div className="wrap">
      <Header getSearchData={getSearchData} />
      <main>
        <Choosed choosedItem={choosedItem} />
      </main>
      <Nav />
    </div>
  );
}
