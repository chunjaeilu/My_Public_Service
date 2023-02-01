export default function Items({ animals }) {
  return (
    <>
      {animals.map((item, i) => {
        return (
          <div className="items" key={i}>
            <div className="imgbox">
              <img src={item.ty3Picture} alt={item.ty3Kind} />
            </div>

            <p>포획장소 : {item.ty3Place}</p>
            <p>구조일자 : {item.writngDe}</p>
            <p>성별 : {item.ty3Sex}</p>
            <p>상태 : {item.ty3Process}</p>
          </div>
        );
      })}
    </>
  );
}
