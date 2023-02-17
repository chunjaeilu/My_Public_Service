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
      "평생학습지원과",
      "유아교육정책과",
      "청년장학지원과",
      "교육복지정책과",
      "방과후돌봄정책과",
      "학생건강정책과",
      "산학협력취창업지원과",
      "중등직업교육정책과",
      "인재선발제도과",
      "평생직업교육기획과",
      "고등교육국제화부",
      "인재양성지원과",
      "특수교육정책과",
      "연수과",
    ],
  },
  {
    depart: "국세청",
    sub: ["전체부서", "소득지원국"],
  },
  {
    depart: "금융위원회",
    sub: ["전체부서", "은행과", "금융정책과"],
  },
  {
    depart: "해양수산부",
    sub: [
      "전체부서",
      "어촌어항과",
      "수산직불제팀",
      "수산정책과",
      "소득복지과",
      "해양정책과",
      "어촌양식정책과",
      "어선안전정책과",
      "수산자원정책과",
      "해양레저관광과",
      "양식산업과",
      "어업정책과",
      "어업기자재관리과",
      "심판관",
      "수출가공진흥과",
      "첨단해양교통관리팀",
      "해양개발과",
      "통상무역협력과",
      "선원정책과",
      "원양산업과",
      "유통정책과",
      "연안해운과",
      "국제협력총괄과",
      "해양수산과학기술정책과",
      "항로표지과",
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
    sub: [
      "전체부서",
      "교육기획과",
      "정착지원과",
      "북한이탈주민안전지원팀",
      "이산가족과",
    ],
  },
  {
    depart: "법무부",
    sub: [
      "전체부서",
      "인권구조과",
      "국적과",
      "난민정책과",
      "상사법무과",
      "소년범죄예방팀",
      "여성아동인권과",
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
    sub: [
      "전체부서",
      "지역디지털서비스과",
      "지역일자리경제과",
      "지방세특례제도과",
      "재난보험과",
      "재난구호과",
      "지역공동체과",
    ],
  },
  {
    depart: "경찰청",
    sub: [
      "전체부서",
      "외사기획과",
      "교통기획과",
      "아동청소년과",
      "수사인권담당관",
      "수사운영지원담당관",
    ],
  },
  {
    depart: "보건복지부",
    sub: [
      "전체부서",
      "기초생활보장과",
      "국민연금정책과",
      "보육사업기획과",
      "인구정책총괄과",
      "공공재활의료지원과",
      "아동복지정책과",
      "자립지원과",
      "노인건강과",
      "기초의료보장과",
      "사회서비스사업과",
      "기초연금과",
      "보험급여과",
      "장애인자립기반과",
      "보험정책과",
      "건강증진과",
      "장애인서비스과",
      "출산정책과",
      "노인정책과",
      "구강정책과",
      "노인지원과",
      "보육기반과",
      "장애인건강과",
      "아동권리과",
      "장애인정책과",
      "건강정책과",
      "건강보험정책국",
      "의료보장관리과",
      "공공의료과",
      "장애인권익지원과",
      "요양보험제도과",
      "보육정책과",
      "질병정책과",
      "간호정책과",
      "정신건강관리과",
      "치매정책과",
      "장애예방운전지원과",
      "복지정책과",
      "기획운영과",
      "아동학대대응과",
    ],
  },
  {
    depart: "질병관리청",
    sub: [
      "전체부서",
      "질병관리청",
      "예방접종관리과",
      "희귀질환관리과",
      "만성질환예방과",
      "감염병정책총괄과",
      "에이즈관리과",
      "결핵정책과",
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
      "문화정책과",
      "체육진흥과",
      "지원협력과",
      "전통문화과",
      "관광기반과",
      "예술인지원팀",
      "예방치유과",
      "방송영상광고과",
      "문화예술교육과",
      "게임콘텐츠산업과",
      "기획운영과",
      "관광정책과",
      "장애인체육과",
      "출판인쇄독서진흥과",
    ],
  },
  {
    depart: "여성가족부",
    sub: [
      "전체부서",
      "가족지원과",
      "청소년활동진흥과",
      "학교밖청소년지원과",
      "가족문화과",
      "청소년정책과",
      "다문화가족과",
      "경력단절여성지원과",
      "청소년보호환경과",
      "청소년자립지원과",
      "권익보호과",
      "권익기반과",
      "권익지원과",
      "권익침해방지과",
      "여성정책과",
      "권익정책과",
      "아동청소년성보호과",
      "청소년활동안전과",
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
      "산림복지정책과",
      "도시숲경관과",
      "산림자원과",
      "사유림경영소득과",
      "연구지원과",
      "산불방지과",
      "목재산업과",
      "산림일자리창업팀",
      "산림병해충방제과",
      "휴양지원과",
      "산사태방지과",
      "산림환경보호과",
      "산림생태복원과",
      "산림교육치유과",
      "정원팀",
      "품종심사과",
      "산림휴양등산과",
      "전시교육연구과",
      "산림정책과",
      "임업통상팀",
    ],
  },
  {
    depart: "중소벤처기업부",
    sub: [
      "전체부서",
      "소상공인성장촉진과",
      "기업금융과",
      "기업환경정책과",
      "인력정책과",
      "기술창업과",
      "창업생태계과",
      "소상공인정책과",
      "소상공인재도약과",
      "전통시장과",
      "청년정책과",
      "판로정책과",
      "지역상권과",
      "벤처정책과",
      "창업정책과",
      "글로벌성장정책과",
      "제조혁신과",
      "미래산업전략팀",
      "기술보호과",
      "기술개발과",
      "벤처투자과",
      "입지환경개선과",
      "기술혁신정책과",
      "투자관리감독과",
      "국제통상협력과",
      "정보화담당관",
    ],
  },
  {
    depart: "특허청",
    sub: [
      "전체부서",
      "출원등록과",
      "정보고객정책과",
      "지식재산교육과",
      "교육기획과",
      "산업재산분쟁대응과",
      "지역산업재산과",
      "특허제도과",
      "아이디어경제혁신팀",
      "산업재산활용과",
      "정보관리과",
      "산업재산정책과",
      "심판정책과",
    ],
  },
  {
    depart: "산업통상자원부",
    sub: [
      "전체부서",
      "자원안보정책과",
      "에너지효율과",
      "에너지안전과",
      "수출입과",
      "가스산업과",
      "재생에너지산업과",
      "석탄광물산업과",
      "산업일자리혁신과",
      "해외투자과",
      "투자유치과",
      "산업기술정책과",
      "무역진흥과",
      "투자정책과",
      "무역투자실",
      "통상협력총괄과",
      "조선해양플랜트과",
      "화학산업팀",
      "산업기반실",
    ],
  },
  {
    depart: "식품의약품안전처",
    sub: [
      "전체부서",
      "식생활영양안전정책과",
      "식품안전인증과",
      "의약품정책과",
      "의약품안전평가과",
    ],
  },
  {
    depart: "환경부",
    sub: [
      "전체부서",
      "기후적응과",
      "교통환경과",
      "환경보건정책과",
      "생물다양성과",
      "생활폐기물과",
      "물이용기획과",
      "대기관리과",
      "자연공원과",
      "환경피해구제과",
      "녹색산업혁신과",
      "수생태관리과",
    ],
  },
  {
    depart: "고용노동부",
    sub: [
      "전체부서",
      "인적자원개발과",
      "청년취업지원과",
      "고용서비스정책과",
      "고용차별개선과",
      "고용서비스기반과",
      "국민취업지원기획팀",
      "고령사회인력정책과",
      "고용지원실업급여과",
      "산재보상정책과",
      "여성고용정책과",
      "장애인고용과",
      "기업일자리지원과",
      "지역산업고용정책과",
      "고용문화개선정책과",
      "퇴직연금복지과",
      "직업능력정책과",
      "외국인력담당관",
      "공정채용기반과",
      "직업건강증진팀",
      "직업능력평가과",
      "노사협력정책과",
      "근로감독기획과",
      "기업훈련지원과",
      "사회적기업과",
      "산업안전기준과",
      "산업안전보건정책과",
    ],
  },
  {
    depart: "농림축산식품부",
    sub: [
      "전체부서",
      "식량정책과",
      "친환경농업과",
      "농촌사회서비스과",
      "첨단기자재종자과",
      "농업금융정책과",
      "공익직불정책과",
      "청년농육성정책팀",
      "축산환경자원과",
      "스마트농업정책과",
      "재해보험정책과",
      "원예산업과",
      "농지과",
      "원예경영과",
      "농촌계획과",
      "유통정책과",
      "식생활소비정책과",
      "식품외식산업과",
      "축산정책과",
      "농촌경제과",
      "축산경영과",
      "인증관리과",
      "방역정책과",
      "구제역방역과",
      "농업경영정책과",
      "농촌여성정책팀",
      "푸드테크정책과",
      "국제협력총괄과",
      "농축산위생품질팀",
      "품종보호과",
      "그린바이오산업팀",
      "품질검사과",
      "농촌탄소중립정책과",
      "식량산업과",
      "교학과",
      "반려산업동물의료팀",
      "세균질병과",
      "농촌정책과",
      "조류인플루엔자방역과",
      "수출진흥과",
      "종자산업지원과",
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
      "공공주택정책과",
      "주거복지지원과",
      "주거복지정책과",
      "주택정비과",
      "녹색도시과",
      "도로정책과",
      "녹색건축과",
      "철도운영과",
      "공항안전환경과",
      "물류정책과",
      "혁신도시산업과",
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
      "보험사업과",
      "디지털포용정책팀",
      "보험개발심사과",
      "미래인재양성과",
      "국제사업과",
      "소포전자상거래과",
      "예금사업과",
      "연구평가혁신과",
      "우편정책과",
      "과학기술문화과",
      "통신경쟁정책과",
      "정보보호산업과",
      "사이버침해대응과",
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
            <div className="icon-down">
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
            <div className="icon-down">
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
