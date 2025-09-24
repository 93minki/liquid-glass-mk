import { forwardRef } from "react";
import "../styles/liquid-glass.css";
import { CSSValue, RGBString } from "../types/liquidGlass";
import {
  getGlassAlpha,
  getGlassBg,
  getGlassBlur,
  getGlassBorder,
  getGlassBorderRadius,
  getGlassBrightness,
  getGlassSaturate,
} from "../utils/liquidGlassUtils";

interface LiquidGlassProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glassRadius?: CSSValue;
  glassBg?: RGBString;
  glassAlpha?: number;
  glassBlur?: CSSValue;
  glassSaturate?: number | string;
  glassBrightness?: number;
  glassBorder?: CSSValue;
}

export const LiquidGlass = forwardRef<HTMLDivElement, LiquidGlassProps>(
  (
    {
      children,
      className = "",
      glassRadius = "md",
      glassBg = "255, 255, 255",
      glassAlpha = 0.16,
      glassBlur = 2,
      glassSaturate = 1.8,
      glassBrightness = 1.05,
      glassBorder = 1,
      style: customStyle,
      ...restProps
    },
    ref
  ) => {
    const cssVars = {
      "--glass-radius": getGlassBorderRadius(glassRadius),
      "--glass-bg": getGlassBg(glassBg),
      "--glass-alpha": getGlassAlpha(glassAlpha),
      "--glass-blur": getGlassBlur(glassBlur),
      "--glass-saturate": getGlassSaturate(glassSaturate),
      "--glass-brightness": getGlassBrightness(glassBrightness),
      "--glass-border": getGlassBorder(glassBorder),
    } as React.CSSProperties;
    return (
      <div
        ref={ref}
        className={`liquid-glass ${className}`}
        style={{ ...cssVars, ...customStyle }}
        {...restProps}
      >
        {children}
      </div>
    );
  }
);

LiquidGlass.displayName = "LiquidGlass";
