import React, { useRef, useState, useEffect } from "react";
import "../../styles/Database/DatabaseERDViewport.css";
import "../../styles/Database/DatabaseERD.css";
import MermaidERD from "./MermaidERD";

// Figma-like pan/zoom viewport rendered under the DB topbar
function DatabaseERD() {
  const viewportRef = useRef(null);
  const [isSpaceDown, setIsSpaceDown] = useState(false);
  const [isPanning, setIsPanning] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });
  const [tx, setTx] = useState(100); // translateX - 초기 위치 조정
  const [ty, setTy] = useState(100); // translateY - 초기 위치 조정
  const [scale, setScale] = useState(1);

  // Keyboard: space to enable panning
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === "Space" && !e.repeat) {
        e.preventDefault();
        setIsSpaceDown(true);
      }
      if ((e.metaKey || e.ctrlKey) && (e.key === "0" || e.code === "Digit0")) {
        e.preventDefault();
        resetView();
      }
    };
    const handleKeyUp = (e) => {
      if (e.code === "Space") {
        setIsSpaceDown(false);
        setIsPanning(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  // Mouse: space+drag to pan
  const onMouseDown = (e) => {
    if (!isSpaceDown) return;
    e.preventDefault();
    setIsPanning(true);
    setLastPos({ x: e.clientX, y: e.clientY });
  };
  const onMouseMove = (e) => {
    if (!isPanning) return;
    e.preventDefault();
    const dx = e.clientX - lastPos.x;
    const dy = e.clientY - lastPos.y;
    setTx((prev) => prev + dx);
    setTy((prev) => prev + dy);
    setLastPos({ x: e.clientX, y: e.clientY });
  };
  const endPan = () => setIsPanning(false);

  // Wheel: zoom around pointer
  const onWheel = (e) => {
    if (!viewportRef.current) return;
    // Touchpad pinch on mac fires wheel with ctrlKey=true. Support both.
    const zooming =
      e.ctrlKey || e.metaKey || Math.abs(e.deltaY) > Math.abs(e.deltaX);
    if (!zooming) return; // allow normal scroll if needed later
    e.preventDefault();

    const rect = viewportRef.current.getBoundingClientRect();
    const px = e.clientX - rect.left; // pointer in viewport coords
    const py = e.clientY - rect.top;

    const zoomIntensity = 0.0015; // tweak feel
    const nextScale = clamp(scale * (1 - e.deltaY * zoomIntensity), 0.1, 4);

    // Keep the point under the cursor stationary while zooming
    const wx = (px - tx) / scale; // world coord before zoom
    const wy = (py - ty) / scale;
    const nextTx = px - wx * nextScale;
    const nextTy = py - wy * nextScale;

    setScale(nextScale);
    setTx(nextTx);
    setTy(nextTy);
  };

  const resetView = () => {
    setScale(1);
    setTx(100);
    setTy(100);
  };

  return (
    <div
      ref={viewportRef}
      className={`erd-viewport ${
        isPanning ? "is-panning" : isSpaceDown ? "is-space" : ""
      }`}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={endPan}
      onMouseLeave={endPan}
      onWheel={onWheel}
      onDoubleClick={resetView}
      role="region"
      aria-label="ERD Canvas"
    >
      <div
        className="erd-content"
        style={{
          transform: `translate(${tx}px, ${ty}px) scale(${scale})`,
          transformOrigin: "0 0",
          width: "100%",
          height: "100%",
        }}
      >
        <MermaidERD />
      </div>

      <div className="erd-guide" role="note" aria-label="화면조작 가이드">
        <div className="erd-guide-title">화면조작 가이드</div>
        <ul className="erd-guide-list">
          <li>
            <strong>화면이동</strong>: 스페이스바 클릭 유지 + 마우스 조작
          </li>
          <li>
            <strong>줌 인·아웃</strong>: 컨트롤 키 유지 + 마우스 휠 조작
          </li>
        </ul>
      </div>

      <div className="erd-hud" aria-hidden>
        <div className="erd-scale">{Math.round(scale * 100)}%</div>
        <button className="erd-reset" type="button" onClick={resetView}>
          Reset
        </button>
      </div>
    </div>
  );
}

function clamp(v, min, max) {
  return Math.max(min, Math.min(max, v));
}

export default DatabaseERD;
