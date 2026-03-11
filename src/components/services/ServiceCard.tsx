"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export type ServiceCardProps = {
  id: string;
  title: string;
  description: string;
  image: string;
  path: string;
  className?: string;
};

export default function ServiceCard({
  id,
  title,
  description,
  image,
  path,
  className = "",
}: ServiceCardProps) {
  return (
    <Link
      href={path}
      className={`group relative flex flex-col justify-end ${className}`}
    >
      {/* Floating Image */}
      <div className="absolute top-0 left-0 right-0 z-20 flex justify-center pointer-events-none">
        <div className="relative size-48 transition-transform duration-500 group-hover:-translate-y-6 group-hover:scale-105 group-hover:rotate-2">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Pedestal */}
      <div
        className="relative h-[80%] w-full bg-surface border border-border p-8 flex flex-col shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/10 group-hover:border-primary overflow-hidden"
        style={{ borderRadius: "var(--radius-section)" }}
      >
        {/* Content */}
        <div className="pt-15 relative z-10 text-center flex-1 flex flex-col">
          <h3
            className="text-foreground mb-3 min-h-[3.5rem] flex items-center justify-center group-hover:text-primary transition-colors"
            style={{
              fontSize: "var(--text-body-lg)",
              fontWeight: "var(--weight-bold)",
              lineHeight: "var(--leading-tight)",
            }}
          >
            {title}
          </h3>

          <p
            className="text-foreground-muted leading-relaxed line-clamp-3 mb-4"
            style={{ fontSize: "var(--text-body-sm)" }}
          >
            {description}
          </p>
        </div>

        {/* Bottom Action Bar */}
        <div className="mt-auto flex items-center justify-between pt-6 border-t border-border transition-colors">
          <span
            className="text-foreground-subtle group-hover:text-foreground transition-colors"
            style={{
              fontWeight: "var(--weight-bold)",
              textTransform: "uppercase",
              letterSpacing: "var(--tracking-widest)",
              fontSize: "var(--text-label)",
            }}
          >
            Explore
          </span>

          <div
            className="flex items-center justify-center bg-surface-elevated text-foreground-subtle transition-all duration-500 group-hover:bg-primary group-hover:text-white group-hover:rotate-45 shadow-sm"
            style={{ width: 40, height: 40, borderRadius: "var(--radius-pill)" }}
          >
            <ArrowUpRight size={18} />
          </div>
        </div>

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </Link>
  );
}