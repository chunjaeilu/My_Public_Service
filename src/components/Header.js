// Header.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

const departmentArr = [
  { depart: "전체기관", sub: ["전체부서"] },
  {
    depart: "교육부",
    sub: [
      "전체부서",
      "유아교육정책과",
      "교육복지정책과",
      "방과후돌봄정책과",
      "특수교육정책과",
      "인재양성지원과",
      "산학협력취창업지원과",
      "연수과",
      "청년장학지원과",
      "인재선발제도과",
      "평생학습지원과",
    ],
  },
  {
    depart: "국세청",
    sub: ["전체부서", "소득지원국"],
  },
  {
    depart: "금융위원회",
    sub: ["전체부서", "금융정책과", "산업금융과"],
  },
  {
    depart: "해양수산부",
    sub: [
      "전체부서",
      "어선안전정책과",
      "심판관",
      "국제협력총괄과",
      "원양산업과",
      "어촌어항과",
      "소득복지과",
      "유통정책과",
      "수산정책과",
      "수산자원정책과",
      "연안해운과",
      "항로표지과",
      "어업정책과",
      "양식산업과",
      "어촌양식정책과",
      "수출가공진흥과",
      "선원정책과",
      "항만물류기획과",
      "해양수산과학기술정책과",
      "해양정책과",
      "해양레저관광과",
      "해양개발과",
      "수산직불제팀",
      "첨단해양교통관리팀",
    ],
  },
  {
    depart: "관세청",
    sub: ["전체부서", "자유무역협정집행과"],
  },
  {
    depart: "통계청",
    sub: ["전체부서", "교육기획과"],
  },
  {
    depart: "통일부",
    sub: ["전체부서", "정착지원과", "교육기획과"],
  },
  {
    depart: "법무부",
    sub: [
      "전체부서",
      "인권구조과",
      "국적과",
      "여성아동인권과",
      "소년범죄예방팀",
    ],
  },
  {
    depart: "대검찰청",
    sub: ["전체부서", "형사4과", "범죄수익환수과"],
  },
  {
    depart: "국방부",
    sub: [
      "전체부서",
      "군인재해보상과",
      "특수임무수행자보상지원단",
      "군인권총괄담당관",
      "국방일자리정책과",
    ],
  },
  {
    depart: "행정안전부",
    sub: ["전체부서", "지방세특례제도과", "지역디지털서비스과", "지역공동체과"],
  },
  {
    depart: "경찰청",
    sub: [
      "전체부서",
      "외사기획과",
      "교통기획과",
      "수사인권담당관",
      "수사운영지원담당관",
    ],
  },
  {
    depart: "보건복지부",
    sub: [
      "전체부서",
      "기초의료보장과",
      "보육사업기획과",
      "건강증진과",
      "아동권리과",
      "보육기반과",
      "아동학대대응과",
      "보육정책과",
      "노인건강과",
      "공공재활의료지원과",
      "기획운영과",
      "건강정책과",
      "장애인권익지원과",
      "사회서비스사업과",
      "정신건강관리과",
      "구강정책과",
      "장애인서비스과",
      "간호정책과",
      "장애인정책과",
      "출산정책과",
      "아동복지정책과",
      "기초생활보장과",
      "자립지원과",
      "건강보험정책국",
    ],
  },
  {
    depart: "질병관리청",
    sub: [
      "전체부서",
      "희귀질환관리과",
      "결핵정책과",
      "감염병정책총괄과",
      "에이즈관리과",
      "질병관리청",
    ],
  },
  {
    depart: "기상청",
    sub: ["전체부서", "기상융합서비스과"],
  },
  {
    depart: "문화체육관광부",
    sub: [
      "전체부서",
      "관광정책과",
      "체육진흥과",
      "문화예술교육과",
      "장애인체육과",
      "기획운영과",
      "예방치유과",
      "방송영상광고과",
      "출판인쇄독서진흥과",
    ],
  },
  {
    depart: "여성가족부",
    sub: [
      "전체부서",
      "청소년보호환경과",
      "다문화가족과",
      "청소년자립지원과",
      "권익보호과",
      "가족지원과",
      "권익기반과",
      "아동청소년성보호과",
      "학교밖청소년지원과",
      "권익침해방지과",
      "여성정책과",
    ],
  },
  {
    depart: "농촌진흥청",
    sub: ["전체부서", "재해대응과", "기술보급과"],
  },
  {
    depart: "산림청",
    sub: [
      "전체부서",
      "연구지원과",
      "산불방지과",
      "산림병해충방제과",
      "품종심사과",
      "산림자원과",
      "목재산업과",
      "정원팀",
      "산림교육치유과",
      "산림정책과",
      "산림휴양등산과",
      "산림복지정책과",
      "산림환경보호과",
      "사유림경영소득과",
      "산림생태복원과",
      "임업통상팀",
      "산사태방지과",
      "산림일자리창업팀",
      "전시교육연구과",
    ],
  },
  {
    depart: "중소벤처기업부",
    sub: [
      "전체부서",
      "창업생태계과",
      "인력정책과",
      "소상공인성장촉진과",
      "판로정책과",
      "기업금융과",
      "전통시장과",
      "기술보호과",
      "기술개발과",
      "제조혁신과",
      "지역상권과",
      "창업정책과",
      "벤처정책과",
      "소상공인재도약과",
      "소상공인정책과",
      "글로벌성장정책과",
      "벤처투자과",
      "입지환경개선과",
      "기술혁신정책과",
      "기술창업과",
      "정보화담당관",
    ],
  },
  {
    depart: "특허청",
    sub: [
      "전체부서",
      "산업재산활용과",
      "지역산업재산과",
      "산업재산정책과",
      "정보관리과",
      "심판정책과",
      "특허제도과",
      "아이디어경제혁신팀",
    ],
  },
  {
    depart: "산업통상자원부",
    sub: [
      "전체부서",
      "산업기술정책과",
      "가스산업과",
      "투자정책과",
      "해외투자과",
      "투자유치과",
      "석탄광물산업과",
      "조선해양플랜트과",
      "무역진흥과",
      "에너지효율과",
      "산업환경과",
      "산업일자리혁신과",
      "재생에너지산업과",
      "통상협력총괄과",
      "에너지안전과",
    ],
  },
  {
    depart: "식품의약품안전처",
    sub: ["전체부서", "의약품안전평가과", "의약품정책과", "식품안전인증과"],
  },
  {
    depart: "환경부",
    sub: [
      "전체부서",
      "환경피해구제과",
      "녹색산업혁신과",
      "대기관리과",
      "교통환경과",
      "생물다양성과",
      "물이용기획과",
      "수생태관리과",
      "생활폐기물과",
    ],
  },
  {
    depart: "고용노동부",
    sub: [
      "전체부서",
      "사회적기업과",
      "산업안전보건정책과",
      "지역산업고용정책과",
      "기업일자리지원과",
      "고용차별개선과",
      "고용지원실업급여과",
      "청년취업지원과",
      "산업안전기준과",
      "산재보상정책과",
      "인적자원개발과",
      "퇴직연금복지과",
      "장애인고용과",
      "고용문화개선정책과",
      "외국인력담당관",
      "고령사회인력정책과",
      "직업건강증진팀",
      "여성고용정책과",
      "직업능력평가과",
      "기업훈련지원과",
      "노사협력정책과",
      "근로감독기획과",
      "고용서비스정책과",
      "직업능력정책과",
      "고용서비스기반과",
      "국민취업지원기획팀",
      "공정채용기반과",
    ],
  },
  {
    depart: "농림축산식품부",
    sub: [
      "전체부서",
      "원예경영과",
      "그린바이오산업팀",
      "식품외식산업과",
      "스마트농업정책과",
      "식량산업과",
      "축산경영과",
      "농업경영정책과",
      "청년농육성정책팀",
      "친환경농업과",
      "국제협력총괄과",
      "원예산업과",
      "농지과",
      "농축산위생품질팀",
      "식생활소비정책과",
      "농촌경제과",
      "구제역방역과",
      "방역정책과",
      "농촌계획과",
      "농촌여성정책팀",
      "농촌사회서비스과",
      "농촌정책과",
      "유통정책과",
      "축산정책과",
      "종자산업지원과",
      "인증관리과",
      "품질검사과",
      "조류인플루엔자방역과",
      "농촌탄소중립정책과",
      "반려산업동물의료팀",
      "수출진흥과",
      "축산환경자원과",
      "첨단기자재종자과",
      "세균질병과",
      "교학과",
      "공익직불정책과",
    ],
  },
  {
    depart: "문화재청",
    sub: ["전체부서", "궁능서비스기획과", "정책총괄과", "발굴제도과"],
  },
  {
    depart: "국토교통부",
    sub: [
      "전체부서",
      "주택기금과",
      "주택정비과",
      "녹색건축과",
      "철도운영과",
      "물류정책과",
      "주거복지정책과",
      "공항안전환경과",
      "혁신도시산업과",
      "도로정책과",
    ],
  },
  {
    depart: "방위사업청",
    sub: ["전체부서", "방위산업진흥국", "방산일자리과", "국제협력총괄담당관"],
  },

  {
    depart: "과학기술정보통신부",
    sub: [
      "전체부서",
      "예금사업과",
      "보험사업과",
      "국제사업과",
      "보험개발심사과",
      "연구평가혁신과",
    ],
  },
];

export default function Header({ getSearchData }) {
  // select 1뎁스
  const [selectedDepart, setSelectedDepart] = useState(departmentArr[0]);
  // select 2뎁스
  const [selectedSubDepart, setSelectedSubDepart] = useState(
    departmentArr[0].sub[0]
  );
  // 검색어
  const [searchInput, setSearchInput] = useState("");

  // nav link
  const setNav = useNavigate();

  // select 1뎁스 onChange
  const onChangeDepart = (e) => {
    const selectedOption = departmentArr.find(
      (dep) => dep.depart === e.target.value
    );
    setSelectedDepart(selectedOption);
    setSelectedSubDepart(selectedOption.sub[0]);
  };

  // select 2뎁스 onChange
  const onChangeSubDepart = (e) => {
    const seletedSubOption = selectedDepart.sub.find(
      (subOption) => subOption === e.target.value
    );
    setSelectedSubDepart(seletedSubOption);
  };

  // 검색어 onChange
  const onChangeInput = (e) => {
    const inputValue = e.target.value;
    setSearchInput(inputValue);
  };

  // input 입력후 엔터키 입력
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      Link2Search("/search");
      getSearchData(searchInput, selectedDepart, selectedSubDepart);
    }
  };

  // nav link 이동 함수
  const Link2Search = (route) => {
    setNav(route);
  };

  return (
    <div className="header-n-search">
      <header>
        <h1>공공서비스 조회</h1>
      </header>
      <div className="input-box">
        <div className="select-box">
          <div className="select-box-depth2">
            <select
              name="department"
              id="department"
              onChange={onChangeDepart}
              value={selectedDepart.depart}
            >
              {departmentArr.map((depart, i) => (
                <option value={depart.depart} key={i}>
                  {depart.depart}
                </option>
              ))}
            </select>
            <div class="icon-down">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
          <div className="select-box-depth2">
            <select
              name="sub-depart"
              id="sub-depart"
              value={selectedSubDepart}
              onChange={onChangeSubDepart}
            >
              {selectedDepart.sub.map((sub, i) => (
                <option key={i} value={sub}>
                  {sub}
                </option>
              ))}
            </select>
            <div class="icon-down">
              <FontAwesomeIcon icon={faAngleDown} />
            </div>
          </div>
        </div>
        <div className="search-box">
          <input
            type="text"
            placeholder="찾으시는 서비스를 입력하세요"
            onChange={onChangeInput}
            onKeyDown={handleKeyDown}
          />

          <button
            onClick={() => {
              Link2Search("/search");
              getSearchData(searchInput, selectedDepart, selectedSubDepart);
            }}
          ></button>
        </div>
      </div>
    </div>
  );
}
