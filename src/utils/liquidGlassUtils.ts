export const getIntensity = (
  intensity: number | "light" | "medium" | "strong"
) => {
  if (typeof intensity === "number") return intensity * 0.1;
  switch (intensity) {
    case "light":
      return 0.05;
    case "medium":
      return 0.15;
    case "strong":
      return 0.2;
    default:
      return 0.15;
  }
};

export const getSaturate = (value: number | string) => {
  if (typeof value === "string") return value;
  return value.toString();
};

export const getBorderRadius = (
  value: number | string | "sm" | "md" | "lg"
) => {
  if (typeof value === "string") {
    if (value === "sm") return "8px";
    if (value === "md") return "12px";
    if (value === "lg") return "16px";
    return value;
  }
  return `${value}px`;
};
