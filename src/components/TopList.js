// TopList.js

export default function TopList({ topList }) {
  const description = [
    "코로나19로 입원/격리 통지서를 받은 사람에게 생활지원비 지원",
    "직업훈련을 희망하는 국민에게 직업능력개발 훈련비와 훈련장려금 지원",
    "저소득 무주택 청년 대상으로 청약통장에 우대금리 및 비과세 혜택 제공",
    "주소득자의 사망, 가출, 행방불명 등 생계유지가 곤란한 가구에 현금 지원",
    "기초생활구습자 및 차상위계층 대상으로 공익형 상해보험 가입비 지원",
    "소득과 재산이 적은 근로소득자에게 근로장려금을, 자녀가 있을 경우 자녀장려금을 지급",
    "생애최초, 5년이상 무주택세대주에게 수익공유형, 손익공유형에 따라 차등지원",
    "구직자에게 채용지원 및 직업진로지도 서비스 제공",
    "취약계층 대상으로 산림복지서비스 이용권 지급(1인당 연 10만원)",
    "무주택 근로자 및 서민을 위해 임차보증금의 70% 내외, 저렴한 금리로 전세자금 대출 지원",
  ];
  return (
    <div className="top-list-box">
      <h2>자주 찾는 서비스 TOP10</h2>
      <ul className="top-list">
        {topList.map((e, i) => (
          <li key={i}>
            <div className="list-header">
              <h4>{e.서비스명}</h4>
              <p>views : {e.조회수}</p>
            </div>
            <h5>{description[i]}</h5>
            <p>신청기한 : {e.신청기한}</p>
            <p>소관기관 : {e.소관기관명}</p>
            <div className="detail-link">자세히보기</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
