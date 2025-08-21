import "./styles/app.css";

import React, { useState } from "react";
import Header from "./components/Header";
import Database from "./pages/Database";
import Diagram from "./pages/Diagram";
import ActivityDiagram from "./pages/ActivityDiagram";

function App() {
  const [tab, setTab] = useState("mermaid");

  const renderPage = () => {
    switch (tab) {
      case "diagram":
        return <Diagram />;
      case "activity":
        return <ActivityDiagram />;
      default:
        return <Database />;
    }
  };

  return (
    <div>
      <Header activeTab={tab} onNavigate={setTab} />
      <main className="app-content">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
