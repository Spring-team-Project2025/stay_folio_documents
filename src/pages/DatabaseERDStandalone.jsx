import React, { useState } from "react";
import Header from "../components/Header";
import DatabaseTopbar from "../components/Database/DatabaseTopbar";
import DatabaseERD from "../components/Database/DatabaseERD";
import "../styles/Database/Database.css";

function DatabaseERDStandalone() {
  const [activeMainTab, setActiveMainTab] = useState("mermaid");
  const [tab] = useState("erd"); // locked to ERD for standalone

  return (
    <div>
      <Header activeTab={activeMainTab} onNavigate={setActiveMainTab} />
      <main className="app-content">
        <section className="db" aria-label="Database ERD Standalone">
          <DatabaseTopbar tab={tab} onChangeTab={() => {}} />
          {/* Standalone: place ERD viewport directly below topbar */}
          <DatabaseERD />
        </section>
      </main>
    </div>
  );
}

export default DatabaseERDStandalone;
