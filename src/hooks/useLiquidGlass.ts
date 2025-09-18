import { useCallback, useRef, useState } from "react";

interface UseLiquidGlassProps {
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export const useLiquidGlass = ({
  onMouseEnter,
  onMouseLeave,
}: UseLiquidGlassProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    onMouseEnter?.();
  }, [onMouseEnter]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    onMouseLeave?.();
  }, [onMouseLeave]);

  return {
    ref,
    isHovered,
    handleMouseEnter,
    handleMouseLeave,
  };
};
