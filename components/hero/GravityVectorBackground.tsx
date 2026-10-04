"use client";

import { motion } from "framer-motion";
import { useGlobalColor } from "@/hooks/useGlobalColor";

export interface GravityVectorBackgroundProps {
  className?: string;
}

export default function GravityVectorBackground({ className = "" }: GravityVectorBackgroundProps) {
  const { currentColor } = useGlobalColor();

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}>
      {/* Slow Rotating Vector SVG Layer */}
      <motion.svg
        animate={{ rotate: 360 }}
        transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
        className="absolute -right-1/4 sm:-right-10 top-1/2 -translate-y-1/2 w-[900px] h-[900px] sm:w-[1200px] sm:h-[1200px] opacity-[0.12] transition-colors duration-700"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Circular Text Path 1 */}
          <path
            id="orbitPath1"
            d="M 500,500 m -350,0 a 350,350 0 1,1 700,0 a 350,350 0 1,1 -700,0"
          />
          {/* Circular Text Path 2 */}
          <path
            id="orbitPath2"
            d="M 500,500 m -450,0 a 450,450 0 1,1 900,0 a 450,450 0 1,1 -900,0"
          />
        </defs>

        {/* Concentric 1px Vector Gravitational Rings */}
        <circle cx="500" cy="500" r="180" stroke="white" strokeWidth="1" strokeDasharray="4 6" opacity="0.6" />
        <circle cx="500" cy="500" r="260" stroke="white" strokeWidth="1" opacity="0.4" />
        <circle cx="500" cy="500" r="350" stroke="white" strokeWidth="1" strokeDasharray="8 8" opacity="0.5" />
        <circle cx="500" cy="500" r="450" stroke="white" strokeWidth="1" opacity="0.3" />
        <circle cx="500" cy="500" r="560" stroke="white" strokeWidth="1" strokeDasharray="12 12" opacity="0.4" />
        <circle cx="500" cy="500" r="680" stroke="white" strokeWidth="1" opacity="0.2" />

        {/* Dynamic Color Accent Ring */}
        <circle
          cx="500"
          cy="500"
          r="350"
          stroke={currentColor}
          strokeWidth="1.5"
          opacity="0.3"
          className="transition-colors duration-500"
        />

        {/* Radial Axis Grid Lines (1px Thin Vector Lines) */}
        <line x1="50" y1="500" x2="950" y2="500" stroke="white" strokeWidth="1" strokeDasharray="2 8" opacity="0.3" />
        <line x1="500" y1="50" x2="500" y2="950" stroke="white" strokeWidth="1" strokeDasharray="2 8" opacity="0.3" />
        <line x1="180" y1="180" x2="820" y2="820" stroke="white" strokeWidth="1" opacity="0.2" />
        <line x1="820" y1="180" x2="180" y2="820" stroke="white" strokeWidth="1" opacity="0.2" />

        {/* Constellation Nodes & Connecting Triangles */}
        <polygon points="500,240 710,500 500,760 290,500" stroke="white" strokeWidth="1" opacity="0.25" fill="none" />
        <polygon points="500,150 800,500 500,850 200,500" stroke="white" strokeWidth="1" strokeDasharray="6 6" opacity="0.15" fill="none" />

        {/* Node Points */}
        <circle cx="500" cy="240" r="4" fill={currentColor} className="transition-colors duration-500" />
        <circle cx="710" cy="500" r="4" fill="white" />
        <circle cx="500" cy="760" r="4" fill={currentColor} className="transition-colors duration-500" />
        <circle cx="290" cy="500" r="4" fill="white" />
        <circle cx="500" cy="150" r="3" fill="white" />
        <circle cx="800" cy="500" r="3" fill={currentColor} className="transition-colors duration-500" />
        <circle cx="500" cy="850" r="3" fill="white" />
        <circle cx="200" cy="500" r="3" fill="white" />

        {/* Curved Orbital Text Labels on Rings (Matching Reference Image) */}
        <text className="text-[11px] font-mono tracking-[0.25em] uppercase fill-neutral-300" opacity="0.65">
          <textPath href="#orbitPath1" startOffset="5%">
            Strategy · Concept · Design · Engineering · Immersive Experience · Digital Architecture
          </textPath>
        </text>

      </motion.svg>
    </div>
  );
}
