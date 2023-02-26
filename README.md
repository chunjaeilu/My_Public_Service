# 공공API 활용 앱 만들기 :: 공공서비스 조회 시스템

## Deployment
> Cloudtype
>
> URL : https://web-my-public-service-cf24lcehrrvk.gksl2.cloudtype.app/

## GOAL
> React Project로 제작
>
> 행정안전부_대한민국 공공서비스 정보 API 활용
> 
> 담당부처, 키워드 등을 검색했을 때 해당하는 서비스를 출력
> 
> 특정 서비스 선택시 해당 서비스의 디테일한 정보를 출력
> 
> 모바일 환경에 최적화 된 간결하고 깔끔한 UI/UX

## Skills & Tools
<p align='center'><img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"><img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"><img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"><img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"><img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white"> <br> <img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=Figma&logoColor=white"><img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white"><img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white"><img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=Expo&logoColor=white"></p>

## Screenshot
<p align='center'><img src="https://user-images.githubusercontent.com/112890661/218910239-3c5f7df6-06ed-490f-9ead-3124bebff1b9.png" width="250"> &nbsp; <img src="https://user-images.githubusercontent.com/112890661/219564883-456064e6-19a9-4a12-9f7d-2025f6f59a12.png" width="250"> &nbsp; <img src="https://user-images.githubusercontent.com/112890661/218910391-4ff52b2b-edd2-41d1-b1d3-88d8ae68c2c2.png" width="250"></p>

## Install
  ```
  $ npm install
  ```
  
## Run
  ```
  $ npm start
  ```
- http://localhost:3000

## Main functions
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

### 서비스 선택시 detail 페이지 전환 및 detail 정보 API 호출
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
> `getDetailData` 함수에서 상세정보를 제공하는 API 호출(`axios`)

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

### ISSUE_01. 모든 데이터 불러오기 (multiple request)
> 반복문 안에서 `useState()`로 관리하는 변수, 누적되지 않고 초기화 되는 이슈

#### Reason
- DB가 여러 page로 나뉘어져 있고, 모든 데이터를 한번에 호출하지 못해 반복문으로 처리하려 하였으나
- `useState()`는 컴포넌트가 렌더링 될때마다 값을 초기화 하므로 반복문 안에서 `useState`를 여러번 사용할 수 없음

#### Solution
- 이번 프로젝트에서는 `fetch` 대신 `axios`를 사용했으므로 `axios.all` 메서드를 이용해 multiple request 처리
- 모든 데이터를 불러온 뒤 하나의 배열로 만들고 `useState`는 반복문에 포함시키는 것이 아니라 모든 작업이 완료된 뒤 한 번만 실행
  ```javascript
  const getServiceListData = async () => {
    // axios.all : 여러 요청(multiple request)를 실행하는 메서드
    // 프로미스 배열을 인수로 받아 배열 내의 모든 프로미스가 완료되었을 때 새로운 리퀘스트를 반환한다
    const response = await axios.all([
      ...pages.map((page) =>
        axios.get(
          `${URL}${api_list[0]}?&page=${page}&perPage=1000&serviceKey=${API_KEY}`
        )
      ),
    ]);
    let dataArr = [];
    // response로 받은 모든 배열을 dataArr에 하나의 배열로 합침
    response.map((res) => (dataArr = dataArr.concat(res.data.data)));
    ...
    // useState는 한 번만 실행
    setServiceList([...dataArr]);
    ...
  };
  ```
- `fetch`로 데이터 요청을 처리할 때도 비슷한 방법으로 처리할 수 있다.
  ```javascript
  const getData = async () => {
    setLoading(true);
    await Promise.all([
      ...pages.map((page) => {
        return fetch(
          `${URL}${api_list[0]}?&page=${page}&perPage=1000&serviceKey=${API_KEY}`
        ).then((res) => res.json());
      })
    ]).then((allData) => {
      let copy = allData.map((data, i) => {
        return data.data;
      });
      // 2차원 배열 1차원 배열로 합치기
      copy = copy.flat();
      setList(copy);
      setLoading(false);
    });
  };
  ```

### ISSUE_02. 런타임 이슈
> 메인페이지 최초 마운트시 평균 응답속도 2000 ~ 4000ms, 디테일페이지 이동시 해당 정보 위치(API page)에 따라 응답속도 400ms ~ 4000ms 까지 편차가 생김

#### Reason
- 페이지당 1000개의 데이터를 10회에 걸쳐 호출하다보니 기본적인 런타임이 오래 걸림
- 메인페이지 : API 호출 >> 조회수 순 오름차순 정렬 >> topList 추출로 이어지는 작업로직이 김
- 디테일페이지 : 선택한 서비스 고유코드를 매개변수로 새로운 API를 호출(1000개, 10페이지)하고 일치하는 코드를 찾아야 함

#### Solution
- API에서 제공하는 정보량 때문에 생기는 이슈이므로 실질적인 런타임을 줄이는 것은 한계가 있음
- API 호출하는 동안 Loading 화면을 출력
- 활용 라이브러리 : `react-loader-spinner`
  ```cmd
  npm install react-loader-spinner
  ```
- Loading 컴포넌트 생성
- 작업 진행되는동안 Loading 컴포넌트 출력
  ```javascript
  // Home.js
  ...
  {topList.length !== 0 ? (<><TopList topList={topList} getDetailData={getDetailData} /><Theme getSearchData={getSearchData} /></>) : (<Loading />)}
  ...

  // Detail.js
  ...
  {choosedItem.length !== 0 ? (<Choosed choosedItem={choosedItem} />) : (<Loading />)}
  ...
  ```

### ISSUE_03. 스크롤 이슈
> 페이지 이동시 스크롤 위치가 이동한 상태로 렌더링 되는 이슈

#### Reason
- 브라우저 스크롤 위치가 상태(state)에 기억되어 페이지를 이동해도 이전 페이지의 스크롤 위치를 유지하는 현상
  
#### Solution
- `useLocation` Hook 사용해 path 이동시 스크롤을 상단으로 고정시킴
  ```javascript
  // ScrollToTop.js
  import { useEffect } from "react";
  import { useLocation } from "react-router-dom";

  export default function ScrollToTop() {
    const pathname = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }

  // App.js
  ...
  return (
    <BrowserRouter>
      // 컴포넌트 출력
      <ScrollToTop />
      <Routes>
        <Route .../>
        ...
      </Routes>
    </BrowserRouter>
  );
  ```
  
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

### 23.02.14(화)
- 모든 데이터 불러오기 (multiple request) issue 처리

### 23.02.15(수)
- 런타임 issue 처리
