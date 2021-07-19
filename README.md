# ⚖️ 우리동네 경매장 땅땅마켓

![small](https://user-images.githubusercontent.com/72400381/115680097-384a2980-a38e-11eb-9c72-4e7d5e4dca48.png)

### [땅땅마켓](https://ttangttang.shop)

### [Client Repository](https://github.com/codestates/lilakchal-client)

우리동네 경매장 땅땅마켓에서  
여러분들의 중고 물품을 등록해 경매 주최자가 되어보세요!  
등록된 물품을 입찰하고 실시간 채팅을 통해 거래할수 있습니다  

경매를 통해 원하는 가격으로 중고물품을 거래하세요!

# 🌸 Lilakchal

프로젝트 멤버를 소개해 드립니다.

|팀원|역활|
|:-:|:-:|
|백광호|🏅 Frontend|
|김유상|🏅 Frontend|
|임혜림|🏆 Fullstack|
|이은정|🎖 Backend|

### Worklog

<details>
<summary>백광호의 Worklog 📘</summary>
<div markdown="1">

- github 셋팅
  - 이슈 템플릿 추가
  - 라벨 추가
  - 프로젝트 칸반보드 생성
  - 팀 메니지먼트
    - Issues, Pull requests, Upstream, Branch, Marge 관리
  - Readme.MD, Wiki 작성

- Client 프로젝트 셋팅
  - 프레임워크, 라이브러리 세팅

- 등록페이지 구현
  - 사진 파일 등록 및 입력받은 데이터 서버로 전달
  - 유효성 검사
  - 레이아웃 구성
  - 디자인 구성

- 닉네임변경 모달
  - PATCH 요청
  - 레이아웃 구성
  - 디자인 구성

- 상세아이템 모달
  - 레이아웃 구성
  - 디자인 구성

- 경매버튼 컴포넌트 구현
  - 유효성 검사 추가

- footer 컴포넌트 구현
  - 레이아웃 구성
  - 디자인 구성

- 반응형 페이지 구현
  - footer 컴포넌트 데스크탑, 모바일 반응형 구현
  - 등록 페이지 데스크탑, 모바일 반응형 구현

</div>
</details>

<details>
<summary>김유상의 Worklog 📘</summary>
<div markdown="1">

- Header 컴포넌트 구현
  - DegaultGroup과 MyoptionGroup으로 나누어 그인 상태와 페이지 상태에 따른 메뉴 랜더링
  - 레이아웃 구성
  - 디자인 구성

- SearchcBar 컴포넌트 구현
  - 검색시 키워드와 위치정보에 따라 서버에 검색요청
  - 서버로 부터 받은 응답을 리덕스로 전역으로 상태관리
  - 레이아웃 구성
  - 디자인 구성

- FilterBtn 컴포넌트 구현
  - 입찰/판매 버튼에 따른 서버 검색 요청
  - 리덕스로 전역에서 응답을 상태로 관리
  - 레이아웃 구성
  - 디자인 구성

- GoMypage 컴포넌트 구현
  - Mypage로 라우팅
  - Mypage로 이동후 헤더 메뉴 변경
  - 레이아웃 구성
  - 디자인 구성

- GoSearch 컴포넌트 구현
  - SearchPage로 라우팅
  - SearchPage로 헤더 메뉴 변경
  - 레이아웃 구성
  - 디자인 구성

- KAKAO OAuth 
  - 카카오 API를 이용하여 소셜로그인/로그아웃
  - 로그인후 받은 정보를 서버로 전달
  - 로그인이 성공하면 리덕스로 isLogin상태를 전역상태로 관리
  - isLogin을 true로 변경하고, 로그인 컴포넌트를 로그아웃 컴포넌트로 

- GoRegister 컴포넌트 구현
  - RegisterPage로 라우팅
  - 레이아웃 구성
  - 디자인 구성

- MyPage 컴포넌트 구성
  - 서버에서 받은 정보를 이용하여 ItemCard를 랜더링하는 Auction컴포넌트 구현하여 랜더링

- LandingPage 컴포넌트 구현
  - 화면비율에 따른 섹션 구간 길이 i.2배로 구성
  - 스크롤 값 계산 함수 이용하여 스크롤 비율에 따른 애니메이션 구성
  - 서비스 이용전 사용자 편의를 위해 GIF와 이미지를 이용한 설명
  - 레이아웃 구성
  - 디자인 구성
  - PC, 모바일 사이즈 반응형 구현

</div>
</details>

<details>
<summary>임혜림의 Worklog 📘</summary>
<div markdown="1">
  
[ BE ]
- 서버 라우팅 설정
  - 서버 mvc 구조 세팅

- 실시간 경매/채팅 서버 작성
  - socket.io를 이용한 실시간 이벤트 처리
  - DB 레코드 조회 및 업데이트

- 이미지 업로드 및 정적 파일 제공
  - multer를 이용하여 클라이언트가 보내준 이미지 데이터 저장
  - 이미지 정적파일 제공

- 에러로그 파일 기록
  - morgan, winston을 이용한 에러로그 기록
 
[ FE ]
- 서치페이지
  - 데스크탑 및 모바일 반응형 UI 구현
  - 실시간 입찰 및 가격 업데이트 구현

- 채팅페이지
  - 물품별 실시간 채팅 구현

- 로딩 모달 구현
  - Lottie 파일 사용
 
- 헤더
  - 모바일 메뉴 작성
  - 모바일 서치바 고정
 
- 위치정보 수집 및 주소변환
  - KaKao 주소 변환 API 사용

- Client 리덕스 세팅
  - ducks 패턴 구현

[ Deploy ]
- AWS EC2, ELB를 이용한 https 서버 배포
- AWS S3, CloudFront를 이용한 https 클라이언트 배포
- Docker를 이용한 서버 개발/자동빌드환경 구축
- AWS CodeBuild를 이용한 클라이언트 자동빌드/배포환경 구축

 
</div>
</details>

<details>
<summary>이은정의 Worklog 📘</summary>
  [ BE ]
  
1. MySQL DB구축
2. 라우팅 구현(유저정보, 검색 등)
3. sequelize로 DB와 node 연결
4. 카카오 API 로 소셜로그인 구현

[ FE ]
1. 무한스크롤 구현
2. 페이지간 이동시 로딩화면 로직 구현
3. 채팅페이지 반응형 구현
<div markdown="1">

</div>
</details>

# 💾 Tech Stack

## Common
- ESlint
- Dotenv
- Axios
- Socket.io

## Front
- TypeScript
- SASS(SCSS)
- Styled-Component
- React
- React Hooks
- React Route Dom
- React Responsive
- Redux
- Typesafe-Action

## Back
- Node.js
- Express
- Multer
- MySQL
- Sequelize
- AWS(EC2, ELB, RDS, S3, Route53, CloudFront)
- Docker

# 🛠 Architecture

### Frontend Flowchart
![TTM-Front](https://user-images.githubusercontent.com/72400381/115685080-df30c480-a392-11eb-94f5-4692d0aecb5a.jpeg)

### Backend Flowchart
![TTM-Server](https://user-images.githubusercontent.com/72400381/115685330-169f7100-a393-11eb-9a9e-aed2c2c7d259.jpeg)
![TTM-Socket](https://user-images.githubusercontent.com/72400381/115685315-14d5ad80-a393-11eb-89ce-e734cd698766.jpeg)

# Project Detail

### App View

<details>
<summary>Landing Page</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/72400381/116030297-3803a400-a696-11eb-9e25-cfcf6f7c1a9a.gif" width="720px">
</div>
</details>

<details>
<summary>Loading</summary>
<div markdown="1">
<img src="https://user-images.githubusercontent.com/72400381/116031277-4d79cd80-a698-11eb-8de4-330df58773d4.gif" width="720px">
</div>
</details>

<details>
<summary>Infinite Scroll</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030661-09d29400-a697-11eb-9fba-b5d34bcfcfca.gif" width="720px">
</div>
</details>

<details>
<summary>Search</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030722-2ff83400-a697-11eb-91e5-4fce501aa989.gif" width="720px">
</div>
</details>

<details>
<summary>Login</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030168-ee1abe00-a695-11eb-9ede-efdf752f005f.gif" width="720px">
</div>
</details>

<details>
<summary>Bid Item</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030797-58802e00-a697-11eb-9d6a-e39012bd1452.gif" width="720px">
</div>
</details>

<details>
<summary>Register Item</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030834-6d5cc180-a697-11eb-9461-9bdcc2970b2e.gif" width="720px">
</div>
</details>

<details>
<summary>My Page</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030908-9aa96f80-a697-11eb-809c-6a0fa700106a.gif" width="720px">
</div>
</details>

<details>
<summary>Name Change</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116031237-363ae000-a698-11eb-935f-39bbba5a5fbb.gif" width="720px">
</div>
</details>

<details>
<summary>Chat</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116030975-bf9de280-a697-11eb-9c0a-b47586e8261a.gif" width="720px">
</div>
</details>

<details>
<summary>Responsive Page</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116031057-e2c89200-a697-11eb-8162-61365afbb082.gif" width="720px">
</div>
</details>

<details>
<summary>Mobile</summary>
<div markdown="1">    
<img src="https://user-images.githubusercontent.com/72400381/116031177-17d4e480-a698-11eb-99b8-2f3444eb8d6a.gif" width="720px">
</div>
</details>

### WIKI
### [👨🏻‍⚖️TTMK Wiki](https://github.com/codestates/lilakchal-server/wiki)
