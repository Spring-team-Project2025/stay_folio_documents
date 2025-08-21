import React, { useState } from "react";
import "../styles/Diagram/Diagram.css";
import "../styles/Database/Database.css";
import ActivityDiagramViewport from "../components/Diagram/ActivityDiagramViewport";

function ActivityDiagram() {
  const [tab, setTab] = useState("signup-duplicate-check");

  const tabs = [
    { key: "signup-duplicate-check", label: "회원가입 중복체크" },
    { key: "recommend-fetch", label: "추천 조회" },
    { key: "search-result", label: "검색결과" },
    { key: "bookmark-add", label: "북마크 추가" },
    { key: "bookmark-delete", label: "북마크 삭제" },
    { key: "room-detail-and-unavailable-dates", label: "객실 상세/예약불가일" },
    { key: "reserve-and-price-calc", label: "예약/가격 계산" },
    { key: "cancel-reservation", label: "예약 취소" },
    { key: "search-suggestions", label: "검색 자동완성" },
    { key: "admin-stay-register-two-steps", label: "관리자 숙소 등록(2단계)" },
  ];

  return (
    <section className="db">
      <div className="db-topbar">
        <div className="db-tabs" role="tablist" aria-label="Activity diagram tabs">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              className={`db-tab ${tab === t.key ? "is-active" : ""}`}
              role="tab"
              aria-selected={tab === t.key}
              onClick={() => setTab(t.key)}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <ActivityDiagramViewport tab={tab} />
    </section>
  );
}

export default ActivityDiagram;
