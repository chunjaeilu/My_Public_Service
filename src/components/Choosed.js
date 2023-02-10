// Choosed.js

export default function Choosed({ choosedItem }) {
  console.log(choosedItem);

  return (
    <>
      {choosedItem.map((e, i) => (
        <div className="choosed-item" key={i}>
          <h3>{e.서비스명}</h3>
          <div className="detail-info-box">
            <h4>서비스소개</h4>
            <p>{e.서비스목적}</p>
            <p>지원대상 : {e.지원대상}</p>
            <p>신청기한 : {e.신청기한 ? e.신청기한 : "없음"} </p>
            <p>지원유형 : {e.지원유형}</p>
          </div>
          <div className="detail-info-box">
            <h4>접수</h4>
            <p>주무부처 : {e.소관기관명}</p>
            <p>접수기관 : {e.접수기관명 ? e.접수기관명 : "없음"}</p>
            <p>신청방법 : {e.신청방법}</p>
            {e.온라인신청사이트URL.length >= 4 ? (
              <a href={e.온라인신청사이트URL} target="_blank" rel="noreferrer">
                온라인신청
              </a>
            ) : null}
          </div>
          <div className="detail-info-box">
            <h4>선정기준</h4>
            <p>{e.선정기준 ? e.선정기준 : "없음"}</p>
          </div>
          <div className="detail-info-box">
            <h4>구비서류</h4>
            <p>{e.구비서류 ? e.구비서류 : "없음"}</p>
          </div>
          <div className="detail-info-box">
            <h4>관계법령</h4>
            {e.법령 ? <p>법령 : {e.법령}</p> : null}
            {e.자치법규 ? <p>자치법규 : {e.자치법규}</p> : null}
            {e.행정규칙 ? <p>행정규칙 : {e.행정규칙}</p> : null}
          </div>
        </div>
      ))}
    </>
  );
}
