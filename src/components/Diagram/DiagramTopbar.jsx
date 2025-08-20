import React from "react";

function DiagramTopbar({ tab, onChangeTab }) {
  const tabs = [
    { key: "common", label: "회원·공통" },
    { key: "bookmark", label: "북마크" },
    { key: "mypage", label: "마이페이지" },
    { key: "recommend", label: "추천 카테고리" },
    { key: "reservation", label: "예약" },
    { key: "room", label: "객실" },
    { key: "search", label: "숙소 검색" },
  ];

  return (
    <div className="db-topbar">
      <div className="db-tabs" role="tablist" aria-label="Diagram tabs">
        {tabs.map((t) => (
          <button
            key={t.key}
            type="button"
            className={`db-tab ${tab === t.key ? "is-active" : ""}`}
            role="tab"
            aria-selected={tab === t.key}
            onClick={() => onChangeTab(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DiagramTopbar;
