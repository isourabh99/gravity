"use client";

import Link from "next/link";
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
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.1,
                    },
                  },
                }}
                className="font-mg12-bold text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.12]"
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
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
                    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="text-neutral-400 font-normal font-mg12-regular">digital experiences</span>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="text-neutral-400 font-normal font-mg12-regular">from </span>
                  <span className="transition-colors duration-500 font-bold" style={{ color: currentColor }}>Web to AI</span>
                </motion.div>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 22, filter: "blur(6px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
                    },
                  }}
                >
                  <span className="transition-colors duration-500 font-bold" style={{ color: currentColor }}>systems.</span>
                </motion.div>
              </motion.h1>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="font-mg12-regular text-xs sm:text-sm text-neutral-400 max-w-lg leading-relaxed"
            >
              Software engineering studio building digital products end-to-end, helping teams scale experiences that work for both users and business goals.
            </motion.p>

            {/* CTA Action Links */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex items-center gap-4 pt-2"
            >
              <CtaButton href="#contact" variant="primary" shape="pill">
                Start a Project
              </CtaButton>
              <CtaButton href="#services" variant="outline" shape="pill">
                Explore Capabilities
              </CtaButton>
            </motion.div>
          </div>

          {/* Right Section */}
          <div className="lg:col-span-6 space-y-6 flex flex-col justify-center relative">
            
            {/* Visual Graphic Accents Component */}
            <GravityOrbits />

            {/* Right Section Title */}
            <div className="space-y-3">
              <motion.h2
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
                  },
                }}
                className="font-mg12-bold text-xl sm:text-2xl lg:text-3xl font-bold tracking-normal leading-snug transition-colors duration-500 pb-1 flex flex-wrap items-center gap-x-2 gap-y-1"
                style={{ color: currentColor }}
              >
                {["concept", "·", "strategy", "·", "·", "design", "·", "engineering"].map((item, index) => (
                  <motion.span
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 16, filter: "blur(4px)" },
                      visible: {
                        opacity: 1,
                        y: 0,
                        filter: "blur(0px)",
                        transition: { duration: 0.5, ease: [0.25, 1, 0.5, 1] },
                      },
                    }}
                    className={item === "·" ? "opacity-60 text-lg sm:text-xl inline-block" : "inline-block"}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="font-mg12-regular text-sm sm:text-base text-neutral-400 max-w-xl leading-relaxed"
              >
                From initial architecture to full-stack deployment, our studio delivers end-to-end digital transformation with precision aesthetics and robust code.
              </motion.p>
            </div>

          </div>

        </div>

        {/* Bottom Copyright Bar (Fades out immediately on scroll) */}
        <CopyrightBar style={{ opacity: metaOpacity, y: metaY, pointerEvents }} />

      </div>
    </section>
  );
}
