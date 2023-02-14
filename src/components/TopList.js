// TopList.js

// slider 라이브러리
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

export default function TopList({ topList, getDetailData }) {
  const description = [
    "코로나19로 입원/격리 통지서를 받은 사람에게 생활비 지원",
    "직업훈련을 희망하는 국민에게 직업능력개발 훈련비와 훈련장려금 지원",
    "호당 2.5억 원 한도, 연 2.15% ~ 3.00%(소득과 만기에 따라 차등) 금리",
    "무주택세대구성원 등에게 시세보다 저렴한 임대보증금의 장기전세주택 공급",
    "저소득 무주택 청년 대상으로 청약통장에 우대금리 및 비과세 혜택 제공",
    "국민을 대상으로 재무, 건강 등 종합적인 노후준비 진단 서비스 제공",
    "청약가입후 2년이상 장기 재직하는 청년근로자에게 만기공제금 1,200만원 지원",
    "주소득자의 사망, 가출, 행방불명 등 생계유지가 곤란한 가구에 현금 지원",
    "기후위기에 취약한 에너지이용 소외계층에게 단열·창호·바닥공사 및 고효율 보일러 보급 지원",
    "기초생활수급자 및 차상위계층 대상으로 공익형 상해보험 가입비 지원",
  ];

  const bgArr = [
    "./src/images/bg-cash.png",
    "./src/images/bg-credit.png",
    "./src/images/bg-account.png",
    "./src/images/bg-housing.png",
    "./src/images/bg-account.png",
    "./src/images/bg-retire.png",
    "./src/images/bg-account.png",
    "./src/images/bg-cash.png",
    "./src/images/bg-housing.png",
    "./src/images/bg-insure.png",
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="top-list-box">
      <h2>자주 찾는 서비스 TOP10</h2>
      <Slider {...settings}>
        {topList.map((e, i) => (
          <Link to="/detail" key={i}>
            <div
              className="slider-item"
              onClick={() => getDetailData(e.서비스ID)}
            >
              <div className="bg-box">
                <img src={bgArr[i]} alt="bg" />
                <div className="bg-filter"></div>
              </div>

              <div className="text-info">
                <div className="list-header">
                  <h4>{e.서비스명}</h4>
                  <p>views : {e.조회수}</p>
                </div>
                <h5>{description[i]}</h5>
                <p>
                  <b>신청기한</b> : {e.신청기한 !== null ? e.신청기한 : "없음"}
                </p>
                <p>
                  <b>소관기관</b> : {e.소관기관명}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
}
