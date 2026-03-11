"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";
import SectionHeader from "@/components/UI/SectionHeader";
import TextureOverlay from "@/components/UI/TextureOverlay";
import { ServiceCardData } from "@/components/services/PageServiceCard";

interface ServiceGridProps {
  services: ServiceCardData[];
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50, damping: 20 } },
};

export default function ServiceGrid({ services }: ServiceGridProps) {
  return (
    <section className="relative bg-transparent py-24 md:py-32 overflow-hidden">
      
      <div className="container-custom relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="max-w-4xl mx-auto mb-20 text-center flex flex-col items-center">
          <SectionHeader
            subtitle="Specialized Capabilities"
            title="Extended "
            highlightText="Service Suite"
            highlightColor="secondary"
            className="mb-6 justify-center"
          />
        </div>

        {/* --- THE HIGH-END INTERACTIVE GRID --- */}
        <motion.div 
          variants={containerVariants} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const isGreen = index % 2 === 0;
            const borderHoverClass = isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30';
            const textHoverClass = isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue';

            return (
              <motion.div key={service.id} variants={cardVariants} className="h-full">
                <Link 
                  href={`/service?category=${service.id}`} 
                  className={`group relative h-full bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 overflow-hidden flex flex-col transition-all duration-500 rounded-[2rem] p-4 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] ${borderHoverClass} hover:-translate-y-2 no-underline`}
                >
                  
                  {/* ==========================================
                      1. INTERACTIVE STAGING AREA (Top Half)
                  ========================================== */}
                  <div className="relative w-full h-56 bg-foreground/5 dark:bg-background/50 rounded-[1.5rem] mb-6 flex items-center justify-center overflow-hidden border border-foreground/5">
                    <TextureOverlay className="opacity-[0.05]" />
                    
                    {/* The Mini-Orbit Tech Stack (Hidden by default, shoots out on hover) */}
                    {service.technologies[0] && (
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:-translate-x-16 group-hover:-translate-y-12 group-hover:rotate-[-10deg] w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-black/5 flex items-center justify-center p-2 z-[1]">
                        <img src={service.technologies[0].logo} alt="Tech" className="w-full h-full object-contain" />
                      </div>
                    )}
                    
                    {service.technologies[1] && (
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:translate-x-16 group-hover:-translate-y-12 group-hover:rotate-[10deg] w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-black/5 flex items-center justify-center p-2 z-[1] delay-75">
                        <img src={service.technologies[1].logo} alt="Tech" className="w-full h-full object-contain" />
                      </div>
                    )}

                    {service.technologies[2] && (
                      <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-500 ease-out group-hover:-translate-y-20 group-hover:rotate-[0deg] w-12 h-12 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-black/5 flex items-center justify-center p-2 z-[1] delay-150">
                        <img src={service.technologies[2].logo} alt="Tech" className="w-full h-full object-contain" />
                      </div>
                    )}

                    {/* Main Image (Shrinks slightly on hover to make room for orbit) */}
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="relative z-10 w-32 h-32 object-contain drop-shadow-xl transition-all duration-500 ease-out group-hover:scale-75 group-hover:drop-shadow-2xl" 
                    />
                  </div>

                  {/* ==========================================
                      2. MATTE TYPOGRAPHY AREA (Bottom Half)
                  ========================================== */}
                  <div className="relative z-10 px-4 pb-4 flex flex-col grow">
                    
                    {/* Title & Tagline */}
                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/50 mb-2 block">
                        {service.tagline}
                      </span>
                      <h3 className={`text-2xl font-display font-black text-foreground tracking-tight leading-tight transition-colors duration-300 ${textHoverClass}`}>
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-sm leading-relaxed text-foreground/60 font-medium mb-8 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Animated Arrow Button Line */}
                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-foreground/5">
                      <span className="text-xs font-bold tracking-widest uppercase text-foreground/80 group-hover:text-foreground transition-colors">
                        Explore Service
                      </span>
                      
                      {/* Button snaps into an arrow on hover */}
                      <div className="w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center text-foreground transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:scale-110">
                        <ArrowRight size={14} strokeWidth={3} className="-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300 absolute" />
                        <ArrowRight size={14} strokeWidth={3} className="translate-x-0 opacity-100 group-hover:translate-x-1 group-hover:opacity-0 transition-all duration-300" />
                      </div>
                    </div>

                  </div>

                </Link>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}