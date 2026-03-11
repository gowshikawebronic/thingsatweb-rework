"use client";

import React from "react";
import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
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

// --- SUBTLE FLOATING ANIMATIONS ---
const floatCenter: Variants = {
  animate: { y: [-5, 5, -5], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
};
const floatTR: Variants = {
  animate: { y: [-8, 8, -8], x: [2, -2, 2], transition: { duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 } }
};
const floatBL: Variants = {
  animate: { y: [8, -8, 8], x: [-2, 2, -2], transition: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }
};

export const PageServiceCard = ({ service, index, onCtaClick, reversed = false }: PageServiceCardProps) => {
  const isGreen = index % 2 === 0;

  return (
    <div className="group relative w-full py-16 lg:py-24 border-b border-foreground/5 last:border-0">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

        {/* ==========================================
            LEFT SIDE: CLEAN MATTE TYPOGRAPHY
        ========================================== */}
        <div className={`lg:col-span-5 flex flex-col gap-8 order-2 ${reversed ? "lg:order-2 lg:pl-10" : "lg:order-1 lg:pr-10"}`}>
          
          <div className="flex flex-col items-start gap-4">
            {/* Minimalist Matte Pill */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-foreground/5 border border-foreground/10 text-foreground/70">
              <span className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></span>
              {service.tagline}
            </span>
            
            {/* Crisp Professional Title */}
            <h3 className="text-4xl lg:text-5xl font-display font-black text-foreground tracking-tight m-0 leading-[1.1]">
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

            <Link
              href={`/service?category=${service.id}`}
              className="h-12 px-8 flex items-center justify-center gap-2 border border-foreground/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 text-foreground hover:bg-foreground/5"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* ==========================================
            RIGHT SIDE: LAYERED MATTE CARDS (Like the Image)
        ========================================== */}
        <div className={`lg:col-span-7 relative h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
          
          <div className="relative w-full max-w-[500px] h-[400px] flex items-center justify-center">

            {/* --- TOP RIGHT BACKGROUND CARD (Tech 1) --- */}
            {service.technologies[0] && (
              <motion.div 
                variants={floatTR} animate="animate"
                className="absolute top-0 right-0 lg:-right-4 w-40 h-40 sm:w-48 sm:h-48 bg-white dark:bg-gray-800 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center p-6 z-[1]"
              >
                <TextureOverlay className="opacity-[0.03]" />
                <img src={service.technologies[0].logo} alt="Tech" className="w-12 h-12 object-contain mb-3 opacity-80" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">{service.technologies[0].name}</span>
              </motion.div>
            )}

            {/* --- BOTTOM LEFT BACKGROUND CARD (Tech 2) --- */}
            {service.technologies[1] && (
              <motion.div 
                variants={floatBL} animate="animate"
                className="absolute bottom-0 left-0 lg:-left-4 w-40 h-40 sm:w-48 sm:h-48 bg-white dark:bg-gray-800 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center p-6 z-[2]"
              >
                <TextureOverlay className="opacity-[0.03]" />
                <img src={service.technologies[1].logo} alt="Tech" className="w-12 h-12 object-contain mb-3 opacity-80" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50">{service.technologies[1].name}</span>
              </motion.div>
            )}

            {/* --- CENTER MAIN CARD (Service Image) --- */}
            <motion.div 
              variants={floatCenter} animate="animate"
              className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white/90 dark:bg-gray-900/90 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10 flex items-center justify-center p-10 z-[3] group-hover:scale-105 transition-transform duration-700"
            >
              <TextureOverlay className="opacity-[0.05]" />
              
              {/* Very soft ambient glow behind the image inside the card */}
              <div className={`absolute inset-0 m-auto w-32 h-32 blur-3xl opacity-10 rounded-full pointer-events-none ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>
              
              <img 
                src={service.image} 
                alt={service.title} 
                className="relative z-10 w-full h-full object-contain drop-shadow-xl" 
              />
            </motion.div>

          </div>
        </div>

      </div>
    </div>
  );
};