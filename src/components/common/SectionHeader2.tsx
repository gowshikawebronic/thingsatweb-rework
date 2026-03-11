"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Sparkles, Star, TrendingUp, LucideIcon } from "lucide-react";

// --- Types ---
export interface SectionHeaderProps {
  /** The small tag text (e.g., "Our Expertise") */
  badge?: string;
  /** Optional icon for the badge */
  badgeIcon?: "Zap" | "Sparkles" | "Star" | "TrendingUp";
  /** The main title — accepts ReactNode for JSX (spans, breaks, gradients) */
  title: React.ReactNode;
  /** The supporting text */
  description?: string;
  /** Alignment mode: left (default), center, or split (title left, description right) */
  align?: "left" | "center" | "split";
  /** Theme color for badge pill */
  color?: "blue" | "green" | "slate";
  /** Custom classes for the wrapper */
  className?: string;
  centered?: boolean;
  size?:string;
}

// --- Icons Map ---
const IconMap: Record<string, LucideIcon> = {
  Zap, Sparkles, Star, TrendingUp
};

// --- Animation ---
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

// --- Structured Split-Card Styles ---
// We apply a very subtle 10% background tint strictly to the icon block
const iconAccent = {
  blue: "text-[var(--hero-blue)] bg-[var(--hero-blue)]/10",
  green: "text-[var(--hero-green)] bg-[var(--hero-green)]/10",
  slate: "text-[var(--hero-slate)] bg-[var(--hero-slate)]/10",
};

export default function SectionHeader({
  badge,
  badgeIcon,
  title,
  description,
  align = "left",
  color = "blue",
  className = "",
}: SectionHeaderProps) {

  const isSplit = align === "split";
  const isCentered = align === "center";

  const Icon = badgeIcon ? IconMap[badgeIcon] : null;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className={`
        relative z-10 
        ${isCentered ? "flex flex-col items-center text-center mx-auto max-w-4xl" : ""}
        ${isSplit ? "flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-border-subtle pb-8" : ""}
        ${!isCentered && !isSplit ? "flex flex-col items-start text-left gap-6" : ""}
        ${className}
      `}
    >
      {/* --- TITLE GROUP --- */}
      <div className={isSplit ? "max-w-2xl" : "w-full"}>
     

        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-[1.1]"
        >
          {title}
        </motion.h2>
      </div>

      {/* --- DESCRIPTION GROUP --- */}
      {description && (
        <motion.div
          variants={itemVariants}
          className={`
            ${isSplit ? "max-w-md pb-2" : "max-w-2xl w-full"} 
            ${isCentered ? "mx-auto" : ""}
          `}
        >
          <p className={`text-lg md:text-xl text-foreground-muted leading-relaxed ${isCentered ? "mx-auto" : ""}`}>
            {description}
          </p>
        </motion.div>
      )}
    </motion.div>
  );
}