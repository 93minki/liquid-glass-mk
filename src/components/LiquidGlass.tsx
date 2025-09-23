import { forwardRef } from "react";
import "../styles/liquid-glass.css";
import {
  getBorderRadius,
  getIntensity,
  getSaturate,
} from "../utils/liquidGlassUtils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong" | number;
  saturate?: number | string;
  borderIntensity?: "light" | "medium" | "strong" | number;
  blur?: number;
  borderRadius?: number | string | "sm" | "md" | "lg";
}

export const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(
  (
    {
      children,
      className = "",
      intensity = "medium",
      blur = 2,
      borderRadius = "md",
      saturate = 1.8,
      borderIntensity = 0.8,
      style: customStyle,
      ...restProps
    },
    ref
  ) => {
    const cssVars = {
      "--blur": `${blur}px`,
      "--intensity": getIntensity(intensity),
      "--saturate": getSaturate(saturate),
      "--border-intensity": getIntensity(borderIntensity),
      "--border-radius": getBorderRadius(borderRadius),
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={`glass ${className}`}
        style={{ ...cssVars, ...customStyle }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

LiquidGlass.displayName = "LiquidGlass";
