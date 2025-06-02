<h1 align="center">📚 작가의 산책 - 도서 관리 시스템</h1>

<p align="center">
  도서를 등록, 조회, 수정, 삭제할 수 있는 웹 기반 도서 관리 애플리케이션<br/>
  React와 Spring Boot를 기반으로 구현된 미니 프로젝트입니다.
</p>

---

## 📌 프로젝트 개요

- **프로젝트명**: 작가의 산책
- **기간**: 2025.05.29 ~ 2025.06.02
- **목표**: 사용자 친화적인 UI를 통해 도서를 쉽고 편리하게 관리할 수 있는 웹 시스템 개발

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
📦 book-management-project/
├── backend/                # 백엔드(Spring Boot)
│   ├── build/              
│   ├── gradle/             
│   ├── src/                
│   ├── .gitignore
│   ├── build.gradle
│   ├── gradlew / gradlew.bat
│   └── settings.gradle
│
├── frontend/               # 프론트엔드(React)
│   ├── node_modules/       
│   ├── public/             
│   ├── src/                
│   ├── .gitignore
│   ├── package.json        
│   ├── yarn.lock           
│   └── README.md          
│
├── .git/                  
├── .idea/                 
└── README.md               

---

## 🧩 주요 기능

| 기능 | 설명 |
|------|------|
| 도서 등록 | 제목과 내용을 입력하여 새로운 도서 추가 |
| 도서 조회 | 목록 페이지에서 도서 리스트 확인 |
| 도서 상세 | 특정 도서 클릭 시 상세 내용 확인 |
| 도서 수정 | 기존 도서 정보 수정 가능 |
| 도서 삭제 | 도서 선택 후 삭제 |
| 홈 이동 | 홈 버튼을 통해 메인 페이지 이동 |

---

## 🌐 페이지 라우팅

| 경로 | 설명 |
|------|------|
| `/` | 메인(도서 목록) |
| `/create` | 도서 등록 페이지 |
| `/detail/:id` | 도서 상세 페이지 |
| `/update/:id` | 도서 수정 페이지 |

---

## 👥 팀원 소개

| 역할 | 이름 |
|------|------|
| 🧠 PM | 김민욱 |
| 🎨 프론트엔드 | 최가영, 진예나, 김예지 |
| 🔧 백엔드 | 정민수, 이태현, 한정민 |
| 📝 서기 | 진예나, 김예지 |
| 📝 검토 | 최가영 |
| 🧾 발표 | 한정민 |
| 📊 PPT 제작 | 이태현, 정민수 |



