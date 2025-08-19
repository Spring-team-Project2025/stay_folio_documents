import React, { useState } from "react";
import "../styles/Database/Database.css";
import "../styles/Database/DatabaseRelationships.css";
import DatabaseTopbar from "../components/Database/DatabaseTopbar";
import DatabaseDesc from "../components/Database/DatabaseDesc";
import DatabaseERD from "../components/Database/DatabaseERD";

function Database({ defaultTab = "desc", onChangeTab }) {
  const [tab, setTab] = useState(defaultTab); // 'desc' | 'erd' | 'relationships'

  const handleTab = (next) => {
    setTab(next);
    if (typeof onChangeTab === "function") onChangeTab(next);
  };

  return (
    <section className="db">
      <DatabaseTopbar tab={tab} onChangeTab={handleTab} />
      {tab === "erd" ? (
        // No db-content wrapper for ERD; render viewport directly
        <DatabaseERD />
      ) : (
        <div className="db-content" role="region" aria-live="polite">
          {tab === "desc" && <DatabaseDesc />}
        </div>
      )}
    </section>
  );
}

export default Database;
