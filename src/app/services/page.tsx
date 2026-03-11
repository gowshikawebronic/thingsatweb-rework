"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// 1. IMPORT THE REGISTRY
import { servicesRegistry } from "./data/servicesRegistry";

// 2. IMPORT COMPONENTS
import SectionHeader from "@/components/UI/SectionHeader";
import ScrollParallax from "@/components/UI/ScrollParallax";
import TextureOverlay from "@/components/UI/TextureOverlay";
import { PageServiceCard } from "@/components/services/PageServiceCard";
import ServiceGrid from "@/components/services/ServiceGrid";
import PanoramaViewer from "@/components/services/PanoramaViewer";

// --- TYPES ---
export interface ServiceCardData {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  icon: string;
  localIcon?: string;
  points: string[];
  technologies: { name: string; logo: string }[];
}

// --- DATA PREPARATION ---
const MAIN_SERVICE_IDS = [
  "web-development",
  "ai-machine-learning",
  "cloud-services",
  "digital-transformation",
  "devops",
  "software-development",
  "iot-solutions",
  "data-analytics",
];

// Helper to transform registry data to ServiceCardData
const transformData = (ids: string[]): ServiceCardData[] => {
  return ids
    .map((id) => servicesRegistry[id])
    .filter(Boolean)
    .map((data) => ({
      id: data.id,
      title: data.preview.title,
      tagline: data.preview.tagline,
      description: data.preview.description,
      localIcon: data.preview.localIcon,
      image: data.preview.image,
      icon: data.preview.icon,
      points: data.preview.points,
      technologies: data.preview.technologies,
    }));
};

// 1. Get Main Services List (Vertical Stack)
const mainServicesList = transformData(MAIN_SERVICE_IDS);

// 2. Get Additional Services List (Grid Layout)
const allIds = Object.keys(servicesRegistry);
const additionalIds = allIds.filter((id) => !MAIN_SERVICE_IDS.includes(id));
const additionalServicesList = transformData(additionalIds);


/* --- SECONDARY HERO ROTATING TEXT --- */
function RotatingText({ words, className = "" }: { words: string[], className?: string }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

  return (
    <span className="relative inline-block">
      {/* Added className here to perfectly match the font size/style for measuring */}
      <span className={`invisible pointer-events-none ${className}`}>
        {longestWord}
      </span>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          // Added className here so the visible text actually gets the gradient!
          className={`absolute left-0 top-0 whitespace-nowrap ${className}`}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// --- MAIN PAGE COMPONENT ---
export default function ServicesPage() {
  const [selectedService, setSelectedService] = useState<ServiceCardData | null>(null);

  return (
    <main className="min-h-screen bg-transparent selection:bg-brand-blue selection:text-white pt-32 lg:pt-40">

      {/* ==========================================
            1. SECONDARY HERO SECTION (Clean)
        ========================================== */}
      <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-10 pb-24 md:pb-32 overflow-hidden">

        {/* --- PARALLAX GIANT BACKGROUND TEXT --- */}
        <div className="absolute inset-0 z-[0] pointer-events-none flex flex-col items-center justify-center mix-blend-overlay dark:mix-blend-lighten">
          <ScrollParallax speed={0.06}>
            <h2 className="text-foreground/[0.04] dark:text-foreground/[0.02] font-display font-black text-[100px] sm:text-[180px] lg:text-[280px] uppercase tracking-tighter leading-[0.8] select-none whitespace-nowrap">
              SERVICES
            </h2>
          </ScrollParallax>
        </div>

        {/* --- MAIN CLEAN CONTENT --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 flex flex-col items-center max-w-4xl mx-auto mt-8"
        >
          <h1 className="font-display text-foreground font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
            Engineering The <br className="hidden sm:block" />
            <RotatingText words={["Future.", "Cloud.", "Data.", "Scale."]} className="text-gradient-blue" />
          </h1>

          <p className="text-foreground/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium drop-shadow-sm">
            Comprehensive technical solutions designed to drive digital transformation, operational efficiency, and sustainable growth.
          </p>
        </motion.div>
      </section>

      {/* ==========================================
            1.5. 3D PANORAMIC VIEWER
        ========================================== */}
      <PanoramaViewer />

      {/* ==========================================
            2. MAIN SERVICES (Vertical Stack)
        ========================================== */}
      <section className="relative pb-24 md:pb-32 overflow-hidden">
        <div className="container-custom relative z-10">

          <div className="flex flex-col gap-12 lg:gap-16">
            {mainServicesList.map((service, index) => (
              <PageServiceCard
                key={service.id}
                service={service}
                index={index}
                onCtaClick={setSelectedService}
                reversed={index % 2 !== 0}
              />
            ))}
          </div>

        </div>
      </section>

      {/* ==========================================
            3. ADDITIONAL SERVICES (Matte Grid UI)
        ========================================== */}
      <ServiceGrid services={additionalServicesList} />

    </main>
  );
}