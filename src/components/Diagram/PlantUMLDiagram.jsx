import React, { useEffect, useState } from "react";

function PlantUMLDiagram({ source, className = "plantuml-diagram" }) {
  const [svg, setSvg] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Ensure no background and no shadow at the PlantUML level
  const injectSkinParams = (src) => {
    if (!src) return src;
    try {
      const hasStart = /@startuml/i.test(src);
      const skin =
        "skinparam BackgroundColor transparent\n" +
        "skinparam Shadowing false\n" +
        "skinparam DiagramBorderColor transparent\n" +
        "skinparam DiagramBorderThickness 0\n";
      if (hasStart) {
        return src.replace(/@startuml\s*/i, (m) => `${m}\n${skin}`);
      }
      return `@startuml\n${skin}${src}\n@enduml`;
    } catch {
      return src; // fallback untouched
    }
  };

  useEffect(() => {
    let aborted = false;
    async function render() {
      if (!source) return;
      setLoading(true);
      setError("");
      setSvg("");
      try {
        const payload = injectSkinParams(source);
        const attempts = [
          {
            name: "kroki",
            url: "https://kroki.io/plantuml/svg",
            init: {
              method: "POST",
              headers: {
                "Content-Type": "text/plain",
                Accept: "image/svg+xml",
              },
              body: payload,
              mode: "cors",
            },
          },
          {
            name: "plantuml",
            url: "https://www.plantuml.com/plantuml/svg",
            init: {
              method: "POST",
              headers: {
                "Content-Type": "text/plain",
                Accept: "image/svg+xml",
              },
              body: payload,
              mode: "cors",
            },
          },
        ];

        let lastError = null;
        for (const attempt of attempts) {
          try {
            const res = await fetch(attempt.url, attempt.init);
            const text = await res.text();
            if (!aborted) {
              if (!res.ok) {
                lastError = new Error(`${attempt.name} error: ${res.status}`);
                continue;
              }
              setSvg(text);
              lastError = null;
              break;
            }
          } catch (e) {
            lastError = e;
            continue;
          }
        }
        if (lastError && !aborted) throw lastError;
      } catch (e) {
        if (!aborted) setError(e.message || String(e));
      } finally {
        if (!aborted) setLoading(false);
      }
    }
    render();
    return () => {
      aborted = true;
    };
  }, [source]);

  if (loading) {
    return (
      <div style={{ textAlign: "center", fontSize: "20px", marginTop: "20px" }}>
        파일을 불러오고 있어요!
      </div>
    );
  }
  if (error) {
    return (
      <div className="uml-error" role="alert">
        <strong>PlantUML 렌더링 오류</strong>
        <div>{error}</div>
      </div>
    );
  }

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{ __html: svg }}
      aria-label="PlantUML Diagram"
    />
  );
}

export default PlantUMLDiagram;
