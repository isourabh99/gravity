"use client";

import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, Clock, ShieldCheck, Copy, Check } from "lucide-react";
import Square from "@/components/square/Square";

interface Location {
  city: string;
  country: string;
  address: string;
  timezone: string;
  tag: string;
}

const LOCATIONS: Location[] = [
  {
    city: "San Francisco",
    country: "United States",
    address: "500 Howard Street, Suite 400",
    timezone: "America/Los_Angeles",
    tag: "Global HQ",
  },
  {
    city: "London",
    country: "United Kingdom",
    address: "25 Old Broad Street, City of London",
    timezone: "Europe/London",
    tag: "EMEA HQ",
  },
  {
    city: "Tokyo",
    country: "Japan",
    address: "Roppongi Hills Mori Tower, Minato",
    timezone: "Asia/Tokyo",
    tag: "APAC Region",
  },
];

export default function ContactInfoCard() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [times, setTimes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: { [key: string]: string } = {};
      LOCATIONS.forEach((loc) => {
        try {
          const formatted = new Intl.DateTimeFormat("en-US", {
            timeZone: loc.timezone,
            hour: "2-digit",
            minute: "2-digit",
            hour12: true,
          }).format(new Date());
          newTimes[loc.city] = formatted;
        } catch {
          newTimes[loc.city] = "--:--";
        }
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = (email: string) => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Availability Status Badge */}
      <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 backdrop-blur-md flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-[#10B981]"></span>
          </span>
          <div>
            <p className="text-sm font-medium text-white">Engineering & Sales Team Online</p>
            <p className="text-xs text-neutral-400">Typical response time: <span className="text-[#10B981] font-semibold">Under 2 hours</span></p>
          </div>
        </div>
        <div className="hidden sm:block">
          <Square />
        </div>
      </div>

      {/* Main Direct Channels */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Email Card */}
        <div className="group relative p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-[#10B981]/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981]">
              <Mail className="w-5 h-5" />
            </div>
            <button
              onClick={() => handleCopyEmail("hello@zynexis.tech")}
              className="text-xs text-neutral-400 hover:text-[#10B981] flex items-center gap-1 transition-colors bg-neutral-900 hover:bg-neutral-800 px-2.5 py-1 rounded-lg border border-neutral-800"
              title="Copy Email"
            >
              {copiedEmail ? <Check className="w-3.5 h-3.5 text-[#10B981]" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copiedEmail ? "Copied" : "Copy"}</span>
            </button>
          </div>
          <p className="text-xs text-neutral-400 font-mono font-medium uppercase tracking-wider">Direct Email</p>
          <a
            href="mailto:hello@zynexis.tech"
            className="text-base font-semibold text-white hover:text-[#10B981] transition-colors mt-1 block truncate"
          >
            hello@zynexis.tech
          </a>
          <p className="text-xs text-neutral-500 mt-1">For general & strategic inquiries</p>
        </div>

        {/* Enterprise Call Card */}
        <div className="group relative p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 hover:border-[#10B981]/50 transition-all duration-300">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981]">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/20 px-2 py-0.5 rounded-full">
              24/7 VIP
            </span>
          </div>
          <p className="text-xs text-neutral-400 font-mono font-medium uppercase tracking-wider">Enterprise Desk</p>
          <a
            href="tel:+18005559969"
            className="text-base font-semibold text-white hover:text-[#10B981] transition-colors mt-1 block"
          >
            +1 (800) 555-ZYNX
          </a>
          <p className="text-xs text-neutral-500 mt-1">Priority phone line for ongoing enterprise builds</p>
        </div>
      </div>

      {/* Global Offices with Live Clocks */}
      <div className="p-6 rounded-2xl bg-neutral-950/80 border border-neutral-800">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[#10B981]" />
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono">Global Innovation Hubs</h3>
          </div>
          <span className="text-xs text-neutral-400 flex items-center gap-1 font-mono">
            <Clock className="w-3.5 h-3.5 text-[#10B981]" /> Live Local Times
          </span>
        </div>

        <div className="space-y-3">
          {LOCATIONS.map((loc) => (
            <div
              key={loc.city}
              className="p-3.5 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-between"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold text-white">{loc.city}</span>
                  <span className="text-[10px] text-neutral-400 bg-neutral-800 px-2 py-0.5 rounded-md font-mono">
                    {loc.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 mt-0.5">{loc.address}</p>
              </div>
              <div className="text-right">
                <span className="font-mono text-sm font-semibold text-[#10B981]">
                  {times[loc.city] || "--:--"}
                </span>
                <p className="text-[10px] text-neutral-500">{loc.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Security & Confidentiality Promise */}
      <div className="p-5 rounded-2xl bg-neutral-950/80 border border-neutral-800 flex items-start gap-4">
        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
          <ShieldCheck className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Strict Enterprise Confidentiality</h4>
          <p className="text-xs text-neutral-400 mt-1 leading-relaxed">
            All discussions are protected under standard mutual non-disclosure agreements (NDAs). Your intellectual property and technical requirements remain 100% confidential.
          </p>
        </div>
      </div>
    </div>
  );
}
