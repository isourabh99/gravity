"use client";

import Link from "next/link";
import { useGlobalColor } from "@/hooks/useGlobalColor";
import { useScroll, useTransform } from "framer-motion";
import CopyrightBar from "@/components/ui/CopyrightBar";
import CtaButton from "@/components/ui/CtaButton";

export default function Hero() {
  const { currentColor } = useGlobalColor();
  const { scrollY } = useScroll();

  // Smoothly fade out the Hero bottom copyright bar as soon as user starts scrolling down
  const metaOpacity = useTransform(scrollY, [0, 50], [1, 0]);
  const metaY = useTransform(scrollY, [0, 50], [0, 10]);
  const pointerEvents = useTransform(scrollY, (y) => (y > 40 ? "none" : "auto"));

  return (
    <section className="relative w-full h-screen min-h-[650px] bg-black text-neutral-100 flex flex-col justify-between px-6 lg:px-14 pt-28 pb-6 select-none overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div 
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] opacity-15 pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentColor }}
      />

      {/* Main Content Container (Max-W-8xl to match Navbar) */}
      <div className="max-w-8xl mx-auto w-full flex-1 flex flex-col justify-between relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-6">
          
          {/* Left Section */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center">
            <div className="space-y-3">
              <span className="text-xs font-mono tracking-widest uppercase text-neutral-400">
                // IT AGENCY & SOFTWARE STUDIO
              </span>
              <h1
                className="font-mg12-bold text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] transition-colors duration-500 pb-2"
                style={{ color: currentColor }}
              >
                gravity studios
              </h1>
            </div>
            <p className="font-mg12-regular text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
              We craft high-performance web applications, mobile platforms, enterprise CRM & ERP systems, and custom AI solutions designed to scale modern businesses.
            </p>

            {/* CTA Action Links */}
            <div className="flex items-center gap-4 pt-2">
              <CtaButton href="#contact" variant="primary" shape="pill">
                Start a Project
              </CtaButton>
              <CtaButton href="#services" variant="outline" shape="pill">
                Explore Capabilities
              </CtaButton>
            </div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center relative">
            
            {/* Visual Graphic Accents Inspired by Reference Image (Overlapping Circles) */}
            <div className="flex items-center gap-4 py-4 relative">
              <div
                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full transition-colors duration-500 shadow-lg shrink-0"
                style={{ backgroundColor: "#E5E5E5" }}
              />
              <div
                className="w-20 h-20 sm:w-28 sm:h-28 rounded-full transition-colors duration-500 shadow-xl shrink-0"
                style={{ backgroundColor: currentColor }}
              />
              <div
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-[10px] sm:border-[14px] border-neutral-200 transition-colors duration-500 flex items-center justify-center shrink-0"
              />
            </div>

            {/* Right Section Title */}
            <div className="space-y-3">
              <h2
                className="font-mg12-bold text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] transition-colors duration-500 pb-1"
                style={{ color: currentColor }}
              >
                strategy · concept · design · engineering
              </h2>
              <p className="font-mg12-regular text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed">
                From initial architecture to full-stack deployment, our studio delivers end-to-end digital transformation with precision aesthetics and robust code.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar (Fades out immediately on scroll) */}
        <CopyrightBar style={{ opacity: metaOpacity, y: metaY, pointerEvents }} />

      </div>
    </section>
  );
}
