"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@$%&*+=/<>[]";

// Text matching Screenshot 1 (Studio Information)
const STUDIO_LINES = [
  "Gravity, brand & web studio",
  "Identity, websites, real-time 3D",
  "Based in India, working worldwide",
];

// Text matching Screenshot 2 (Telemetry & Assistant Unit)
const TELEMETRY_LINES = [
  "Waking up the assistant unit...",
  "Turbine spinning up",
  "Screen and optics calibrated",
  "Assistant online.",
];

// Helper: Forward scramble (reveals text single letter by letter from start to end)
function scrambleForward(target: string, progress: number): string {
  if (progress <= 0) return "";
  if (progress >= 1) return target;
  const len = target.length;
  const revealedCount = Math.floor(progress * len);
  let out = "";
  for (let i = 0; i < len; i++) {
    const ch = target[i];
    if (ch === " " || ch === "\n") {
      out += ch;
    } else if (i < revealedCount) {
      out += ch;
    } else {
      out += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
  }
  return out;
}

// Helper: Reverse scramble from last letter towards starting (end to start) and fade out
function scrambleFromEndToStart(target: string, progress: number): string {
  if (progress <= 0) return target;
  const len = target.length;
  // scrambleIndex decreases from len down to 0 as progress goes 0 -> 1
  const scrambleIndex = Math.max(0, Math.floor((1 - progress) * len));

  let out = "";
  for (let i = 0; i < len; i++) {
    const ch = target[i];
    if (ch === " " || ch === "\n") {
      out += ch;
    } else if (i < scrambleIndex) {
      // Still original clean text
      out += ch;
    } else {
      // Scrambled glyphs from the last letter towards starting
      out += CHARS[Math.floor(Math.random() * CHARS.length)];
    }
  }
  return out;
}

export interface UniversalLoaderProps {
  pathname?: string;
  isHomeReload?: boolean;
  onComplete?: () => void;
}

export default function UniversalLoader({
  pathname = "/",
  isHomeReload = false,
  onComplete,
}: UniversalLoaderProps) {
  const [isExiting, setIsExiting] = useState(false);

  // Direct DOM references to eliminate ANY React state re-render lag or stutter
  const redirectTextRef = useRef<HTMLParagraphElement>(null);
  const redirectWrapperRef = useRef<HTMLDivElement>(null);

  const studioLinesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const studioWrapperRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  const homeTagRef = useRef<HTMLDivElement>(null);
  const telemetryLinesRef = useRef<(HTMLParagraphElement | null)[]>([]);
  const telemetryWrapperRef = useRef<HTMLDivElement>(null);

  // Paragraph text tailored to the destination page
  let targetParagraph =
    "Gravity — The Benchmark of Innovation. We build premium web experiences, real-time 3D, and digital products for the world's most ambitious tech companies.";

  if (pathname && (pathname.includes("enquire") || pathname.includes("contact"))) {
    targetParagraph =
      "We're always up for discussing a new project. Tell us about your goals, scope, and timeline. Connecting you directly with our design and engineering team.";
  }

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    let lastTick = 0;

    if (isHomeReload) {
      /* ==============================================================
         SCENARIO A: HOMEPAGE RELOAD SEQUENCE (MATCHES SCREENSHOTS 1 & 2)
         1. 0 - 500ms: Logo with wave ripple in center
         2. 500 - 1200ms: Studio lines appear scrambled above logo
         3. 1200 - 1850ms: Studio lines reverse scramble & dissolve
         4. 1850 - 2050ms: Hide logo
         5. 2050 - 2700ms: "Open the home page" tag + bottom-right telemetry lines appear scrambled
         6. 2700 - 3250ms: Bottom-right telemetry reverse scramble & dissolve
         Exit -> Homepage reveals!
      ============================================================== */
      const animateHome = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        const shouldTick = timestamp - lastTick > 24;
        if (shouldTick) lastTick = timestamp;

        // Step 1 & 4: Logo & Studio container visibility (Screenshot 1)
        if (elapsed < 1850) {
          if (logoWrapperRef.current) {
            logoWrapperRef.current.style.opacity = "1";
            logoWrapperRef.current.style.transform = "scale(1)";
          }
        } else {
          // Step 4: Hide logo
          if (logoWrapperRef.current) {
            logoWrapperRef.current.style.opacity = "0";
            logoWrapperRef.current.style.transform = "scale(0.92)";
          }
        }

        // Step 2 & 3: Studio lines
        if (elapsed < 450) {
          STUDIO_LINES.forEach((_, idx) => {
            if (studioLinesRef.current[idx]) {
              studioLinesRef.current[idx]!.textContent = "";
            }
          });
          if (studioWrapperRef.current) studioWrapperRef.current.style.opacity = "0";
        } else if (elapsed < 1200) {
          // Step 2: Studio lines appear scrambled
          const p = Math.min(1, (elapsed - 450) / 750);
          if (shouldTick) {
            STUDIO_LINES.forEach((line, idx) => {
              if (studioLinesRef.current[idx]) {
                studioLinesRef.current[idx]!.textContent = scrambleForward(line, p);
              }
            });
          }
          if (studioWrapperRef.current) studioWrapperRef.current.style.opacity = "1";
        } else if (elapsed < 1850) {
          // Step 3: Studio lines reverse scramble (from last letter towards starting)
          const p = Math.min(1, (elapsed - 1200) / 650);
          if (shouldTick) {
            STUDIO_LINES.forEach((line, idx) => {
              if (studioLinesRef.current[idx]) {
                studioLinesRef.current[idx]!.textContent = scrambleFromEndToStart(line, p);
              }
            });
          }
          if (studioWrapperRef.current) {
            studioWrapperRef.current.style.opacity = String(Math.max(0, 1 - p * 1.2));
          }
        } else {
          if (studioWrapperRef.current) studioWrapperRef.current.style.opacity = "0";
        }

        // Step 5 & 6: Top-left tag & Bottom-right telemetry (Screenshot 2)
        if (elapsed < 2050) {
          if (homeTagRef.current) homeTagRef.current.style.opacity = "0";
          if (telemetryWrapperRef.current) telemetryWrapperRef.current.style.opacity = "0";
        } else if (elapsed < 2700) {
          // Step 5: Appear scrambled (single letter forward way)
          const p = Math.min(1, (elapsed - 2050) / 650);
          if (homeTagRef.current) homeTagRef.current.style.opacity = "1";
          if (telemetryWrapperRef.current) telemetryWrapperRef.current.style.opacity = "1";
          if (shouldTick) {
            TELEMETRY_LINES.forEach((line, idx) => {
              if (telemetryLinesRef.current[idx]) {
                telemetryLinesRef.current[idx]!.textContent = scrambleForward(line, p);
              }
            });
          }
        } else if (elapsed < 3250) {
          // Step 6: Reverse scramble (from last letter towards starting)
          const p = Math.min(1, (elapsed - 2700) / 550);
          if (homeTagRef.current) {
            homeTagRef.current.style.opacity = String(Math.max(0, 1 - p * 1.5));
          }
          if (telemetryWrapperRef.current) {
            telemetryWrapperRef.current.style.opacity = String(Math.max(0, 1 - p * 1.2));
          }
          if (shouldTick) {
            TELEMETRY_LINES.forEach((line, idx) => {
              if (telemetryLinesRef.current[idx]) {
                telemetryLinesRef.current[idx]!.textContent = scrambleFromEndToStart(line, p);
              }
            });
          }
        } else {
          if (homeTagRef.current) homeTagRef.current.style.opacity = "0";
          if (telemetryWrapperRef.current) telemetryWrapperRef.current.style.opacity = "0";
        }

        if (elapsed < 3300) {
          animId = requestAnimationFrame(animateHome);
        } else {
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
        }
      };

      animId = requestAnimationFrame(animateHome);
    } else {
      /* ==============================================================
         SCENARIO B: PAGE REDIRECT / ROUTE TRANSITION SEQUENCE
         Continuous per-frame direct DOM text animation:
         - Letter-by-letter progressive reveal (0 to 1050ms)
         - Steady readability hold (1050 to 1300ms)
         - Last letter to starting reverse scramble & fade out (1300 to 1900ms)
         - Clean exit & target page reveal (1900 to 2200ms)
      ============================================================== */
      const animateRedirect = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const elapsed = timestamp - startTime;

        if (elapsed < 1050) {
          // 1: Text appears scrambled — single letter by letter forward progressive reveal
          const p = Math.min(1, elapsed / 1050);
          if (redirectTextRef.current) {
            redirectTextRef.current.textContent = scrambleForward(targetParagraph, p);
          }
          if (redirectWrapperRef.current) {
            redirectWrapperRef.current.style.opacity = "1";
          }
        } else if (elapsed < 1300) {
          // Hold full readable text
          if (redirectTextRef.current) {
            redirectTextRef.current.textContent = targetParagraph;
          }
          if (redirectWrapperRef.current) {
            redirectWrapperRef.current.style.opacity = "1";
          }
        } else if (elapsed < 1900) {
          // 2: Reverse scrambled text — from last letter towards starting, scramble & fade out
          const p = Math.min(1, (elapsed - 1300) / 600);
          if (redirectTextRef.current) {
            redirectTextRef.current.textContent = scrambleFromEndToStart(targetParagraph, p);
          }
          if (redirectWrapperRef.current) {
            redirectWrapperRef.current.style.opacity = String(Math.max(0, 1 - p * 1.25));
          }
        } else {
          if (redirectTextRef.current) {
            redirectTextRef.current.textContent = "";
          }
          if (redirectWrapperRef.current) {
            redirectWrapperRef.current.style.opacity = "0";
          }
        }

        if (elapsed < 1950) {
          animId = requestAnimationFrame(animateRedirect);
        } else {
          // 3: Page open
          setIsExiting(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 300);
        }
      };

      animId = requestAnimationFrame(animateRedirect);
    }

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isHomeReload, targetParagraph, onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="fixed inset-0 z-[99999] bg-black text-white flex items-center justify-center p-6 sm:p-12 select-none overflow-hidden"
        >
          {/* Keyframe styles for the logo wave ripple animation */}
          <style jsx>{`
            @keyframes logoWaveRipple {
              0%, 100% {
                transform: translateY(0px);
                opacity: 0.85;
              }
              50% {
                transform: translateY(-4px);
                opacity: 1;
              }
            }
          `}</style>

          {isHomeReload ? (
            <>
              {/* Screenshot 1 Phase: Studio Lines & Logo positioned in center */}
              <div
                ref={studioWrapperRef}
                className="relative z-10 flex flex-col items-center justify-center pointer-events-none transition-opacity duration-300"
                style={{ opacity: 0 }}
              >
                <div className="flex flex-col space-y-1 sm:space-y-1.5 text-left">
                  {STUDIO_LINES.map((_, idx) => (
                    <p
                      key={idx}
                      ref={(el) => {
                        studioLinesRef.current[idx] = el;
                      }}
                      className="font-mg12-regular text-sm sm:text-base md:text-lg text-neutral-200 tracking-wide leading-relaxed min-h-[1.5rem]"
                    />
                  ))}

                  {/* Logo with wave ripple below the lines */}
                  <div
                    ref={logoWrapperRef}
                    className="pt-6 sm:pt-8 flex items-center justify-center transition-all duration-300"
                    style={{ opacity: 0 }}
                  >
                    <div className="inline-flex items-center space-x-[2px] sm:space-x-1 select-none py-1">
                      {"gravity".split("").map((letter, idx) => (
                        <span
                          key={idx}
                          className="font-mg12-regular text-base sm:text-lg md:text-xl font-normal text-white inline-block"
                          style={{
                            animation: "logoWaveRipple 1.6s ease-in-out infinite",
                            animationDelay: `${idx * 0.12}s`,
                          }}
                        >
                          {letter}
                        </span>
                      ))}
                      <span className="text-[11px] text-neutral-400 -mt-2 ml-0.5 font-sans">™</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Screenshot 2 Phase: Top-Left "Open the home page" badge */}
              <div
                ref={homeTagRef}
                className="absolute top-6 left-6 sm:top-8 sm:left-8 z-20 pointer-events-none transition-opacity duration-300"
                style={{ opacity: 0 }}
              >
                <div className="border border-neutral-700/80 bg-neutral-900/60 px-3 py-1 text-xs font-mono text-neutral-300 rounded-sm shadow-sm backdrop-blur-sm">
                  Open the home page
                </div>
              </div>

              {/* Screenshot 2 Phase: Bottom-Right Telemetry Lines (Right-Aligned) */}
              <div
                ref={telemetryWrapperRef}
                className="absolute right-8 bottom-12 sm:right-16 sm:bottom-20 md:right-24 md:bottom-24 z-20 pointer-events-none text-right flex flex-col items-end space-y-1 sm:space-y-1.5 transition-opacity duration-300"
                style={{ opacity: 0 }}
              >
                {TELEMETRY_LINES.map((_, idx) => (
                  <p
                    key={idx}
                    ref={(el) => {
                      telemetryLinesRef.current[idx] = el;
                    }}
                    className="font-mg12-regular text-sm sm:text-base md:text-lg text-neutral-200 tracking-wide leading-relaxed min-h-[1.5rem]"
                  />
                ))}
              </div>
            </>
          ) : (
            /* Scenario B: Redirect Mode - Centered Scrambled Paragraph */
            <div
              ref={redirectWrapperRef}
              className="max-w-2xl sm:max-w-3xl text-center px-4 transition-opacity duration-200"
              style={{ opacity: 1 }}
            >
              <p
                ref={redirectTextRef}
                className="font-mg12-regular text-base sm:text-xl md:text-2xl text-neutral-200 leading-relaxed tracking-tight"
              />
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
