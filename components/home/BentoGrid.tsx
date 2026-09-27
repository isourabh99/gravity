"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Square from "@/components/square/Square";
import { ArrowUpRight } from "lucide-react";

export default function BentoGrid() {
  const bentoItems = [
    {
      colSpan: "lg:col-span-7",
      title: "AetherAI — Autonomous Agentic Orchestrator",
      category: "AI & ML System",
      desc: "Enterprise multi-agent intelligence pipeline processing 4.2M daily unstructured compliance tasks with zero audit errors.",
      metric: "85% Latency Reduction",
      tech: ["Rust", "PyTorch", "Kubernetes", "Kafka"],
      link: "/work",
      highlight: true,
    },
    {
      colSpan: "lg:col-span-5",
      title: "QuantumLedger — Settlement Engine",
      category: "Fintech Core",
      desc: "High-frequency cryptographic transactional ledger operating at sub-millisecond execution speeds under heavy load.",
      metric: "$1.8B+ Daily Volume",
      tech: ["Go", "PostgreSQL", "WebAssembly"],
      link: "/work",
      highlight: false,
    },
    {
      colSpan: "lg:col-span-5",
      title: "HyperScale — Edge Infrastructure",
      category: "Cloud Mesh",
      desc: "Multi-region edge network providing sub-10ms global routing and automated multi-cloud fallback.",
      metric: "< 10ms Latency",
      tech: ["Kubernetes", "Terraform", "Envoy"],
      link: "/work",
      highlight: false,
    },
    {
      colSpan: "lg:col-span-7",
      title: "CyberGuard — Zero-Trust Telemetry",
      category: "DevSecOps",
      desc: "Kernel-level eBPF monitoring system delivering autonomous threat detection and continuous security compliance.",
      metric: "50k+ Live Streams",
      tech: ["Python", "eBPF", "Docker"],
      link: "/work",
      highlight: true,
    },
  ];

  return (
    <section className="py-24 px-6 lg:px-12 relative bg-black">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              <Square />
              <span className="text-[#10B981] font-semibold uppercase">FEATURED ARCHITECTURES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Selected Works & <br />
              <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-teal-300 bg-clip-text text-transparent">
                System Engineering.
              </span>
            </h2>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-[#10B981] hover:underline"
          >
            <span>View Complete Portfolio Index</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Bento Grid Structural Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {bentoItems.map((item, index) => (
            <motion.div
              key={index}
              className={`${item.colSpan} group relative p-8 sm:p-10 rounded-3xl bg-neutral-950/80 border border-neutral-800/90 backdrop-blur-xl hover:border-[#10B981]/50 transition-all duration-500 flex flex-col justify-between space-y-8 overflow-hidden`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
            >
              {/* Card Ambient Glow Accent */}
              {item.highlight && (
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-emerald-500/20 transition-colors" />
              )}

              {/* Card Header Info */}
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1 rounded-full font-semibold">
                    {item.category}
                  </span>
                  <span className="text-xs font-mono text-neutral-300 bg-neutral-900 px-2.5 py-1 rounded-lg border border-neutral-800">
                    {item.metric}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                  {item.title}
                </h3>

                <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xl">
                  {item.desc}
                </p>
              </div>

              {/* Card Footer */}
              <div className="pt-6 border-t border-neutral-800/80 flex items-center justify-between gap-4 relative z-10">
                <div className="flex flex-wrap gap-1.5">
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-300 border border-neutral-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <Link
                  href={item.link}
                  className="w-10 h-10 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-[#10B981] group-hover:text-black group-hover:border-[#10B981] transition-all duration-300 shrink-0"
                >
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
