"use client";
import { cn } from "@/lib/utils";
import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  delay?: number;
  borderWidth?: number;
  colorFrom?: string;
  colorTo?: string;
  direction?: "top-to-bottom" | "bottom-to-top" | "left-to-right" | "right-to-left";
}

export const BorderBeam: React.FC<BorderBeamProps> = ({
  className,
  size = 200,
  duration = 15,
  delay = 0,
  borderWidth = 1.5,
  colorFrom = "#ffaa40",
  colorTo = "#9e2a2a",
  direction = "top-to-bottom",
}) => {
  const directions = {
    "top-to-bottom": {
      "--x": "-25%",
      "--y": "-25%",
      "--border-angle": "0deg",
    },
    "bottom-to-top": {
      "--x": "-25%",
      "--y": "125%",
      "--border-angle": "180deg",
    },
    "left-to-right": {
      "--x": "-25%",
      "--y": "-25%",
      "--border-angle": "90deg",
    },
    "right-to-left": {
      "--x": "125%",
      "--y": "-25%",
      "--border-angle": "270deg",
    },
  };

  return (
    <div
      style={
        {
          "--size": size + "px",
          "--duration": duration + "s",
          "--delay": delay + "s",
          "--border-width": borderWidth + "px",
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--x": directions[direction]["--x"],
          "--y": directions[direction]["--y"],
          "--border-angle": directions[direction]["--border-angle"],
        } as React.CSSProperties
      }
      className={cn(
        "[--color-from:var(--color-from)] [--color-to:var(--color-to)] [--size:var(--size)] [--duration:var(--duration)] [--delay:var(--delay)] [--border-width:var(--border-width)]",
        "[--x:var(--x)] [--y:var(--y)] [--border-angle:var(--border-angle)]",
        "absolute inset-0 rounded-[inherit] [border:var(--border-width)_solid_transparent]",
        "[background:linear-gradient(var(--border-angle),var(--color-from),var(--color-to),transparent),padding-box_border-box]",
        "before:absolute before:inset-0 before:rounded-[inherit] before:[background:linear-gradient(var(--border-angle),var(--color-from),transparent_50%,transparent_80%),padding-box_border-box]",
        "before:[mask:linear-gradient(#fff,_#fff)_content-box,linear-gradient(#fff,_#fff)]",
        "before:[mask-composite:exclude] before:[mask-composite:subtract]",
        "before:animate-border-beam before:[animation-duration:var(--duration)] before:[animation-delay:var(--delay)] before:[offset-path:rect(auto_auto_auto_auto)]",
        className,
      )}
    />
  );
};