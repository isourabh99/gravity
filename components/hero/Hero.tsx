"use client";

import { useGlobalColor } from "@/hooks/useGlobalColor";
import { motion, useScroll, useTransform } from "framer-motion";
import CopyrightBar from "@/components/ui/CopyrightBar";
import CtaButton from "@/components/ui/CtaButton";
import GravityOrbits from "@/components/hero/GravityOrbits";

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
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[140px] pointer-events-none transition-colors duration-700"
        style={{ backgroundColor: currentColor }}
      />

      {/* Main Content Container (Max-W-8xl to match Navbar) */}
      <div className="max-w-8xl mx-auto w-full flex-1 flex flex-col justify-between relative z-10">
        
        {/* Main 2-Column Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center flex-1 my-auto py-6">
          
          {/* Left Section: Minimal Typography & Primary Action */}
          <div className="lg:col-span-7 space-y-5 flex flex-col justify-center">
            <div className="space-y-2">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.12,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="font-mg12-bold text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="text-white">Studio</span>{" "}
                  <span className="text-neutral-400 font-normal font-mg12-regular">crafting</span>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="transition-colors duration-500 font-bold" style={{ color: currentColor }}>Web to AI</span>{" "}
                  <span className="text-neutral-400 font-normal font-mg12-regular">systems.</span>
                </motion.div>
              </motion.h1>
            </div>

            {/* Small Tagline from Reference Image */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="font-mg12-bold text-xs sm:text-sm font-bold tracking-wider transition-colors duration-500 pt-1"
              style={{ color: currentColor }}
            >
              strategy · concept · design · engineering
            </motion.div>

            {/* Short Paragraph Description */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="font-mg12-regular text-xs sm:text-sm text-neutral-400 max-w-md leading-relaxed"
            >
              Software engineering studio building digital products end-to-end for modern businesses.
            </motion.p>

            {/* CTA Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="flex items-center gap-4 pt-1"
            >
              <CtaButton href="#contact" variant="primary" shape="pill">
                Start a Project
              </CtaButton>
              <CtaButton href="#services" variant="outline" shape="pill">
                Explore Capabilities
              </CtaButton>
            </motion.div>
          </div>

          {/* Right Section: Visual Solar Orbital Showcase with Entrance Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex items-center justify-center relative"
          >
            <GravityOrbits />
          </motion.div>

        </div>

        {/* Bottom Copyright Bar (Fades out immediately on scroll) */}
        <CopyrightBar style={{ opacity: metaOpacity, y: metaY, pointerEvents }} />

      </div>
    </section>
  );
}
