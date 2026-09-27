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
  const [angle, setAngle] = useState(0);

  // Global click listener to cycle 5 colors on screen click
  useEffect(() => {
    const handleGlobalClick = () => {
      setColorIndex((prev) => (prev + 1) % COLORS.length);
    };

    window.addEventListener("click", handleGlobalClick);
    return () => window.removeEventListener("click", handleGlobalClick);
  }, []);

  // Continuous smooth 60fps orbital rotation for the planet dot
  useEffect(() => {
    let animId: number;
    const updateOrbit = () => {
      setAngle((prev) => (prev + 0.03) % (Math.PI * 2));
      animId = requestAnimationFrame(updateOrbit);
    };
    animId = requestAnimationFrame(updateOrbit);
    return () => cancelAnimationFrame(animId);
  }, []);

  const currentColor = COLORS[colorIndex];

  // Orbital motion parameters around the ENTIRE 'gravity' logo
  // Center: x=75, y=24 (Perfect X & Y centering)
  // Horizontal radius (rx)=62
  // Vertical radius (ry)=18
  const cx = 75 + 62 * Math.cos(angle);
  const cy = 24 + 18 * Math.sin(angle);

  const svgContent = (
    <svg
      className={`om-brand is-da select-none ${className}`}
      id="brand"
      width="150"
      height="48"
      viewBox="0 0 150 48"
      aria-label="gravity."
    >
      {/* Sleek Lowercase Brand Text 'gravity' - Centered at x=75 via textAnchor="middle" */}
      <text
        id="brandText"
        x="75"
        y="32"
        textAnchor="middle"
        fill={currentColor}
        className="transition-colors duration-500 font-sans font-extrabold"
        style={{
          fontFamily: "Inter, var(--font-sans), system-ui, -apple-system, sans-serif",
          fontSize: "26px",
          letterSpacing: "-0.03em",
        }}
      >
        gravity
      </text>

      {/* Planet Dot Orbiting around the ENTIRE Logo */}
      <circle
        id="brandDot"
        r="3.2"
        cx={cx}
        cy={cy}
        fill={currentColor}
        className="transition-colors duration-500"
        style={{
          filter: `drop-shadow(0 0 6px ${currentColor})`,
        }}
      />
    </svg>
  );

  if (showLink) {
    return (
      <Link href="#" className="om-brand-heim inline-flex items-center" aria-label="Back to top">
        {svgContent}
      </Link>
    );
  }

  return svgContent;
}
