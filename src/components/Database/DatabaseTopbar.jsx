import React from "react";

function DatabaseTopbar({ tab, onChangeTab }) {
  return (
    <div className="db-topbar">
      <div className="db-tabs" role="tablist" aria-label="Database tabs">
        <button
          type="button"
          className={`db-tab ${tab === "desc" ? "is-active" : ""}`}
          role="tab"
          aria-selected={tab === "desc"}
          onClick={() => onChangeTab("desc")}
        >
          DB 소개
        </button>
        <button
          type="button"
          className={`db-tab ${tab === "erd" ? "is-active" : ""}`}
          role="tab"
          aria-selected={tab === "erd"}
          onClick={() => onChangeTab("erd")}
        >
          ERD
        </button>
      </div>
    </div>
  );
}

export default DatabaseTopbar;
