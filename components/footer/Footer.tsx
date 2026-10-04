"use client";

import GravityLogo from "@/components/logo/GravityLogo";
import Link from "next/link";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { useGlobalColor } from "@/hooks/useGlobalColor";
import CopyrightBar from "@/components/ui/CopyrightBar";
import CtaButton from "@/components/ui/CtaButton";

export default function Footer() {
  const { currentColor } = useGlobalColor();

  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-300 pt-24 pb-6 px-6 lg:px-14 select-none transition-colors duration-300 h-screen min-h-[650px] flex flex-col justify-between">
      <div className="max-w-8xl mx-auto w-full flex flex-col justify-between flex-1 space-y-8">

        {/* Top Row: Giant Logo (Left) + Newsletter Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-neutral-900 pb-6">
          {/* Giant Watermark Brand Logo */}
          <div className="lg:col-span-7 w-full text-left overflow-visible py-2">
            <GravityLogo showLink={true} textSize="text-5xl sm:text-7xl lg:text-[7.5rem]" />
          </div>

          {/* Newsletter Box to the Right of Giant Logo */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/90 space-y-4 backdrop-blur-md">
            <h4
              className="text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500"
              style={{ color: currentColor }}
            >
              NEWSLETTER
            </h4>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Subscribe to get the latest insights on software engineering, AI, and digital product design.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2 pt-1">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 rounded-xl bg-neutral-900 border border-neutral-800 text-xs text-white placeholder-neutral-500 focus:outline-none focus:border-neutral-700 transition-colors"
              />
              <CtaButton
                type="submit"
                variant="primary" shape="pill"
                className="py-2 px-4 shrink-0"
              >
                Join
              </CtaButton>
            </form>
          </div>
        </div>

        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-4 items-start">
          {/* Left Column: Logo + Agency Bio */}
          <div className="lg:col-span-5 space-y-4">
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              Gravity Studios is a premier IT agency & software engineering studio. We build custom Web & Mobile Applications, Enterprise CRM/ERP Systems, E-Commerce platforms, and AI-driven solutions tailored for modern businesses.
            </p>
          </div>

          {/* Services / Capabilities */}
          <div className="lg:col-span-3 space-y-3">
            <h4
              className="text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500"
              style={{ color: currentColor }}
            >
              OUR SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li className="hover:text-white transition-colors cursor-pointer">Web & Mobile Apps</li>
              <li className="hover:text-white transition-colors cursor-pointer">Custom CRM & ERP Systems</li>
              <li className="hover:text-white transition-colors cursor-pointer">E-Commerce Platforms</li>
              <li className="hover:text-white transition-colors cursor-pointer">AI & Automation</li>
              <li className="hover:text-white transition-colors cursor-pointer">Cloud Architecture & DevOps</li>
            </ul>
          </div>

          {/* Studio Contact & Social Links */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-3">
              <h4
                className="text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500"
                style={{ color: currentColor }}
              >
                STUDIO CONTACT
              </h4>
              <div className="space-y-2 text-xs text-neutral-400 leading-relaxed">
                <p>
                  <strong className="text-white">Direct Line:</strong>{" "}
                  <span className="font-mono transition-colors duration-500" style={{ color: currentColor }}>
                    +91 8871795472
                  </span>
                </p>
                <p>
                  <strong className="text-white">Email:</strong>{" "}
                  <a
                    href="mailto:isourabhsoni99@gmail.com"
                    className="hover:underline font-mono transition-colors duration-500"
                    style={{ color: currentColor }}
                  >
                    isourabhsoni99@gmail.com
                  </a>
                </p>
                <p className="text-[11px] text-neutral-500 pt-1">
                  Gravity Mall 3rd Floor<br />Badi Bamhori Indore
                </p>
              </div>
            </div>

            {/* Social Links Row with Title */}
            <div className="space-y-2 pt-2 border-t border-neutral-900">
              <h4
                className="text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500"
                style={{ color: currentColor }}
              >
                CONNECT WITH US
              </h4>
              <div className="flex items-center gap-4 pt-1">
                <Link
                  href="https://instagram.com/isaurabh_99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:opacity-80 transition-colors"
                  title="Instagram"
                >
                  <FaInstagram className="w-5 h-5" style={{ color: currentColor }} />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/isourabh99/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:opacity-80 transition-colors"
                  title="LinkedIn"
                >
                  <FaLinkedinIn className="w-5 h-5" style={{ color: currentColor }} />
                </Link>
                <Link
                  href="https://github.com/isourabh99"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-neutral-400 hover:opacity-80 transition-colors"
                  title="GitHub"
                >
                  <FaGithub className="w-5 h-5" style={{ color: currentColor }} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar at the very end (Fades in smoothly when scrolling into Footer) */}
        <CopyrightBar
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mt-auto"
        />

      </div>
    </footer>
  );
}
