"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import GravityLogo from "@/components/logo/GravityLogo";
import Link from "next/link";

export default function Navbar() {
  const { scrollY } = useScroll();
  const blurPx = useTransform(scrollY, [0, 120], [8, 20]);
  const backdropFilter = useMotionTemplate`blur(${blurPx}px)`;

  return (
    <motion.header
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 z-50 lg:px-14 p-6 w-full"
      style={{ backdropFilter }}
    >
      <nav className="relative max-w-8xl mx-auto flex items-center justify-between">
        {/* Left: Gravity Logo with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <GravityLogo isDark={true} />
        </motion.div>

        {/* Right: Contact Link with Entrance Animation */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
        >
          <Link
            href="#contact"
            className="font-mg12-regular text-xl text-neutral-400 hover:text-white tracking-wide transition-all duration-500 cursor-pointer"
          >
            Contact
          </Link>
        </motion.div>
      </nav>
    </motion.header>
  );
}