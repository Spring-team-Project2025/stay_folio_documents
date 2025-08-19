import React from "react";
import DatabaseDescTables from "./DatabaseDescTables";
import DatabaseDescRelationships from "./DatabaseDescRelationships";
import "../../styles/Database/DatabaseDesc.css";
import "../../styles/Database/DatabaseTables.css";
import "../../styles/Database/DatabaseRelationships.css";

function DatabaseDesc() {
  return (
    <section className="db-desc" aria-labelledby="db-desc-title">
      <header>
        <h2 id="db-desc-title" className="db-desc-title">
          Database Overview
        </h2>
        <p className="db-desc-updated">Final update: 2025-08-18</p>
      </header>

      <ul className="db-desc-list">
        <li>
          <strong>DBMS</strong>: Oracle
        </li>
        <li>
          <strong>Version</strong>: 19
        </li>
        <li>
          <strong>Tables</strong>: 17
        </li>
        <li>
          <strong>Relationships</strong>: 22
        </li>
      </ul>
      <DatabaseDescTables />
      <DatabaseDescRelationships />
    </section>
  );
}

export default DatabaseDesc;
