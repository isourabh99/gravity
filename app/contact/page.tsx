"use client";

import React, { useState, useRef, useEffect } from "react";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import CtaButton from "@/components/ui/CtaButton";

// Custom Dropdown Component matching screenshot
function CustomSelect({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="space-y-2 relative" ref={dropdownRef}>
      <label className="block text-[11px] sm:text-xs font-mono tracking-wider text-neutral-800 uppercase select-none">
        {label}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white border border-neutral-300 px-4 py-3 flex items-center justify-between text-neutral-900 font-mg12-regular text-sm rounded-none focus:outline-none focus:border-black transition-colors select-none text-left"
      >
        <span>{value}</span>
        {/* Custom Double Arrow Indicator matching screenshot */}
        <span className="text-neutral-500 text-xs">⇅</span>
      </button>

      {isOpen && (
        <ul className="absolute left-0 right-0 top-full mt-1 bg-white border border-neutral-300 shadow-xl z-50 py-1 rounded-none max-h-60 overflow-auto">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setIsOpen(false);
              }}
              className={`px-4 py-2.5 text-sm font-mg12-regular cursor-pointer transition-colors flex items-center justify-between ${
                opt === value
                  ? "bg-neutral-100 text-black font-medium"
                  : "text-neutral-700 hover:bg-neutral-50 hover:text-black"
              }`}
            >
              <span>{opt}</span>
              {opt === value && <span className="text-xs">✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// Custom Input Field with optional indicator
function CustomInputField({
  label,
  name,
  type = "text",
  value,
  onChange,
  required = false,
  optional = false,
  placeholder = "",
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  optional?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2 w-full">
      <div className="flex items-center justify-between select-none">
        <label className="text-[11px] sm:text-xs font-mono tracking-wider text-neutral-800 uppercase">
          {label}
        </label>
        {optional && (
          <span className="text-[11px] sm:text-xs font-mono tracking-wider text-neutral-400 uppercase">
            OPTIONAL
          </span>
        )}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full bg-white border border-neutral-300 px-4 py-3 text-neutral-900 font-mg12-regular text-sm rounded-none outline-none focus:border-black transition-colors"
      />
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    company: "",
    phone: "",
    projectType: "Website redesign",
    howDidYouHear: "",
    message: "",
    updatesConsent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div data-theme="light" className="min-h-screen bg-[#F9F9F7] text-neutral-900 flex flex-col font-mg12-regular select-none">
      <Navbar />

      {/* Main Content Container aligned strictly to max-w-8xl mx-auto px-6 sm:px-12 matching Navbar and Footer */}
      <main className="flex-1 max-w-8xl mx-auto w-full px-6 sm:px-12 pt-32 sm:pt-40 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* ================= LEFT COLUMN (Natural page scroll, no sticky) ================= */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-12">
            <div>
              {/* Heading */}
              <h1 className="font-mg12-regular text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.08] tracking-tight font-normal text-black">
                We&apos;re always up<br />
                for discussing<br />
                a new project.
              </h1>

              {/* Subtitle */}
              <p className="text-sm font-mg12-regular text-neutral-600 leading-relaxed max-w-md pt-6">
                For any inquiry, collaboration, or project discussion, fill out the form on the right. Our team will get back to you shortly to explore the next steps.
              </p>

              {/* Checkmark List */}
              <div className="pt-8 space-y-3.5 text-sm font-mg12-regular text-neutral-800">
                <div className="flex items-center gap-3">
                  <span className="text-xs">✓</span>
                  <span>Tell us about your project, goals and timeline</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs">✓</span>
                  <span>Get a clear scope and a first estimate</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-xs">✓</span>
                  <span>Book a call with the founder</span>
                </div>
              </div>
            </div>

            {/* Bottom Direct Contacts using Footer's real details */}
            <div className="pt-12 sm:pt-20 space-y-3.5 font-mono text-xs sm:text-[13px] text-neutral-800 tracking-wider">
              <a
                href="mailto:isourabhsoni99@gmail.com"
                className="flex items-center gap-2 hover:text-[#ED3327] transition-colors"
              >
                <span>→</span>
                <span>ISOURABHSONI99@GMAIL.COM</span>
              </a>
              <a
                href="https://wa.me/918871795472"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#ED3327] transition-colors"
              >
                <span>→</span>
                <span>WHATSAPP • +91 8871795472</span>
              </a>
              <a
                href="https://linkedin.com/in/isourabh99"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-[#ED3327] transition-colors"
              >
                <span>→</span>
                <span>LINKEDIN</span>
              </a>
            </div>
          </div>

          {/* ================= RIGHT COLUMN: FORM ================= */}
          <div className="lg:col-span-7">
            {isSubmitted ? (
              <div className="bg-white border border-neutral-300 p-8 sm:p-12 space-y-6">
                <span className="text-xs font-mono tracking-widest text-[#ED3327] uppercase">
                  MESSAGE RECEIVED
                </span>
                <h3 className="text-3xl font-mg12-regular font-normal text-black">
                  Thank you, {formData.firstName || "there"}!
                </h3>
                <p className="text-sm text-neutral-600 leading-relaxed">
                  We have received your project inquiry. Our team will review your requirements and get back to you within 24 hours.
                </p>
                <div className="pt-4">
                  <CtaButton
                    variant="brand"
                    shape="square"
                    onClick={() => setIsSubmitted(false)}
                  >
                    SEND ANOTHER MESSAGE
                  </CtaButton>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: FIRST NAME & LAST NAME */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <CustomInputField
                    label="FIRST NAME"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                  <CustomInputField
                    label="LAST NAME"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                {/* Row 2: WORK EMAIL */}
                <CustomInputField
                  label="WORK EMAIL"
                  name="workEmail"
                  type="email"
                  value={formData.workEmail}
                  onChange={handleInputChange}
                  required
                />

                {/* Row 3: COMPANY (OPTIONAL) */}
                <CustomInputField
                  label="COMPANY"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  optional
                />

                {/* Row 4: PHONE NUMBER (OPTIONAL) */}
                <CustomInputField
                  label="PHONE NUMBER"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  optional
                />

                {/* Row 5: PROJECT TYPE Custom Dropdown */}
                <CustomSelect
                  label="PROJECT TYPE"
                  value={formData.projectType}
                  onChange={(val) =>
                    setFormData((prev) => ({ ...prev, projectType: val }))
                  }
                  options={[
                    "Website redesign",
                    "New Web Application / Platform",
                    "Brand Identity & 3D Motion",
                    "Mobile Application",
                    "Full-Cycle Development",
                    "Other Consultation",
                  ]}
                />

                {/* Row 6: HOW DID YOU HEAR ABOUT US? (OPTIONAL) */}
                <CustomInputField
                  label="HOW DID YOU HEAR ABOUT US?"
                  name="howDidYouHear"
                  value={formData.howDidYouHear}
                  onChange={handleInputChange}
                  optional
                />

                {/* Row 7: MESSAGE / PROJECT DETAILS Textarea */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between select-none">
                    <label className="text-[11px] sm:text-xs font-mono tracking-wider text-neutral-800 uppercase">
                      MESSAGE
                    </label>
                  </div>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder=""
                    className="w-full bg-white border border-neutral-300 p-4 text-neutral-900 font-mg12-regular text-sm rounded-none outline-none focus:border-black transition-colors resize-y min-h-[140px]"
                  />
                </div>

                {/* Row 8: Checkbox */}
                <label className="flex items-start gap-3 cursor-pointer select-none pt-2">
                  <input
                    type="checkbox"
                    name="updatesConsent"
                    checked={formData.updatesConsent}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-0.5 border border-neutral-400 rounded-none accent-black cursor-pointer"
                  />
                  <span className="text-[11px] sm:text-xs font-mono text-neutral-800 uppercase tracking-wide leading-relaxed">
                    I&apos;D LIKE OCCASIONAL UPDATES FROM THE STUDIO (NEW PROJECTS, ARTICLES).
                  </span>
                </label>

                {/* Row 9: CTA Button (Square, text up come from down, bg changes to #ED3327) */}
                <div className="pt-2">
                  <CtaButton
                    type="submit"
                    variant="brand"
                    shape="square"
                    className="w-auto"
                  >
                    SEND MESSAGE
                  </CtaButton>
                </div>

                {/* Row 10: Disclaimer */}
                <p className="text-xs font-mg12-regular text-neutral-500 leading-relaxed pt-2">
                  By submitting this form, you confirm that you have read and understood Studio Gravity&apos;s{" "}
                  <a href="/#legal" className="underline hover:text-black">
                    Privacy Policy
                  </a>
                  . Your details are only used to get back to you and are never shared.
                </p>
              </form>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
