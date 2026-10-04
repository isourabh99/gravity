"use client";

import React from "react";
import Link from "next/link";
import { useGlobalColor } from "@/hooks/useGlobalColor";

export interface CtaButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "outline" | "ghost";
  shape?: "pill" | "square" | "rounded";
  href?: string;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  type?: "button" | "submit" | "reset";
  target?: string;
  rel?: string;
}

export default function CtaButton({
  children,
  variant = "primary",
  shape = "pill",
  href,
  className = "",
  onClick,
  type = "button",
  target,
  rel,
}: CtaButtonProps) {
  const { currentColor } = useGlobalColor();

  const shapeClasses =
    shape === "pill"
      ? "rounded-full"
      : shape === "square"
      ? "rounded-none"
      : "rounded-xl";

  const baseClasses = `group relative inline-flex items-center justify-center font-bold text-xs sm:text-sm px-6 py-3 transition-all duration-300 select-none cursor-pointer active:scale-95 ${shapeClasses} ${className}`;

  const animatedContent = (
    <span className="relative inline-flex items-center justify-center overflow-hidden">
      {/* Primary text sliding up out of view on hover */}
      <span className="inline-flex items-center gap-2 transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:-translate-y-full">
        {children}
      </span>
      {/* Duplicate text sliding up into view from bottom on hover */}
      <span className="absolute inset-0 inline-flex items-center justify-center gap-2 translate-y-full transition-transform duration-300 ease-[cubic-bezier(0.76,0,0.24,1)] group-hover:translate-y-0">
        {children}
      </span>
    </span>
  );

  if (variant === "primary") {
    const style = { backgroundColor: currentColor, color: "#000000" };

    if (href) {
      return (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={`${baseClasses} `}
          style={style}
        >
          {animatedContent}
        </Link>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses}`}
        style={style}
      >
        {animatedContent}
      </button>
    );
  }

  if (variant === "outline") {
    if (href) {
      return (
        <Link
          href={href}
          onClick={onClick}
          target={target}
          rel={rel}
          className={`${baseClasses} border border-neutral-800 text-neutral-300 hover:text-white `}
        >
          {animatedContent}
        </Link>
      );
    }

    return (
      <button
        type={type}
        onClick={onClick}
        className={`${baseClasses} border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 hover:bg-neutral-900/60`}
      >
        {animatedContent}
      </button>
    );
  }

  if (href) {
    return (
      <Link
        href={href}
        onClick={onClick}
        target={target}
        rel={rel}
        className={`${baseClasses} text-neutral-300 hover:text-white hover:bg-neutral-900/40`}
      >
        {animatedContent}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} text-neutral-300 hover:text-white hover:bg-neutral-900/40`}
    >
      {animatedContent}
    </button>
  );
}
