"use client";

import { useState } from "react";
import SmoothScroll from "@/components/ui/SmoothScroll";
import LeftRibbonBadge from "@/components/ui/LeftRibbonBadge";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CapabilitiesTicker from "@/components/home/CapabilitiesTicker";
import InteractiveOrbitRadar from "@/components/home/InteractiveOrbitRadar";
import BoldManifestoSection from "@/components/home/BoldManifestoSection";
import BentoGrid from "@/components/home/BentoGrid";
import ProductsSlider from "@/components/home/ProductsSlider";
import PartnerLogos from "@/components/home/PartnerLogos";
import StatsBento from "@/components/home/StatsBento";
import CtaBanner from "@/components/cta/CtaBanner";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfoCard from "@/components/contact/ContactInfoCard";
import FaqSection from "@/components/contact/FaqSection";
import Square from "@/components/square/Square";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Terminal,
  Cpu,
  ShieldCheck,
  Zap,
  Layers,
  CheckCircle2,
  ArrowUpRight,
  Search,
  Clock,
  Target,
  Users,
} from "lucide-react";

/* ─────────────────────────────────────────────────────────────
 Data Specs for Single-Page Layout
───────────────────────────────────────────────────────────── */
const SERVICES_PILLARS = [
  {
    id: "ai-infra",
    icon: Cpu,
    title: "Agentic AI Infrastructure",
    subtitle: "Autonomous intelligence for complex operations",
    description:
      "We build specialized LLM orchestrations, multi-agent frameworks, vector search layers, and custom fine-tuned models for mission-critical enterprise automation.",
    features: [
      "Multi-Agent Orchestration & Tool Use",
      "Sub-100ms LLM Inference Pipelines",
      "Enterprise RAG & Hybrid Vector Storage",
      "Continuous Model Audit & Governance",
    ],
  },
  {
    id: "cloud-mesh",
    icon: Zap,
    title: "High-Throughput Cloud Mesh",
    subtitle: "Distributed architectures designed for infinite scale",
    description:
      "From high-frequency message streaming to multi-region cloud orchestration, our cloud engineering ensures sub-millisecond data delivery under extreme traffic loads.",
    features: [
      "Kubernetes & Service Mesh Architecture",
      "Event-Driven Streaming with Apache Kafka",
      "Sub-10ms Global Edge Routing",
      "Auto-Scaling Elastic Compute Nodes",
    ],
  },
  {
    id: "fintech-engine",
    icon: Layers,
    title: "Fintech & Transaction Engine",
    subtitle: "Resilient ledgers and instant cryptographic settlements",
    description:
      "High-performance transactional engines built with double-entry accounting guarantees, multi-currency conversion, and zero-downtime ledger migration.",
    features: [
      "ACID-Compliant Distributed Ledgers",
      "Real-Time Fraud Telemetry",
      "ISO 20022 & PCI-DSS Compliance",
      "Sub-Second Settlement Protocols",
    ],
  },
  {
    id: "sec-ops",
    icon: ShieldCheck,
    title: "Zero-Trust Security & DevSecOps",
    subtitle: "Military-grade data protection and active threat defense",
    description:
      "Integrated security at every layer of your stack — from kernel-level eBPF monitoring to hardware-backed key encryption and automated vulnerability remediation.",
    features: [
      "eBPF Kernel Anomaly Monitoring",
      "Automated CI/CD Vulnerability Scanning",
      "Hardware-Backed Key Cryptography",
      "SOC 2 Type II & HIPAA Readiness",
    ],
  },
];

const DELIVERY_WORKFLOW = [
  {
    step: "01",
    title: "Discovery & Blueprint",
    desc: "Deep technical audit of existing infrastructure, data flow requirements, and SLA parameters.",
  },
  {
    step: "02",
    title: "System Architecture Design",
    desc: "Comprehensive engineering specification, component topology, and security threat modeling.",
  },
  {
    step: "03",
    title: "Rapid Sprint Execution",
    desc: "Agile engineering sprints led by principal architects with continuous integration and automated testing.",
  },
  {
    step: "04",
    title: "Enterprise Deployment & SLA",
    desc: "Zero-downtime production deployment with 24/7 telemetry monitoring and performance guarantees.",
  },
];

const CASE_STUDIES = [
  {
    id: "aether-ai",
    title: "AetherAI — Autonomous Agentic Orchestrator",
    category: "AI & ML",
    client: "Global Financial Services",
    description:
      "Built an enterprise-grade agentic workflow engine capable of processing unstructured financial datasets and making automated risk compliance decisions.",
    impact: "Reduced risk processing time by 85% with zero audit errors.",
    metrics: "4.2M daily automated decisions",
    tech: ["Rust", "PyTorch", "Kubernetes", "Kafka"],
  },
  {
    id: "quantum-ledger",
    title: "QuantumLedger — Sub-Millisecond Settlement Engine",
    category: "Fintech",
    client: "Tier-1 Payment Provider",
    description:
      "Architected a high-throughput, fault-tolerant ledger system handling concurrent transactional streaming with instant cryptographic validation.",
    impact: "Achieved 99.999% SLA uptime through double-bank holiday surges.",
    metrics: "$1.8B+ daily settled volume",
    tech: ["Go", "PostgreSQL", "WebAssembly", "Redis"],
  },
  {
    id: "hyperscale-mesh",
    title: "HyperScale — Multi-Region Cloud Infrastructure",
    category: "Cloud",
    client: "Logistics & Supply Chain Giant",
    description:
      "Designed a multi-cloud Kubernetes orchestration framework with dynamic edge routing and automated regional fallback.",
    impact: "Optimized server compute expenditure by 42% while improving global response speed.",
    metrics: "< 10ms global edge latency",
    tech: ["Kubernetes", "Terraform", "Envoy", "Next.js"],
  },
  {
    id: "cyberguard",
    title: "CyberGuard — Real-Time Threat Intelligence",
    category: "Enterprise SaaS",
    client: "Cybersecurity Platform",
    description:
      "Developed an eBPF-powered anomaly detection system delivering automated real-time attack mitigation for distributed cloud clusters.",
    impact: "Neutralized over 1,400 zero-day exploit attempts automatically.",
    metrics: "50k+ live telemetry streams",
    tech: ["Python", "eBPF", "React", "Docker"],
  },
];

const COMPANY_VALUES = [
  {
    icon: Zap,
    title: "Relentless Engineering Speed",
    desc: "We ship production-grade systems rapidly without compromising architectural integrity or test coverage.",
  },
  {
    icon: Target,
    title: "Benchmark Precision",
    desc: "Every API endpoint, database query, and model invocation is benchmarked for sub-millisecond execution.",
  },
  {
    icon: ShieldCheck,
    title: "Uncompromising Security",
    desc: "Zero-trust principles are hardcoded into every line of code, cloud manifest, and continuous delivery pipeline.",
  },
  {
    icon: Users,
    title: "Principal-Led Teams",
    desc: "Every project is directly led by senior systems architects with proven enterprise build track records.",
  },
];

const LEADERSHIP = [
  {
    name: "Dr. Marcus Vance",
    role: "Founder & Chief Technology Officer",
    bio: "Former Principal Distributed Systems Architect with 15+ years engineering high-frequency trading platforms.",
  },
  {
    name: "Elena Rostova",
    role: "VP of Agentic Systems & AI Research",
    bio: "Pioneer in multi-agent reinforcement learning and autonomous system governance frameworks.",
  },
  {
    name: "David K. Chen",
    role: "Head of Infrastructure & Cloud Security",
    bio: "Ex-Scale Cloud Engineer specializing in Kubernetes edge mesh networks and zero-trust cryptography.",
  },
];

const KNOWLEDGE_RESOURCES = [
  {
    id: "agentic-rag-blueprint",
    title: "Building Agentic RAG Workflows with Sub-100ms Inference",
    category: "Agentic AI",
    readTime: "8 min read",
    date: "Sep 2026",
    summary:
      "A practical technical guide on vector chunking, hybrid BM25 + dense embedding search, and streaming token response optimizations.",
    author: "Elena Rostova",
    type: "Blueprint",
  },
  {
    id: "kafka-1b-throughput",
    title: "High-Throughput Event Streaming: Lessons from 1B Daily Transactions",
    category: "Distributed Cloud",
    readTime: "12 min read",
    date: "Aug 2026",
    summary:
      "How we configured zero-copy serialization, partition balancing, and low-latency Rust worker pools for financial stream processing.",
    author: "Dr. Marcus Vance",
    type: "Guide",
  },
  {
    id: "ebpf-kernel-security",
    title: "Zero-Trust Kernel Telemetry with eBPF and Linux Security Modules",
    category: "Security",
    readTime: "10 min read",
    date: "Aug 2026",
    summary:
      "Implementing real-time threat detection directly within kernel space without introducing user-mode context switching overhead.",
    author: "David K. Chen",
    type: "Whitepaper",
  },
  {
    id: "monolith-vs-microservices-2026",
    title: "Microservices vs. Modular Monoliths in 2026: An Empirical Benchmark",
    category: "System Design",
    readTime: "6 min read",
    date: "Jul 2026",
    summary:
      "Comprehensive memory footprint, deployment speed, and network latency benchmarks across Go, Rust, Node.js, and Java platforms.",
    author: "Systems Research Lab",
    type: "Benchmark",
  },
];

/* ─────────────────────────────────────────────────────────────
 Single Page Website Master Component
───────────────────────────────────────────────────────────── */
export default function SinglePageHome() {
  const [selectedWorkCategory, setSelectedWorkCategory] = useState("All");
  const [resourceSearch, setResourceSearch] = useState("");
  const [selectedResourceTag, setSelectedResourceTag] = useState("All");

  const filteredCaseStudies =
    selectedWorkCategory === "All"
      ? CASE_STUDIES
      : CASE_STUDIES.filter((c) => c.category === selectedWorkCategory);

  const filteredResources = KNOWLEDGE_RESOURCES.filter((res) => {
    const matchesTag =
      selectedResourceTag === "All" || res.category === selectedResourceTag;
    const matchesQuery =
      res.title.toLowerCase().includes(resourceSearch.toLowerCase()) ||
      res.summary.toLowerCase().includes(resourceSearch.toLowerCase());
    return matchesTag && matchesQuery;
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScroll>
      <div className="min-h-screen bg-black text-neutral-100 flex flex-col relative overflow-hidden font-sans selection:bg-[#10B981] selection:text-black scroll-smooth">
        {/* Side Ribbon Badge (Inspired by Reference Images) */}
        <LeftRibbonBadge />

        {/* Global Floating Header */}
        <Navbar />

        {/* ─────────────────────────────────────────────────────────────
            SECTION 1: HERO (#home)
        ───────────────────────────────────────────────────────────── */}
        <section
          id="home"
          className="relative pt-32 pb-24 px-6 lg:px-12 flex flex-col items-center justify-center min-h-screen scroll-mt-24"
        >
       

        <CapabilitiesTicker />

        </section>

        {/* Ticker Banner */}

        {/* ─────────────────────────────────────────────────────────────
            SECTION 2: SERVICES & INTERACTIVE RADAR (#services)
            (Inspired by Reference Images 1, 2 & 5)
        ───────────────────────────────────────────────────────────── */}
        <section id="services" className="scroll-mt-24">
          <InteractiveOrbitRadar />

          <div className="py-24 px-6 lg:px-12 bg-black border-b border-neutral-900">
            <div className="max-w-7xl mx-auto space-y-16">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <Square />
                  <span className="text-[#10B981] font-semibold uppercase">Engineered Solutions</span>
                </div>

                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                  Capabilities Built For <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-purple-400 bg-clip-text text-transparent">
                    Mission-Critical Scale.
                  </span>
                </h2>

                <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                  Explore our core software pillars designed to handle extreme transaction loads and complex autonomous AI orchestrations.
                </p>
              </div>

              {/* Pillars List */}
              <div className="space-y-8">
                {SERVICES_PILLARS.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <motion.div
                      key={pillar.id}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="p-8 sm:p-10 rounded-3xl bg-neutral-950/80 border border-neutral-800/90 hover:border-[#10B981]/50 transition-colors backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                    >
                      <div className="lg:col-span-7 space-y-4">
                        <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981]">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">{pillar.title}</h3>
                        <p className="text-xs font-mono uppercase tracking-wider text-[#10B981] font-semibold">
                          {pillar.subtitle}
                        </p>
                        <p className="text-neutral-400 text-sm leading-relaxed">{pillar.description}</p>
                        <div className="pt-2">
                          <button
                            onClick={() => scrollToSection("contact")}
                            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#10B981] text-black font-bold text-xs hover:bg-[#059669] hover:text-white transition-all cursor-pointer"
                          >
                            <span>Request Solution Brief</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      </div>

                      <div className="lg:col-span-5 p-6 rounded-2xl bg-neutral-900/80 border border-neutral-800 space-y-3">
                        <h4 className="text-xs font-semibold text-neutral-300 uppercase tracking-wider font-mono">
                          Capability Specifications
                        </h4>
                        <ul className="space-y-2.5">
                          {pillar.features.map((feat, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                              <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Delivery Methodology */}
              <div className="space-y-10 pt-12 border-t border-neutral-900">
                <div className="text-center max-w-2xl mx-auto space-y-2">
                  <h3 className="text-3xl font-bold text-white">Our Delivery Methodology</h3>
                  <p className="text-neutral-400 text-sm">
                    How Zynexis takes complex engineering requirements from concept to production.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {DELIVERY_WORKFLOW.map((item, idx) => (
                    <motion.div
                      key={item.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                      className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3 relative overflow-hidden"
                    >
                      <span className="text-3xl font-mono font-extrabold text-[#10B981]/70">{item.step}</span>
                      <h4 className="text-base font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            BOLD MANIFESTO BLOCK (Inspired by Reference Image 3)
        ───────────────────────────────────────────────────────────── */}
        <BoldManifestoSection />

        {/* ─────────────────────────────────────────────────────────────
            SECTION 3: CASE STUDIES & WORK (#work)
        ───────────────────────────────────────────────────────────── */}
        <section id="work" className="py-24 px-6 lg:px-12 bg-black border-b border-neutral-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Bento Grid Featured Architectures */}
            <BentoGrid />

            {/* Case Studies Section with Category Filters */}
            <div className="space-y-10 pt-12 border-t border-neutral-900">
              <div className="text-center max-w-3xl mx-auto space-y-4">
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                  <Square />
                  <span className="text-[#10B981] font-semibold uppercase">Case Studies & Work</span>
                </div>

                <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
                  Engineered For <br />
                  <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-purple-400 bg-clip-text text-transparent">
                    Measurable Impact.
                  </span>
                </h2>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-2">
                {["All", "AI & ML", "Fintech", "Cloud", "Enterprise SaaS"].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedWorkCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      selectedWorkCategory === cat
                        ? "bg-[#10B981] text-black border-[#10B981] font-bold shadow-[0_0_15px_rgba(16,185,129,0.25)]"
                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Case Studies Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredCaseStudies.map((project, idx) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.1 }}
                    className="group p-8 rounded-3xl bg-neutral-950/80 border border-neutral-800/90 hover:border-[#10B981]/50 transition-all duration-300 flex flex-col justify-between space-y-6 backdrop-blur-md"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-3 py-1 rounded-full font-semibold">
                          {project.category}
                        </span>
                        <span className="text-xs text-neutral-400">{project.client}</span>
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-[#10B981] transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
                        {project.description}
                      </p>

                      <div className="p-4 rounded-xl bg-neutral-900/90 border border-neutral-800 space-y-1">
                        <p className="text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" /> {project.impact}
                        </p>
                        <p className="text-[11px] text-[#10B981] font-mono font-medium pl-5">
                          Key Benchmark: {project.metrics}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between gap-4">
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono px-2 py-0.5 rounded bg-neutral-900 text-neutral-300 border border-neutral-800"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => scrollToSection("contact")}
                        className="shrink-0 w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:bg-[#10B981] group-hover:text-black group-hover:border-[#10B981] transition-colors cursor-pointer"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Agency Products Slider */}
            <ProductsSlider />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 4: COMPANY & ABOUT (#company)
        ───────────────────────────────────────────────────────────── */}
        <section id="company" className="py-24 px-6 lg:px-12 bg-black border-b border-neutral-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-16">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                <Square />
                <span className="text-[#10B981] font-semibold uppercase">Our Identity & Mission</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Engineered To Set <br />
                <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-purple-400 bg-clip-text text-transparent">
                  The Industry Standard.
                </span>
              </h2>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Zynexis Technologies was founded on a simple conviction: enterprise software shouldn't be bloated, slow, or insecure. We engineer modern systems that perform flawlessly under pressure.
              </p>
            </div>

            {/* Philosophy Grid */}
            <div className="space-y-8">
              <div className="text-center max-w-xl mx-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Our Engineering Philosophy</h3>
                <p className="text-neutral-400 text-xs sm:text-sm mt-1">
                  The foundational pillars guiding every project we deliver.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {COMPANY_VALUES.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800/90 space-y-3 backdrop-blur-md hover:border-[#10B981]/40 transition-colors"
                    >
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white">{v.title}</h4>
                      <p className="text-xs text-neutral-400 leading-relaxed">{v.desc}</p>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Leadership Grid */}
            <div className="space-y-10 pt-12 border-t border-neutral-900">
              <div className="text-center max-w-xl mx-auto space-y-2">
                <h3 className="text-2xl sm:text-3xl font-bold text-white">Technical Leadership</h3>
                <p className="text-neutral-400 text-xs sm:text-sm">
                  Led by seasoned architects and researchers in computer science and cloud infrastructure.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {LEADERSHIP.map((person, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800 space-y-3">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-[#10B981] flex items-center justify-center font-bold text-base font-mono">
                      {person.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">{person.name}</h4>
                      <p className="text-xs font-mono text-[#10B981] font-semibold">{person.role}</p>
                    </div>
                    <p className="text-xs text-neutral-400 leading-relaxed pt-2 border-t border-neutral-800">
                      {person.bio}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Bento */}
            <StatsBento />
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 5: KNOWLEDGE HUB & RESOURCES (#resources)
        ───────────────────────────────────────────────────────────── */}
        <section id="resources" className="py-24 px-6 lg:px-12 bg-black border-b border-neutral-900 scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-12">
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                <Square />
                <span className="text-[#10B981] font-semibold uppercase">Knowledge Hub</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Technical Insights & <br />
                <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-purple-400 bg-clip-text text-transparent">
                  Architecture Blueprints.
                </span>
              </h2>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Deep-dive technical articles, system benchmarks, security whitepapers, and cloud architecture guides from the Zynexis engineering team.
              </p>
            </div>

            {/* Search & Category Filter */}
            <div className="max-w-3xl mx-auto space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search architecture guides, whitepapers, or benchmarks..."
                  value={resourceSearch}
                  onChange={(e) => setResourceSearch(e.target.value)}
                  className="w-full px-5 py-3.5 pl-12 rounded-2xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#10B981] transition-all"
                />
                <Search className="w-5 h-5 text-neutral-500 absolute left-4 top-4" />
              </div>

              <div className="flex flex-wrap items-center justify-center gap-2">
                {["All", "Agentic AI", "Distributed Cloud", "Security", "System Design"].map((tag) => (
                  <button
                    key={tag}
                    onClick={() => setSelectedResourceTag(tag)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold border transition-all cursor-pointer ${
                      selectedResourceTag === tag
                        ? "bg-[#10B981] text-black border-[#10B981] font-bold"
                        : "bg-neutral-900 text-neutral-400 border-neutral-800 hover:border-neutral-700"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Resource Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredResources.map((res) => (
                <article
                  key={res.id}
                  className="group p-8 rounded-3xl bg-neutral-950/80 border border-neutral-800/90 hover:border-[#10B981]/40 transition-all duration-300 backdrop-blur-md flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] uppercase font-mono tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2.5 py-0.5 rounded-full font-semibold">
                        {res.type}
                      </span>
                      <div className="flex items-center gap-3 text-[11px] text-neutral-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#10B981]" /> {res.readTime}
                        </span>
                        <span>{res.date}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-[#10B981] transition-colors leading-snug">
                      {res.title}
                    </h3>

                    <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">{res.summary}</p>
                  </div>

                  <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                    <span className="text-xs text-neutral-400 font-medium">By {res.author}</span>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#10B981] hover:underline cursor-pointer"
                    >
                      <span>Read Document</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ─────────────────────────────────────────────────────────────
            SECTION 6: CONTACT & DISCOVERY (#contact)
        ───────────────────────────────────────────────────────────── */}
        <section id="contact" className="py-24 px-6 lg:px-12 bg-black scroll-mt-24">
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-mono text-neutral-300">
                <Square />
                <span className="text-[#10B981] font-semibold uppercase">Start A Conversation</span>
              </div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Let's Engineer <br />
                <span className="bg-gradient-to-r from-emerald-400 via-[#10B981] to-purple-400 bg-clip-text text-transparent">
                  Something Extraordinary.
                </span>
              </h2>

              <p className="text-neutral-400 text-base sm:text-lg leading-relaxed">
                Have a complex project requirement or looking to scale your infrastructure? Connect directly with our lead architects and engineering experts.
              </p>
            </div>

            {/* Form + Info Card Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
              <div className="lg:col-span-5">
                <ContactInfoCard />
              </div>
            </div>

            {/* FAQ Accordion */}
            <div className="pt-8 border-t border-neutral-900">
              <FaqSection />
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <PartnerLogos />

        {/* CTA Banner */}
        <CtaBanner />

        {/* Global Footer */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
