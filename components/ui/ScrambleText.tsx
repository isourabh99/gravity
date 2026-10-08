"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

export interface ScrambleTextProps {
  text: string;
  className?: string;
  hoverColor?: string;
}

export default function ScrambleText({
  text,
  className = "",
  hoverColor = "#ED3327",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const frameRef = useRef<number | null>(null);

  const startScramble = useCallback(() => {
    setIsHovered(true);
    let iteration = 0;
    const maxIterations = text.length;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const step = () => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === ":" || char === "+" || char === "@" || char === ".") {
              return char;
            }
            if (index < iteration) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      if (iteration < maxIterations) {
        iteration += 1 / 2; // smooth resolution speed
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayText(text);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [text]);

  const stopScramble = useCallback(() => {
    setIsHovered(false);
    if (frameRef.current) cancelAnimationFrame(frameRef.current);
    setDisplayText(text);
  }, [text]);

  useEffect(() => {
    setDisplayText(text);
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [text]);

  return (
    <span
      onMouseEnter={startScramble}
      onMouseLeave={stopScramble}
      className={`inline-block transition-colors duration-200 cursor-pointer select-none ${className}`}
      style={{
        color: isHovered ? hoverColor : undefined,
      }}
    >
      {displayText}
    </span>
  );
}
