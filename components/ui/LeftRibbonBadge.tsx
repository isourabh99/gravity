"use client";

import { motion } from "framer-motion";

export default function LeftRibbonBadge() {
  return (
    <motion.div
      initial={{ x: -80, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-36 z-50 hidden lg:flex"
    >
      <div className="bg-white text-black w-10 py-2 px-1 flex flex-col items-center justify-between shadow-[0_0_25px_rgba(0,0,0,0.5)] select-none">
        {/* Top Logo / Mark */}
        <span className="text-3xl font-black tracking-tighter leading-none text-black select-none">
          W.
        </span>

        {/* Rotated Nominee Text */}
        <div className="mt-16 mb-4 flex items-center justify-center h-20 w-full">
          <span className="text-base font-bold tracking-tight whitespace-nowrap -rotate-90 origin-center text-black">
            Nominee
          </span>
        </div>
      </div>
    </motion.div>
  );
}

