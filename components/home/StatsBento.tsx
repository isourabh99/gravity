"use client";

import Link from "next/link";
import { ArrowRight, Play, Star } from "lucide-react";

export default function StatsBento() {
  return (
    <section className="py-12 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto rounded-3xl bg-neutral-950/80 border border-neutral-800 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left Grid: 3 Metric Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            {/* Top Row: 2 Small Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono">
                    735k
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Zynexis Ecosystem</h4>
                  <p className="text-xs text-neutral-400 mt-1">Be part of a vibrant high-performance tech ecosystem.</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex flex-col justify-between space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-[#10B981] flex items-center justify-center shadow-lg">
                    <Star className="w-5 h-5 fill-current text-[#10B981]" />
                  </div>
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#10B981] font-mono">
                    01 Million
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-white">Enterprise Users Reached</h4>
                  <p className="text-xs text-neutral-400 mt-1">Join a large and growing network of modern organizations.</p>
                </div>
              </div>
            </div>

            {/* Bottom Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  UNLOCK
                </h3>

                {/* Avatar Stack */}
                <div className="flex -space-x-2 overflow-hidden">
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-800 flex items-center justify-center text-[10px] text-white font-mono">AI</div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-emerald-600 flex items-center justify-center text-[10px] text-white font-mono">GO</div>
                  <div className="w-8 h-8 rounded-full border-2 border-black bg-teal-600 flex items-center justify-center text-[10px] text-white font-mono">RS</div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white">
                  YOUR
                </h3>
              </div>

              <div>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center w-24 py-2 rounded-full border border-emerald-500/80 text-emerald-400 hover:bg-emerald-500/10 transition-all"
                >
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white uppercase">
                First Benchmark Product With Us!
              </h2>
            </div>
          </div>

          {/* Right Grid */}
          <div className="lg:col-span-5 relative rounded-2xl bg-neutral-900 overflow-hidden border border-neutral-800 flex flex-col justify-between p-8 min-h-[380px] shadow-2xl group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

            <div className="relative z-20 space-y-2">
              <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1 rounded-full font-semibold">
                SOFTWARE AGENCY
              </span>
              <h3 className="text-3xl sm:text-5xl font-extrabold text-white leading-tight">
                Start <br /> Engineering
              </h3>
            </div>

            <div className="relative z-20 pt-16">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-800 hover:bg-[#10B981] hover:text-black border border-neutral-700 text-white font-semibold text-sm transition-all"
              >
                <span>Get in touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
