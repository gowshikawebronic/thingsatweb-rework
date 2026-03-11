"use client";

import Link from "next/link";
import { ArrowRight, Layers, Activity, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { ServicePageData } from "@/app/services/data/types";
import TextureOverlay from "@/components/UI/TextureOverlay";
import ScrollParallax from "@/components/UI/ScrollParallax";

export default function UniversalHero({ data }: { data: ServicePageData['hero'] }) {
   if (!data) return null;

   // Safely grab up to 3 features to display in the floating cards
   const feature1 = data.features?.[0];
   const feature2 = data.features?.[1];
   const feature3 = data.features?.[2];

   return (
      <section className="relative w-full min-h-[90vh] flex items-center justify-center pt-40 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-transparent">

         {/* Very subtle background noise for premium matte feel */}
         <TextureOverlay className="opacity-[0.02] pointer-events-none mix-blend-overlay" />

         {/* --- PARALLAX GIANT BACKGROUND TEXT --- */}
         <div className="absolute inset-0 z-[0] pointer-events-none flex flex-col items-start justify-center pl-6 lg:pl-12 mix-blend-overlay dark:mix-blend-lighten overflow-hidden">
            <ScrollParallax speed={0.05}>
               <h2 className="text-foreground/[0.03] dark:text-foreground/[0.02] font-display font-black text-[120px] sm:text-[180px] lg:text-[250px] xl:text-[320px] uppercase tracking-tighter leading-[0.8] select-none whitespace-nowrap">
                  {data.badge || "MODULE"}
               </h2>
            </ScrollParallax>
         </div>

         <div className="container-custom relative z-10 w-full">
            <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 items-center">

               {/* ==========================================
                        LEFT SIDE: MASSIVE, SPACIOUS TYPOGRAPHY
                    ========================================== */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 flex flex-col items-start pr-0 lg:pr-10"
               >
                  {/* Massive Typography matching Home/Hero */}
                  <h1 className="font-display text-foreground font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6">
                     {data.badge && (
                        <span className="block text-xl sm:text-2xl text-foreground/50 tracking-widest uppercase mb-4 font-bold">
                           {data.badge}
                        </span>
                     )}
                     {data.titlePrefix} <br className="hidden sm:block" />
                     <span className="text-gradient-blue">{data.titleHighlight}</span>
                  </h1>

                  <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                     {data.description}
                  </p>

                  {/* Crisp Matte Action Button Matching Home/Hero */}
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto mt-2">
                     <Link
                        href="/contact"
                        className="w-full sm:w-auto btn-ripple h-14 px-8 cursor-pointer text-white font-bold transition-all flex items-center justify-center gap-3 group shadow-[0_10px_30px_rgba(14,173,43,0.2)] hover:shadow-[0_15px_40px_rgba(14,173,43,0.3)] duration-300 ease-out bg-gradient-green rounded-xl hover:-translate-y-1"
                     >
                        {data.ctaPrimary}
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                     </Link>
                  </div>
               </motion.div>

               {/* ==========================================
                        RIGHT SIDE: TINY OVERLAP REFERENCE CARDS
                    ========================================== */}
               <div className="lg:col-span-5 relative w-full h-[450px] sm:h-[550px] flex items-center justify-center mt-10 lg:mt-0 perspective-1000">

                  {/* We use a large bounding box so the cards can spread far apart */}
                  <div className="relative w-full max-w-[450px] sm:max-w-[500px] h-[450px] sm:h-[500px] flex items-center justify-center">

                     {/* --- BACK CARD 1 (Pushed far Top Right) --- */}
                     {feature2 && (
                        <motion.div
                           initial={{ opacity: 0, x: 20, y: -20 }}
                           animate={{ opacity: 1, x: 0, y: [4, -4, 4] }}
                           transition={{ opacity: { duration: 0.8, delay: 0.2 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
                           className="absolute top-0 right-0 sm:-right-4 z-[1] w-52 sm:w-60 bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 rounded-[1.5rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col"
                        >
                           <div className="w-10 h-10 rounded-[0.8rem] bg-brand-blue/10 text-brand-blue flex items-center justify-center mb-4">
                              <Activity size={18} />
                           </div>
                           <h3 className="text-sm font-bold text-foreground leading-tight m-0">
                              {feature2}
                           </h3>
                           <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest block m-0 mt-1">
                              Capability
                           </p>
                        </motion.div>
                     )}

                     {/* --- BACK CARD 2 (Pushed far Bottom Left) --- */}
                     {feature3 && (
                        <motion.div
                           initial={{ opacity: 0, x: -20, y: 20 }}
                           animate={{ opacity: 1, x: 0, y: [-4, 4, -4] }}
                           transition={{ opacity: { duration: 0.8, delay: 0.4 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                           className="absolute bottom-0 left-0 sm:-left-4 z-[2] w-52 sm:w-60 bg-white dark:bg-gray-800 border border-black/5 dark:border-white/5 rounded-[1.5rem] p-6 shadow-[0_15px_40px_rgba(0,0,0,0.06)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] flex flex-col"
                        >
                           <div className="w-10 h-10 rounded-[0.8rem] bg-foreground/5 text-foreground/60 flex items-center justify-center mb-4">
                              <CheckCircle2 size={18} />
                           </div>
                           <h3 className="text-sm font-bold text-foreground leading-tight m-0">
                              {feature3}
                           </h3>
                           <p className="text-[9px] font-bold text-foreground/40 uppercase tracking-widest block m-0 mt-1">
                              Advantage
                           </p>
                        </motion.div>
                     )}

                     {/* --- FRONT CARD (Main Center Focus) --- */}
                     <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1, y: [-5, 5, -5] }}
                        transition={{ opacity: { duration: 0.6 }, scale: { duration: 0.6 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
                        className="absolute z-[10] w-64 sm:w-72 bg-white dark:bg-gray-900 border border-black/5 dark:border-white/10 rounded-[2rem] p-8 sm:p-10 shadow-[0_30px_80px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_80px_rgba(0,0,0,0.5)] flex flex-col items-start group hover:scale-105 transition-transform duration-500"
                     >
                        {/* Soft glow matching the reference image styling */}
                        <div className="absolute inset-0 m-auto w-24 h-24 bg-brand-green opacity-10 blur-3xl rounded-full"></div>

                        <div className="relative z-10 w-full">
                           <div className="w-12 h-12 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6">
                              <Layers size={22} />
                           </div>
                           <h3 className="text-xl sm:text-2xl font-display font-black text-foreground leading-tight m-0">
                              {feature1 || data.titleHighlight}
                           </h3>
                           <p className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest block m-0 mt-2">
                              Core Architecture
                           </p>
                        </div>
                     </motion.div>

                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}