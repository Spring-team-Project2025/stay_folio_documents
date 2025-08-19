import React from "react";
import "../styles/Diagram.css";

function Diagram() {
  return (
    <section className="diagram">
      <div className="diagram-topbar">
        <h1 className="diagram-title">Diagram</h1>
        <p className="diagram-subtitle">
          스키마 다이어그램과 관련 시각화를 모아 보여줍니다.
        </p>
      </div>
      <main
        className="diagram-content"
        role="region"
        aria-label="Diagram Content Area"
      >
        {/* TODO: 다이어그램 콘텐츠 추가 예정 */}
      </main>
    </section>
  );
}

export default Diagram;
