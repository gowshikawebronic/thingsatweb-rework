"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, ExternalLink, PlayCircle, X } from "lucide-react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import SectionHeader from "@/components/UI/SectionHeader";
import TextureOverlay from "@/components/UI/TextureOverlay";
import { Product, products } from "@/AllData/products/PRODUCT_DATA";

// --- SUBTLE FLOATING ANIMATIONS (Default State) ---
const floatCenter: Variants = {
  animate: { y: [-5, 5, -5], transition: { duration: 6, repeat: Infinity, ease: "easeInOut" } }
};

// --- INDIVIDUAL PRODUCT CARD COMPONENT ---
const ProductCard = ({ product, index }: { product: Product; index: number }) => {
  const [showDemo, setShowDemo] = useState(false);
  const isEven = index % 2 === 0;
  const isVirtualTour = product.id === "virtualtour360";

  // Perfect Math for the Feature Orbit (Up to 6 features)
  const getFeaturePosition = (idx: number) => {
    const angles = [
      { x: "135%", y: "-135%", rotate: 6 },   // Top Right
      { x: "-135%", y: "135%", rotate: -6 },  // Bottom Left
      { x: "-135%", y: "-135%", rotate: -8 }, // Top Left
      { x: "135%", y: "135%", rotate: 8 },    // Bottom Right
      { x: "0%", y: "-180%", rotate: 0 },     // Top Center
      { x: "0%", y: "180%", rotate: 0 },      // Bottom Center
    ];
    return angles[idx % angles.length];
  };

  return (
    <div
      id={product.id}
      className="relative w-full py-16 lg:py-24 "
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center">

        {/* ==========================================
            LEFT COLUMN: CLEAN MATTE TYPOGRAPHY
        ========================================== */}
        <div className={`lg:col-span-5 flex flex-col gap-8 order-2 z-20 ${isEven ? 'lg:order-1 lg:pr-10' : 'lg:order-2 lg:pl-10'}`}>

          <div className="flex flex-col items-start gap-4">
            {/* Crisp Professional Title (No Badges) */}
            <h3 className="text-4xl lg:text-5xl md:text-6xl font-display font-black text-foreground tracking-tight m-0 leading-[1.05]">
              {product.name}
            </h3>
          </div>

          <p className="text-lg text-foreground/60 font-medium leading-relaxed max-w-xl">
            {product.description}
          </p>

          {/* Clean Checkmark Points */}
          <div className="flex flex-col gap-4 mt-2">
            {product.features.slice(0, 3).map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center bg-background border shadow-sm ${isEven ? 'border-brand-green/20 text-brand-green' : 'border-brand-blue/20 text-brand-blue'}`}>
                  <Check size={12} strokeWidth={4} />
                </div>
                <span className="text-sm font-bold text-foreground/80">
                  {feature}
                </span>
              </div>
            ))}
          </div>

          {/* Matte Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mt-6">
            <Link
              href={product.link}
              target="_blank"
              className="h-12 px-8 cursor-pointer text-background bg-foreground text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-3 transition-all duration-300 rounded-full hover:scale-105 shadow-md hover:shadow-xl"
            >
              Visit Website <ExternalLink size={16} />
            </Link>

            {/* LIVE DEMO TOGGLE BUTTON */}
            {isVirtualTour && (
              <button
                onClick={() => setShowDemo(!showDemo)}
                className={`h-12 px-8 flex items-center justify-center gap-2 border rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 active:scale-95 ${showDemo ? 'border-brand-blue bg-brand-blue text-white shadow-lg shadow-brand-blue/20' : 'border-foreground/10 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm text-foreground hover:bg-foreground/5'}`}
              >
                {showDemo ? <X size={16} /> : <PlayCircle size={16} />}
                {showDemo ? "Close Demo" : "Live Demo"}
              </button>
            )}
          </div>
        </div>

        {/* ==========================================
            RIGHT COLUMN: DYNAMIC MATTE SPREAD & DEMO
        ========================================== */}
        <div className={`lg:col-span-7 relative h-[450px] lg:h-[600px] w-full flex items-center justify-center order-1 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
          
          <AnimatePresence mode="wait">
            {!showDemo ? (
              
              /* --- STATE 1: THE HOVER ORBIT --- */
              <motion.div 
                key="orbit"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full max-w-[600px] h-[600px] flex items-center justify-center group"
              >
                {/* --- FEATURE CARDS (The Spread Animation) --- */}
                {product.features.slice(0, 6).map((feature, idx) => {
                  const pos = getFeaturePosition(idx);
                  return (
                    <motion.div
                      key={idx}
                      initial={false}
                      className={`absolute w-32 h-32 sm:w-36 sm:h-36 bg-white dark:bg-gray-800 rounded-[1.5rem] shadow-[0_15px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_15px_40px_rgba(0,0,0,0.3)] border border-black/5 dark:border-white/5 flex flex-col items-center justify-center p-4 z-[20] transition-all duration-500 ease-out opacity-0 scale-50 group-hover:opacity-100 group-hover:scale-100`}
                      style={{ transform: `translate(${pos.x}, ${pos.y}) rotate(${pos.rotate}deg)` }}
                    >
                      <TextureOverlay className="opacity-[0.03]" />
                      <motion.div animate={{ y: [-2, 2, -2] }} transition={{ duration: 3 + idx, repeat: Infinity, ease: "easeInOut" }} className="flex flex-col items-center w-full">
                        <div className={`w-8 h-8 rounded-full mb-3 flex items-center justify-center bg-foreground/5 text-foreground/50`}>
                          <Check size={14} strokeWidth={3} />
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/60 text-center leading-tight">
                          {feature}
                        </span>
                      </motion.div>
                    </motion.div>
                  );
                })}

                {/* --- CENTER MAIN CARD (Product Hub) --- */}
                <motion.div 
                  variants={floatCenter} animate="animate"
                  className="relative w-64 h-64 sm:w-80 sm:h-80 bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_30px_60px_rgba(0,0,0,0.12)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-black/5 dark:border-white/10 flex items-center justify-center p-10 z-[10] transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[0.6] group-hover:opacity-80"
                >
                  <TextureOverlay className="opacity-[0.05]" />
                  <div className={`absolute inset-0 m-auto w-32 h-32 blur-3xl opacity-10 rounded-full pointer-events-none transition-opacity duration-500 ${isEven ? 'bg-brand-green' : 'bg-brand-blue'} group-hover:opacity-0`}></div>
                  <div className="relative w-full h-full">
                    <Image src={product.image} alt={product.name} fill className="object-contain drop-shadow-xl transition-transform duration-700 group-hover:scale-110" />
                  </div>
                </motion.div>
              </motion.div>

            ) : (

              /* --- STATE 2: THE LIVE DEMO IFRAME WINDOW --- */
              <motion.div
                key="demo"
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -20 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="relative w-full h-full max-w-[600px] bg-white dark:bg-gray-900 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.15)] dark:shadow-[0_40px_80px_rgba(0,0,0,0.5)] border border-black/10 dark:border-white/10 overflow-hidden z-[30] flex flex-col"
              >
                <TextureOverlay className="opacity-[0.02] pointer-events-none" />
                
                {/* macOS-style Window Header */}
                <div className="w-full h-12 bg-foreground/5 border-b border-foreground/5 flex items-center px-6 justify-between shrink-0">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/10"></div>
                    <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/10"></div>
                    <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-black/10"></div>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
                    Live Demo • {product.name}
                  </span>
                  <div className="w-10"></div> {/* Spacer for centering */}
                </div>

                {/* Actual iFrame */}
                <iframe
                  src="https://app.virtualtour360.ai/real-estate/"
                  className="w-full h-full border-0 bg-background flex-grow"
                  title="Virtual Tour Demo"
                  allowFullScreen
                  loading="lazy"
                />
              </motion.div>

            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

// --- MAIN SECTION ---
export default function ProductSection() {
  return (
    <>
      <section id="products" className="relative bg-transparent py-24 lg:py-32 overflow-hidden">
        <div className="container-custom relative z-10">
          
          <div className="mb-20 lg:mb-24 flex flex-col items-center text-center max-w-4xl mx-auto">
            <SectionHeader
              subtitle="Our Ecosystem"
              title="Proprietary "
              highlightText="Products"
              highlightColor="primary"
              className="mb-6 justify-center"
            />
            <p className="text-foreground/70 text-lg md:text-xl font-medium leading-relaxed">
              Scalable software solutions meticulously engineered to bridge the gap between complex data and operational excellence
            </p>
          </div>

          <div className="flex flex-col">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>

        </div>
      </section>
      
    </>
  );
}