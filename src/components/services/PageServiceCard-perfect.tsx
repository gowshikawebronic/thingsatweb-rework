"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, ArrowRight, Layers, X } from "lucide-react";
import { motion } from "framer-motion";
import TextureOverlay from "@/components/UI/TextureOverlay";

export interface ServiceCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  points: string[];
  technologies: { name: string; logo: string }[];
}

interface PageServiceCardProps {
  service: ServiceCardData;
  index: number;
  onCtaClick: (service: ServiceCardData) => void;
  reversed?: boolean;
}

export const PageServiceCard = ({ service, index, onCtaClick, reversed = false }: PageServiceCardProps) => {
  const [showStack, setShowStack] = useState(false);
  const isGreen = index % 2 === 0;

  // Responsive Explosion Math
  // Using percentages relative to the card's own size ensures perfect spacing on all devices
  const getTechPosition = (idx: number, isExpanded: boolean) => {
    // 1. DEFAULT STATE: Just two cards peeking out beautifully
    if (!isExpanded) {
      if (idx === 0) return { x: "80%", y: "-80%", opacity: 1, scale: 0.9, rotate: 6, zIndex: 1 }; // Top Right Peek
      if (idx === 1) return { x: "-80%", y: "80%", opacity: 1, scale: 0.9, rotate: -6, zIndex: 2 }; // Bottom Left Peek
      return { x: "0%", y: "0%", opacity: 0, scale: 0.5, rotate: 0, zIndex: 0 }; // The rest hide perfectly behind the center
    }

    // 2. EXPANDED STATE: The Perfect Non-Overlapping Orbit
    const expandedPositions = [
      { x: "135%", y: "-135%", rotate: 6 },   // Top Right
      { x: "-135%", y: "135%", rotate: -6 },  // Bottom Left
      { x: "-135%", y: "-135%", rotate: -8 }, // Top Left
      { x: "135%", y: "135%", rotate: 8 },    // Bottom Right
      { x: "0%", y: "-180%", rotate: 0 },     // Top Center
      { x: "0%", y: "180%", rotate: 0 },      // Bottom Center
      { x: "-190%", y: "0%", rotate: -12 },   // Left Center
      { x: "190%", y: "0%", rotate: 12 },     // Right Center
    ];

    const pos = expandedPositions[idx % expandedPositions.length];
    return { x: pos.x, y: pos.y, opacity: 1, scale: 1, rotate: pos.rotate, zIndex: 20 };
  };

  return (
    <div className="group relative w-full py-16 lg:py-24 border-b border-foreground/5 last:border-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

        {/* ==========================================
            LEFT SIDE: CLEAN MATTE TYPOGRAPHY
        ========================================== */}
        <div className={`lg:col-span-5 flex flex-col gap-8 order-2 z-20 ${reversed ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"}`}>
          
          <div className="flex flex-col items-start gap-4">
            {/* Crisp Professional Title (Zero Badges) */}
            <h3 className="text-4xl lg:text-5xl md:text-6xl font-display font-black text-foreground tracking-tight m-0 leading-[1.05]">
              {service.title}
            </h3>
          </div>

          <p className="text-lg text-foreground/60 font-medium leading-relaxed">
            {service.description}
          </p>

          {/* Clean Checkmark Points */}
          <div className="flex flex-col gap-4 mt-2">
            {service.points.slice(0, 3).map((point, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-background border shadow-sm ${isGreen ? 'border-brand-green/20 text-brand-green' : 'border-brand-blue/20 text-brand-blue'}`}>
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-sm font-bold text-foreground/80">
                  {point}
                </span>
              </div>
            ))}
          </div>

          {/* Matte Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <button
              onClick={() => onCtaClick(service)}
              className="h-12 px-8 cursor-pointer text-background bg-foreground text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 rounded-full hover:scale-105 shadow-md hover:shadow-xl"
            >
              Start Project <ArrowRight size={16} />
            </button>

            {/* The Magic UX Button */}
            <button
              onClick={() => setShowStack(!showStack)}
              className={`h-12 px-6 flex items-center justify-center gap-2 border rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 ${showStack ? 'border-foreground text-foreground bg-foreground/5' : 'border-foreground/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-foreground hover:bg-foreground/5'}`}
            >
              {showStack ? <X size={16} /> : <Layers size={16} />}
              {showStack ? "Hide Stack" : "View Stack"}
            </button>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE: DYNAMIC MATTE SPREAD
        ========================================== */}
        <div className={`lg:col-span-7 relative h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          
          <div className="relative w-full max-w-[600px] h-[600px] flex items-center justify-center">

            {/* --- TECHNOLOGY CARDS (The Spread Animation) --- */}
            {service.technologies.slice(0, 8).map((tech, idx) => {
              const targetPos = getTechPosition(idx, showStack);
              
              return (
                <motion.div
                  key={tech.name}
                  initial={false}
                  animate={{ 
                    x: targetPos.x, 
                    y: targetPos.y, 
                    opacity: targetPos.opacity, 
                    scale: targetPos.scale,
                    rotate: targetPos.rotate,
                    zIndex: targetPos.zIndex
                  }}
                  transition={{ type: "spring", damping: 22, stiffness: 130, delay: idx * 0.03 }}
                  className={`absolute w-28 h-28 sm:w-32 sm:h-32 bg-white dark:bg-gray-800 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center p-3 ${showStack ? 'hover:scale-110 cursor-pointer hover:z-[30]' : 'pointer-events-none'}`}
                >
                  <TextureOverlay className="opacity-[0.03]" />
                  
                  {/* Internal gentle floating animation for each tech card when expanded */}
                  <motion.div 
                    animate={showStack ? { y: [-2, 2, -2] } : { y: 0 }} 
                    transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }}
                    className="flex flex-col items-center w-full"
                  >
                    <img src={tech.logo} alt={tech.name} className="w-10 h-10 object-contain mb-2 opacity-90" />
                    
                    {/* Text hides when peeking, shows clearly when expanded */}
                    <span className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-widest text-foreground/60 text-center transition-opacity duration-300 ${showStack ? 'opacity-100' : 'opacity-0'}`}>
                      {tech.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })}

            {/* --- CENTER MAIN CARD (Service Hub) --- */}
            <motion.div 
              animate={{ 
                // CRUCIAL UX: Shrinks to 55% to make massive room for the tech cards
                scale: showStack ? 0.55 : 1, 
                opacity: showStack ? 0.7 : 1,
                y: showStack ? 0 : [-5, 5, -5] 
              }}
              transition={{ 
                scale: { type: "spring", damping: 25, stiffness: 120 },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10 flex items-center justify-center p-10 z-[10]"
            >
              <TextureOverlay className="opacity-[0.05]" />
              
              {/* Soft ambient glow behind the image inside the card */}
              <div className={`absolute inset-0 m-auto w-32 h-32 blur-3xl opacity-10 rounded-full pointer-events-none transition-opacity duration-500 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'} ${showStack ? 'opacity-0' : 'opacity-10'}`}></div>
              
              <img 
                src={service.image} 
                alt={service.title} 
                className={`relative z-10 w-full h-full object-contain drop-shadow-xl transition-transform duration-700 ${!showStack && 'group-hover:scale-105'}`} 
              />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};