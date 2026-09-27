"use client";

export default function PartnerLogos() {
  const logos = ["Nagarro", "Amazon AWS", "Walmart Global", "TCS Enterprise", "Microsoft Azure", "Google Cloud"];

  return (
    <section className="py-16 px-6 border-y border-neutral-800/80 bg-black overflow-hidden select-none">
      <div className="max-w-7xl mx-auto space-y-6 text-center">
        <p className="text-[11px] font-mono uppercase tracking-widest text-neutral-500">
          Trusted By Technology Leaders & Enterprise Partners
        </p>
        <div className="flex flex-wrap items-center justify-around gap-8 sm:gap-12 opacity-60 hover:opacity-100 transition-opacity">
          {logos.map((logo, index) => (
            <span
              key={index}
              className="text-lg sm:text-2xl font-black tracking-wider text-neutral-400 hover:text-[#10B981] transition-colors font-mono uppercase"
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
