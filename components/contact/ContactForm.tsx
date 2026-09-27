"use client";

import { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Paperclip, User, Mail, Phone, Building2, RefreshCw } from "lucide-react";

type InquiryType = "Project Inquiry" | "Enterprise Solutions" | "Technical Support" | "Partnership";

const INQUIRY_TYPES: { id: InquiryType; label: string; desc: string }[] = [
  { id: "Project Inquiry", label: "New Project", desc: "Custom builds & engineering" },
  { id: "Enterprise Solutions", label: "Enterprise", desc: "Scale & dedicated architecture" },
  { id: "Technical Support", label: "Support", desc: "System help & integration" },
  { id: "Partnership", label: "Partnership", desc: "Strategic alliances" },
];

const BUDGET_RANGES = ["$10k - $25k", "$25k - $50k", "$50k - $100k", "$100k+"];

export default function ContactForm() {
  const [inquiryType, setInquiryType] = useState<InquiryType>("Project Inquiry");
  const [selectedBudget, setSelectedBudget] = useState<string>("$25k - $50k");
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    fileName: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, fileName: e.target.files![0].name }));
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Please enter your full name";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Work email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Please describe your project or inquiry";
    } else if (formData.message.trim().length < 15) {
      newErrors.message = "Message must be at least 15 characters long";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedTicket = `ZYNX-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
    }, 1600);
  };

  const handleReset = () => {
    setFormData({
      fullName: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      fileName: "",
    });
    setErrors({});
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-10 rounded-3xl bg-neutral-950 border border-neutral-800 backdrop-blur-xl flex flex-col items-center text-center space-y-6 animate-in fade-in duration-500">
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-[#10B981]/10 border border-[#10B981]/30 text-[#10B981]">
          <CheckCircle2 className="w-10 h-10 animate-bounce" />
          <span className="absolute -top-1 -right-1 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#10B981] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-4 w-4 bg-[#10B981]"></span>
          </span>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono tracking-widest text-[#10B981] uppercase bg-[#10B981]/10 px-3 py-1 rounded-full border border-[#10B981]/20 font-semibold">
            Request Received • Ref #{ticketId}
          </span>
          <h3 className="text-2xl sm:text-3xl font-bold text-white mt-2">
            Message Sent Successfully!
          </h3>
          <p className="text-neutral-400 text-sm max-w-md mx-auto leading-relaxed">
            Thank you, <span className="text-white font-semibold">{formData.fullName}</span>. Our senior technical advisor will review your submission and get back to you at <span className="text-[#10B981] font-medium">{formData.email}</span> within <span className="text-neutral-200 font-medium">2 hours</span>.
          </p>
        </div>

        <div className="w-full max-w-md p-4 rounded-xl bg-neutral-900 border border-neutral-800 text-left text-xs text-neutral-300 space-y-2">
          <div className="flex justify-between border-b border-neutral-800 pb-2">
            <span>Inquiry Type:</span>
            <span className="text-white font-medium">{inquiryType}</span>
          </div>
          {(inquiryType === "Project Inquiry" || inquiryType === "Enterprise Solutions") && (
            <div className="flex justify-between border-b border-neutral-800 pb-2">
              <span>Estimated Budget:</span>
              <span className="text-[#10B981] font-medium">{selectedBudget}</span>
            </div>
          )}
          <div className="flex justify-between">
            <span>Status:</span>
            <span className="text-[#10B981] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]"></span> Routed to Technical Lead
            </span>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-medium text-sm transition-all duration-200 border border-neutral-800 cursor-pointer"
        >
          <RefreshCw className="w-4 h-4 text-[#10B981]" /> Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-8 rounded-3xl bg-neutral-950/90 border border-neutral-800/90 backdrop-blur-xl shadow-2xl space-y-6"
    >
      {/* Category / Intent Selector */}
      <div>
        <label className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-3">
          1. Select Inquiry Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {INQUIRY_TYPES.map((type) => {
            const isSelected = inquiryType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setInquiryType(type.id)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${
                  isSelected
                    ? "bg-[#10B981]/10 border-[#10B981] text-white shadow-[0_0_15px_rgba(16,185,129,0.15)]"
                    : "bg-neutral-900/60 border-neutral-800 text-neutral-400 hover:border-neutral-700"
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className="text-xs font-bold">{type.label}</span>
                  {isSelected && <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>}
                </div>
                <span className="text-[10px] text-neutral-500 mt-1 line-clamp-1">{type.desc}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Budget Selector */}
      {(inquiryType === "Project Inquiry" || inquiryType === "Enterprise Solutions") && (
        <div className="animate-in fade-in duration-300">
          <label className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-2">
            Estimated Project Budget (USD)
          </label>
          <div className="flex flex-wrap gap-2">
            {BUDGET_RANGES.map((b) => (
              <button
                key={b}
                type="button"
                onClick={() => setSelectedBudget(b)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                  selectedBudget === b
                    ? "bg-[#10B981] text-black border-[#10B981] font-bold"
                    : "bg-neutral-900/60 text-neutral-300 border-neutral-800 hover:border-neutral-700"
                }`}
              >
                {b}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Contact Details Inputs */}
      <div>
        <label className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider mb-3">
          2. Contact Details
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name *"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full px-4 py-3 pl-10 rounded-xl bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                  errors.fullName
                    ? "border-red-500/80 focus:border-red-500"
                    : "border-neutral-800 focus:border-[#10B981]"
                }`}
              />
              <User className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
            </div>
            {errors.fullName && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.fullName}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type="email"
                name="email"
                placeholder="Work Email Address *"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 pl-10 rounded-xl bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all ${
                  errors.email
                    ? "border-red-500/80 focus:border-red-500"
                    : "border-neutral-800 focus:border-[#10B981]"
                }`}
              />
              <Mail className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
            </div>
            {errors.email && (
              <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.email}
              </p>
            )}
          </div>

          <div>
            <div className="relative">
              <input
                type="text"
                name="company"
                placeholder="Company / Organization"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-10 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#10B981] transition-all"
              />
              <Building2 className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
            </div>
          </div>

          <div>
            <div className="relative">
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number (Optional)"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 pl-10 rounded-xl bg-neutral-900 border border-neutral-800 text-sm text-white placeholder-neutral-500 focus:outline-none focus:border-[#10B981] transition-all"
              />
              <Phone className="w-4 h-4 text-neutral-500 absolute left-3.5 top-3.5" />
            </div>
          </div>
        </div>
      </div>

      {/* Message */}
      <div>
        <div className="flex justify-between items-center mb-2">
          <label className="block text-xs font-mono font-semibold text-neutral-400 uppercase tracking-wider">
            3. Message & Scope *
          </label>
          <span className="text-[10px] text-neutral-500 font-mono">
            {formData.message.length}/1000 characters
          </span>
        </div>
        <textarea
          name="message"
          rows={4}
          maxLength={1000}
          placeholder="Tell us about your project goals, timelines, technology stack, or specific requirements..."
          value={formData.message}
          onChange={handleChange}
          className={`w-full p-4 rounded-xl bg-neutral-900 border text-sm text-white placeholder-neutral-500 focus:outline-none transition-all resize-none ${
            errors.message
              ? "border-red-500/80 focus:border-red-500"
              : "border-neutral-800 focus:border-[#10B981]"
          }`}
        ></textarea>
        {errors.message && (
          <p className="text-xs text-red-400 mt-1 flex items-center gap-1">
            <AlertCircle className="w-3 h-3" /> {errors.message}
          </p>
        )}
      </div>

      {/* Submit Bar with Google Dots Spinner */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-2 border-t border-neutral-800">
        <label className="cursor-pointer inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-400 text-xs hover:text-white transition-colors">
          <Paperclip className="w-3.5 h-3.5 text-[#10B981]" />
          <span className="truncate max-w-[180px]">
            {formData.fileName || "Attach Specs / Brief (PDF, DOCX)"}
          </span>
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf,.doc,.docx,.png,.jpg"
            className="hidden"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="relative group overflow-hidden px-8 py-3.5 rounded-xl bg-[#10B981] text-black font-semibold text-sm hover:bg-[#059669] hover:text-white hover:shadow-[0_0_25px_rgba(16,185,129,0.4)] transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <RefreshCw className="w-4 h-4 animate-spin text-black" />
              <span>Transmitting Request...</span>
            </>
          ) : (
            <>
              <span>Submit Inquiry</span>
              <Send className="w-4 h-4 text-black group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
