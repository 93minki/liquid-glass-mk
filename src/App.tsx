// src/App.tsx
import { useRef } from "react";
import { LiquidGlass } from "./components/LiquidGlass";
import { useLiquidGlassCursor } from "./hooks/useLiquidGlassCursor";

function App() {
  const ref = useRef<HTMLDivElement>(null);

  const handleButtonClick = () => {
    if (ref.current) {
      console.log(ref.current);
      console.log(ref.current.style);
      console.log(ref.current.className);
    }
  };

  useLiquidGlassCursor({
    size: 120,
    blur: 1,
    intensity: 0.5,
  });

  return (
    <div
      style={{
        margin: 0,
        padding: "20px",
        background:
          "url('https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=1920&h=1080&fit=crop') center/cover",
        minHeight: "100vh",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      }}
    >
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
        Liquid Glass 테스트
      </h1>

      <div
        style={{
          display: "grid",
          gap: "20px",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <LiquidGlass intensity={0.5} blur={3} ref={ref}>
          <div
            style={{ padding: "20px" }}
            onClick={handleButtonClick}
            className="text-white"
          >
            <h2>기본 효과</h2>
            <p>이것은 기본 liquid glass 효과입니다.</p>
          </div>
        </LiquidGlass>

        <LiquidGlass intensity={0.3} blur={10}>
          <div style={{ padding: "20px" }}>
            <h2>강한 효과</h2>
            <p>더 강한 blur와 intensity를 적용했습니다.</p>
          </div>
        </LiquidGlass>

        <LiquidGlass intensity={0.2} blur={5}>
          <div style={{ padding: "20px" }}>
            <h2>약한 효과</h2>
            <p>더 미묘한 효과를 적용했습니다.</p>
          </div>
        </LiquidGlass>

        <LiquidGlass
          intensity={"strong"}
          blur={50}
          onClick={() => console.log("click")}
          className="bg-red-500"
        >
          <div style={{ padding: "20px" }}>
            <h2>호버 제거</h2>
            <p>기본 호버 효과를 제거했습니다.</p>
          </div>
        </LiquidGlass>
      </div>
    </div>
  );
}

export default App;
