# 공공API 활용 앱 만들기 :: 공공서비스 조회 시스템

## GOAL
> 행정안전부_대한민국 공공서비스 정보 API 활용
> 
> 대상연령, 담당부처, 키워드 등을 검색했을 때 해당하는 데이터를 출력
> 
> 사용자 위주의 간결하고 깔끔한 UI/UX

## ISSUES

### 방대한 DB 처리
> 총 9919개의 방대한 DB를 한번에 불러오면 트래픽 초과 오류 빈번히 발생
>
> 일반적인 `fetch`를 실행했을 때 api url을 읽어오기 전에 처리문의 `filter()`함수가 실행되어 400error 발생

#### solution : 비동기 처리, 이중반복문 활용
- 1~100 까지 숫자를 인자로 갖는 배열 생성 >> 이중반복문 변수값으로 활용
- `fetch()`를 `async`, `await` 이용해 비동기 처리
  ```javascript
  const numArr100 = Array.from({ length: 100 }, (_, index) => index + 1);
  const [search, setSearch] = useState([]);
  // 조건검색 함수
  const getSearchData = async (major) => {
    for (const page of numArr100) {
      API_URL = `${URL}${api_list[0]}?&page=${page}&perPage=100&serviceKey=${API_KEY}`;
      const res = await fetch(API_URL);
      const data = await res.json();
      const filteredSearch = data.data.filter((item) => item.소관기관명 === major);
      setSearch([...search, ...filteredSearch]);
    }
  };
  getSearchData(major);
  ```

### 검색 결과 전역변수에 기억시키기
> 반복문 안에 반복문(filter로 검색어와 일치하는 인자 찾기)을 작성했을 때 검색결과가 전역에 저장되지 않는 문제
>
> 
