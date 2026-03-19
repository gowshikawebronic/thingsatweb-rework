"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Facebook, Linkedin, Instagram, MapPin, Mail, Phone, ArrowUpRight, Youtube } from "lucide-react";
import TextureOverlay from "../UI/TextureOverlay";
import { useTranslation } from "@/i18n/LanguageProvider";

// --- LINK CONFIGURATION ---
const SERVICE_LINKS = [
    { name: "Web Development", href: "/services/web-development" },
    { name: "App Development", href: "/services/app-development" },
    { name: "IoT Solutions", href: "/services/iot-solutions" },
    { name: "Cloud Services", href: "/services/cloud-services" },
    { name: "AI & Machine Learning", href: "/services/ai-machine-learning" },
    { name: "Digital Marketing", href: "/services/digital-marketing" },
];

const COMPANY_LINKS = [
    { name: "About Us", href: "/about" },
    { name: "Our Products", href: "/products" },
    { name: "Latest News", href: "/news" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Support", href: "/contact" },
];

const LEGAL_LINKS = [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
];

const SOCIAL_LINKS = [
    { icon: Facebook, href: "https://www.facebook.com/thingsatweb" },
    { icon: Youtube, href: "https://www.youtube.com/@thingsatweb" },
    { icon: Instagram, href: "https://www.instagram.com/thingsatweb/" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/thingsatweb" },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { t } = useTranslation();

    return (
        <footer className="relative pt-32 overflow-hidden">

            {/* Subtle Matte Texture */}
            <TextureOverlay className="opacity-[0.03]" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 pb-16">

                    {/* ==========================================
              COLUMN 1: BRAND & CTA
          ========================================== */}
                    <div className="lg:col-span-5 flex flex-col items-start pr-0 lg:pr-12">
                        <Link href="/" className="mb-8 block no-underline focus:outline-none">
                            <Image
                                src="./assets/logo/thingsatweb.png"
                                alt="Things at Web"
                                width={180}
                                height={50}
                                className="h-10 w-auto object-contain"
                                priority
                            />
                        </Link>

                        <h2 className="text-[26px] sm:text-[34px] font-display font-black text-foreground tracking-tight leading-[1.1] mb-6">
                            {t("footer.tagline1") as string} <br />
                            {t("footer.tagline2") as string} <span className="text-gradient-blue">{t("footer.tagline3") as string}</span>
                        </h2>

                        <p className="text-foreground/60 font-medium leading-relaxed max-w-md mb-10 text-[18px]">
                            {t("footer.description") as string}
                        </p>

                        {/* Premium CTA Button */}
                        <Link
                            href="/contact"
                            className="group inline-flex items-center justify-center gap-3 bg-foreground text-background px-8 h-14 rounded-full text-xs font-bold tracking-widest uppercase shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300"
                        >
                            {t("footer.startProject") as string}
                            <ArrowUpRight size={16} className="group-hover:rotate-45 transition-transform duration-300" />
                        </Link>

                        {/* Matte Social Icons */}
                        <div className="flex items-center gap-4 mt-12">
                            {SOCIAL_LINKS.map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="w-12 h-12 rounded-full bg-foreground/5 border border-foreground/10 flex items-center justify-center text-foreground/60 hover:bg-brand-blue hover:border-brand-blue hover:text-white transition-all duration-300 hover:-translate-y-1 shadow-sm"
                                >
                                    <social.icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* ==========================================
              COLUMN 2: SERVICES DIRECTORY
          ========================================== */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-8 border-b border-foreground/10 pb-4 inline-block">
                            {t("footer.servicesTitle") as string}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {SERVICE_LINKS.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="text-foreground/80 font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block text-[18px]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ==========================================
              COLUMN 3: COMPANY DIRECTORY
          ========================================== */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-8 border-b border-foreground/10 pb-4 inline-block">
                            {t("footer.companyTitle") as string}
                        </h4>
                        <ul className="flex flex-col gap-4">
                            {COMPANY_LINKS.map((item, i) => (
                                <li key={i}>
                                    <Link
                                        href={item.href}
                                        className="text-foreground/80 font-medium hover:text-brand-blue hover:translate-x-1 transition-all duration-300 inline-block text-[18px]"
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ==========================================
              COLUMN 4: CONTACT & LEGAL
          ========================================== */}
                    <div className="lg:col-span-2 flex flex-col gap-8">
                        <div>
                            <h4 className="text-xs font-bold tracking-widest uppercase text-foreground/40 mb-8 border-b border-foreground/10 pb-4 inline-block">
                                {t("footer.contactTitle") as string}
                            </h4>
                            <div className="flex flex-col gap-4">
                                <a href="mailto:kontakt@thingsatweb.se" className="text-foreground/80 font-medium hover:text-brand-blue transition-colors flex items-center gap-3 text-[18px]">
                                    <Mail size={16} className="text-foreground/30" />
                                    kontakt@thingsatweb.se
                                </a>
                                <a href="tel:+46707770727" className="text-foreground/80 font-medium hover:text-brand-blue transition-colors flex items-center gap-3 text-[18px]">
                                    <Phone size={16} className="text-foreground/30" />
                                    +46 70 777 07 27
                                </a>
                                <div className="text-foreground/80 font-medium flex items-start gap-3 mt-2 text-[18px]">
                                    <MapPin size={16} className="text-foreground/30 shrink-0 mt-1" />
                                    <span>Sockerbruksgatan 7 <br /> 53140 Lidköping, SE</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* ==========================================
            BOTTOM BAR: COPYRIGHT & MARQUEE
        ========================================== */}
                <div className="flex flex-col md:flex-row items-center justify-between py-8 gap-6 border-t border-foreground/5 mt-4">
                    <p className="text-foreground/40 text-[10px] md:text-xs font-bold tracking-widest uppercase text-center md:text-left">
                        © {currentYear} {t("footer.copyright") as string}
                    </p>

                    {/* Moved Legal Links to Bottom Bar */}
                    <div className="flex items-center gap-6">
                        {LEGAL_LINKS.map((item, i) => (
                            <Link key={i} href={item.href} className="text-foreground/40 hover:text-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest transition-colors">
                                {item.name}
                            </Link>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-brand-blue" />
                        <div className="w-2 h-2 rounded-full bg-brand-green" />
                        <div className="w-2 h-2 rounded-full bg-foreground" />
                    </div>
                </div>
            </div>

            {/* --- MASSIVE BACKGROUND AGENCY TEXT --- */}
            <div className="relative w-full overflow-hidden flex justify-center pb-6 mt-10 pointer-events-none select-none">
                <h1 className="text-[12vw] leading-none font-display font-black text-foreground/[0.03] dark:text-foreground/[0.02] tracking-tighter whitespace-nowrap">
                    THINGS AT WEB
                </h1>
            </div>

        </footer>
    );
}