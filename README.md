# 원티드 프리온보딩 프론트엔드 - Week 2-1

원티드 프리온보딩 프론트엔드 5팀입니다.<br>
해당 레포지토리는 원티드 프리온보딩 3차 과제로 B2C 차량대여 서비스(차량 리스트, 차량 상세)를 구현한 웹 사이트입니다.<br>
해당 프로젝트에서는 기업에서 제공한 API 를 사용하였습니다.

## 📅 프로젝트 기간

기간 : 2022년 11월 2일 ~ 2022년 11월 3일

## 👥 팀원 소개

| 이름        | github                           |
| --------------- |  -------------------------------- |
| 류승연 (팀장)   | https://github.com/seungyeon-rr  |
| 차혜인 (부팀장) | https://github.com/hyeincha      |
| 박지현          | https://github.com/hyoniiii      |
| 배창현          | https://github.com/baechanghyeon |
| 이원준          | https://github.com/dldnjswns31   |
| 임연주          | https://github.com/yeondooo      |
| 지재영          | https://github.com/jaeyeong815   |


## 🛠 기술 스택

<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <br>

  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white"> 
  <img src="https://img.shields.io/badge/styled_components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white"> 
  <br>
  
  <img src="https://img.shields.io/badge/vs_code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white">
  <img src="https://img.shields.io/badge/react_router_dom-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
  <br>
  
  <img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=Swiper&logoColor=white"/>
  <br>
</div>


## 🏁 프로젝트 실행 방법

1. root폴더에 .env 파일을 생성합니다.
```
  REACT_APP_API_URL=https://preonboarding.platdev.net/api/cars
```
2. 의존성 패키지를 설치합니다.
```zsh
$ yarn
```
3. 프로젝트를 실행합니다.
```zsh
$ yarn start
```


- 현재 repository를 클론한 뒤, 위 순서대로 입력하면 localhost:3000 포트에서 해당 코드가 실행됩니다.

## 🔰 사용한 패키지와 버전

```
    "axios": "^1.1.3",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^1.3.0",
    "react-router-dom": "^6.4.3",
    "styled-components": "^5.3.6",
    "swiper": "^8.4.4",
    "eslint-config-prettier": "^8.5.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.1",
    "prettier": "^2.7.1"
```

<details>
<summary>사용한 패키지 간략한 설명</summary>
<div markdown="1">
- axios : 서버와 비동기 통신<br>
- styled-components : 스타일 적용<br>
- react-router-dom : 라우터 적용<br>
- eslint : 팀원간 코드 컨벤션 통일<br>
- prettier : 팀원간 코드 포맷 통일<br>
- husky : Git Hooks 적용<br>
- swiper : 메인페이지 슬라이드 구현<br>
- react-helmet-async : SEO 구현시 사용<br>
</div>
</details>

## 🔗 배포 링크

[알티 모빌리티](https://b2c-car-rent.vercel.app/)

- 해당 프로젝트는 Vercel을 통해 배포하였습니다.
- 상단 링크에 접속하시면 바로 해당 사이트를 확인할 수 있습니다.

## 📦 파일 구조

<details>
<summary>파일 구조</summary>
<div markdown="1">

```
📦src
 ┣ 📂apis
 ┃ ┗ 📜apis.js
 ┣ 📂assets
 ┃ ┗ 📜BackIcon.jsx
 ┣ 📂components
 ┃ ┣ 📂Detail                   // 상세 페이지 차량 정보 컴포넌트
 ┃ ┃ ┣ 📜CarDetail.jsx
 ┃ ┃ ┣ 📜ListContent.jsx
 ┃ ┃ ┣ 📜ListHeader.jsx
 ┃ ┃ ┗ 📜MetaTag.jsx
 ┃ ┣ 📂Main
 ┃ ┃ ┣ 📂Cards                  // 메인 페이지 차량 리스트 컴포넌트
 ┃ ┃ ┃ ┣ 📜CardItem.jsx
 ┃ ┃ ┃ ┣ 📜CardList.jsx 
 ┃ ┃ ┃ ┣ 📜CardSlide.jsx 
 ┃ ┃ ┃ ┗ 📜NewItemTag.jsx
 ┃ ┃ ┗ 📂Category               // 메인 페이지 카테고리 컴포넌트 (nav)
 ┃ ┃ ┃ ┣ 📜Category.jsx
 ┃ ┃ ┃ ┣ 📜CategoryFilter.jsx
 ┃ ┃ ┃ ┗ 📜CategoryTag.jsx
 ┃ ┗ 📂common
 ┃ ┃ ┣ 📜Guide.jsx               // 차량이 없는 경우와 로딩중인 경우 안내문구
 ┃ ┃ ┗ 📜Header.jsx
 ┣ 📂context
 ┃ ┗ 📜CarContext.js             // Context API
 ┣ 📂pages
 ┃ ┣ 📜Detail.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂styles
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┗ 📜color.js
 ┣ 📂utils
 ┃ ┣ 📜axios.js
 ┃ ┣ 📜carAttribute.js            // 상수 데이터
 ┃ ┣ 📜comma.js                   // 3자리 숫자마다 콤마
 ┃ ┣ 📜conversionDate.js          // 날짜(월, 일, 요일) 치환하는 함수
 ┃ ┣ 📜getDateDiff.js             // 신규 뱃지 확인하는 함수
 ┃ ┗ 📜getKeyByValue.js           // 객체의 키와 값을 반환하는 함수
 ┣ 📜App.js
 ┣ 📜Router.jsx
 ┗ 📜index.js
 ```

</div>
</details>


## ✨ 주요 기능

| 페이지             | API 연결 및 기능                                                                                                                                                                                                                                                                                     |
| ------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 차량 리스트 | ✅차량이 없을 때 처리<br> ✅차량 불러오는 중 처리<br> ✅업데이트된 지 24시간이 채 되지 않은 차량은 신규 뱃지 표시|
| 차량 상세        | ✅차량의 상세 정보 표시<br>✅‘브랜드, 차종, 연료타입, 이용 가능일, 대여료, 보험, 추가 상품' 표시<br>✅추가 상품이 없는 경우 해당 영역이 뜨지 않도록 구현<br>|
| 공통 헤더        | ✅두 페이지는 공통 헤더를 공유합니다.<br>✅헤더에는 전체 차량 / 차량 상세가 표시됩니다.<br> ✅상세 페이지에는 리스트로 돌아가는 버튼이 구현되어 있습니다.       |
| 반응형 | ✅모바일<br>✅태블릿 <br>✅PC |

## ❗️ 필수 요구사항

- 필수 요구 사항
    - Figma 상의 디자인 및 기능 구현
        - 차량 리스트
            - 차량이 없을 때 처리
            - 차량 불러오는 중 처리
        - 차량 상세
    
- 추가 구현 사항
    - SEO
        - 카카오톡, 페이스북에 공유 시 아래의 내용이 미리보기로 노출되도록 해야 함
            - 제목: car.brand + car.name
            - 내용: 월 car.amount 원
            - 사진: 차량 사진
  
## 👍 Best Practice 선정 이유

### Context API
- props를 넘겨주지 않아도 각 component에서 전역적으로 관리되는 데이터를 필요한 곳에서만 사용할 수 있습니다.

### Swiper Slider 
- Swiper Slider 라이브러리를 사용하여 페이지를 넘기면 다음 카테고리로 이동할 수 있도록 구현했습니다.
이를 통해 사용자가 서비스를 더욱 편하게 이용할 수 있도록 했습니다.

### Utils 함수 분리
- 여러번 사용하는 함수는 따로 분리하여 필요한 곳에서 호출하여 사용할 수 있습니다.

### SEO
- react-helmet은 비동기 데이터 처리에 문제가 생길 수 있어, 여러 스레드로부터 동시에 접근이 이루어져도 프로그램의 실행에 문제가 없는 thread-safe한 react-helmet-async 라이브러리를 사용했습니다.
