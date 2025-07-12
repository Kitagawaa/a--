"use client";

import { cn } from "@/lib/utils";
import { useFeatureStore } from "@/store";
import { motion } from "framer-motion";
import { useEffect, useId, useState } from "react";

interface AnimatedGridPatternProps {
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
  className?: string;
  wrapperClassName?: string;
}

export function AnimatedGridPattern({
  numSquares = 40,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  className,
  wrapperClassName,
}: AnimatedGridPatternProps) {
  const id = useId();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [points, setPoints] = useState<number[][]>([]);

  useEffect(() => {
    const handleResize = () => {
      const svg = document.getElementById(id);
      if (svg) {
        setDimensions({ width: svg.clientWidth, height: svg.clientHeight });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [id]);

  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      const newPoints: number[][] = [];
      for (let i = 0; i < numSquares; i++) {
        newPoints.push([
          Math.floor(Math.random() * dimensions.width),
          Math.floor(Math.random() * dimensions.height),
        ]);
      }
      setPoints(newPoints);
    }
  }, [numSquares, dimensions]);

  return (
    <div
      id={id}
      className={cn(
        "relative h-full w-full overflow-hidden bg-background",
        wrapperClassName,
      )}
    >
      <svg width="100%" height="100%">
        {points.map(([x, y], index) => (
          <motion.circle
            key={index}
            cx={x}
            cy={y}
            r={1} // Small radius for a dot
            fill="currentColor"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [
                0,
                maxOpacity,
                0,
              ],
            }}
            transition={{
              duration,
              repeat: Infinity,
              delay: repeatDelay ? index * (repeatDelay / numSquares) : 0,
            }}
            className={cn("text-neutral-300", className)}
          />
        ))}
      </svg>
    </div>
  );
}