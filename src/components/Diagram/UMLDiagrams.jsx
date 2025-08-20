import React, { useEffect, useRef } from "react";
import mermaid from "mermaid";

function UMLDiagrams({ tab }) {
  const mermaidRef = useRef(null);

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      theme: "default",
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
      },
      securityLevel: "loose",
      suppressErrorRendering: false,
    });
  }, []);

  useEffect(() => {
    if (mermaidRef.current) {
      mermaidRef.current.innerHTML = "";

      // Clear any existing content first
      const diagramCode = getUMLCode(tab);
      console.log("Rendering diagram for tab:", tab);
      console.log("Diagram code:", diagramCode);

      mermaid
        .render(`uml-diagram-${tab}-${Date.now()}`, diagramCode)
        .then(({ svg }) => {
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = svg;
          }
        })
        .catch((error) => {
          console.error("Mermaid rendering error:", error);
          console.error("Error details:", error.str || error.message);
          if (mermaidRef.current) {
            mermaidRef.current.innerHTML = `<div style="color: red; padding: 20px; border: 1px solid red; border-radius: 4px;">
              <strong>다이어그램 렌더링 오류:</strong><br/>
              ${error.str || error.message}<br/>
              <small>탭: ${tab}</small>
            </div>`;
          }
        });
    }
  }, [tab]);

  const getUMLCode = (currentTab) => {
    switch (currentTab) {
      case "common":
        return `
flowchart LR
    subgraph "Presentation Layer"
        CC["<b>CommonController</b><br/><i>웹 요청 처리</i><br/>• checkPhone()<br/>• checkEmail()<br/>• handleRegister()<br/>• getRecommendStays()"]
    end
    
    subgraph "Business Layer"
        CS["<b>CommonService</b><br/><i>[Interface</i><br/>비즈니스 로직 정의"]
        CSI["<b>CommonServiceImpl</b><br/><i>비즈니스 로직 구현</i><br/>• isEmailDuplicate()<br/>• isPhoneDuplicate()<br/>• handleRegister()<br/>• getRecommend()"]
    end
    
    subgraph "Data Access Layer"
        CM["<b>CommonMapper</b><br/><i>[Interface]</i><br/><i>회원 데이터 접근</i><br/>• countByEmail()<br/>• countByPhone()<br/>• handleRegister()<br/>• read()"]
        RM["<b>RecommendMapper</b><br/><i>[Interface]</i><br/><i>추천 데이터 접근</i><br/>• getRecommend()<br/>• getRecommendTitle()"]
    end
    
    subgraph "Data Objects"
        MVO["<b>MemberVO</b><br/><i>회원 정보 객체</i><br/>• miId: String<br/>• miPw: String<br/>• miName: String<br/>• miPhone: String<br/>• miDate: Date<br/>• miEnabled: boolean"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Member Table<br/>Recommend Table"]
    end
    
    CC -->|"중복체크 요청"| CSI
    CC -->|"회원가입 요청"| CSI
    CC -->|"추천 요청"| CSI
    
    CSI -.->|"implements"| CS
    CSI -->|"중복체크/회원등록"| CM
    CSI -->|"추천조회"| RM
    
    CM -->|"DB 쿼리"| DB
    RM -->|"DB 쿼리"| DB
    
    CM -.->|"데이터 매핑"| MVO
    CSI -.->|"객체 사용"| MVO
    CC -.->|"파라미터"| MVO
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class CC controller
    class CS,CSI service
    class CM,RM mapper
    class MVO vo
    class DB db
        `;

      case "bookmark":
        return `
flowchart LR
    subgraph "Presentation Layer"
        BC["<b>BookmarkController</b><br/><i>북마크 요청 처리</i><br/>• addBookmark()<br/>• removeBookmark()"]
    end
    
    subgraph "Business Layer"
        BS["<b>BookmarkService</b><br/><i>[Interface]</i><br/>북마크 비즈니스 로직"]
        BSI["<b>BookmarkServiceImpl</b><br/><i>북마크 로직 구현</i><br/>• addBookmark()<br/>• deleteBookmark()<br/>• getBookmarkList()"]
    end
    
    subgraph "Data Access Layer"
        BM["<b>BookmarkMapper</b><br/><i>[Interface]</i><br/><i>북마크 데이터 접근</i><br/>• addBookmark()<br/>• deleteBookmark()<br/>• getBookmarkList()"]
        SM["<b>StayMapper</b><br/><i>숙소 북마크 카운트</i><br/>• incBookmarkCount()<br/>• decBookmarkCount()"]
    end
    
    subgraph "Data Objects"
        SVO["<b>StayVO</b><br/><i>숙소 정보 객체</i><br/>• siId: int<br/>• siName: String<br/>• bookmarked: boolean<br/>• spUrl: String"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Bookmark Table<br/>Stay Table"]
    end
    
    BC -->|"북마크 추가"| BSI
    BC -->|"북마크 삭제"| BSI
    BC -->|"북마크 목록"| BSI
    
    BSI -.->|implements| BS
    BSI -->|"북마크 데이터 처리"| BM
    BSI -->|"카운트 업데이트"| SM
    
    BM -->|"DB 쿼리"| DB
    SM -->|"DB 쿼리"| DB
    
    BM -.->|"데이터 매핑"| SVO
    SM -.->|"객체 사용"| SVO
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class BC controller
    class BS,BSI service
    class BM,SM mapper
    class SVO vo
    class DB db
        `;

      case "mypage":
        return `
flowchart LR
    subgraph "Presentation Layer"
        MC["<b>MypageController</b><br/><i>마이페이지 요청 처리</i><br/>• profile()<br/>• updateProfile()<br/>• changePassword()<br/>• reservationHistory()<br/>• bookmarkList()"]
    end
    
    subgraph "Business Layer"
        MS["<b>MypageService</b><br/><i>[Interface]</i><br/>마이페이지 비즈니스 로직"]
        MSI["<b>MypageServiceImpl</b><br/><i>마이페이지 로직 구현</i><br/>• readMemberById()<br/>• updateMemberProfile()<br/>• changePassword()<br/>• getReservationHistory()<br/>• getBookMarkList()"]
    end
    
    subgraph "Data Access Layer"
        MM["<b>MypageMapper</b><br/><i>[Interface]</i><br/><i>마이페이지 데이터 접근</i><br/>• updateProfile()<br/>• updatePassword()<br/>• getReservationsByMember()<br/>• getBookMarkList()"]
        CM["<b>CommonMapper</b><br/><i>회원 정보 접근</i><br/>• read()<br/>• countByPhone()"]
    end
    
    subgraph "Data Objects"
        MVO["<b>MemberVO</b><br/><i>회원 정보 객체</i><br/>• miId: String<br/>• miName: String<br/>• miPhone: String<br/>• miEnabled: boolean"]
        RVO["<b>ReservationListVO</b><br/><i>예약 목록 객체</i><br/>• srId: String<br/>• siName: String<br/>• srStatus: String"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Member Table<br/>Reservation Table<br/>Bookmark Table"]
    end
    
    MC -->|"프로필 조회"| MSI
    MC -->|"프로필 수정"| MSI
    MC -->|"비밀번호 변경"| MSI
    MC -->|"예약 내역"| MSI
    MC -->|"북마크 목록"| MSI
    
    MSI -.->|implements| MS
    MSI -->|"프로필/예약 데이터"| MM
    MSI -->|"회원 정보 검증"| CM
    
    MM -->|"DB 쿼리"| DB
    CM -->|"DB 쿼리"| DB
    
    MM -.->|"데이터 매핑"| MVO
    MM -.->|"예약 매핑"| RVO
    MSI -.->|"객체 사용"| MVO
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class MC controller
    class MS,MSI service
    class MM,CM mapper
    class MVO,RVO vo
    class DB db
        `;

      case "recommend":
        return `
flowchart LR
    subgraph "Presentation Layer"
        REC["<b>RecommendController</b><br/><i>추천 요청 처리</i><br/>• getRecommendations()<br/>• getRecommendByCategory()"]
    end
    
    subgraph "Business Layer"
        RES["<b>RecommendService</b><br/><i>[Interface]</i><br/>추천 비즈니스 로직"]
        RESI["<b>RecommendServiceImpl</b><br/><i>추천 로직 구현</i><br/>• getRecommendByLocation()<br/>• getRecommendByCategory()"]
    end
    
    subgraph "Data Access Layer"
        REM["<b>RecommendMapper</b><br/><i>[Interface]</i><br/><i>추천 데이터 접근</i><br/>• getRecommend()<br/>• getRecommendTitle()"]
        SM["<b>StayMapper</b><br/><i>숙소 데이터 접근</i><br/>• selectRecommendStayList()"]
    end
    
    subgraph "Data Objects"
        RCVO["<b>RecommendCategoryVO</b><br/><i>추천 카테고리 객체</i><br/>• rcId: Integer<br/>• rcName: String<br/>• rcDetailTop: String<br/>• siNum: int"]
        SVO["<b>StayVO</b><br/><i>숙소 정보 객체</i><br/>• siId: int<br/>• siName: String<br/>• siLoca: String<br/>• siMinprice: Integer<br/>• bookmarked: boolean"]
        LCVO["<b>LocationCategoryVO</b><br/><i>지역 카테고리 객체</i><br/>• lcId: int<br/>• lcName: String<br/>• count: int"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Recommend Table<br/>Stay Table<br/>Location Table"]
    end
    
    REC -->|"지역별 추천"| RESI
    REC -->|"카테고리별 추천"| RESI
    REC -->|"맞춤 추천"| RESI
    
    RESI -.->|implements| RES
    RESI -->|"추천 데이터 조회"| REM
    RESI -->|"숙소 목록 조회"| SM
    
    REM -->|"DB 쿼리"| DB
    SM -->|"DB 쿼리"| DB
    
    REM -.->|"카테고리 매핑"| RCVO
    REM -.->|"지역 매핑"| LCVO
    SM -.->|"숙소 매핑"| SVO
    RESI -.->|"객체 사용"| SVO
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class REC controller
    class RES,RESI service
    class REM,SM mapper
    class RCVO,SVO,LCVO vo
    class DB db
        `;

      case "reservation":
        return `
flowchart LR
    subgraph "Presentation Layer"
        RC["<b>ReservationController</b><br/><i>예약 요청 처리</i><br/>• reservationPage()<br/>• submitReservation()<br/>• cancelReservation()<br/>• checkAvailable()"]
    end
    
    subgraph "Business Layer"
        RS["<b>ReservationService</b><br/><i>[Interface]</i><br/>예약 비즈니스 로직"]
        RSI["<b>ReservationServiceImpl</b><br/><i>예약 로직 구현</i><br/>• reserve()<br/>• cancelReservation()<br/>• getReservation()<br/>• calculatePrice()<br/>• processEmail()"]
    end
    
    subgraph "Data Access Layer"
        RM["<b>ReservationMapper</b><br/><i>[Interface]</i><br/><i>예약 데이터 접근</i><br/>• insertReservation()<br/>• selectReservationById()<br/>• cancelReservation()<br/>• checkDuplicateReservation()"]
        RPM["<b>ReservationPriceMapper</b><br/><i>가격 정보 조회</i><br/>• getReservationPriceInfo()"]
    end
    
    subgraph "Data Objects"
        RDV["<b>ReservationDetailVO</b><br/><i>예약 상세 객체</i><br/>• srId: String<br/>• siName: String<br/>• srStatus: String<br/>• srTotalprice: int<br/>• srEmail: String<br/>• srCheckin: Date<br/>• srCheckout: Date"]
        RCC["<b>ReservationCancelCheckVO</b><br/><i>취소 확인 객체</i><br/>• srId: String<br/>• srStatus: String<br/>• srCheckin: Date"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Reservation Table<br/>Stay Table<br/>Room Table"]
    end
    
    RC -->|"예약 생성"| RSI
    RC -->|"예약 취소"| RSI
    RC -->|"예약 조회"| RSI
    RC -->|"가용성 체크"| RSI
    
    RSI -.->|implements| RS
    RSI -->|"예약 데이터 처리"| RM
    RSI -->|"가격 계산"| RPM
    
    RM -->|"DB 쿼리"| DB
    RPM -->|"DB 쿼리"| DB
    
    RM -.->|"데이터 매핑"| RDV
    RM -.->|"취소 매핑"| RCC
    RSI -.->|"객체 사용"| RDV
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class RC controller
    class RS,RSI service
    class RM,RPM mapper
    class RDV,RCC vo
    class DB db
        `;

      case "room":
        return `
flowchart LR
    subgraph "Presentation Layer"
        ROC["<b>RoomController</b><br/><i>객실 요청 처리</i><br/>• getRoomDetail()<br/>• StayDetail()<br/>• getUnavailableDates()"]
    end
    
    subgraph "Business Layer"
        ROS["<b>RoomService</b><br/><i>[Interface]</i><br/>객실 비즈니스 로직"]
        ROSI["<b>RoomServiceImpl</b><br/><i>객실 로직 구현</i><br/>• getRoomById()<br/>• updateRoom()<br/>• getAmenitiesByRoomId()<br/>• getFacilitiesByRoomId()<br/>• getAllRoomPhotos()"]
    end
    
    subgraph "Data Access Layer"
        ROM["<b>RoomMapper</b><br/><i>[Interface]</i><br/><i>객실 데이터 접근</i><br/>• getRoomById()<br/>• updateRoom()<br/>• getAmenitiesByRoomId()<br/>• getFacilitiesByRoomId()<br/>• getRoomPhotos()"]
        RSM["<b>ReservationService</b><br/><i>예약 가능일 확인</i><br/>• getUnavailableDates()"]
    end
    
    subgraph "Data Objects"
        RVO["<b>RoomVO</b><br/><i>객실 정보 객체</i><br/>• riId: Integer<br/>• riName: String<br/>• riType: String<br/>• riPrice: Integer<br/>• riDesc: String<br/>• riPerson: Integer"]
        FVO["<b>FacilityVO</b><br/><i>시설 정보 객체</i><br/>• fiId: Integer<br/>• fiName: String<br/>• fiIcon: String"]
        AVO["<b>AmenityVO</b><br/><i>편의시설 객체</i><br/>• aiIdx: Integer<br/>• raName: String"]
        RPV["<b>RoomPhotoVO</b><br/><i>객실 사진 객체</i><br/>• spIdx: int<br/>• spUrl: String"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Room Table<br/>Facility Table<br/>Amenity Table<br/>Photo Table"]
    end
    
    ROC -->|"객실 상세 조회"| ROSI
    ROC -->|"객실 정보 수정"| ROSI
    ROC -->|"예약 불가능일"| ROSI
    ROC -->|"시설/편의시설"| ROSI
    
    ROSI -.->|implements| ROS
    ROSI -->|"객실 데이터 처리"| ROM
    ROSI -->|"예약 상태 확인"| RSM
    
    ROM -->|"DB 쿼리"| DB
    RSM -->|"DB 쿼리"| DB
    
    ROM -.->|"객실 매핑"| RVO
    ROM -.->|"시설 매핑"| FVO
    ROM -.->|"편의시설 매핑"| AVO
    ROM -.->|"사진 매핑"| RPV
    ROSI -.->|"객체 사용"| RVO
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class ROC controller
    class ROS,ROSI service
    class ROM,RSM mapper
    class RVO,FVO,AVO,RPV vo
    class DB db
        `;

      case "search":
        return `
flowchart LR
    subgraph "Presentation Layer"
        SC["<b>SearchController</b><br/><i>검색 요청 처리</i><br/>• searchByKeyword()<br/>• getSuggestions()"]
    end
    
    subgraph "Business Layer"
        SS["<b>StayService</b><br/><i>[Interface]</i><br/>숙소 검색 비즈니스 로직"]
        SSI["<b>StayServiceImpl</b><br/><i>검색 로직 구현</i><br/>• searchStaysByKeyword()<br/>• getStayListFiltered()<br/>• searchStaysSuggestions()<br/>• getListWithPaging()<br/>• getTotalCount()"]
    end
    
    subgraph "Data Access Layer"
        SM["<b>StayMapper</b><br/><i>[Interface]</i><br/><i>숙소 검색 데이터 접근</i><br/>• searchStaysByKeyword()<br/>• selectStayListFiltered()<br/>• searchStaysSuggestions()<br/>• getListWithPaging()<br/>• getTotalCount()"]
        BM["<b>BookmarkMapper</b><br/><i>북마크 상태 확인</i><br/>• getBookmarkList()"]
    end
    
    subgraph "Data Objects"
        SVO["<b>StayVO</b><br/><i>숙소 정보 객체</i><br/>• siId: int<br/>• siName: String<br/>• siDesc: String<br/>• siLoca: String<br/>• siMinprice: Integer<br/>• bookmarked: boolean<br/>• spUrl: String"]
        SSRV["<b>StaySearchResultVO</b><br/><i>검색 결과 객체</i><br/>• siId: int<br/>• siName: String<br/>• siLoca: String<br/>• siMinprice: int<br/>• bookmarked: boolean<br/>• totalPerson: int"]
        CRI["<b>Criteria</b><br/><i>페이징 객체</i><br/>• pageNum: int<br/>• amount: int<br/>• keyword: String"]
    end
    
    subgraph "Database"
        DB["<b>Database</b><br/>Stay Table<br/>Location Table<br/>Bookmark Table"]
    end
    
    SC -->|"키워드 검색"| SSI
    SC -->|"자동완성"| SSI
    SC -->|"필터링 검색"| SSI
    SC -->|"페이징 처리"| SSI
    
    SSI -.->|implements| SS
    SSI -->|"검색 데이터 처리"| SM
    SSI -->|"북마크 상태 확인"| BM
    
    SM -->|"DB 쿼리"| DB
    BM -->|"DB 쿼리"| DB
    
    SM -.->|"숙소 매핑"| SVO
    SM -.->|"검색결과 매핑"| SSRV
    SSI -.->|"페이징 사용"| CRI
    SSI -.->|"객체 사용"| SVO
    
    classDef controller fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef service fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef mapper fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef vo fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    classDef db fill:none,stroke:#333,stroke-width:2px,color:#333,font-weight:bold,font-size:11px
    
    class SC controller
    class SS,SSI service
    class SM,BM mapper
    class SVO,SSRV,CRI vo
    class DB db
        `;

      default:
        return `
classDiagram
    direction TB
    
    class DefaultDiagram {
        +message String
        +getDefaultMessage() String
    }
        `;
    }
  };

  // const getDescription = (tab) => {
  //   const descriptions = {
  //     common: {
  //       title: "회원·공통 영역",
  //       content:
  //         "회원가입, 로그인, 이메일/전화번호 중복 확인 및 홈 추천 카드 로딩 기능을 담당합니다.",
  //       flows: [
  //         {
  //           title: "이메일/전화번호 중복 체크",
  //           desc: "회원가입 시 이메일과 전화번호의 중복 여부를 실시간으로 확인합니다.",
  //         },
  //         {
  //           title: "회원가입 처리",
  //           desc: "새로운 회원의 정보를 검증하고 안전하게 데이터베이스에 저장합니다.",
  //         },
  //         {
  //           title: "홈 추천 카드",
  //           desc: "사용자 위치 기반으로 개인화된 추천 숙소 목록을 제공합니다.",
  //         },
  //       ],
  //     },
  //     bookmark: {
  //       title: "북마크 영역",
  //       content:
  //         "사용자의 숙소 북마크 추가/삭제 기능을 담당하는 클래스들과 그들 간의 관계를 보여줍니다.",
  //       flows: [
  //         {
  //           title: "⭐ 북마크 추가",
  //           desc: "사용자가 관심 있는 숙소를 북마크 목록에 추가합니다.",
  //         },
  //         {
  //           title: "❌ 북마크 삭제",
  //           desc: "더 이상 관심 없는 숙소를 북마크에서 제거합니다.",
  //         },
  //         {
  //           title: "📋 북마크 목록",
  //           desc: "사용자의 모든 북마크된 숙소 목록을 조회합니다.",
  //         },
  //       ],
  //     },
  //     mypage: {
  //       title: "마이페이지 영역",
  //       content:
  //         "사용자 프로필 관리, 예약 내역 조회, 북마크 목록 등 마이페이지 기능을 담당합니다.",
  //       flows: [
  //         {
  //           title: "👤 프로필 관리",
  //           desc: "사용자 정보 수정 및 비밀번호 변경 기능을 제공합니다.",
  //         },
  //         {
  //           title: "📅 예약 내역",
  //           desc: "사용자의 모든 예약 내역과 상세 정보를 조회합니다.",
  //         },
  //         {
  //           title: "⭐ 북마크 목록",
  //           desc: "즐겨찾기로 등록한 숙소 목록을 관리합니다.",
  //         },
  //       ],
  //     },
  //     recommend: {
  //       title: "추천 카테고리 영역",
  //       content:
  //         "지역별, 카테고리별 숙소 추천 시스템을 담당하는 클래스들과 그들 간의 관계를 보여줍니다.",
  //       flows: [
  //         {
  //           title: "📍 지역별 추천",
  //           desc: "사용자 위치를 기반으로 주변 숙소를 추천합니다.",
  //         },
  //         {
  //           title: "🏷️ 카테고리별 추천",
  //           desc: "테마별로 분류된 숙소를 추천합니다.",
  //         },
  //         {
  //           title: "🎯 맞춤 추천",
  //           desc: "사용자 선호도를 분석하여 개인화된 추천을 제공합니다.",
  //         },
  //       ],
  //     },
  //     reservation: {
  //       title: "예약 영역",
  //       content:
  //         "숙소 예약 생성, 취소, 조회 기능을 담당하는 클래스들과 그들 간의 관계를 보여줍니다.",
  //       flows: [
  //         {
  //           title: "📝 예약 생성",
  //           desc: "새로운 숙소 예약을 생성하고 확정합니다.",
  //         },
  //         {
  //           title: "❌ 예약 취소",
  //           desc: "기존 예약을 취소하고 환불 처리를 진행합니다.",
  //         },
  //         {
  //           title: "💰 가격 계산",
  //           desc: "숙박 기간 및 옵션에 따른 정확한 요금을 산정합니다.",
  //         },
  //       ],
  //     },
  //     room: {
  //       title: "객실 영역",
  //       content:
  //         "객실 상세 정보, 시설, 편의시설, 사진 관리 기능을 담당하는 클래스들을 보여줍니다.",
  //       flows: [
  //         {
  //           title: "🏠 객실 상세",
  //           desc: "객실의 상세 정보와 가격, 수용 인원을 조회합니다.",
  //         },
  //         {
  //           title: "🛏️ 시설 정보",
  //           desc: "객실 내 시설 및 편의시설 정보를 제공합니다.",
  //         },
  //         {
  //           title: "📸 사진 관리",
  //           desc: "객실의 다양한 각도 사진을 관리합니다.",
  //         },
  //       ],
  //     },
  //     search: {
  //       title: "숙소 검색 영역",
  //       content:
  //         "키워드 검색, 필터링, 자동완성 기능을 담당하는 클래스들과 그들 간의 관계를 보여줍니다.",
  //       flows: [
  //         {
  //           title: "🔍 키워드 검색",
  //           desc: "사용자가 입력한 키워드로 숙소를 검색합니다.",
  //         },
  //         {
  //           title: "🎯 필터링",
  //           desc: "가격, 위치, 시설별로 검색 결과를 필터링합니다.",
  //         },
  //         {
  //           title: "💡 자동완성",
  //           desc: "검색어 입력 시 관련 추천 키워드를 제공합니다.",
  //         },
  //       ],
  //     },
  //   };

  //   const currentDescription = descriptions[tab] || descriptions.common;

  //   return (
  //     <div className="diagram-description">
  //       <h3>{currentDescription.title}</h3>
  //       <p>{currentDescription.content}</p>
  //       {currentDescription.flows && currentDescription.flows.length > 0 && (
  //         <div className="flow-descriptions">
  //           {currentDescription.flows.map((flow, index) => (
  //             <div key={index} className="flow-item">
  //               <h4>{flow.title}</h4>
  //               <p>{flow.desc}</p>
  //             </div>
  //           ))}
  //         </div>
  //       )}
  //     </div>
  //   );
  // };

  return (
    <div className="uml-diagrams">
      <div className="mermaid-container">
        <div ref={mermaidRef} className="mermaid-diagram"></div>
      </div>
    </div>
  );
}

export default UMLDiagrams;
