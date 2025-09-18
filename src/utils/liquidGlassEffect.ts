export interface LiquidGlassOptions {
  intensity?: number;
  blur?: number;
  scale?: number;
  duration?: number;
}

export const createLiquidGlassEffect = (options: LiquidGlassOptions) => {
  const { intensity = 0.5, blur = 10, scale = 1.02, duration = 0.3 } = options;
  return {
    style: {
      backdropFilter: `blur(${blur}px)`,
      background: `rgba(255, 255, 255, ${intensity * 0.1})`,
      border: "1px solid rgba(255, 255, 255, 0.2)",
      borderRadius: "12px",
      transition: `all ${duration}ms ease`,
      transform: "scale(1)",
      boxShadow: "0 4px 16px rgba(0, 0, 0, 0.05)",
    },
    hoverStyle: {
      transform: `scale(${scale})`,
      boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
    },
  };
};
