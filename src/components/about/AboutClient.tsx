"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Users, Lightbulb, Target, Rocket, Globe, Code2, Palette, Database, Cpu, Wrench, Sparkles } from "lucide-react";
import SectionHeader from "@/components/UI/SectionHeader";
import ScrollParallax from "@/components/UI/ScrollParallax";
import FadeUp from "@/components/UI/FadeUp";
import TextureOverlay from "@/components/UI/TextureOverlay";
import TiltCard from "@/components/Home/TiltCard";
import TechStack from "@/components/Home/TechStack";
import CTA from "@/components/Home/CTA";
import { useTranslation } from "@/i18n/LanguageProvider";

/* ─── ROTATING TEXT ─── */
function RotatingText({ words, className = "" }: { words: string[]; className?: string }) {
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
        const interval = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 3000);
        return () => clearInterval(interval);
    }, [words.length]);
    
    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");
    
    return (
        <span className="relative inline-block">
            {/* 1. Added className here so the invisible measuring box matches the font style perfectly */}
            <span className={`invisible pointer-events-none ${className}`}>{longestWord}</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    // 2. Added className here so the visible animated text actually gets the color gradient!
                    className={`absolute left-0 top-0 whitespace-nowrap ${className}`}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

/* ─── DATA ─── */
const capabilities = [
    { icon: Database, title: "Data Experts", desc: "Transforming raw data into actionable business intelligence" },
    { icon: Palette, title: "UI/UX Designers", desc: "Crafting elegant, user-centric digital experiences" },
    { icon: Code2, title: "Full-Stack Developers", desc: "Building robust applications from frontend to backend" },
    { icon: Wrench, title: "Technicians", desc: "Ensuring seamless infrastructure and operational support" },
    { icon: Cpu, title: "Engineers", desc: "Architecting scalable, future-proof solutions" },
    { icon: Sparkles, title: "Creative Artists", desc: "Bringing brands to life with innovative visual storytelling" },
];

const values = [
    { icon: Globe, title: "Global Reach", desc: "Sweden-based with an international team serving clients worldwide" },
    { icon: Target, title: "Goal-Driven", desc: "Elegant, data-driven resolutions that help organizations perform better" },
    { icon: Lightbulb, title: "Innovation First", desc: "Inspired to develop sophisticated, practical digital products" },
    { icon: Rocket, title: "One-Stop Shop", desc: "Everything you need to go digital under one roof" },
];

const team = [
    { name: "Tomas Ljungblom", role: "CEO" },
    { name: "Carl-Magnus Täng", role: "Marketing / Sales" },
    { name: "Jan Abelsson", role: "Technician" },
    { name: "Suryanarayanan", role: "Product Manager" },
    { name: "S M Raja", role: "Technology Architect" },
    { name: "Swisstac Bravin", role: "Digital Marketing Expert" },
    { name: "Vijay", role: "Android Lead Developer" },
    { name: "Velraj", role: "WordPress Lead Developer" },
    { name: "Veeramanikandan", role: "Lead Technology Engineer" },
    { name: "Karthick", role: "Senior Application Developer" },
    { name: "Arun P M V", role: "Senior Project Manager" },
    { name: "Harish", role: "Hardware Engineer" },
    { name: "Achu", role: "Senior UI/UX Designer" },
    { name: "Sakthi Yasodai", role: "Senior WordPress Developer" },
    { name: "Sasidharan", role: "Application Developer" },
    { name: "Jayakumar", role: "Application Developer" },
    { name: "Vasanthkumar", role: "Application Developer" },
    { name: "Veerammal", role: "Application Developer" },
    { name: "Jegan Sundaram", role: "iOS Developer" },
    { name: "Gnanaprakash", role: "QA Engineer" },
    { name: "Manoji", role: "Surveillance Support Associate" },
];

export default function AboutClient() {
    const { t } = useTranslation();
    return (
        <div className="min-h-screen bg-transparent selection:bg-brand-blue selection:text-white pt-32 lg:pt-40">

            {/* ═══════════════════════════════════════════
          1. SECONDARY HERO
      ═══════════════════════════════════════════ */}
            <section className="relative w-full min-h-[60vh] flex flex-col items-center justify-center text-center px-6 pt-10 pb-24 md:pb-32 overflow-hidden">
                <div className="absolute inset-0 z-[0] pointer-events-none flex flex-col items-center justify-center mix-blend-overlay dark:mix-blend-lighten">
                    <ScrollParallax speed={0.06}>
                        <h2 className="text-foreground/[0.04] dark:text-foreground/[0.02] font-display font-black text-[100px] sm:text-[180px] lg:text-[280px] uppercase tracking-tighter leading-[0.8] select-none whitespace-nowrap">
                            {t("about.bgText") as string}
                        </h2>
                    </ScrollParallax>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="relative z-10 flex flex-col items-center max-w-4xl mx-auto mt-8"
                >
                    <h1 className="font-display text-foreground font-black text-5xl sm:text-7xl lg:text-8xl leading-[1.05] tracking-tight mb-8">
                        {t("about.heroTitle") as string}{" "}
                        <RotatingText words={t("about.rotatingWords") as string[]} className="text-gradient-green" />
                    </h1>
                    <p className="text-foreground/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium drop-shadow-sm">
                        {t("about.heroDesc") as string}
                    </p>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
          2. WHO WE ARE
      ═══════════════════════════════════════════ */}
            <section className="relative bg-transparent py-24 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">

                        {/* Left: Text */}
                        <div>
                            <SectionHeader
                                subtitle={t("about.whoWeAreSubtitle") as string}
                                title={t("about.whoWeAreTitle") as string}
                                highlightText={t("about.whoWeAreHighlight") as string}
                                highlightColor="primary"
                            />
                            <div className="space-y-6 mt-8">
                                <p className="text-foreground/60 text-base sm:text-lg leading-relaxed font-medium">
                                    {t("about.desc1") as string}
                                </p>
                                <p className="text-foreground/60 text-base sm:text-lg leading-relaxed font-medium">
                                    {t("about.desc2") as string}
                                </p>
                            </div>
                        </div>

                        {/* Right: Values Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {values.map((item, i) => {
                                const isGreen = i % 2 === 0;
                                return (
                                    <FadeUp key={i} delay={i * 80}>
                                        <TiltCard className="h-full w-full">
                                            <div className={`relative h-full w-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-6 flex flex-col shadow-xl shadow-foreground/[0.03] overflow-hidden transition-all duration-500 group ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}>
                                                <TextureOverlay />
                                                <div className={`absolute top-0 left-0 w-20 h-20 blur-3xl opacity-10 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`} />
                                                <div className="relative z-10">
                                                    <div className={`h-12 w-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-500 group-hover:scale-110 ${isGreen ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'}`}>
                                                        <item.icon size={22} />
                                                    </div>
                                                    <h4 className={`text-base font-display font-bold text-foreground mb-1 tracking-tight transition-colors ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>
                                                        {item.title}
                                                    </h4>
                                                    <p className="text-xs text-foreground/60 leading-relaxed m-0">{item.desc}</p>
                                                </div>
                                            </div>
                                        </TiltCard>
                                    </FadeUp>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>






            <TechStack />

        </div>
    );
}
