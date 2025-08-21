import React from "react";
import "../styles/header.css";

function Header({ activeTab, onNavigate }) {
  return (
    <header className="app-header">
      <div className="header-inner">
        <div className="logo" onClick={() => onNavigate("mermaid")}>
          STAYFOLIO
          <br />
          DOCUMENTS
        </div>
        <nav className="nav-items" aria-label="Primary">
          <button
            className={`nav-item ${activeTab === "mermaid" ? "active" : ""}`}
            onClick={() => onNavigate("mermaid")}
          >
            <span className="nav-label-kr">데이터베이스</span>
          </button>
          <button
            className={`nav-item ${activeTab === "diagram" ? "active" : ""}`}
            onClick={() => onNavigate("diagram")}
          >
            <span className="nav-label-kr">다이어그램</span>
          </button>
          <button
            className={`nav-item ${activeTab === "activity" ? "active" : ""}`}
            onClick={() => onNavigate("activity")}
          >
            <span className="nav-label-kr">액티비티 다이어그램</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
