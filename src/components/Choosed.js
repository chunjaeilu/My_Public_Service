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
            <p className="fs-15">{e.서비스목적}</p>
            <p>
              <b>지원대상</b> : {e.지원대상}
            </p>
            <p>
              <b>신청기한</b> : {e.신청기한 ? e.신청기한 : "없음"}{" "}
            </p>
            <p>
              <b>지원유형</b> : {e.지원유형}
            </p>
          </div>
          <div className="detail-info-box">
            <h4>접수</h4>
            <p>
              <b>주무부처</b> : {e.소관기관명}
            </p>
            <p>
              <b>접수기관</b> : {e.접수기관명 ? e.접수기관명 : "없음"}
            </p>
            <p>
              <b>신청방법</b> : {e.신청방법}
            </p>
            {e.온라인신청사이트URL.length >= 4 ? (
              <a
                href={e.온라인신청사이트URL}
                target="_blank"
                rel="noreferrer"
                className="ex-link"
              >
                온라인신청
              </a>
            ) : null}
          </div>
          <div className="detail-info-box">
            <h4>선정기준</h4>
            <p>{e.선정기준 ? e.선정기준 : "없음"}</p>
          </div>
          <div className="detail-info-box">
            <h4>
              <b>구비서류</b>
            </h4>
            <p>{e.구비서류 ? e.구비서류 : "없음"}</p>
          </div>
          <div className="detail-info-box">
            <h4>관계법령</h4>
            {e.법령 ? (
              <p>
                <b>법령</b> : {e.법령}
              </p>
            ) : null}
            {e.자치법규 ? (
              <p>
                <b>자치법규</b> : {e.자치법규}
              </p>
            ) : null}
            {e.행정규칙 ? (
              <p>
                <b>행정규칙</b> : {e.행정규칙}
              </p>
            ) : null}
          </div>
        </div>
      ))}
    </>
  );
}
