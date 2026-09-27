"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: "How fast will Zynexis respond to my inquiry?",
    answer: "Our engineering and solutions team reviews incoming inquiries within 2 hours during business hours. For urgent enterprise support, our response window is under 30 minutes via priority phone channels.",
  },
  {
    question: "Do you sign NDAs prior to detailed discussions?",
    answer: "Yes, absolutely. We routinely sign standard mutual Non-Disclosure Agreements (NDAs) before discussing sensitive intellectual property, proprietary algorithms, or internal system architectures.",
  },
  {
    question: "What engagement models does Zynexis offer?",
    answer: "We offer tailored engagement structures including Dedicated Squads (full-stack engineering teams), Fixed-Scope Deliverables, and Fractional CTO / System Architecture Advisory services.",
  },
  {
    question: "What is your typical project kickoff timeline?",
    answer: "Once project scope and agreement are aligned, our engineering team can deploy and initiate architecture work within 3 to 5 business days.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="mt-20 pt-12 border-t border-neutral-800">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#10B981] text-xs font-mono mb-3 font-semibold">
          <HelpCircle className="w-3.5 h-3.5" />
          <span>Quick Answers</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-400 text-sm mt-2">
          Everything you need to know before initiating a project with Zynexis.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-3">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                isOpen
                  ? "bg-neutral-950 border-[#10B981]/50"
                  : "bg-neutral-950/60 border-neutral-800 hover:border-neutral-700"
              }`}
            >
              <button
                type="button"
                onClick={() => toggleAccordion(index)}
                className="w-full p-5 text-left flex justify-between items-center gap-4 text-white font-semibold text-sm sm:text-base focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-[#10B981] shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-neutral-400 text-xs sm:text-sm leading-relaxed border-t border-neutral-800/80 mt-1 animate-in fade-in duration-200">
                  {faq.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
