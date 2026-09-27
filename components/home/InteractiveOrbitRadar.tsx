"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Square from "@/components/square/Square";
import { Cpu, Zap, Layers, ShieldCheck, Sparkles, ArrowRight } from "lucide-react";

interface NodeItem {
  id: string;
  name: string;
  category: string;
  metric: string;
  description: string;
  orbitRadius: number;
  angle: number;
  color: string;
  icon: any;
  specs: string[];
}

const NODES: NodeItem[] = [
  {
    id: "ai-mesh",
    name: "Agentic AI Workflows",
    category: "Autonomous Intelligence",
    metric: "4.2M Daily Decisions",
    description: "Multi-agent LLM orchestrations with hybrid RAG vector search layers and continuous compliance auditing.",
    orbitRadius: 36,
    angle: 35,
    color: "#b59218", // Gold (Matching Screenshot 2)
    icon: Cpu,
    specs: ["Sub-100ms Inference", "Tool Use Orchestration", "Vector Memory Mesh"],
  },
  {
    id: "cloud-edge",
    name: "Low-Latency Cloud Mesh",
    category: "Edge Infrastructure",
    metric: "< 10ms Global Latency",
    description: "Self-healing Kubernetes edge clusters providing automated multi-region routing and zero-copy Kafka streaming.",
    orbitRadius: 44,
    angle: 145,
    color: "#10B981", // Emerald Green
    icon: Zap,
    specs: ["Sub-10ms Routing", "Apache Kafka Streams", "Auto-Scaling Elastic Compute"],
  },
  {
    id: "fintech-core",
    name: "Fintech Settlement Engine",
    category: "Transactional Core",
    metric: "$1.8B+ Daily Volume",
    description: "High-frequency double-entry ledger with instant cryptographic verification and sub-millisecond ACID execution.",
    orbitRadius: 28,
    angle: 245,
    color: "#A855F7", // Purple
    icon: Layers,
    specs: ["PCI-DSS Compliant", "ACID Double-Entry", "Instant Cryptographic Validation"],
  },
  {
    id: "ebpf-sec",
    name: "eBPF Zero-Trust Telemetry",
    category: "Kernel DevSecOps",
    metric: "50k+ Live Streams",
    description: "Kernel-level eBPF monitoring system delivering autonomous threat detection and continuous security compliance.",
    orbitRadius: 42,
    angle: 315,
    color: "#06B6D4", // Cyan
    icon: ShieldCheck,
    specs: ["eBPF Kernel Anomaly Probe", "SOC 2 Type II Audited", "Automated Attack Remediation"],
  },
];

export default function InteractiveOrbitRadar() {
  const [activeNodeId, setActiveNodeId] = useState<string>("ai-mesh");
  const [isGravitized, setIsGravitized] = useState(false);

  const activeNode = NODES.find((n) => n.id === activeNodeId) || NODES[0];
  const ActiveIcon = activeNode.icon;

  return (
    <div className="relative w-full py-24 px-6 lg:px-12 bg-[#f4f2eb] text-neutral-900 border-b border-neutral-300 overflow-hidden select-none">
      {/* Soft Background Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full blur-[180px] pointer-events-none opacity-15 transition-colors duration-700"
        style={{ backgroundColor: activeNode.color }}
      />

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading & Node Specs */}
        <div className="lg:col-span-6 space-y-8 z-10">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/5 border border-black/15 text-xs font-mono text-neutral-800">
              <Square />
              <span className="text-[#b59218] font-bold uppercase">SYSTEM ORBIT RADAR</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-neutral-900 leading-tight">
              agentive <br />
              <span className="text-[#b59218]">by design.</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              Explore Zynexis interactive system orbits. Click any node on the radar wheel to inspect live specs and capability metrics.
            </p>
          </div>

          {/* Active Node Detail Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeNode.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-neutral-300 shadow-xl space-y-6"
              style={{ borderLeftColor: activeNode.color, borderLeftWidth: "5px" }}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center border"
                    style={{
                      backgroundColor: `${activeNode.color}15`,
                      borderColor: `${activeNode.color}40`,
                      color: activeNode.color,
                    }}
                  >
                    <ActiveIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <span
                      className="text-[10px] uppercase font-mono tracking-widest font-semibold px-2.5 py-0.5 rounded-full border"
                      style={{
                        backgroundColor: `${activeNode.color}15`,
                        borderColor: `${activeNode.color}30`,
                        color: activeNode.color,
                      }}
                    >
                      {activeNode.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mt-1">
                      {activeNode.name}
                    </h3>
                  </div>
                </div>

                <span className="text-xs font-mono px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-300 text-neutral-800 font-semibold">
                  {activeNode.metric}
                </span>
              </div>

              <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed">
                {activeNode.description}
              </p>

              <div className="space-y-2 pt-2 border-t border-neutral-200">
                <p className="text-[11px] font-mono text-neutral-500 uppercase tracking-wider font-semibold">
                  Live System Specifications:
                </p>
                <div className="flex flex-wrap gap-2">
                  {activeNode.specs.map((spec, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-3 py-1 rounded-xl bg-neutral-100 border border-neutral-300 text-neutral-800"
                    >
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    if (contactSection) contactSection.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold font-mono transition-colors cursor-pointer"
                  style={{ color: activeNode.color }}
                >
                  <span>Request Custom Architecture Brief</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Interactive Orbit Radar Wheel (Exact match to Screenshot 2) */}
        <div className="lg:col-span-6 flex items-center justify-center relative min-h-[450px] sm:min-h-[550px]">
          {/* Concentric Radar Orbit Rings */}
          <div className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] rounded-full flex items-center justify-center border border-neutral-400/60">
            {/* Ring 2 */}
            <div className="absolute w-[75%] h-[75%] rounded-full border border-neutral-400/40" />
            {/* Ring 3 */}
            <div className="absolute w-[50%] h-[50%] rounded-full border border-neutral-400/30" />
            {/* Ring 4 */}
            <div className="absolute w-[25%] h-[25%] rounded-full border border-neutral-400/20" />

            {/* Crosshair radar lines */}
            <div className="absolute w-full h-[1px] bg-neutral-400/30" />
            <div className="absolute h-full w-[1px] bg-neutral-400/30" />

            {/* Central Interactive Core Button */}
            <button
              onClick={() => setIsGravitized(!isGravitized)}
              className="relative z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-neutral-400 bg-white flex flex-col items-center justify-center text-center p-2 shadow-xl hover:scale-105 transition-transform cursor-pointer group"
            >
              <span className="w-3 h-3 rounded-full bg-[#b59218] animate-ping absolute top-3 right-3" />
              <Sparkles className="w-5 h-5 text-[#b59218] mb-1 group-hover:rotate-45 transition-transform" />
              <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-neutral-900 leading-tight">
                {isGravitized ? "GRAVITIZED" : "CLICK TO"} <br />
                <span className="text-[#b59218]">GRAVITIZE</span>
              </span>
            </button>

            {/* Orbiting Interactive Nodes */}
            {NODES.map((node) => {
              const isSelected = activeNodeId === node.id;
              const angleRad = (node.angle * Math.PI) / 180;
              const containerRadius = 180;
              const x = Math.cos(angleRad) * containerRadius * (node.orbitRadius / 45);
              const y = Math.sin(angleRad) * containerRadius * (node.orbitRadius / 45);

              return (
                <motion.div
                  key={node.id}
                  className="absolute z-30 flex items-center gap-2 cursor-pointer group"
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                  }}
                  animate={
                    isGravitized
                      ? {
                          x: [0, 8, -8, 0],
                          y: [0, -8, 8, 0],
                        }
                      : {}
                  }
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  onClick={() => setActiveNodeId(node.id)}
                >
                  {/* Node Circle */}
                  <div
                    className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                      isSelected
                        ? "w-12 h-12 shadow-xl scale-110"
                        : "w-8 h-8 opacity-80 hover:opacity-100 hover:scale-110"
                    }`}
                    style={{
                      backgroundColor: node.color,
                      border: "3px solid #ffffff",
                    }}
                  >
                    <span className="w-2.5 h-2.5 rounded-full bg-white" />
                  </div>

                  {/* Node Label Floating Tag */}
                  <div
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold border transition-all duration-300 whitespace-nowrap hidden sm:block ${
                      isSelected
                        ? "bg-neutral-900 text-white border-neutral-900 shadow-md"
                        : "bg-white/90 text-neutral-800 border-neutral-300 group-hover:bg-neutral-900 group-hover:text-white"
                    }`}
                  >
                    {node.name}
                  </div>
                </motion.div>
              );
            })}

            {/* Circular Rotating Ring Graphic */}
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-neutral-400/40 pointer-events-none"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
