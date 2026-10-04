"use client";

import Link from "next/link";
import { useGlobalColor } from "@/hooks/useGlobalColor";

export interface GravityLogoProps {
  className?: string;
  showLink?: boolean;
  isDark?: boolean;
  mode?: string;
  textSize?: string;
}

export default function GravityLogo({
  className = "",
  showLink = true,
  textSize = "text-2xl",
}: GravityLogoProps) {
  const { currentColor } = useGlobalColor();

  const logoContent = (
    <div className={`relative inline-flex items-center justify-center select-none group ${className}`}>
      {/* Brand Text 'gravity' */}
      <span
        className={`font-mg12-bold ${textSize} font-bold tracking-wide transition-colors duration-500 relative z-10 leading-tight py-1`}
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
