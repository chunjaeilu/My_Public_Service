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
      const response = await axios.get(API_URL);
      let data = response.data.data;
      
      // 조회수 순 정렬
      data.sort((a, b) => b.조회수 - a.조회수);
      setServiceList([...data]);
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
  <details>
  <summary>펼쳐 보기</summary>

  ```javascript
  // App.js
  // show리스트
  const [showList, setShowList] = useState([]);
  ...
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
  </details>

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
- 앱 구현 작업(React)

### 23.02.06(월)
- 앱 구현 작업

### 23.02.07(화)
- 앱 구현 및 보고서 작성
- 1차 제출