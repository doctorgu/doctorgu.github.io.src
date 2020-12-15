# PC 모니터링 시스템 제안

## 문제점

설비 PC의 경우 중요도가 높아 항상 모니터링이 필요함.

그러나 기존의 모니터링 시스템은 다음과 같은 단점이 있음.

- PC의 개수가 많고, OS가 다양해 설치가 어려움.

- 보안 프로그램의 감시로 의해 업데이트가 어려움.

- 담당자가 원하는 조건 검색이 어려움.

- 설비 로그에 대한 검색이 불가능.

- 모니터링 시스템을 이용한 해킹의 가능성.

## 해결책

[osquery](https://osquery.io/)를 이용한 모니터링 시스템 개발.

osquery는 Facebook이 만든 오픈 소스이며 이미 많은 모니터링 앱이 존재함.

### 설치

osquery는 C++로 만들어진 오픈소스이며 파일용량이 작아 설치가 쉬우며, 다양한 OS 지원.

[https://osquery.io/downloads/official/4.5.1](https://osquery.io/downloads/official/4.5.1)

### 업데이트

osquery는 시스템 정보와 관련된 95개의 테이블이 이미 존재하여 코어 부분은 업데이트가 거의 필요하지 않음. (부득이하게 부수적인 업데이트가 필요한 경우는 존재할 수 있음)

### 조건 검색

osquery는 SQL문을 사용하므로 SQL문을 쓸 수 있는 사용자라면 아무리 복잡한 조건이라도 검색이 가능함.

### 설비 로그 검색

osquery는 Thrift를 이용한 Plug in 기능을 제공하므로 설비 로그의 검색을 SQL문을 이용해 지원 가능함.

### 해킹

osquery는 select문만 가능하며, insert, update, delete문이 불가능함. 그러므로 SQL Injection으로 인한 공격은 가능하지만 공격을 이용해 시스템을 변경하는 것이 불가능함.

## 개발 예정 시스템 구조

### Back End

Postgres를 이용한 .Net Core 서버.

Web UI에서 받은 명령을 Client에 전송하거나, 각 Client의 시스템 정보를 Postgres에 취합.

### Web UI

React 이용.

관리자의 쿼리를 받아 Back End에 전송하거나, 각 Client의 취합된 정보를 레포트 형식으로 표시.

### Client

osquery 오픈 소스에 설비 로그 분석용 기능이 추가된 버전.

언어는 미정 (Go / .Net Core / Rust 가능)

## 제안

모니터링 시스템의 핵심은 osquery를 이용한 Client 부분이며, 2주간 Client에 Plug in 기능이 포함된 설치 버전을 만들어 상용화의 가능성이 있는 지 확인하는 것.
