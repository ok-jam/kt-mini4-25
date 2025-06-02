<h1 align="center">📚 작가의 산책 - 도서 관리 시스템</h1>

<p align="center">
  누구나 작가가 되어 자유롭게 글을 집필하고, 도서로 등록할 수 있는 창작 독서 플랫폼<br/>
  도서 등록부터 표지 생성까지, 창작자 경험을 지원하는 웹 기반 도서 관리 시스템입니다.
</p>

<p align="center">
  React와 Spring Boot를 기반으로 구현되었으며,<br/>
  도서 등록/조회/수정/삭제 및 AI 표지 이미지 자동 생성 기능을 제공합니다.
</p>

---

## 📌 프로젝트 개요

- **프로젝트명**: 작가의 산책
- **기간**: 2025.05.29 ~ 2025.06.02
- **목표**: 사용자 친화적인 UI를 통해 도서를 쉽고 편리하게 관리할 수 있는 웹 시스템 개발

---

## 👥 팀원 소개

| <img src="https://github.com/ok-jam.png" width="100"/> | <img src="https://github.com/minsu-jeong123.png" width="100"/> | <img src="https://github.com/hamiz4310.png" width="100"/> | <img src="https://github.com/thlee17.png" width="100"/> | <img src="https://github.com/gayomiiiii.png" width="100"/> | <img src="https://github.com/jinyena.png" width="100"/> | <img src="https://github.com/wngoEk.png" width="100"/> |
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| **김민욱**<br/> PM / 백엔드 | **정민수**<br/> PPT / 백엔드 | **한정민**<br/> 발표 / 백엔드 | **이태현**<br/> PPT / 백엔드 | **최가영**<br/> 검토 / 프론트엔드 | **진예나**<br/> 서기 / 프론트엔드 | **김예지**<br/> 서기 / 프론트엔드 |
| [@ok-jam](https://github.com/ok-jam) | [@minsu-jeong123](https://github.com/minsu-jeong123) | [@hamiz4310](https://github.com/hamiz4310) | [@thlee17](https://github.com/thlee17) | [@gayomiiiii](https://github.com/gayomiiiii) | [@jinyena](https://github.com/jinyena) | [@wngoEk](https://github.com/wngoEk) |


---

## 🔧 사용 기술 스택

### 🔹 Frontend

![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black)
![React Router](https://img.shields.io/badge/React%20Router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Material UI](https://img.shields.io/badge/MUI-007FFF?style=for-the-badge&logo=mui&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge)

### 🔹 Backend

![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![JPA](https://img.shields.io/badge/JPA-Hibernate-59666C?style=for-the-badge&logo=hibernate)
![Lombok](https://img.shields.io/badge/Lombok-CA2131?style=for-the-badge)
![H2](https://img.shields.io/badge/H2_DB-1A237E?style=for-the-badge)

### 🔹 기타

![REST API](https://img.shields.io/badge/REST%20API-00599C?style=for-the-badge)
![Postman](https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white)


---

## 📁 프로젝트 구조
<pre>
book-management-project/
├── backend/
│   ├── build/
│   ├── gradle/
│   ├── src/
│   ├── build.gradle
│   ├── settings.gradle
│   ├── gradlew
│   ├── gradlew.bat
│   ├── .gitignore
│   └── .gitattributes
│
├── frontend/
│   ├── node_modules/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── yarn.lock
│   ├── .gitignore
│   └── README.md
│
├── .git/
├── .idea/
└── README.md
</pre>


---

## 🔍 주요 기능 구현 방식

### 📘 도서 등록
- `/create` 페이지에서 `TextField`로 제목/내용 입력
- `axios.post()`를 통해 `/api/books`로 데이터 전송
- 백엔드는 `@PostMapping`으로 처리, DTO → Entity 매핑 후 DB 저장

### 📖 도서 목록 조회
- 메인 페이지(`/`) 진입 시 `axios.get()`으로 전체 도서 요청
- MUI의 `Card` 컴포넌트로 도서 카드 리스트 출력
- 표지 없을 경우 회색 박스 대체 이미지로 처리

### 📄 도서 상세 조회
- `/detail/:id` 경로로 접근 시 해당 도서 ID로 API 호출
- `useParams()`로 ID 추출 → `axios.get()` 요청
- 제목, 내용, 작성일, 수정일 등 상세 정보 출력

### ✏️ 도서 수정
- `/update/:id` 경로에서 기존 정보 불러오기(`GET`)
- 사용자가 수정 후 저장 시 `PATCH` 요청으로 업데이트 처리

### 🗑 도서 삭제
- 체크된 도서 1건만 선택 가능
- 확인(alert) 후 `DELETE /api/books/:id` 호출로 삭제

### 🤖 표지 생성
- 내용
- 추가
- 예정

### 🏠 홈 이동
- 상단 `AppBar`에 Home 버튼 추가 → `/`로 navigate


---




