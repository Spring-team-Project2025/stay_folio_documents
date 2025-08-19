import React, { useState, useRef, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

// 실제 데이터베이스 테이블 스키마 (ERD 기반)
const SAMPLE_TABLES = [
  {
    name: "T_MEMBER_INFO",
    description: "회원 정보 테이블 - 사용자 계정 및 프로필 정보 관리",
    columns: [
      {
        name: "MI_ID",
        type: "VARCHAR2(50)",
        constraints: "PK",
        description: "회원 ID",
      },
      {
        name: "MI_PW",
        type: "VARCHAR2(100)",
        constraints: "NOT NULL",
        description: "비밀번호",
      },
      {
        name: "MI_NAME",
        type: "VARCHAR2(20)",
        constraints: "NOT NULL",
        description: "이름",
      },
      {
        name: "MI_GENDER",
        type: "CHAR(1)",
        constraints: "",
        description: "성별",
      },
      {
        name: "MI_BIRTH",
        type: "CHAR(10)",
        constraints: "",
        description: "생년월일",
      },
      {
        name: "MI_PHONE",
        type: "VARCHAR2(13)",
        constraints: "",
        description: "전화번호",
      },
      {
        name: "MI_ISAD",
        type: "CHAR(1)",
        constraints: "",
        description: "광고수신동의",
      },
      { name: "MI_DATE", type: "DATE", constraints: "", description: "가입일" },
      {
        name: "MI_ENABLED",
        type: "CHAR(1)",
        constraints: "",
        description: "계정활성화여부",
      },
    ],
  },
  {
    name: "T_MEMBER_ROLE",
    description: "회원 역할 관리 테이블 - 사용자 권한 및 역할 정보",
    columns: [
      {
        name: "MI_ID",
        type: "VARCHAR2(50)",
        constraints: "PK, FK",
        description: "회원 ID",
      },
      {
        name: "MR_NAME",
        type: "VARCHAR2(50)",
        constraints: "",
        description: "역할명",
      },
    ],
  },
  {
    name: "T_STAY_INFO",
    description: "숙소 기본 정보 테이블 - 숙소의 핵심 정보 관리",
    columns: [
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK",
        description: "숙소 고유번호",
      },
      {
        name: "SI_NAME",
        type: "VARCHAR2(50)",
        constraints: "NOT NULL",
        description: "숙소명",
      },
      {
        name: "SI_DESC",
        type: "VARCHAR2(200)",
        constraints: "",
        description: "간단설명",
      },
      {
        name: "SI_LOCA",
        type: "VARCHAR2(50)",
        constraints: "",
        description: "위치",
      },
      {
        name: "LC_ID",
        type: "NUMBER",
        constraints: "FK",
        description: "지역카테고리",
      },
      {
        name: "SI_BOOK",
        type: "NUMBER",
        constraints: "",
        description: "예약수",
      },
      {
        name: "SI_REVIEW",
        type: "NUMBER",
        constraints: "",
        description: "리뷰수",
      },
      {
        name: "SI_MINPERSON",
        type: "NUMBER",
        constraints: "",
        description: "최소인원",
      },
      {
        name: "SI_MAXPERSON",
        type: "NUMBER",
        constraints: "",
        description: "최대인원",
      },
      {
        name: "SI_MINPRICE",
        type: "NUMBER",
        constraints: "",
        description: "최소가격",
      },
      {
        name: "SI_EXTRA",
        type: "NUMBER",
        constraints: "",
        description: "인원추가요금",
      },
      {
        name: "SI_PEAK",
        type: "NUMBER(4,2)",
        constraints: "",
        description: "성수기요금계수",
      },
      {
        name: "SI_OFF",
        type: "NUMBER(4,2)",
        constraints: "",
        description: "비수기요금계수",
      },
      {
        name: "SI_DISCOUNT",
        type: "NUMBER(4,2)",
        constraints: "",
        description: "할인율",
      },
      {
        name: "SI_SHOW",
        type: "CHAR(1)",
        constraints: "",
        description: "노출여부",
      },
      {
        name: "SI_DELETE",
        type: "CHAR(1)",
        constraints: "",
        description: "삭제여부",
      },
      { name: "SI_DATE", type: "DATE", constraints: "", description: "등록일" },
    ],
  },
  {
    name: "T_ROOM_INFO",
    description: "객실 정보 테이블 - 각 숙소별 객실 상세 정보",
    columns: [
      {
        name: "RI_ID",
        type: "NUMBER",
        constraints: "PK",
        description: "객실 고유번호",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "FK",
        description: "숙소 고유번호",
      },
      {
        name: "RI_TYPE",
        type: "CHAR(1)",
        constraints: "",
        description: "객실유형",
      },
      {
        name: "RI_NAME",
        type: "VARCHAR2(80)",
        constraints: "",
        description: "객실명",
      },
      {
        name: "RI_DESC",
        type: "VARCHAR2(500 char)",
        constraints: "",
        description: "객실설명",
      },
      {
        name: "RI_PERSON",
        type: "NUMBER(3)",
        constraints: "",
        description: "기준인원",
      },
      {
        name: "RI_MAXPERSON",
        type: "NUMBER(3)",
        constraints: "",
        description: "최대인원",
      },
      {
        name: "RI_AREA",
        type: "NUMBER(5,2)",
        constraints: "",
        description: "면적(㎡)",
      },
      {
        name: "RI_BED",
        type: "VARCHAR2(55)",
        constraints: "",
        description: "침대타입",
      },
      {
        name: "RI_BEDCNT",
        type: "NUMBER(2)",
        constraints: "",
        description: "침대수",
      },
      {
        name: "RI_PRICE",
        type: "NUMBER",
        constraints: "",
        description: "가격",
      },
      {
        name: "RI_SHOW",
        type: "CHAR(1)",
        constraints: "",
        description: "노출여부",
      },
      {
        name: "RI_DELETE",
        type: "CHAR(1)",
        constraints: "",
        description: "삭제여부",
      },
      { name: "RI_DATE", type: "DATE", constraints: "", description: "등록일" },
      {
        name: "RI_BEDROOM",
        type: "NUMBER",
        constraints: "",
        description: "침실수",
      },
      {
        name: "RI_BATHROOM",
        type: "NUMBER",
        constraints: "",
        description: "욕실수",
      },
    ],
  },
  {
    name: "T_STAY_RESERVATION",
    description: "예약 정보 테이블 - 객실 예약 내역 관리",
    columns: [
      {
        name: "SR_ID",
        type: "CHAR(15)",
        constraints: "PK",
        description: "예약번호",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "FK",
        description: "숙소번호",
      },
      {
        name: "RI_ID",
        type: "NUMBER",
        constraints: "FK",
        description: "객실번호",
      },
      {
        name: "MI_ID",
        type: "VARCHAR2(50)",
        constraints: "FK",
        description: "회원ID",
      },
      {
        name: "SR_NAME",
        type: "VARCHAR2(20)",
        constraints: "",
        description: "예약자명",
      },
      {
        name: "SR_EMAIL",
        type: "VARCHAR2(50)",
        constraints: "",
        description: "이메일",
      },
      {
        name: "SR_PHONE",
        type: "VARCHAR2(13)",
        constraints: "",
        description: "전화번호",
      },
      {
        name: "SR_REQUEST",
        type: "CLOB",
        constraints: "",
        description: "요청사항",
      },
      {
        name: "SR_DATE",
        type: "DATE",
        constraints: "",
        description: "예약일시",
      },
      {
        name: "SR_ADULT",
        type: "NUMBER",
        constraints: "",
        description: "성인인원",
      },
      {
        name: "SR_CHILD",
        type: "NUMBER",
        constraints: "",
        description: "아동인원",
      },
      {
        name: "SR_CHECKIN",
        type: "DATE",
        constraints: "",
        description: "체크인",
      },
      {
        name: "SR_CHECKOUT",
        type: "DATE",
        constraints: "",
        description: "체크아웃",
      },
      {
        name: "SR_ROOMPRICE",
        type: "NUMBER",
        constraints: "",
        description: "객실요금",
      },
      {
        name: "SR_DISCOUNT",
        type: "NUMBER",
        constraints: "",
        description: "할인금액",
      },
      {
        name: "SR_ADDPERSON_FEE",
        type: "NUMBER",
        constraints: "",
        description: "추가인원요금",
      },
      {
        name: "SR_TOTALPRICE",
        type: "NUMBER(*)",
        constraints: "",
        description: "총결제금액",
      },
      {
        name: "SR_PAYMENT",
        type: "VARCHAR2(30)",
        constraints: "",
        description: "결제수단",
      },
      {
        name: "SR_PAYDATE",
        type: "DATE",
        constraints: "",
        description: "결제일시",
      },
      {
        name: "SR_CANCLEDATE",
        type: "DATE",
        constraints: "",
        description: "취소일시",
      },
      {
        name: "SR_STATUS",
        type: "VARCHAR2(1)",
        constraints: "",
        description: "예약상태",
      },
      {
        name: "SR_PAYMENTSTATUS",
        type: "CHAR(1)",
        constraints: "",
        description: "결제상태",
      },
    ],
  },
  {
    name: "T_FACILITY_INFO",
    description: "시설 정보 테이블 - 숙소 및 객실 시설 정보",
    columns: [
      {
        name: "FI_ID",
        type: "NUMBER",
        constraints: "PK",
        description: "시설ID",
      },
      {
        name: "FI_NAME",
        type: "VARCHAR2(25 char)",
        constraints: "",
        description: "시설명",
      },
      {
        name: "FI_ICON",
        type: "VARCHAR2(50)",
        constraints: "",
        description: "아이콘이미지",
      },
    ],
  },
  {
    name: "T_AMENITIES_INFO",
    description: "편의시설 정보 테이블 - 제공되는 편의시설 목록",
    columns: [
      {
        name: "AI_IDX",
        type: "NUMBER",
        constraints: "PK",
        description: "편의시설ID",
      },
      {
        name: "RA_NAME",
        type: "VARCHAR2(30 char)",
        constraints: "",
        description: "편의시설명",
      },
    ],
  },
  {
    name: "T_LOCATION_CATEGORY",
    description: "지역 카테고리 테이블 - 숙소 지역 분류 정보",
    columns: [
      {
        name: "LC_ID",
        type: "NUMBER",
        constraints: "PK",
        description: "지역ID",
      },
      {
        name: "LC_NAME",
        type: "VARCHAR2(20)",
        constraints: "",
        description: "지역명",
      },
    ],
  },
  {
    name: "T_RECOMMEND_CATEGORY",
    description: "추천 카테고리 테이블 - 테마별 추천 숙소 분류",
    columns: [
      {
        name: "RC_ID",
        type: "NUMBER",
        constraints: "PK",
        description: "추천카테고리ID",
      },
      {
        name: "RC_NAME",
        type: "VARCHAR2(50)",
        constraints: "",
        description: "카테고리명",
      },
      {
        name: "RC_DETAIL_TOP",
        type: "VARCHAR2(500)",
        constraints: "",
        description: "상세설명상단",
      },
      {
        name: "RC_DETAIL_BOTTOM",
        type: "VARCHAR2(500)",
        constraints: "",
        description: "상세설명하단",
      },
      {
        name: "RC_ICON",
        type: "VARCHAR2(255)",
        constraints: "",
        description: "아이콘이미지",
      },
    ],
  },
  {
    name: "T_STAY_INFO_DETAIL",
    description: "숙소 상세 정보 테이블 - 숙소별 추가 상세 정보",
    columns: [
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
      {
        name: "SI_NOTICE",
        type: "VARCHAR2(500)",
        constraints: "",
        description: "공지사항",
      },
      {
        name: "SI_DESC1",
        type: "VARCHAR2(3000 char)",
        constraints: "",
        description: "상세설명1",
      },
      {
        name: "SI_DESC2",
        type: "VARCHAR2(3000 char)",
        constraints: "",
        description: "상세설명2",
      },
      {
        name: "SI_FEAT1",
        type: "VARCHAR2(1000 char)",
        constraints: "",
        description: "특징1",
      },
      {
        name: "SI_FEAT2",
        type: "VARCHAR2(1000 char)",
        constraints: "",
        description: "특징2",
      },
      {
        name: "SI_ADDRESS",
        type: "VARCHAR2(150 char)",
        constraints: "",
        description: "주소",
      },
      {
        name: "SI_ADDRDESC",
        type: "VARCHAR2(300)",
        constraints: "",
        description: "상세주소",
      },
      {
        name: "SI_PHONE",
        type: "VARCHAR2(15)",
        constraints: "",
        description: "전화번호",
      },
      {
        name: "SI_EMAIL",
        type: "VARCHAR2(40 char)",
        constraints: "",
        description: "이메일",
      },
      {
        name: "SI_INSTAGRAM",
        type: "VARCHAR2(100 char)",
        constraints: "",
        description: "인스타그램",
      },
      {
        name: "SI_BIZNAME",
        type: "VARCHAR2(50 char)",
        constraints: "",
        description: "사업자명",
      },
      {
        name: "SI_BIZNUM",
        type: "CHAR(15)",
        constraints: "",
        description: "사업자등록번호",
      },
      {
        name: "SI_CEO",
        type: "VARCHAR2(30 char)",
        constraints: "",
        description: "대표자명",
      },
      {
        name: "SI_PET",
        type: "CHAR(1)",
        constraints: "",
        description: "반려동물동반",
      },
      {
        name: "SI_PARKING",
        type: "CHAR(1)",
        constraints: "",
        description: "주차가능",
      },
      {
        name: "SI_FOOD",
        type: "CHAR(1)",
        constraints: "",
        description: "조식제공",
      },
      {
        name: "SI_CHECKIN",
        type: "CHAR(5)",
        constraints: "",
        description: "체크인시간",
      },
      {
        name: "SI_CHECKOUT",
        type: "CHAR(5)",
        constraints: "",
        description: "체크아웃시간",
      },
      {
        name: "SI_FEAT_TITLE1",
        type: "VARCHAR2(50 char)",
        constraints: "",
        description: "특징제목1",
      },
      {
        name: "SI_FEAT_TITLE2",
        type: "VARCHAR2(25 char)",
        constraints: "",
        description: "특징제목2",
      },
    ],
  },
  {
    name: "T_ROOM_AMENITIES",
    description: "객실 편의시설 매핑 테이블 - 객실별 제공 편의시설",
    columns: [
      {
        name: "RA_IDX",
        type: "NUMBER",
        constraints: "PK",
        description: "인덱스",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "FK",
        description: "숙소ID",
      },
      {
        name: "RI_ID",
        type: "NUMBER",
        constraints: "FK",
        description: "객실ID",
      },
      {
        name: "AI_IDX",
        type: "NUMBER",
        constraints: "FK",
        description: "편의시설ID",
      },
    ],
  },
  {
    name: "T_ROOM_FACILITY_REL",
    description: "객실-시설 관계 테이블 - 객실별 시설 연동 정보",
    columns: [
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
      {
        name: "RI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "객실ID",
      },
      {
        name: "FI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "시설ID",
      },
    ],
  },
  {
    name: "T_ROOM_PHOTO",
    description: "객실 사진 테이블 - 객실별 이미지 관리",
    columns: [
      {
        name: "SP_URL",
        type: "VARCHAR2(255)",
        constraints: "",
        description: "이미지URL",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
      {
        name: "RI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "객실ID",
      },
      {
        name: "SP_IDX",
        type: "NUMBER",
        constraints: "PK",
        description: "이미지순서",
      },
    ],
  },
  {
    name: "T_STAY_BOOKMARKS",
    description: "찜하기 테이블 - 사용자별 숙소 저장 내역",
    columns: [
      {
        name: "SB_REGDATE",
        type: "DATE",
        constraints: "",
        description: "등록일시",
      },
      {
        name: "MI_ID",
        type: "VARCHAR2(20)",
        constraints: "PK, FK",
        description: "회원ID",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
    ],
  },
  {
    name: "T_STAY_FACILITY_REL",
    description: "숙소-시설 관계 테이블 - 숙소별 시설 연동 정보",
    columns: [
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
      {
        name: "FI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "시설ID",
      },
    ],
  },
  {
    name: "T_STAY_PHOTO",
    description: "숙소 사진 테이블 - 숙소 대표 이미지 관리",
    columns: [
      {
        name: "RI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "객실ID",
      },
      {
        name: "SP_URL",
        type: "VARCHAR2(255)",
        constraints: "",
        description: "이미지URL",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
      {
        name: "SP_IDX",
        type: "NUMBER",
        constraints: "PK",
        description: "이미지순서",
      },
    ],
  },
  {
    name: "T_STAY_RECOMMEND",
    description: "추천 숙소 매핑 테이블 - 테마별 추천 숙소 관리",
    columns: [
      {
        name: "RC_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "추천카테고리ID",
      },
      {
        name: "SI_ID",
        type: "NUMBER",
        constraints: "PK, FK",
        description: "숙소ID",
      },
      {
        name: "SR_IDX",
        type: "NUMBER",
        constraints: "PK",
        description: "추천순서",
      },
    ],
  },
];

function TableCard({ table }) {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const [needsCollapse, setNeedsCollapse] = useState(false);
  const contentRef = useRef(null);
  const tableRef = useRef(null);

  // Check if the table content exceeds the max height
  useEffect(() => {
    if (contentRef.current && tableRef.current) {
      const contentHeight = tableRef.current.scrollHeight;
      const maxHeight = 300; // Should match CSS max-height
      setNeedsCollapse(contentHeight > maxHeight);
    }
  }, [table]);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const showToggle = needsCollapse && table.columns.length > 0;

  return (
    <div className={`db-table-card ${isCollapsed ? "collapsed" : ""}`}>
      <div className="db-table-header">
        <h3 className="db-table-name">{table.name}</h3>
        {table.description && (
          <p className="db-table-description">{table.description}</p>
        )}
      </div>
      <div className="db-table-card-content" ref={contentRef}>
        <div className="db-table-columns">
          <table className="db-table" ref={tableRef}>
            <thead>
              <tr>
                <th>컬럼명</th>
                <th>타입</th>
                <th>제약조건</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              {table.columns.map((column, idx) => (
                <tr key={idx}>
                  <td className="db-column-name">{column.name}</td>
                  <td className="db-column-type">{column.type}</td>
                  <td className="db-column-constraint">{column.constraints}</td>
                  <td className="db-column-desc">{column.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {showToggle && (
        <div className="db-table-card-actions">
          <button
            className="db-table-card-toggle"
            onClick={toggleCollapse}
            aria-expanded={!isCollapsed}
          >
            <span>{isCollapsed ? "더 보기" : "접기"}</span>
            <FiChevronDown />
          </button>
        </div>
      )}
    </div>
  );
}

function DatabaseDescTables() {
  return (
    <section className="db-tables-section">
      <h2 className="db-section-title">Tables</h2>
      <div className="db-tables-grid">
        {SAMPLE_TABLES.map((table, idx) => (
          <TableCard key={idx} table={table} />
        ))}
      </div>
    </section>
  );
}

export default DatabaseDescTables;
