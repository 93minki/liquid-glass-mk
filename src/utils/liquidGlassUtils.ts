export const getIntensity = (
  intensity: number | "light" | "medium" | "strong"
) => {
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

export const getBorderRadius = (size: "sm" | "md" | "lg") => {
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
