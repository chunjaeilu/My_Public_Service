export default function ShowItems({ showList }) {
  return (
    <>
      {showList.map((item, i) => {
        return (
          <div className="items" key={i}>
            <h3>{item.서비스명}</h3>
            <p className="sm-right">조회수 : {item.조회수}</p>
            <p>
              소관기관 : {item.소관기관명} / {item.부서명}
            </p>
            <p>지원대상 : {item.지원대상}</p>
          </div>
        );
      })}
    </>
  );
}
