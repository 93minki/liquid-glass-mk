// src/components/LiquidGlass.tsx
import { forwardRef } from "react";
import { getBorderRadius, getIntensity } from "../utils/liquidGlassUtils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong" | number;
  blur?: number;
  size?: "sm" | "md" | "lg";
}

export const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(
  (
    {
      children,
      className = "",
      intensity = "medium",
      blur = 10,
      size = "md",
      ...restProps
    },
    ref
  ) => {
    const style = {
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      background: `rgba(255,255,255,${getIntensity(intensity)})`,
      border: `1px solid rgba(255,255,255,${getIntensity(intensity)})`,
      borderRadius: getBorderRadius(size),
      transition: "all 0.3s ease",
    };

    return (
      <div ref={ref} className={`${className}`} style={style} {...restProps}>
        {children}
      </div>
    );
  }
);

LiquidGlass.displayName = "LiquidGlass";
