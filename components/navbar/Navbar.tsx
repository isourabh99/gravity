"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import GravityLogo from "@/components/logo/GravityLogo";

export default function Navbar() {
  const { scrollY } = useScroll();

  const blurPx = useTransform(scrollY, [0, 120], [8, 20]);
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;
  const bgOpacity = useTransform(scrollY, [0, 120], [0.75, 0.95]);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactElement = document.getElementById("contact");
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      className="fixed top-0 z-50 py-5 px-6 lg:px-12 w-full"
      style={{ backdropFilter }}
    >
      {/* Background Overlay without border */}
      <motion.div
        aria-hidden
        className="absolute inset-0 bg-black/80 pointer-events-none"
        style={{ opacity: bgOpacity }}
      />

      <nav className="relative max-w-7xl mx-auto flex items-center justify-between">
        {/* Left: Gravity Logo */}
        <GravityLogo isDark={true} />

        {/* Right: Gray Text Link (White on Hover) */}
        <a
          href="#contact"
          onClick={scrollToContact}
          className="text-neutral-400 hover:text-white text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer"
        >
          Contact
        </a>
      </nav>
    </motion.header>
  );
}