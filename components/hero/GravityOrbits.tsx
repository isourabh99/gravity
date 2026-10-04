"use client";

import { motion } from "framer-motion";
import { useGlobalColor } from "@/hooks/useGlobalColor";

export interface GravityOrbitsProps {
  className?: string;
}

export default function GravityOrbits({ className = "" }: GravityOrbitsProps) {
  const { currentColor } = useGlobalColor();

  return (
    <motion.div
      whileHover={{ scale: 1.04 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center select-none py-2 my-2 ${className}`}
    >
      {/* Outer Dashed Orbit Track Ring */}
      <div className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-dashed border-neutral-800/80 pointer-events-none" />

      {/* Inner Solid Orbit Track Ring */}
      <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-neutral-800/60 pointer-events-none" />

      {/* Ambient Pulsing Aura around Center Core */}
      <motion.div
        animate={{ 
          scale: [1, 1.12, 1],
          opacity: [0.15, 0.35, 0.15]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-36 h-36 sm:w-44 sm:h-44 rounded-full pointer-events-none transition-colors duration-500"
        style={{ 
          backgroundColor: currentColor,
          filter: "blur(30px)"
        }}
      />

      {/* CENTER CORE (Main Dynamic Color Sphere) */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        className="relative z-10 w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-2xl flex items-center justify-center transition-colors duration-500 cursor-pointer"
        style={{ 
          backgroundColor: currentColor,
          boxShadow: `0 0 40px ${currentColor}40`
        }}
      >
        {/* Inner subtle core ring */}
        <motion.span
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-2 border-white/30"
        />
      </motion.div>

      {/* INNER ORBIT: Off-White Sphere (#E5E5E5) Rotating Clockwise */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full flex items-center justify-start pointer-events-none z-20"
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="w-10 h-10 sm:w-14 sm:h-14 rounded-full shadow-xl -ml-5 sm:-ml-7 pointer-events-auto cursor-pointer"
          style={{ backgroundColor: "#E5E5E5" }}
          title="Inner Orbit"
        />
      </motion.div>

      {/* OUTER ORBIT: Stroked Ring Planet Rotating Counter-Clockwise */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full flex items-center justify-end pointer-events-none z-20"
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="w-14 h-14 sm:w-20 sm:h-20 rounded-full border-[6px] sm:border-[8px] border-neutral-200 transition-colors duration-500 flex items-center justify-center shrink-0 relative -mr-7 sm:-mr-10 bg-black/80 backdrop-blur-md shadow-xl pointer-events-auto cursor-pointer"
          title="Outer Ring Planet"
        >
          {/* Inner pulsating dot inside the ring */}
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-2.5 h-2.5 rounded-full transition-colors duration-500"
            style={{ backgroundColor: currentColor }}
          />
        </motion.div>
      </motion.div>

      {/* FAST SATELLITE DOT: Glowing particle orbiting on outer ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full flex items-start justify-center pointer-events-none z-30"
      >
        <span
          className="w-2 h-2 rounded-full transition-colors duration-500 -mt-1"
          style={{
            backgroundColor: currentColor,
            boxShadow: `0 0 10px ${currentColor}`
          }}
        />
      </motion.div>
    </motion.div>
  );
}
