"use client";

import Link from "next/link";
import { useGlobalColor } from "@/hooks/useGlobalColor";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { motion, MotionProps } from "framer-motion";

export interface CopyrightBarProps extends MotionProps {
  className?: string;
}

export default function CopyrightBar({ className = "", ...motionProps }: CopyrightBarProps) {
  const { currentColor } = useGlobalColor();

  return (
    <motion.div
      className={`border-t border-neutral-900/90 pt-4 pb-2 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-400 font-mono gap-3 w-full ${className}`}
      {...motionProps}
    >
      <p>© gravity 2026 — created with passion, experience & AI.</p>
      
      <div className="flex items-center gap-6">
        <span className="hidden md:block text-neutral-500 hover:text-neutral-300 transition-colors cursor-pointer">
          Impressum & Datenschutz
        </span>

        <div className="flex items-center gap-4">
          <Link
            href="https://www.linkedin.com/in/isourabh99/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="LinkedIn"
          >
            <FaLinkedinIn className="w-4 h-4" style={{ color: currentColor }} />
          </Link>
          <Link
            href="https://instagram.com/isaurabh_99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="Instagram"
          >
            <FaInstagram className="w-4 h-4" style={{ color: currentColor }} />
          </Link>
          <Link
            href="https://github.com/isourabh99"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors"
            title="GitHub"
          >
            <FaGithub className="w-4 h-4" style={{ color: currentColor }} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
