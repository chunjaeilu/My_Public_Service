# 공공API 활용 앱 만들기 :: 공공서비스 조회 시스템

## 배포사이트 URL
https://web-my-public-service-cf24lcehrrvk.gksl2.cloudtype.app/

## GOAL
> 행정안전부_대한민국 공공서비스 정보 API 활용
> 
> 대상연령, 담당부처, 키워드 등을 검색했을 때 해당하는 데이터를 출력
> 
> 사용자 위주의 간결하고 깔끔한 UI/UX

## Skills & Tools
<img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <br> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=white">

## 주요 구현 기능
### API 호출
> `axios` 를 이용해 API 호출
> 
> `async` / `await` 키워드로 비동기 코드를 동기적으로 처리
>
> `sort()` 함수로 조회수 순으로 배열 정렬 및 `useState()` 로 관리하는 `ServiceList` 변수에 저장

  ```javascript
  // App.js
  import axios from "axios";

  function App() {
    const [serviceList, setServiceList] = useState([]);
    ...
    // 서비스목록 불러오기
    const getServiceListData = async () => {
      const response = await axios.all([
        ...pages.map((page) =>
          axios.get(
            `${URL}${api_list[0]}?&page=${page}&perPage=1000&serviceKey=${API_KEY}`
          )
        ),
      ]);
      let dataArr = [];
      response.map((res) => (dataArr = dataArr.concat(res.data.data)));

      // 조회수 순 정렬
      dataArr.sort((a, b) => b.조회수 - a.조회수);
      setServiceList([...dataArr]);
    };
    ...
  }
  ```
### 검색 함수 `getSearchData()`
> 소관기관 / 부서명 / 키워드 를 매개변수로 하는 검색함수 구현
>
> 검색 조건에 따른 결과 추출 로직 작성
>
> 검색결과를 `showList` 변수에 저장
>
> `showList`를 `/search` 페이지에 출력

  ```javascript
  // App.js
  // show리스트
  const [showList, setShowList] = useState([]);
  ...
  // 조건검색 함수
  const getSearchData = (searchInput, selectedDepart, selectedSubDepart) => {
    // if문에서 출력할 변수 선언
    let selectedList = serviceList;
    if (
      // 기관/부서선택 [o] & 검색어입력 [o]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart !== "부서명" &&
      searchInput.length !== 0
    ) {
      selectedList = selectedList.filter(
        (item) =>
          item.소관기관명 === selectedDepart.depart &&
          item.부서명 === selectedSubDepart &&
          item.서비스명.includes(searchInput)
      );
    } else if (
      // 기관/부서선택 [o] & 검색어입력 [x]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart !== "부서명" &&
      searchInput.length === 0
    ) {
      selectedList = selectedList.filter(
        (item) =>
          item.소관기관명 === selectedDepart.depart &&
          item.부서명 === selectedSubDepart
      );
    } else if (
      // 기관[o] & 부서 [x] & 검색어입력 [x]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length === 0
    ) {
      selectedList = selectedList.filter(
        (item) => item.소관기관명 === selectedDepart.depart
      );
    } else if (
      // 기관[o] & 부서 [x] & 검색어입력 [o]
      selectedDepart.depart !== "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length !== 0
    ) {
      selectedList = selectedList.filter(
        (item) =>
          item.소관기관명 === selectedDepart.depart &&
          item.서비스명.includes(searchInput)
      );
    } else if (
      // 기관[x] & 부서 [x] & 검색어입력 [o]
      selectedDepart.depart === "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length !== 0
    ) {
      selectedList = selectedList.filter((item) =>
        item.서비스명.includes(searchInput)
      );
    } else if (
      // 기관[x] & 부서 [x] & 검색어입력 [x]
      selectedDepart.depart === "소관기관" &&
      selectedSubDepart === "부서명" &&
      searchInput.length === 0
    ) {
    }
    setShowList([...selectedList]);
  };
  ```

#### 테마별 검색기능 
- 테마 키워드 를 매개변수로 검색함수`getSearchData()` 실행
- 소관기관 / 부서명은 default값 ("모든기관"/"모든부서")로 전달

### 서비스 선택시 detail 페이지 전환 및 detail 정보 fetch
> 메인페이지 및 검색결과 페이지에서 특정 서비스 선택시 페이지 이동 및 해당 서비스 상세정보 노출
  ```javascript
  <Link to="/detail" key={i}>
    {/* "/detail" 링크 이동 */}
    <div
      className="item"
      onClick={() => {
        getDetailData(item.서비스ID);
        // getDetailData() 함수 호출
      }}
    >
      ...
    </div>
  </Link>
  ```
> 선택한 서비스의 코드번호 참조하여 `getDetailData()`함수 호출
>
> `getDetailData` 함수에서 상세정보를 제공하는 API `axios`
>
  ```javascript
  const api_list = ["serviceList", "serviceDetail", "supportConditions"];
  const getDetailData = async (serviceID) => {
    for (let i = 1; i <= 10; i++) {
      let API_URL2 = `${URL}${api_list[1]}?&page=${i}&perPage=1000&serviceKey=${API_KEY}`;
      const response = await axios.get(API_URL2);
      // console.log(response.data.data);
      let choosed = response.data.data.filter((e) => e.SVC_ID === serviceID);

      setChoosedItem([...choosed]);
      if (choosed.length >= 1) {
        break;
      }
    }
  };
  ```

## ISSUES

### 반복 처리하는 `fetch`안에서 `useState()`로 관리하는 변수, 누적되지 않고 초기화 되는 이슈
> DB가 여러 page로 나뉘어져 있고, 모든 데이터를 한번에 `fetch`하지 못해, 반복문으로 처리하려 하였으나
>
> `useState()`는 컴포넌트가 렌더링 될때마다 값을 초기화 하므로 반복문으로 `fetch`를 여러번 하는 것은 불가능하다는 결론
>
> 총 9919개의 데이터 중 한번에 불러올 수 있는 1000개의 데이터만 가지고 작성
>
> 추후 모든 데이터 불러올 수 있는 방법 학습 필요

## Timetable

### 23.02.02(목)
- 주제선정
- 컨셉 및 시안 제작 (Figma)

### 23.02.03(금)
- 컨셉 및 시안 제작
- 앱 구현 작업(data 호출)

### 23.02.06(월)
- 앱 구현 작업 (data 호출 및 검색기능)

### 23.02.07(화)
- 검색기능 구현 및 보고서 작성
- 1차 제출

### 23.02.08(수)
- 테마 컴포넌트 UI 수정
- 페이지 이동방식 수정 (useNavigate >> Link)

### 23.02.09(목)
- TOP LIST UI 수정
- slick 라이브러리 적용
- 모바일환경에서 UI 다르게 구현되는 부분 수정

### 23.02.10(금)
- `/detail` 페이지 구현 및 기능 구현
- 업데이트 기능명세서 작성 및 제출