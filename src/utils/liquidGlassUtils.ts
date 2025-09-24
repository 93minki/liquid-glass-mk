export const getGlassBg = (bg: string) => {
  const rgbPattern = /^\s*\d+\s*,\s*\d+\s*,\s*\d+\s*$/;
  if (!rgbPattern.test(bg)) {
    console.warn(`Invalid RGB format: ${bg}. Expected format: "255,255,255"`);
    return "255,255,255";
  }
  return bg.replace(/\s+/g, "").trim();
};

export const getGlassAlpha = (alpha: number) => {
  if (typeof alpha !== "number" || isNaN(alpha)) {
    console.warn(
      `Invalid alpha value: ${alpha}. Expected number between 0 and 1`
    );
    return 0.16;
  }
  return Math.max(0, Math.min(1, alpha));
};

export const getGlassBlur = (blur: number | string) => {
  if (typeof blur === "string") {
    const blurPattern = /^\d+(\.\d+)?(px|rem|em|vh|vw)?$/;
    if (!blurPattern.test(blur)) {
      console.warn(
        `Invalid blur value: ${blur}. Expected number or string with unit (px, rem, em, vh, vw)`
      );
      return "2px";
    }
    return blur.replace(/\s+/g, "").trim();
  }

  if (typeof blur !== "number" || isNaN(blur) || blur < 0) {
    console.warn(`Invalid blur value: ${blur}. Expected positive number`);
    return "2px";
  }
  return `${blur}px`;
};

export const getGlassSaturate = (saturate: number | string) => {
  if (typeof saturate === "string") {
    return saturate;
  }

  if (typeof saturate !== "number" || isNaN(saturate) || saturate < 0) {
    console.warn(
      `Invalid saturate value: ${saturate}. Expected positive number or string`
    );
    return 1.8;
  }
  return saturate;
};

export const getGlassBrightness = (brightness: number) => {
  if (typeof brightness !== "number" || isNaN(brightness) || brightness <= 0) {
    console.warn(
      `Invalid brightness value: ${brightness}. Expected positive number`
    );
    return 1.05;
  }
  return brightness;
};

export const getGlassBorder = (border: number | string) => {
  if (typeof border === "string") {
    const borderPattern = /^\d+(\.\d+)?(px|rem|em|vh|vw)?$/;
    if (!borderPattern.test(border)) {
      console.warn(
        `Invalid border value: ${border}. Expected number or string with unit (px, rem, em, vh, vw)`
      );
      return "1px";
    }
    return border.replace(/\s+/g, "").trim();
  }

  if (typeof border !== "number" || isNaN(border) || border < 0) {
    console.warn(`Invalid border value: ${border}. Expected positive number`);
    return "1px";
  }
  return `${border}px`;
};

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

export const getGlassBorderRadius = (value: number | string) => {
  if (typeof value === "string") {
    const unitPattern = /^\d+(\.\d+)?(px|rem|em|vh|vw|%)?$/;
    if (!unitPattern.test(value)) {
      console.warn(
        `Invalid border radius value: ${value}. Expected number or string with unit (px, rem, em, vh, vw, %)`
      );
      return "12px";
    }
    return value.replace(/\s+/g, "").trim();
  }

  if (typeof value !== "number" || isNaN(value) || value < 0) {
    console.warn(
      `Invalid border radius value: ${value}. Expected positive number`
    );
    return "12px";
  }

  return `${value}px`;
};
