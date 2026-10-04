"use client";


import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Hero from "@/components/hero/Hero";
export default function SinglePageHome() {
  return (
      <div className="min-h-screen bg-black text-neutral-100 flex flex-col relative overflow-hidden font-sans selection:bg-[#10B981] selection:text-black scroll-smooth">
        <Navbar />
        <Hero/>
        <Footer />
      </div>
  );
}
