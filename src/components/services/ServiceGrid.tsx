"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/UI/SectionHeader";
import TextureOverlay from "@/components/UI/TextureOverlay";
import FadeUp from "@/components/UI/FadeUp";
import ScrollParallax from "@/components/UI/ScrollParallax";
import { ServiceCardData } from "@/components/services/PageServiceCard";

interface ServiceGridProps {
  services: ServiceCardData[];
}

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="relative py-48 lg:-translate-y-30">
      
      {/* --- SHARP TILTED BACKGROUND (Matching Testimonials) --- */}
  <div className="absolute inset-0 z-0 bg-gradient-green shadow-[0_20px_50px_rgba(14,173,43,0.1)] [clip-path:polygon(0_4%,100%_0,100%_96%,0_100%)] lg:[clip-path:polygon(0_6%,100%_0,100%_94%,0_100%)] pointer-events-none">
    <TextureOverlay className="opacity-20 mix-blend-overlay" />
</div>

      <div className="container-custom relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto mb-20 text-center flex flex-col items-center">
          <SectionHeader
            subtitle="Extended"
            highlightText="Service Suite"
            highlightColor="white"
            titleColorClass="text-white"
            subtitleColorClass="text-white/80"
            className="mb-6 justify-center"
          />
          <FadeUp delay={100}>
            <p className="text-white/80 text-lg md:text-xl font-medium max-w-2xl mx-auto -mt-6">
              Beyond our core platforms, we offer specialized engineering and consulting services tailored to modern enterprise needs.
            </p>
          </FadeUp>
        </div>

        {/* --- THE MATTE CARD GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const isGreen = index % 2 === 0;
            const bgGlow = isGreen ? 'bg-brand-green' : 'bg-brand-blue';
            const textAccent = isGreen ? 'text-brand-green' : 'text-brand-blue';
            
            // Staggered parallax for the grid columns
            const colIndex = index % 3;
            const scrollSpeed = colIndex === 0 ? 0.04 : colIndex === 1 ? 0.08 : 0.12;
            const ptClass = colIndex === 0 ? "" : colIndex === 1 ? "lg:pt-12" : "lg:pt-24";

            return (
              <ScrollParallax key={service.id} speed={scrollSpeed} className={`h-full ${ptClass}`}>
                <FadeUp delay={index * 100} className="h-full">
                  <Link 
                    href={`/service?category=${service.id}`} 
                    className="group relative h-full w-full bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 rounded-[2.5rem] p-10 flex flex-col shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_40px_80px_rgba(0,0,0,0.5)] transition-all duration-500 overflow-hidden hover:-translate-y-2 no-underline"
                  >
                    
                    {/* --- SUBTLE MATTE TEXTURE --- */}
                    <TextureOverlay className="opacity-[0.03]" />

                    {/* Soft Hover Glow Corner */}
                    <div className={`absolute -top-10 -right-10 w-32 h-32 blur-3xl opacity-0 group-hover:opacity-15 rounded-full transition-opacity duration-700 pointer-events-none ${bgGlow}`}></div>

                    {/* Minimalist Image/Icon Icon */}
                    <div className="mb-8 relative z-10 w-16 h-16 rounded-full bg-foreground/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <img src={service.image} alt={service.title} className="w-8 h-8 object-contain drop-shadow-md" />
                    </div>

                    {/* Typography */}
                    <div className="relative z-10 flex flex-col h-full">
                      <h3 className="text-2xl font-display font-black text-foreground tracking-tight mb-4 leading-tight group-hover:text-brand-green transition-colors">
                        {service.title}
                      </h3>
                      
                      <p className="text-foreground/70 text-sm font-medium leading-relaxed mb-8 flex-grow">
                        {service.description}
                      </p>

                      {/* Footer / Action Line */}
                      <div className="pt-6 border-t border-foreground/5 mt-auto flex items-center justify-between">
                        <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${textAccent}`}>
                          Explore Service
                        </span>
                        
                        <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background">
                          <ArrowRight size={14} strokeWidth={3} className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute" />
                          <ArrowRight size={14} strokeWidth={3} className="translate-x-0 opacity-100 group-hover:translate-x-1 group-hover:opacity-0 transition-all duration-300" />
                        </div>
                      </div>
                    </div>

                  </Link>
                </FadeUp>
              </ScrollParallax>
            );
          })}
        </div>

      </div>
    </section>
  );
}