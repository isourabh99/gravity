"use client";

import { motion } from "framer-motion";
import Square from "@/components/square/Square";
import { ArrowUpRight } from "lucide-react";

export default function BoldManifestoSection() {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[#b59218] text-black relative overflow-hidden select-none">
      {/* Concentric Background Circles (Exact match to Screenshot 1) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-white/20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full border border-white/30 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-white/10 blur-xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Header Badge */}
        <div className="flex justify-between items-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-black/10 border border-black/20 text-xs font-mono text-black backdrop-blur-md">
            <Square />
            <span className="font-bold uppercase tracking-wider">THE ZYNEXIS MANIFESTO</span>
          </div>

          <span className="text-xs font-mono text-black/80 font-bold hidden sm:inline-block">
            MANIFEST • SAN FRANCISCO, CA
          </span>
        </div>

        {/* Giant Bold Typography Layout (Exact match to Screenshot 1) */}
        <div className="space-y-6">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter text-black leading-none uppercase"
          >
            SOFTWARE AGENCY <br />
            <span className="line-through decoration-white decoration-4 text-black/75">
              WITHOUT BUREAUCRACY.
            </span>{" "}
            <br />
            <span className="text-white">100% PRINCIPAL-LED.</span>
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6 items-end">
            <div className="lg:col-span-7">
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight border-b-2 border-white pb-2 inline-block">
                JUST BOLD ARCHITECTURE.
              </h3>
            </div>

            <div className="lg:col-span-5 space-y-4 text-black font-medium text-xs sm:text-sm leading-relaxed">
              <p>
                Great technical ideas are fragile in early stages. Traditional enterprise agencies drown projects in endless approval loops, junior hand-offs, and bloated overhead.
              </p>
              <p>
                At Zynexis, every system is engineered directly by principal distributed systems architects. We eliminate corporate friction so your product scales with speed, precision, and zero-trust security.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Banner Row */}
        <div className="pt-8 border-t border-black/20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6 text-xs font-mono font-bold text-black">
            <span>✓ ZERO JUNIOR DELEGATION</span>
            <span>✓ SUB-10MS LATENCY SLAS</span>
            <span>✓ MILITARY-GRADE ENCRYPTION</span>
          </div>

          <button
            onClick={() => {
              const contactSec = document.getElementById("contact");
              if (contactSec) contactSec.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-black hover:bg-neutral-900 text-white font-bold text-xs shadow-xl transition-all cursor-pointer"
          >
            <span>Partner With Principal Architects</span>
            <ArrowUpRight className="w-4 h-4 text-[#10B981]" />
          </button>
        </div>
      </div>
    </section>
  );
}
