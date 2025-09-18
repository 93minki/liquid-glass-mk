// src/components/LiquidGlass.tsx
import { useLiquidGlass } from "../hooks/useLiquidGlass";

interface BaseLiquidGlassProps {
  children: React.ReactNode;
  className?: string;
  intensity?: "light" | "medium" | "strong" | number;
  blur?: number;
  size?: "sm" | "md" | "lg";
  scale?: number;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  customHoverStyle?: React.CSSProperties;
  customBaseStyle?: React.CSSProperties;
}

interface DefaultHoverProps extends BaseLiquidGlassProps {
  disableDefaultHover?: false;
  scale?: number;
}

interface CustomHoverProps extends BaseLiquidGlassProps {
  disableDefaultHover?: true;
  scale?: never;
}

type LiquidGlassProps = DefaultHoverProps | CustomHoverProps;

export const LiquidGlass = ({
  children,
  className = "",
  intensity = "medium",
  blur = 10,
  size = "md",
  scale = 1.05,
  onMouseEnter,
  onMouseLeave,
  customHoverStyle,
  customBaseStyle,
  disableDefaultHover = false,
}: LiquidGlassProps) => {
  const { ref, isHovered, handleMouseEnter, handleMouseLeave } = useLiquidGlass(
    {
      onMouseEnter,
      onMouseLeave,
    }
  );

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

  const baseStyle = {
    backdropFilter: `blur(${blur}px)`,
    background: `rgba(255,255,255,${getIntensity()})`,
    border: "1px solid rgba(255,255,255,0.2)",
    borderRadius: getBorderRadius(),
    transition: "all 0.3s ease",
    ...customBaseStyle,
  };

  const hoverStyle = disableDefaultHover
    ? {}
    : {
        transform: `scale(${scale})`,
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
        ...customHoverStyle,
      };

  const style = isHovered
    ? { ...baseStyle, ...hoverStyle }
    : { ...baseStyle, boxShadow: "0 4px 16px rgba(0,0,0, 0.05" };

  return (
    <div
      ref={ref}
      className={`liquid-glass ${className}`}
      style={style}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  );
};
