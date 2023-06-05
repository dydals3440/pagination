import Data from './Data.json';
import './App.css';
import { useState } from 'react';

function App() {
  // 기본 페이지 1페이지부터 시작
  const [currentPage, setCurrentPage] = useState(1);
  // 화면에 보여주고 싶은 페이지당 정보 개수
  // const recordsPerPage = 10;
  const [recordsPerPage, setRecordsPerPage] = useState(10);
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = Data.slice(firstIndex, lastIndex);
  // 전체 페이지 수 계산(전달 받은 데이터의 길이에서, 전체 페이지를 나누어줌)
  const npage = Math.ceil(Data.length / recordsPerPage);
  // npage + 1을 사용하여 0부터 npage까지의 숫자 배열을 생성함.
  // slice(1)을 사용하여, 첫번쨰 요소를 제외 시킴 페이지는 1페이지 부터기 떄문
  const numbers = [...Array(npage + 1).keys()].slice(1); // 페이지의 수를 만듬(npage+1 인덱스의 배열을 만들고, 거기에 Key값을 저장함)
  console.log(npage, 'napge');
  console.log(numbers, 'numbers');
  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCpage(id) {
    setCurrentPage(id);
  }

  function handleRecordsPerPageChange(event) {
    // recordsPerPage 변경 핸들러 추가
    setRecordsPerPage(parseInt(event.target.value));
    setCurrentPage(1); // 페이지 변경 시 첫 페이지로 이동
  }

  return (
    <div>
      <div className='records-per-page'>
        {/* recordsPerPage 변경 옵션 추가 */}
        <label>페이지 당 표시할 정보 개수: </label>
        <select value={recordsPerPage} onChange={handleRecordsPerPageChange}>
          <option value='5'>5</option>
          <option value='10'>10</option>
          <option value='15'>15</option>
          <option value='20'>20</option>
        </select>
      </div>
      <table className='table'>
        <thead>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>이메일</th>
          </tr>
        </thead>
        <tbody>
          {records.map((d, i) => (
            <tr key={i}>
              <td>{d.ID}</td>
              <td>{d.Name}</td>
              <td>{d.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <nav>
        <ul className='pagination'>
          <li className='page-item'>
            <a href='#' className='page-link' onClick={prePage}>
              이전
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? 'active' : ''}`}
              key={i}
            >
              <a href='#' className='page-link' onClick={() => changeCpage(n)}>
                {n}
              </a>
            </li>
          ))}
          <li className='page-item'>
            <a href='#' className='page-link' onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
