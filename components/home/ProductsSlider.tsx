"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Square from "@/components/square/Square";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Cpu, Layers, Shield, Zap } from "lucide-react";

interface ProductSlide {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  features: string[];
  icon: any;
}

const PRODUCTS: ProductSlide[] = [
  {
    id: "aether-platform",
    name: "Aether Platform v3",
    category: "Agentic AI Engine",
    tagline: "Autonomous multi-agent orchestration for enterprise workflows",
    description: "Plug-and-play LLM agent pipeline featuring hybrid RAG, vector memory indexing, and strict real-time audit governance.",
    features: ["Sub-100ms Inference", "Tool Use Orchestration", "Vector Storage Mesh"],
    icon: Cpu,
  },
  {
    id: "mesh-os",
    name: "MeshOS Engine",
    category: "Edge Infrastructure",
    tagline: "Distributed micro-latency multi-region cloud mesh",
    description: "Self-healing Kubernetes cloud operator delivering sub-10ms global edge routing and dynamic failover.",
    features: ["Sub-10ms Edge Latency", "Auto-Scaling Nodes", "Zero-Downtime Migration"],
    icon: Zap,
  },
  {
    id: "quantum-core",
    name: "Quantum Core Ledger",
    category: "Fintech Platform",
    tagline: "High-frequency double-entry cryptographic transaction engine",
    description: "ACID-compliant transactional ledger supporting multi-currency settlements and real-time fraud telemetry.",
    features: ["$1.8B+ Daily Capacity", "PCI-DSS Compliant", "Cryptographic Auditing"],
    icon: Layers,
  },
  {
    id: "sentinel-security",
    name: "Sentinel Security Suite",
    category: "DevSecOps System",
    tagline: "Kernel-level eBPF continuous threat telemetry platform",
    description: "Automated vulnerability mitigation and SOC-2 Type II audit logging for distributed cloud clusters.",
    features: ["Kernel-Level eBPF", "Automated Remediation", "Real-Time Telemetry"],
    icon: Shield,
  },
];

export default function ProductsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const activeProduct = PRODUCTS[currentIndex];
  const IconComponent = activeProduct.icon;

  return (
    <section className="py-20 px-6 lg:px-12 relative bg-black">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
              <Square />
              <span className="text-[#10B981] font-semibold uppercase">AGENCY PRODUCTS & PLATFORMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Software Products & Solutions
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 mr-4">
              {PRODUCTS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    currentIndex === i ? "w-6 bg-[#10B981]" : "w-2 bg-neutral-800"
                  }`}
                  aria-label={`Go to product ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={prevProduct}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#10B981] hover:border-[#10B981]/50 transition-all"
              aria-label="Previous Product"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextProduct}
              className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-[#10B981] hover:border-[#10B981]/50 transition-all"
              aria-label="Next Product"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Product Slider Card */}
        <div className="relative overflow-hidden rounded-3xl bg-neutral-950/80 border border-neutral-800/90 backdrop-blur-xl shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981]">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-0.5 rounded-full font-semibold">
                      {activeProduct.category}
                    </span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-4xl font-extrabold text-white">
                  {activeProduct.name}
                </h3>
                <p className="text-xs font-mono text-[#10B981] font-semibold">{activeProduct.tagline}</p>
                <p className="text-neutral-400 text-sm leading-relaxed max-w-2xl">
                  {activeProduct.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {activeProduct.features.map((feat, i) => (
                    <span key={i} className="text-xs font-mono px-3 py-1.5 rounded-xl bg-neutral-900 text-neutral-300 border border-neutral-800">
                      ✓ {feat}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-4 p-6 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-4 text-center">
                <h4 className="text-xs font-mono uppercase tracking-wider text-neutral-400">Platform Spec Sheet</h4>
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-[#10B981] flex items-center justify-center mx-auto">
                  <IconComponent className="w-8 h-8" />
                </div>
                <Link
                  href="/solutions"
                  className="inline-block w-full py-3 rounded-xl bg-[#10B981] text-black font-bold text-xs hover:bg-[#059669] hover:text-white transition-all shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                >
                  Explore Capabilities
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
