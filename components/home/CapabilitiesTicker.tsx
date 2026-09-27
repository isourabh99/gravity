"use client";

import Square from "@/components/square/Square";

const CAPABILITIES = [
  "Agentic AI Architecture",
  "Sub-Millisecond Edge Mesh",
  "Zero-Trust DevSecOps",
  "High-Frequency Fintech Ledgers",
  "Autonomous Multi-Agent Systems",
  "Rust & WebAssembly Engines",
  "Distributed Micro-Services",
];

export default function CapabilitiesTicker() {
  return (
    <section className="absolute bottom-0 py-6 border-y border-neutral-800 bg-neutral-950/80 backdrop-blur-md overflow-hidden select-none">
      <div className="flex w-max animate-marquee space-x-12">
        {[...CAPABILITIES, ...CAPABILITIES, ...CAPABILITIES].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-neutral-400">
            <Square />
            <span className="hover:text-[#10B981] transition-colors cursor-default">{item}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
