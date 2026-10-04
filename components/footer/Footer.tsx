"use client";

import GravityLogo from "@/components/logo/GravityLogo";
import Link from "next/link";
import { useGlobalColor } from "@/hooks/useGlobalColor";
import CopyrightBar from "@/components/ui/CopyrightBar";
import CtaButton from "@/components/ui/CtaButton";

export default function Footer() {
  const { currentColor } = useGlobalColor();

  return (
    <footer className="border-t border-neutral-800 bg-black text-neutral-300 pt-24 pb-6 px-6 lg:px-14 select-none transition-colors duration-300 h-screen min-h-[650px] flex flex-col justify-between">
      <div className="max-w-8xl mx-auto w-full flex flex-col justify-between flex-1 space-y-8">

        {/* Top Row: Giant Logo */}
        <div className="w-full text-left overflow-visible py-2 border-b border-neutral-900 pb-6">
          <GravityLogo showLink={true} textSize="text-5xl sm:text-7xl lg:text-[8.5rem]" />
        </div>

        {/* Middle Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pt-2 items-start">
          
          {/* Left Column: Agency Bio + Newsletter (No Outline, Left Bottom Position) */}
          <div className="lg:col-span-5 space-y-6">
            <p className="text-xs text-neutral-400 leading-relaxed max-w-md">
              Gravity Studios is a premier IT agency & software engineering studio. We build custom Web & Mobile Applications, Enterprise CRM/ERP Systems, E-Commerce platforms, and AI-driven solutions tailored for modern businesses.
            </p>

            {/* Newsletter Section without Outline Box */}
            <div className="space-y-3 max-w-md">
              <h4
                className="text-xs font-mono font-bold uppercase tracking-widest transition-colors duration-500"
                style={{ color: currentColor }}
              >
                NEWSLETTER
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed">
                Subscribe to get the latest insights on software engineering, AI, and digital product design.
              </p>
              
              {/* Input Bar with Embedded Button Inside */}
              <form onSubmit={(e) => e.preventDefault()} className="pt-1">
                <div className="relative flex items-center w-full rounded-full bg-neutral-900/90 border border-neutral-800/80 p-1.5 focus-within:border-neutral-700 transition-colors">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full bg-transparent px-4 py-2 text-xs text-white placeholder-neutral-500 focus:outline-none"
                  />
                  <CtaButton
                    type="submit"
                    variant="primary"
                    shape="pill"
                    className="py-2 px-5 text-xs shrink-0 font-bold"
                  >
                    Join
                  </CtaButton>
                </div>
              </form>
            </div>
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

          {/* Studio Contact */}
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
                  Gravity Mall 3rd Floor Badi Bamhori Indore<br />
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Copyright Bar at the very end */}
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
