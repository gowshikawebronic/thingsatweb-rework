"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Facebook, Youtube, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesRegistry } from "@/app/services/data/servicesRegistry";
import TextureOverlay from "../UI/TextureOverlay";
import { useTranslation } from "@/i18n/LanguageProvider";

/* ── MODERN WORD SWAP ANIMATION ── */
/* ── MODERN WORD SWAP ANIMATION ── */
function RotatingText({ words, className = "" }: { words: string[], className?: string }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Changes every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

    return (
        <span className="relative inline-block">
            {/* Apply className here so the invisible spacer has the exact same font properties */}
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
                    // Apply the className directly to the animated text here!
                    className={`absolute left-0 top-0 whitespace-nowrap ${className}`}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { t } = useTranslation();

    // Grab 3 images from your registry to display in the floating cards
    const card1 = servicesRegistry["web-development"]?.preview;
    const card2 = servicesRegistry["cloud-services"]?.preview;
    const card3 = servicesRegistry["ai-machine-learning"]?.preview;

    return (
        <section className="relative bg-transparent w-full min-h-screen flex items-center overflow-hidden pt-32 lg:pt-20 pb-10">

            {/* --- GIANT BACKGROUND TEXT (INSTANT RENDER) --- */}
            <div className="absolute inset-0 z-[0] pointer-events-none flex flex-col items-center justify-center overflow-hidden mix-blend-overlay dark:mix-blend-lighten">
                <h2 className="text-foreground/[0.04] dark:text-foreground/[0.02] font-display font-black text-[120px] sm:text-[180px] lg:text-[250px] xl:text-[320px] uppercase tracking-tighter leading-[0.8] text-center select-none w-full whitespace-nowrap">
                    THINGS <br /> AT WEB
                </h2>
            </div>

            {/* ==========================================
                1. DESKTOP SOCIAL ICONS (Hidden on Mobile) 
            ========================================== */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[20] hidden lg:flex flex-col gap-5"
            >
                {[
                    { Icon: Facebook, href: "https://www.facebook.com/thingsatweb" },
                    { Icon: Youtube, href: "https://www.youtube.com/@thingsatweb" },
                    { Icon: Instagram, href: "https://www.instagram.com/thingsatweb/" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/thingsatweb" },
                ].map(({ Icon, href }, i) => (
                    <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 flex items-center justify-center text-foreground/60 shadow-lg hover:text-brand-green hover:border-brand-green hover:bg-brand-green/10 transition-all duration-300 hover:scale-110"
                    >
                        <Icon size={20} />
                    </a>
                ))}
            </motion.div>

            {/* ==========================================
                2. MOBILE SOCIAL ICONS (Hidden on Desktop) 
            ========================================== */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[20] flex lg:hidden flex-col gap-3"
            >
                {[
                    { Icon: Facebook, href: "https://www.facebook.com/thingsatweb" },
                    { Icon: Youtube, href: "https://www.youtube.com/@thingsatweb" },
                    { Icon: Instagram, href: "https://www.instagram.com/thingsatweb/" },
                    { Icon: Linkedin, href: "https://www.linkedin.com/company/thingsatweb" },
                ].map(({ Icon, href }, i) => (
                    <a
                        key={i}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-xl border border-white/50 dark:border-white/10 flex items-center justify-center text-foreground/60 shadow-lg active:scale-95 transition-all"
                    >
                        <Icon className="w-4 h-4" />
                    </a>
                ))}
            </motion.div>

            {/* Main Content Container - Extra left padding on mobile so content clears the absolute icons */}
            <div className="container-custom relative z-[4] w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8   lg:pl-12">

                {/* ==========================================
                    LEFT SIDE: ORIGINAL PC TEXT & PC BUTTONS 
                ========================================== */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 max-w-2xl z-10"
                >
                    {/* Animated Heading */}
                    <h1 className="font-display text-foreground font-black text-[28px] sm:text-[36px] lg:text-[52px] xl:text-[70px] leading-[1.1] tracking-tight mb-6">
                        {t("hero.titleLine1") as string} <br />
                        {t("hero.titleLine2") as string}{" "}<RotatingText
                            words={t("hero.rotatingWords") as string[]}
                            className="text-gradient-blue"
                        />
                    </h1>

                    {/* Minimal Paragraph */}
                    <p className="text-foreground/70 text-[18px] md:text-[20px] leading-relaxed mb-10 max-w-xl font-medium">
                        {t("hero.description") as string}
                        <span className="block mt-4 text-foreground font-bold">
                            {t("hero.descriptionBold") as string}
                        </span>
                    </p>

                    {/* PC ONLY Action Buttons */}
                    <div className="hidden lg:flex flex-row items-center gap-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-ripple h-14 px-8 cursor-pointer text-white font-bold transition-all flex items-center gap-3 group shadow-[0_10px_30px_rgba(14,173,43,0.2)] hover:shadow-[0_15px_40px_rgba(14,173,43,0.3)] duration-300 ease-out bg-gradient-green rounded-xl hover:-translate-y-1"
                        >
                            {t("hero.ctaPrimary") as string}
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 px-8 cursor-pointer font-bold transition-all duration-300 ease-out border-2 border-brand-blue/30 text-brand-blue bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl hover:bg-brand-blue/10 hover:border-brand-blue hover:-translate-y-1 flex items-center gap-2"
                        >
                            <CheckCircle2 size={20} />
                            {t("hero.ctaSecondary") as string}
                        </button>
                    </div>
                </motion.div>

                {/* ==========================================
                    RIGHT SIDE: MOBILE STACK (CARDS + BUTTONS) 
                ========================================== */}
                <div className="w-full lg:w-1/2 flex flex-col mt-4 lg:mt-0">

                    {/* Floating Cards Area */}
                    <div className="relative w-full h-[380px] sm:h-[500px] lg:h-[600px] flex items-center justify-center lg:justify-center mt-6 lg:mt-0">

                        {/* CARD 3 (Bottom Left - Furthest Back) */}
                        {card3 && (
                            <motion.div
                                initial={{ opacity: 0, x: -50, y: 50 }}
                                animate={{ opacity: 1, x: 0, y: [20, 0, 20] }}
                                transition={{ opacity: { duration: 1, delay: 0.6 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
                                className="absolute left-0 lg:left-0 bottom-2 lg:bottom-10 z-[1] w-36 h-44 sm:w-56 sm:h-64 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
                                style={{ transform: "rotate(-10deg)" }}
                            >
                                <TextureOverlay className="opacity-20" />
                                <img src={card3.image} alt={card3.title} className="relative z-10 w-full h-full object-contain opacity-80" />
                            </motion.div>
                        )}

                        {/* CARD 2 (Top Right - Middle Depth) */}
                        {card2 && (
                            <motion.div
                                initial={{ opacity: 0, x: 50, y: -50 }}
                                animate={{ opacity: 1, x: 0, y: [-15, 10, -15] }}
                                transition={{ opacity: { duration: 1, delay: 0.4 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                                className="absolute right-0 lg:right-0 top-2 lg:top-10 z-[2] w-40 h-48 sm:w-64 sm:h-72 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-white/50 dark:border-white/20 rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl overflow-hidden"
                                style={{ transform: "rotate(5deg)" }}
                            >
                                <TextureOverlay className="opacity-20" />
                                <img src={card2.image} alt={card2.title} className="relative z-10 w-full h-full object-contain opacity-90 drop-shadow-lg" />
                            </motion.div>
                        )}

                        {/* CARD 1 (Center - Front Focus) */}
                        {card1 && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1, y: [-10, 15, -10] }}
                                transition={{ opacity: { duration: 1, delay: 0.2 }, scale: { duration: 1, delay: 0.2 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                                className="absolute z-[3] w-48 h-56 sm:w-72 sm:h-80 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-white/60 dark:border-white/30 rounded-2xl sm:rounded-[2rem] p-6 sm:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_40px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-center group"
                            >
                                <TextureOverlay className="opacity-20" />
                                <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-green opacity-20 blur-3xl rounded-full"></div>

                                <img src={card1.image} alt={card1.title} className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out" />
                            </motion.div>
                        )}
                    </div>

                    {/* --- MOBILE ONLY ELEGANT BUTTONS (Positioned below the cards) --- */}
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                        className="flex lg:hidden flex-col w-full gap-4 mt-8 z-10"
                    >
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full btn-ripple h-14 cursor-pointer text-white text-xs tracking-widest uppercase font-bold transition-all flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(14,173,43,0.2)] bg-gradient-green rounded-xl active:scale-95"
                        >
                            {t("hero.ctaPrimaryMobile") as string}
                        </button>
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="w-full h-14 cursor-pointer text-xs tracking-widest uppercase font-bold transition-all border-2 border-brand-blue/30 text-brand-blue bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl active:bg-brand-blue/10 active:scale-95 flex items-center justify-center gap-2"
                        >
                            {t("hero.ctaSecondaryMobile") as string}
                        </button>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}