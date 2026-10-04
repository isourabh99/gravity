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
      className="fixed top-0 z-50 lg:px-14 p-6   w-full"
      style={{ backdropFilter }}
    >
      <nav className="relative max-w-8xl mx-auto flex items-center justify-between">
        {/* Left: Gravity Logo */}
        <GravityLogo isDark={true} />

        {/* Right: Gray Text Link (White on Hover) */}
        <Link
          href="#contact"
          className="font-mg12-regular text-xl text-neutral-400 hover:text-white tracking-wide transition-all duration-500 cursor-pointer"
        >
          Contact
        </Link>
      </nav>
    </motion.header>
  );
}