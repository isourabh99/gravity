"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const COLORS = ["#10B981", "#A855F7", "#F59E0B", "#06B6D4", "#FFFFFF"];

export interface GravityLogoProps {
  className?: string;
  showLink?: boolean;
  isDark?: boolean;
  mode?: string;
}

export default function GravityLogo({
  className = "",
  showLink = true,
}: GravityLogoProps) {
  const [colorIndex, setColorIndex] = useState(0);

  // Global click listener to cycle colors on screen click
  useEffect(() => {
    const handleGlobalClick = () => {
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  const currentColor = COLORS[colorIndex];

  const logoContent = (
    <div className={`relative inline-flex items-center justify-center select-none group ${className}`}>
      {/* Brand Text 'gravity' */}
      <span
        className="font-mg12-bold text-2xl font-bold tracking-wide transition-colors duration-500 relative z-10"
        style={{
          color: currentColor,
          fontFamily: "var(--font-mg12-bold), Inter, var(--font-sans), system-ui, sans-serif",
        }}
      >
        gravity
      </span>

      {/* Orbiting Circle Dot around the text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-[spin_5s_linear_infinite]">
        <span
          className="absolute -top-1 w-1 h-1 rounded-full transition-colors duration-500"
          style={{
            backgroundColor: currentColor,
            boxShadow: `0 0 8px ${currentColor}`,
          }}
        />
      </div>
    </div>
  );

  if (showLink) {
    return (
      <Link href="/" className="inline-flex items-center" aria-label="Gravity Home">
        {logoContent}
      </Link>
    );
  }

  return logoContent;
}
