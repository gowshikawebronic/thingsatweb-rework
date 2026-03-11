"use client";

import Link from "next/link";
import FadeUp from "../UI/FadeUp";
import TextureOverlay from "../UI/TextureOverlay";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function CTA() {
    const { t } = useTranslation();
    return (
        <section id="contact" className="relative py-32 md:py-48 flex flex-col justify-center z-20 -mt-12">

            {/* --- SHARP REVERSE DIAGONAL BACKGROUND --- */}
            {/* Applied to an absolute div to prevent the slant from clipping the text */}
            <div className="absolute inset-0 clip-diagonal-reverse bg-gradient-green shadow-[0_-30px_60px_rgba(14,173,43,0.15)] pointer-events-none"></div>

            {/* 1. Subtle physical noise overlay (Just like TechStack) */}
            <TextureOverlay className="opacity-40 mix-blend-overlay" />

            {/* --- MAIN CONTENT --- */}
            <div className="container-custom relative z-10 text-center">
                <FadeUp>
                    <h2 className="text-5xl md:text-7xl font-display font-black text-white drop-shadow-md mb-8 tracking-tight">
                        {t("cta.title") as string} <br className="hidden md:block" />{t("cta.titleLine2") as string}
                    </h2>
                </FadeUp>

                <FadeUp delay={100}>
                    <p className="text-white/90 text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium drop-shadow-sm">
                        {t("cta.description") as string}
                    </p>
                </FadeUp>

                <FadeUp delay={200}>
                    <Link
                        href="mailto:contact@thingsatweb.com"
                        className="btn-ripple inline-flex items-center justify-center gap-3 bg-gradient-blue text-white font-bold text-lg px-10 py-5 rounded-xl shadow-[0_10px_30px_rgba(14,173,43,0.2)] hover:shadow-[0_15px_40px_rgba(14,173,43,0.3)] hover:-translate-y-1 transition-all duration-300 no-underline group/cta"
                    >
                        {t("cta.button") as string}
                        <svg className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </Link>
                </FadeUp>
            </div>
        </section>
    );
}