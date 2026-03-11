"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2 } from "lucide-react";
import ScrollParallax from "@/components/UI/ScrollParallax";
import FadeUp from "@/components/UI/FadeUp";
import TextureOverlay from "@/components/UI/TextureOverlay";
import TiltCard from "@/components/Home/TiltCard";
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
            {/* Added className here for sizing */}
            <span className={`invisible pointer-events-none ${className}`}>{longestWord}</span>
            <AnimatePresence mode="wait">
                <motion.span
                    key={index}
                    initial={{ y: 30, opacity: 0, filter: "blur(8px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    exit={{ y: -30, opacity: 0, filter: "blur(8px)" }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    // Added className here so the color is visible
                    className={`absolute left-0 top-0 whitespace-nowrap ${className}`}
                >
                    {words[index]}
                </motion.span>
            </AnimatePresence>
        </span>
    );
}

/* ─── CONTACT INFO DATA ─── */
const contactInfo = [
    {
        icon: MapPin,
        label: "Visit Us",
        value: "Sockerbruksgatan 7",
        sub: "53140 Lidköping, Sweden",
        href: "https://maps.google.com/?q=Sockerbruksgatan+7+53140+Lidköping",
        color: "green" as const,
    },
    {
        icon: Mail,
        label: "Email Us",
        value: "kontakt@thingsatweb.se",
        sub: "We reply within 24 hours",
        href: "mailto:kontakt@thingsatweb.se",
        color: "blue" as const,
    },
    {
        icon: Phone,
        label: "Call Us",
        value: "+46 70 777 07 27",
        sub: "Mon-Fri 9:00 – 17:00 CET",
        href: "tel:+46707770727",
        color: "green" as const,
    },
];

export default function ContactClient() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
        consent: false,
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate submission
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 4000);
        setFormState({ name: "", email: "", phone: "", subject: "", message: "", consent: false });
    };

    const handleChange = (field: string, value: string | boolean) => {
        setFormState((prev) => ({ ...prev, [field]: value }));
    };
    const { t } = useTranslation();

    const contactInfoTranslated = [
        { icon: MapPin, label: t("contact.visitUs") as string, value: "Sockerbruksgatan 7", sub: "53140 Lidköping, Sweden", href: "https://maps.google.com/?q=Sockerbruksgatan+7+53140+Lidköping", color: "green" as const },
        { icon: Mail, label: t("contact.emailUs") as string, value: "kontakt@thingsatweb.se", sub: t("contact.emailSub") as string, href: "mailto:kontakt@thingsatweb.se", color: "blue" as const },
        { icon: Phone, label: t("contact.callUs") as string, value: "+46 70 777 07 27", sub: t("contact.callSub") as string, href: "tel:+46707770727", color: "green" as const },
    ];

    return (
        <div className="min-h-screen bg-transparent selection:bg-brand-blue selection:text-white pt-32 lg:pt-40">

            {/* ═══════════════════════════════════════════
          1. SECONDARY HERO
      ═══════════════════════════════════════════ */}
            <section className="relative w-full min-h-[50vh] flex flex-col items-center justify-center text-center px-6 pt-10 pb-16 md:pb-24 overflow-hidden">
                <div className="absolute inset-0 z-[0] pointer-events-none flex flex-col items-center justify-center mix-blend-overlay dark:mix-blend-lighten">
                    <ScrollParallax speed={0.06}>
                        <h2 className="text-foreground/[0.04] dark:text-foreground/[0.02] font-display font-black text-[100px] sm:text-[180px] lg:text-[280px] uppercase tracking-tighter leading-[0.8] select-none whitespace-nowrap">
                            {t("contact.bgText") as string}
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
                        {t("contact.heroTitle") as string}{" "}
                        <RotatingText words={t("contact.rotatingWords") as string[]} className="text-gradient-blue" />
                    </h1>
                    <p className="text-foreground/70 text-lg md:text-xl lg:text-2xl leading-relaxed max-w-2xl font-medium drop-shadow-sm">
                        {t("contact.heroDesc") as string}
                    </p>
                </motion.div>
            </section>

            {/* ═══════════════════════════════════════════
          2. CONTACT INFO CARDS
      ═══════════════════════════════════════════ */}
            <section className="relative bg-transparent pb-8 overflow-hidden">
                <div className="container-custom relative z-10">
                    <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {contactInfoTranslated.map((info, i) => {
                            const isGreen = info.color === "green";
                            return (
                                <FadeUp key={i} delay={i * 80}>
                                    <TiltCard className="h-full w-full">
                                        <a
                                            href={info.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block no-underline h-full"
                                        >
                                            <div className={`relative h-full w-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-8 flex flex-col items-center text-center shadow-xl shadow-foreground/[0.03] overflow-hidden transition-all duration-500 group ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}>
                                                <TextureOverlay />
                                                <div className={`absolute top-0 left-0 w-24 h-24 blur-3xl opacity-10 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`} />

                                                <div className="relative z-10 flex flex-col items-center">
                                                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-5 border transition-all duration-500 group-hover:scale-110 ${isGreen ? 'bg-brand-green/10 border-brand-green/20 text-brand-green group-hover:bg-brand-green group-hover:text-white' : 'bg-brand-blue/10 border-brand-blue/20 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'}`}>
                                                        <info.icon size={24} />
                                                    </div>
                                                    <span className="text-[10px] font-black uppercase tracking-widest text-foreground/40 mb-2">{info.label}</span>
                                                    <h3 className={`text-base font-display font-bold text-foreground tracking-tight mb-1 transition-colors ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>
                                                        {info.value}
                                                    </h3>
                                                    <p className="text-xs text-foreground/50 m-0">{info.sub}</p>
                                                </div>
                                            </div>
                                        </a>
                                    </TiltCard>
                                </FadeUp>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════
          3. CONTACT FORM
      ═══════════════════════════════════════════ */}
            <section className="relative bg-transparent py-24 overflow-hidden">
                <div className="container-custom relative z-10 max-w-3xl">

                    <FadeUp>
                        <div className="relative bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-8 md:p-12 shadow-xl shadow-foreground/[0.03] overflow-hidden">
                            <TextureOverlay />

                            {/* Ambient Glow */}
                            <div className="absolute top-0 left-0 w-40 h-40 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-green" />
                            <div className="absolute bottom-0 right-0 w-40 h-40 blur-3xl opacity-10 pointer-events-none z-0 bg-brand-blue" />

                            <div className="relative z-10">
                                <div className="mb-10">
                                    <h2 className="text-3xl sm:text-4xl font-display font-black text-foreground tracking-tight mb-2">
                                        {t("contact.formTitle") as string}
                                    </h2>
                                    <p className="text-foreground/60 font-medium m-0">
                                        {t("contact.formSupport") as string}{" "}
                                        <a href="tel:+46707770727" className="text-brand-blue hover:text-brand-blue-dark font-bold no-underline transition-colors">
                                            +46 70 777 07 27
                                        </a>
                                    </p>
                                    <p className="text-foreground/50 text-sm mt-1 m-0">
                                        {t("contact.formAlt") as string}
                                    </p>
                                </div>

                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Name & Email */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">{t("contact.labelName") as string}</label>
                                            <input
                                                type="text"
                                                required
                                                value={formState.name}
                                                onChange={(e) => handleChange("name", e.target.value)}
                                                placeholder={t("contact.placeholderName") as string}
                                                className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">{t("contact.labelEmail") as string}</label>
                                            <input
                                                type="email"
                                                required
                                                value={formState.email}
                                                onChange={(e) => handleChange("email", e.target.value)}
                                                placeholder={t("contact.placeholderEmail") as string}
                                                className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Phone & Subject */}
                                    <div className="grid sm:grid-cols-2 gap-5">
                                        <div>
                                            <label className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">{t("contact.labelPhone") as string}</label>
                                            <input
                                                type="tel"
                                                value={formState.phone}
                                                onChange={(e) => handleChange("phone", e.target.value)}
                                                placeholder={t("contact.placeholderPhone") as string}
                                                className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">{t("contact.labelSubject") as string}</label>
                                            <input
                                                type="text"
                                                value={formState.subject}
                                                onChange={(e) => handleChange("subject", e.target.value)}
                                                placeholder={t("contact.placeholderSubject") as string}
                                                className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div>
                                        <label className="block text-xs font-bold text-foreground/40 uppercase tracking-widest mb-2">{t("contact.labelMessage") as string}</label>
                                        <textarea
                                            required
                                            rows={5}
                                            value={formState.message}
                                            onChange={(e) => handleChange("message", e.target.value)}
                                            placeholder={t("contact.placeholderMessage") as string}
                                            className="w-full px-5 py-3.5 bg-white/70 dark:bg-white/[0.04] backdrop-blur-lg border border-white/50 dark:border-white/[0.08] rounded-xl text-foreground placeholder:text-foreground/30 focus:outline-none focus:border-brand-blue/40 focus:ring-2 focus:ring-brand-blue/10 transition-all text-sm font-medium resize-none"
                                        />
                                    </div>

                                    {/* Consent */}
                                    <label className="flex items-start gap-3 cursor-pointer group">
                                        <input
                                            type="checkbox"
                                            required
                                            checked={formState.consent}
                                            onChange={(e) => handleChange("consent", e.target.checked)}
                                            className="mt-1 h-4 w-4 rounded border-foreground/20 text-brand-green focus:ring-brand-green/20 cursor-pointer"
                                        />
                                        <span className="text-xs text-foreground/50 leading-relaxed group-hover:text-foreground/70 transition-colors">
                                            {t("contact.consent") as string}
                                        </span>
                                    </label>

                                    {/* Submit */}
                                    <button
                                        type="submit"
                                        className="w-full inline-flex items-center justify-center gap-3 bg-gradient-green text-white font-bold text-sm uppercase tracking-widest py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer group/btn"
                                    >
                                        {isSubmitted ? (
                                            <>
                                                <CheckCircle2 size={18} />
                                                <span>{t("contact.messageSent") as string}</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                                                <span>{t("contact.sendMessage") as string}</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </FadeUp>

                </div>
            </section>
        </div>
    );
}
