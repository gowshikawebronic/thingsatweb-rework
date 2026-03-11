"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  badge?: string;
  title: string | React.ReactNode;
  highlight?: string;
  description?: string;
  centered?: boolean;
  isWhite?: boolean;
  className?: string;
  size?: "default" | "large";
  align?: "left" | "center";
  color?: string;
}

export default function SectionHeader({
  badge,
  title,
  highlight,
  description,
  centered = false,
  isWhite = false,
  className = "",
  size = "default",
  align,
}: SectionHeaderProps) {

  const isCentered = align === "center" || centered;
  const titleColor = isWhite ? "text-white" : "text-foreground";
  const highlightColor = isWhite ? "text-accent" : "text-primary";
  const descColor = isWhite ? "text-surface/80" : "text-foreground-muted";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`mb-16 flex flex-col ${isCentered ? "items-center text-center" : "items-start text-left"} ${className}`}
    >
      {/* Badge */}
      {badge && (
        <span
          className={`inline-block mb-6 select-none cursor-default transition-colors duration-300 ${highlightColor}`}
          style={{
            padding: "0.375rem 1rem",
            borderRadius: "var(--radius-icon)",
            fontSize: "var(--text-body-xs)",
            fontWeight: "var(--weight-black)",
            textTransform: "uppercase",
            letterSpacing: "var(--tracking-widest)",
          }}
        >
          {badge}
        </span>
      )}

      {/* Main Title Area (Requested Layout) */}
      <div className={`flex flex-col md:flex-row md:items-baseline gap-4 ${isCentered ? "justify-center" : "justify-start"}`}>
        <span className={`section-title-our text-3xl sm:text-4xl lg:text-5xl ${titleColor} transition-colors duration-300`}>
          {title}
        </span>
        {highlight && (
          <h2
            className={`section-title-main text-[60px] sm:text-[80px] lg:text-[120px] xl:text-[150px] ${highlightColor} transition-colors duration-300`}
            style={{ fontFamily: "'Inter Tight', sans-serif", lineHeight: "1" }}
          >
            {highlight}
          </h2>
        )}
      </div>

      {/* Description */}
      {description && (
        <p
          className={`max-w-2xl mt-6 ${descColor}`}
          style={{
            fontSize: "var(--text-body-lg)",
            fontWeight: "var(--weight-medium)",
            lineHeight: "var(--leading-relaxed)",
          }}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
}