"use client";

import { useState, useEffect } from "react";

export const COLORS = ["#10B981", "#A855F7", "#06B6D4", "#FFFFFF"];

// Global singleton state shared synchronously across the entire app
let globalColorIndex = 0;
const listeners = new Set<() => void>();

function notifyListeners() {
  listeners.forEach((listener) => listener());
}

// Global click listener attached once on window load
if (typeof window !== "undefined") {
  window.addEventListener("click", () => {
    globalColorIndex = (globalColorIndex + 1) % COLORS.length;
    notifyListeners();
  });
}

export function useGlobalColor() {
  const [colorIndex, setColorIndex] = useState(globalColorIndex);

  useEffect(() => {
    const handleUpdate = () => {
      setColorIndex(globalColorIndex);
    };

    listeners.add(handleUpdate);
    return () => {
      listeners.delete(handleUpdate);
    };
  }, []);

  return {
    currentColor: COLORS[colorIndex],
    colorIndex,
    COLORS,
  };
}
