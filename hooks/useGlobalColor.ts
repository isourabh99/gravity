"use client";

import { useState, useEffect } from "react";

export const COLORS = ["#c99fffff", "#96B7D8", "#ffe375ff"];

// Global singleton state shared synchronously across the entire app
let globalColorIndex = 0;
const listeners = new Set<() => void>();

function updateCssVariables(index: number) {
  if (typeof document !== "undefined") {
    document.documentElement.style.setProperty("--accent-color", COLORS[index]);
  }
}

function notifyListeners() {
  updateCssVariables(globalColorIndex);
  listeners.forEach((listener) => listener());
}

// Global click listener attached once on window load
if (typeof window !== "undefined") {
  updateCssVariables(globalColorIndex);
  window.addEventListener("click", () => {
    globalColorIndex = (globalColorIndex + 1) % COLORS.length;
    notifyListeners();
  });
}

export function useGlobalColor() {
  const [colorIndex, setColorIndex] = useState(globalColorIndex);

  useEffect(() => {
    updateCssVariables(globalColorIndex);
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
