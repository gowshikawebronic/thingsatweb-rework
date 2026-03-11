"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Linkedin, Twitter, Instagram, ArrowRight, CheckCircle2 } from "lucide-react";
import { servicesRegistry } from "@/app/services/data/servicesRegistry";
import TextureOverlay from "../UI/TextureOverlay";
// import LeadModal from './LeadModal'; // Uncomment when ready

/* ── MODERN WORD SWAP ANIMATION ── */
function RotatingText({ words, className }: { words: string[], className?: string }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 3000); // Changes every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    const longestWord = words.reduce((a, b) => (a.length > b.length ? a : b), "");

    return (
        <span className={`relative inline-block ${className}`}>
            <span className="invisible pointer-events-none">{longestWord}</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 whitespace-nowrap"
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

export default function Hero() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Grab 3 images from your registry to display in the floating cards
    const card1 = servicesRegistry["web-development"]?.preview;
    const card2 = servicesRegistry["cloud-services"]?.preview;
    const card3 = servicesRegistry["ai-machine-learning"]?.preview;

    return (
        <section className="relative bg-transparent w-full min-h-screen flex items-center overflow-hidden pt-20 pb-10">

            {/* --- GIANT BACKGROUND TEXT (INSTANT RENDER) --- */}
            <div className="absolute inset-0 z-[0] pointer-events-none flex flex-col items-center justify-center overflow-hidden mix-blend-overlay dark:mix-blend-lighten">
                <h2 className="text-foreground/[0.04] dark:text-foreground/[0.02] font-display font-black text-[120px] sm:text-[180px] lg:text-[250px] xl:text-[320px] uppercase tracking-tighter leading-[0.8] text-center select-none w-full whitespace-nowrap">
                    THINGS <br /> AT WEB
                </h2>
            </div>

            <div className="container-custom relative z-[4] w-full h-full flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">

                {/* ==========================================
                    LEFT SIDE: MINIMAL TEXT 
                ========================================== */}
                <motion.div
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full lg:w-1/2 max-w-2xl"
                >


                    {/* Animated Heading */}
                    <h1 className="font-display text-foreground font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.1] tracking-tight mb-6">
                        Are You Looking <br />
                        For <RotatingText
                            words={["A Website?", "An App?", "IoT Solutions?", "Cloud Infra?"]}
                            className="text-gradient-blue"
                        />
                    </h1>

                    {/* Minimal Paragraph */}
                    <p className="text-foreground/70 text-lg md:text-xl leading-relaxed mb-10 max-w-xl font-medium">
                        Whether you need a scalable application, robust cloud architecture, or intelligent IoT systems, the key to scale is a beautifully engineered plan.
                        <span className="block mt-4 text-foreground font-bold">
                            Things at Web builds for the future.
                        </span>
                    </p>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="btn-ripple h-14 px-8 cursor-pointer text-white font-bold transition-all flex items-center gap-3 group shadow-[0_10px_30px_rgba(14,173,43,0.2)] hover:shadow-[0_15px_40px_rgba(14,173,43,0.3)] duration-300 ease-out bg-gradient-green rounded-xl hover:-translate-y-1"
                        >
                            Start Your Project
                            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </button>

                        <button
                            onClick={() => setIsModalOpen(true)}
                            className="h-14 px-8 cursor-pointer font-bold transition-all duration-300 ease-out border-2 border-brand-blue/30 text-brand-blue bg-white/50 dark:bg-gray-900/50 backdrop-blur-md rounded-xl hover:bg-brand-blue/10 hover:border-brand-blue hover:-translate-y-1 flex items-center gap-2"
                        >
                            <CheckCircle2 size={20} />
                            Free Architecture Audit
                        </button>
                    </div>
                </motion.div>

                {/* ==========================================
                    RIGHT SIDE: FLOATING SERVICE CARDS 
                ========================================== */}
                <div className="w-full lg:w-1/2 relative h-[500px] lg:h-[600px] hidden md:flex items-center justify-center">

                    {/* CARD 3 (Bottom Left - Furthest Back) */}
                    {card3 && (
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: 50 }}
                            animate={{ opacity: 1, x: 0, y: [20, 0, 20] }}
                            transition={{ opacity: { duration: 1, delay: 0.6 }, y: { duration: 7, repeat: Infinity, ease: "easeInOut" } }}
                            className="absolute left-0 bottom-10 z-[1] w-56 h-64 bg-white/40 dark:bg-gray-900/40 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-3xl p-6 shadow-2xl overflow-hidden"
                            style={{ transform: "rotate(-10deg)" }}
                        >
                            <TextureOverlay />
                            <img src={card3.image} alt={card3.title} className="relative z-10 w-full h-full object-contain opacity-80" />
                        </motion.div>
                    )}

                    {/* CARD 2 (Top Right - Middle Depth) */}
                    {card2 && (
                        <motion.div
                            initial={{ opacity: 0, x: 50, y: -50 }}
                            animate={{ opacity: 1, x: 0, y: [-15, 10, -15] }}
                            transition={{ opacity: { duration: 1, delay: 0.4 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 } }}
                            className="absolute right-0 top-10 z-[2] w-64 h-72 bg-white/50 dark:bg-gray-900/50 backdrop-blur-lg border border-white/50 dark:border-white/20 rounded-3xl p-6 shadow-2xl overflow-hidden"
                            style={{ transform: "rotate(5deg)" }}
                        >
                            <TextureOverlay />
                            <img src={card2.image} alt={card2.title} className="relative z-10 w-full h-full object-contain opacity-90 drop-shadow-lg" />
                        </motion.div>
                    )}

                    {/* CARD 1 (Center - Front Focus) */}
                    {card1 && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1, y: [-10, 15, -10] }}
                            transition={{ opacity: { duration: 1, delay: 0.2 }, scale: { duration: 1, delay: 0.2 }, y: { duration: 8, repeat: Infinity, ease: "easeInOut", delay: 0.5 } }}
                            className="absolute z-[3] w-72 h-80 bg-white/70 dark:bg-gray-900/70 backdrop-blur-2xl border border-white/60 dark:border-white/30 rounded-[2rem] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.1)] dark:shadow-[0_30px_60px_rgba(0,0,0,0.4)] overflow-hidden flex flex-col justify-center group"
                        >
                            {/* Inner Glass Textures matching the Services section */}
                            <TextureOverlay />
                            <div className="absolute -top-10 -left-10 w-32 h-32 bg-brand-green opacity-20 blur-3xl rounded-full"></div>

                            <img src={card1.image} alt={card1.title} className="relative z-10 w-full h-full object-contain drop-shadow-2xl group-hover:scale-110 transition-transform duration-700 ease-out" />
                        </motion.div>
                    )}

                </div>
            </div>

            {/* --- SOCIAL ICONS (Left Fixed) --- */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-[5] flex flex-col gap-5 hidden xl:flex"
            >
                {[
                    { Icon: Linkedin, href: "https://linkedin.com" },
                    { Icon: Twitter, href: "https://x.com" },
                    { Icon: Instagram, href: "https://instagram.com" },
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
        </section>
    );
}