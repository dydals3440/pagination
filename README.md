# React Pagination 기능 구현

### Pagination 이란?

Pagination은 여러 개의 게시물을 보여주는 웹사이트(카페, 게시판 서비스를 갖고 있는 플랫폼 등)에서 볼 수 있는 UI이다.
이번 프로젝트에서는 임의로 Data.json에서

```json
{
    "ID": "1",
    "Name": "김용민",
    "email": "dydals3440@gmail.com"
},
```

위와 같은 객체를 담은 여러개의 정보를 mock-data로 구성하여 pagination 기능을 구현해보았습니다.

### 구현 기능

[x] 옵션 별 페이지에서 보이는 게시글 수 설정 가능
[x] pagination 기능 (실제 데이터의 크기에 맞게 유동적으로, 전체 페이지수를 계산)
[x] 간단한 스타일링

### pagination 동작 확인

![pagination](/src/img/pagination.gif)
