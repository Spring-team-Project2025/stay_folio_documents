import React, { useState } from "react";
import "../styles/Diagram/Diagram.css";
import "../styles/Database/Database.css";
import DiagramTopbar from "../components/Diagram/DiagramTopbar";
import UMLDiagramViewport from "../components/Diagram/UMLDiagramViewport";

function Diagram() {
  const [tab, setTab] = useState("common");

  return (
    <section className="db">
      <DiagramTopbar tab={tab} onChangeTab={setTab} />
      <UMLDiagramViewport tab={tab} />
    </section>
  );
}

export default Diagram;
