// src/components/LiquidGlass.tsx
import { forwardRef } from "react";

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
    const getIntensity = () => {
      if (typeof intensity === "number") return intensity * 0.1;
      switch (intensity) {
        case "light":
          return 0.05;
        case "medium":
          return 0.1;
        case "strong":
          return 0.2;
        default:
          return 0.1;
      }
    };

    const getBorderRadius = () => {
      switch (size) {
        case "sm":
          return "8px";
        case "md":
          return "12px";
        case "lg":
          return "16px";
        default:
          return "12px";
      }
    };

    const style = {
      backdropFilter: `blur(${blur}px)`,
      WebkitBackdropFilter: `blur(${blur}px)`,
      background: `rgba(255,255,255,${getIntensity()})`,
      border: "1px solid rgba(255,255,255,0.2)",
      borderRadius: getBorderRadius(),
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
