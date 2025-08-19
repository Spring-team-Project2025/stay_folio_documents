import "./styles/app.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Database from "./pages/Database";

function App() {
  const [tab, setTab] = useState("mermaid");

  return (
    <div>
      <Header activeTab={tab} onNavigate={setTab} />
      <main className="app-content">
        <Database />
      </main>
    </div>
  );
}

export default App;
