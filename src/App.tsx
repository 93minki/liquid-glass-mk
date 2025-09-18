// src/App.tsx
import { LiquidGlass } from "./components/LiquidGlass";

function App() {
  return (
    <div style={{ padding: "40px" }}>
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
        <LiquidGlass intensity={0.3} blur={8}>
          <div style={{ padding: "20px" }}>
            <h2>기본 효과</h2>
            <p>이것은 기본 liquid glass 효과입니다.</p>
          </div>
        </LiquidGlass>

        <LiquidGlass intensity={0.7} blur={15}>
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
          onMouseEnter={() => console.log("mouse enter")}
          onMouseLeave={() => console.log("mouse leave")}
                    
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
