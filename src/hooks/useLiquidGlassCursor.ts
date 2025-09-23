import { useEffect } from "react";
import { getIntensity } from "../utils/liquidGlassUtils";

export interface LiquidGlassCursorOptions {
  size?: number;
  blur?: number;
  intensity?: number;
  zIndex?: number;
}

export const useLiquidGlassCursor = ({
  size = 100,
  blur = 20,
  intensity = 0.1,
  zIndex = 9999,
}: LiquidGlassCursorOptions = {}) => {
  useEffect(() => {
    const liquidGlassCursor = document.createElement("div");
    liquidGlassCursor.style.cssText = `
      position: fixed;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(255, 255, 255, ${getIntensity(intensity)});
      backdrop-filter: blur(${blur}px);
      border: 1px solid rgba(255, 255, 255, ${getIntensity(intensity)});
      pointer-events: none;
      z-index: ${zIndex};
      transform: translate(-50%, -50%);
      opacity: 0;
    `;

    document.body.appendChild(liquidGlassCursor);

    const handleMouseMove = (e: MouseEvent) => {
      liquidGlassCursor.style.left = e.clientX + "px";
      liquidGlassCursor.style.top = e.clientY + "px";
      liquidGlassCursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      liquidGlassCursor.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.body.removeChild(liquidGlassCursor);
    };
  }, [size, blur, intensity, zIndex]);
};
