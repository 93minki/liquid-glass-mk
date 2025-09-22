export interface LiquidGlassCursorOptions {
  size?: number;
  blur?: number;
  intensity?: number;
  color?: string;
  zIndex?: number;
}

export const createLiquidGlassCursor = ({
  size = 100,
  blur = 20,
  intensity = 0.1,
  color = "rgba(255, 255, 255, 0.1)",
  zIndex = 9999,
}: LiquidGlassCursorOptions) => {
  // intensity를 color의 alpha 값으로 적용
  const finalColor = color.replace(/[\d.]+\)$/, `${intensity})`);

  const cursor = document.createElement("div");
  cursor.style.cssText = `
    position: fixed;
    width: ${size}px;
    height: ${size}px;
    border-radius: 50%;
    background: ${finalColor};
    backdrop-filter: blur(${blur}px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    pointer-events: none;
    z-index: ${zIndex};
    transform: translate(-50%, -50%);
    opacity: 0;
  `;

  document.body.appendChild(cursor);

  const handleMouseMove = (e: MouseEvent) => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
    cursor.style.opacity = "1";
  };

  const handleMouseLeave = () => {
    cursor.style.opacity = "0";
  };

  document.addEventListener("mousemove", handleMouseMove);
  document.addEventListener("mouseleave", handleMouseLeave);

  // 정리 함수 반환
  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseleave", handleMouseLeave);
    document.body.removeChild(cursor);
  };
};
