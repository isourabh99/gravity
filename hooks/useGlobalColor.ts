"use client";

export const ACCENT_COLOR = "#FFFFFF";
export const COLORS = [ACCENT_COLOR];

export function useGlobalColor() {
  return {
    currentColor: ACCENT_COLOR,
    colorIndex: 0,
    COLORS,
  };
}
