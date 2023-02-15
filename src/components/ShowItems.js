// showItems.js
import { Link } from "react-router-dom";

export default function ShowItems({ showList, getDetailData }) {
  return (
    <div className="items">
      <p className="num-show">
        Total <b>{showList.length}</b> services.
      </p>
      {showList.map((item, i) => {
        return (
          <Link to="/detail" key={i}>
            {/* "/detail" 링크 이동 */}
            <div
              className="item"
              onClick={() => {
                getDetailData(item.서비스ID);
                // getDetailData() 함수 호출
              }}
            >
              <h3>{item.서비스명}</h3>
              <div className="item-info">
                <table className="info-table">
                  <tbody>
                    <tr>
                      <th>소관기관</th>
                      <td>
                        <p>
                          {item.소관기관명} / {item.부서명}
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <th>지원대상</th>
                      <td>
                        <p>{item.지원대상}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>신청기간</th>
                      <td>
                        <p>{item.신청기한 ? item.신청기한 : "없음"}</p>
                      </td>
                    </tr>
                    <tr>
                      <th>지원유형</th>
                      <td>
                        <p>{item.지원유형}</p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
