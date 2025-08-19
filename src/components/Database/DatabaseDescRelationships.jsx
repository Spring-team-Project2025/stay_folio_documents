import React from "react";

const RELATIONSHIPS = [
  { expr: "T_MEMBER_ROLE --> T_MEMBER_INFO : MI_ID", desc: "회원 역할(T_MEMBER_ROLE)이 회원 정보(T_MEMBER_INFO)의 MI_ID를 FK로 참조" },
  { expr: "T_ROOM_AMENITIES --> T_ROOM_INFO : SI_ID, RI_ID", desc: "객실 편의시설이 객실 정보를 FK(SI_ID, RI_ID)로 참조" },
  { expr: "T_ROOM_AMENITIES --> T_STAY_INFO : SI_ID", desc: "객실 편의시설이 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_ROOM_FACILITY_REL --> T_FACILITY_INFO : FI_ID", desc: "객실-시설 관계가 시설 정보를 FK(FI_ID)로 참조" },
  { expr: "T_ROOM_FACILITY_REL --> T_ROOM_INFO : SI_ID, RI_ID", desc: "객실-시설 관계가 객실 정보를 FK(SI_ID, RI_ID)로 참조" },
  { expr: "T_ROOM_FACILITY_REL --> T_STAY_INFO : SI_ID", desc: "객실-시설 관계가 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_ROOM_INFO --> T_STAY_INFO : SI_ID", desc: "객실 정보가 숙소 정보를 FK(SI_ID)로 참조 (숙소-객실 1:N)" },
  { expr: "T_ROOM_PHOTO --> T_ROOM_INFO : SI_ID, RI_ID", desc: "객실 사진이 객실 정보를 FK(SI_ID, RI_ID)로 참조" },
  { expr: "T_ROOM_PHOTO --> T_STAY_INFO : SI_ID", desc: "객실 사진이 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_STAY_BOOKMARKS --> T_MEMBER_INFO : MI_ID", desc: "찜하기가 회원 정보를 FK(MI_ID)로 참조" },
  { expr: "T_STAY_BOOKMARKS --> T_STAY_INFO : SI_ID", desc: "찜하기가 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_STAY_FACILITY_REL --> T_FACILITY_INFO : FI_ID", desc: "숙소-시설 관계가 시설 정보를 FK(FI_ID)로 참조" },
  { expr: "T_STAY_FACILITY_REL --> T_STAY_INFO : SI_ID", desc: "숙소-시설 관계가 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_STAY_INFO --> T_LOCATION_CATEGORY : LC_ID", desc: "숙소 정보가 지역 카테고리를 FK(LC_ID)로 참조" },
  { expr: "T_STAY_INFO_DETAIL --> T_STAY_INFO : SI_ID", desc: "숙소 상세가 숙소 정보를 PK/FK(SI_ID)로 1:1 연결" },
  { expr: "T_STAY_PHOTO --> T_ROOM_INFO : SI_ID, RI_ID", desc: "숙소 사진이 객실 정보를 FK(SI_ID, RI_ID)로 참조" },
  { expr: "T_STAY_PHOTO --> T_STAY_INFO : SI_ID", desc: "숙소 사진이 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_STAY_RECOMMEND --> T_RECOMMEND_CATEGORY : RC_ID", desc: "추천 숙소가 추천 카테고리를 FK(RC_ID)로 참조" },
  { expr: "T_STAY_RECOMMEND --> T_STAY_INFO : SI_ID", desc: "추천 숙소가 숙소 정보를 FK(SI_ID)로 참조" },
  { expr: "T_STAY_RESERVATION --> T_MEMBER_INFO : MI_ID", desc: "예약이 회원 정보를 FK(MI_ID)로 참조" },
  { expr: "T_STAY_RESERVATION --> T_ROOM_INFO : SI_ID, RI_ID", desc: "예약이 객실 정보를 FK(SI_ID, RI_ID)로 참조" },
  { expr: "T_STAY_RESERVATION --> T_STAY_INFO : SI_ID", desc: "예약이 숙소 정보를 FK(SI_ID)로 참조" },
];

function DatabaseDescRelationships() {
  return (
    <section
      className="db-desc-relationships"
      aria-labelledby="db-desc-relationships-title"
    >
      <h2 id="db-desc-relationships-title" className="db-section-title">
        Relationships
      </h2>
      <div className="db-rel-grid">
        {RELATIONSHIPS.map((rel, idx) => (
          <div className="db-rel-item" key={idx}>
            <div className="db-rel-title">{rel.expr}</div>
            <div className="db-rel-desc">{rel.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DatabaseDescRelationships;
