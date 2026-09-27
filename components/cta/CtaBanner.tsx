"use client";

import Square from "@/components/square/Square";
import { ArrowRight } from "lucide-react";

export default function CtaBanner() {
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="my-16 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto rounded-3xl bg-gradient-to-r from-neutral-950 via-neutral-900 to-neutral-950 border border-neutral-800 p-8 sm:p-12 relative overflow-hidden text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="space-y-3 max-w-xl relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[#10B981] text-xs font-mono">
            <Square />
            <span className="font-semibold uppercase tracking-wider">SCALE WITH ZYNEXIS STUDIO</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Ready to engineer your next benchmark solution?
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Partner with our senior software architects and design leads to build mission-critical digital products.
          </p>
        </div>

        <div className="shrink-0 flex flex-col sm:flex-row items-center gap-4 relative z-10">
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-[#10B981] text-black font-bold text-sm hover:bg-[#059669] hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 cursor-pointer"
          >
            <span>Start Discovery Project</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
