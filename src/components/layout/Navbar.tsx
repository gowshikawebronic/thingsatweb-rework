"use client";

import React, { useState, useEffect, isValidElement } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, LayoutGrid } from "lucide-react";
import { products } from "@/AllData/products/PRODUCT_DATA";
import { useTranslation } from "@/i18n/LanguageProvider";

const SERVICES = [
    { name: "All Services", href: "/services", icon: LayoutGrid },
    { name: "Web Development", href: "/service?category=web-development" },
    { name: "AI & ML", href: "/service?category=ai-machine-learning" },
    { name: "Cloud Services", href: "/service?category=cloud-services" },
    { name: "Digital Transformation", href: "/service?category=digital-transformation" },
    { name: "DevOps", href: "/service?category=devops" },
    { name: "IoT Solutions", href: "/service?category=iot-solutions" },
    { name: "Data Analytics", href: "/service?category=data-analytics" },
];

const PRODUCT_ITEMS = [
    { name: "All Products", href: "/products", icon: LayoutGrid },
    ...products.map((product) => ({
        name: product.name,
        href: product.id === "storetech"
            ? "/product?category=storetech"
            : `/products#${product.id}`,
        icon: product.icon
    })),
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);
    const [langOpen, setLangOpen] = useState(false);
    const { theme, setTheme, systemTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const { t, language, setLanguage } = useTranslation();

    const currentFlag = language === "sv" ? "/assets/logo/sweden.png" : "/assets/logo/america.png";

    // Ensure mounted state is true to prevent hydration errors for Theme toggle
    useEffect(() => setMounted(true), []);

    // Handle scroll effect for floating navbar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isMenuOpen]);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const toggleAccordion = (name: string) => {
        setActiveAccordion(activeAccordion === name ? null : name);
    };

    const currentTheme = theme === 'system' ? systemTheme : theme;
    const toggleTheme = () => {
        setTheme(currentTheme === 'dark' ? 'light' : 'dark');
    };

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 flex justify-center pointer-events-none ${scrolled ? "pt-4" : "pt-0"
                }`}
        >
            {/* --- MAIN NAVBAR --- */}
            <div
                className={`pointer-events-auto flex justify-between items-center transition-all duration-500 rounded-full border border-transparent ${scrolled
                    ? "w-[95%] max-w-5xl glass-panel py-3 px-6"
                    : "w-full max-w-7xl bg-transparent py-6 px-6 md:px-12"
                    }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="z-[60] shrink-0 no-underline outline-none flex items-center"
                    aria-label="Home"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <Image
                        src="/assets/logo/thingsatweb.png"
                        alt="Things at Web"
                        width={140}
                        height={40}
                        className="h-8 w-auto object-contain"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-6 items-center font-medium text-sm tracking-wide h-full relative">

                    <Link href="/" className="text-foreground hover:text-brand-green transition-colors no-underline">
                        {t("nav.home") as string}
                    </Link>

                    <Link href="/about" className="text-foreground hover:text-brand-green transition-colors no-underline">
                        {t("nav.about") as string}
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group/nav flex items-center h-full cursor-pointer">
                        <Link href="/services" className="flex items-center gap-1.5 text-foreground hover:text-brand-green transition-colors group/btn py-2 no-underline">
                            {t("nav.services") as string}
                            <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-brand-green transition-transform duration-300 group-hover/nav:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px] invisible opacity-0 translate-y-3 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-none rounded-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-2 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-green"></div>
                                {SERVICES.map((service, index) => {
                                    const IconComp = service.icon as any;
                                    return (
                                        <Link key={index} href={service.href} className="group/item flex items-center gap-3 p-2 rounded-xl hover:bg-brand-surface dark:hover:bg-gray-800 transition-colors no-underline">
                                            {IconComp && (
                                                <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0 group-hover/item:scale-110 transition-transform">
                                                    <IconComp size={16} />
                                                </div>
                                            )}
                                            <div className={`font-bold text-foreground group-hover/item:text-brand-green transition-colors text-sm ${!IconComp && 'ml-2'}`}>
                                                {service.name}
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Products Dropdown */}
                    <div className="relative group/nav flex items-center h-full cursor-pointer">
                        <Link href="/products" className="flex items-center gap-1.5 text-foreground hover:text-brand-green transition-colors group/btn py-2 no-underline">
                            {t("nav.products") as string}
                            <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-brand-green transition-transform duration-300 group-hover/nav:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>

                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[320px] invisible opacity-0 translate-y-3 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:shadow-none rounded-2xl p-4 flex flex-col gap-1 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue"></div>
                                <div className="max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar flex flex-col gap-1">
                                    {PRODUCT_ITEMS.map((product, index) => {
                                        const Icon = product.icon;
                                        const IconComp = isValidElement(Icon) ? null : (Icon as any);
                                        return (
                                            <Link key={index} href={product.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-brand-surface dark:hover:bg-gray-800 group/item transition-colors no-underline">
                                                {Icon && (
                                                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0 group-hover/item:scale-110 transition-transform">
                                                        {isValidElement(Icon) ? Icon : IconComp && <IconComp size={16} />}
                                                    </div>
                                                )}
                                                <div className={`font-bold text-foreground group-hover/item:text-brand-blue transition-colors text-sm ${!Icon && 'ml-2'}`}>
                                                    {product.name}
                                                </div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/news" className="text-foreground hover:text-brand-green transition-colors no-underline">
                        {t("nav.news") as string}
                    </Link>

                    <div className="flex items-center gap-3 pl-4 border-l border-foreground/10">
                        {/* Dark/Light Mode Toggle */}
                        {mounted && (
                            <button
                                onClick={toggleTheme}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-foreground/10 text-foreground hover:bg-brand-surface dark:hover:bg-gray-800 transition-colors"
                                aria-label="Toggle Theme"
                            >
                                {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                            </button>
                        )}

                        {/* Language */}
                        <div className="relative" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
                            <button className="flex items-center justify-center w-9 h-9 rounded-full border border-foreground/10 hover:border-brand-green/30 hover:bg-brand-surface dark:hover:bg-gray-800 transition-colors">
                                <Image src={currentFlag} alt={language.toUpperCase()} width={20} height={20} className="rounded-full object-cover w-5 h-5 shadow-sm" />
                            </button>

                            <div className={`absolute top-full right-0 pt-2 transition-all duration-300 ${langOpen ? 'visible opacity-100 translate-y-0' : 'invisible opacity-0 translate-y-2'}`}>
                                <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl border border-gray-100 dark:border-gray-800 shadow-xl rounded-2xl p-2 w-40 flex flex-col gap-1">
                                    <div className="flex items-center justify-between px-3 py-1 mb-1">
                                        <span className="text-[10px] text-foreground/50 uppercase font-black tracking-widest">{t("nav.selectLanguage") as string}</span>
                                    </div>
                                    <button onClick={() => { setLanguage("en"); setLangOpen(false); }} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-xs font-bold uppercase tracking-widest w-full text-left ${language === 'en' ? 'bg-brand-surface dark:bg-gray-800 text-brand-green' : 'text-foreground hover:bg-brand-surface dark:hover:bg-gray-800 hover:text-brand-green'}`}>
                                        <Image src="/assets/logo/america.png" alt="US" width={20} height={20} className="rounded-full object-cover w-5 h-5 shadow-sm" />
                                        {t("nav.english") as string}
                                    </button>
                                    <button onClick={() => { setLanguage("sv"); setLangOpen(false); }} className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-colors text-xs font-bold uppercase tracking-widest w-full text-left ${language === 'sv' ? 'bg-brand-surface dark:bg-gray-800 text-brand-green' : 'text-foreground hover:bg-brand-surface dark:hover:bg-gray-800 hover:text-brand-green'}`}>
                                        <Image src="/assets/logo/sweden.png" alt="SE" width={20} height={20} className="rounded-full object-cover w-5 h-5 shadow-sm" />
                                        {t("nav.swedish") as string}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <Link
                            href="/contact"
                            className="btn-ripple ml-2 px-6 py-2.5 rounded-xl bg-gradient-green text-white font-bold tracking-wide transition-all duration-300 no-underline hover:-translate-y-0.5 flex items-center gap-1.5 group/cta"
                        >
                            {t("nav.letsTalk") as string}
                        </Link>
                    </div>

                </nav>

                {/* Mobile Menu Toggle & Theme Mode Toggle */}
                <div className="flex items-center gap-2 lg:hidden z-[60] pointer-events-auto">
                    {mounted && (
                        <button
                            onClick={toggleTheme}
                            className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground hover:bg-brand-surface dark:hover:bg-gray-800 transition-colors bg-background/50 backdrop-blur-sm"
                            aria-label="Toggle Theme"
                        >
                            {currentTheme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
                        </button>
                    )}
                    <button
                        onClick={toggleMenu}
                        className="p-2 focus:outline-none shrink-0 relative w-10 h-10 flex flex-col items-center justify-center border border-foreground/10 rounded-full bg-background/50 backdrop-blur-sm transition-colors hover:bg-brand-surface dark:hover:bg-gray-800"
                        aria-label="Toggle Menu"
                    >
                        <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 absolute ${isMenuOpen ? "rotate-45" : "-translate-y-1.5"}`}></div>
                        <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 absolute ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></div>
                        <div className={`w-5 h-0.5 bg-foreground transition-all duration-300 absolute ${isMenuOpen ? "-rotate-45" : "translate-y-1.5"}`}></div>
                    </button>
                </div>
            </div>

            {/* --- MOBILE FULLSCREEN OVERLAY --- */}
            <div
                className={`fixed inset-0 bg-background/98 backdrop-blur-3xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-32 px-6 pb-12 overflow-y-auto pointer-events-auto ${isMenuOpen ? "translate-y-0" : "-translate-y-full"
                    }`}
            >
                <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
                    <Link
                        href="/"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors border-b border-foreground/5 dark:border-white/5 pb-4 no-underline"
                    >
                        {t("nav.home") as string}
                    </Link>

                    <Link
                        href="/about"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors border-b border-foreground/5 dark:border-white/5 pb-4 no-underline"
                    >
                        {t("nav.about") as string}
                    </Link>

                    {/* Mobile Services Accordion */}
                    <div className="border-b border-foreground/5 dark:border-white/5 pb-4">
                        <button
                            onClick={() => toggleAccordion("services")}
                            className="w-full flex justify-between items-center text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors"
                        >
                            {t("nav.services") as string}
                            <svg className={`w-6 h-6 transform transition-transform duration-300 ${activeAccordion === "services" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className={`grid transition-all duration-500 ease-in-out ${activeAccordion === "services" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden flex flex-col gap-3 pl-2">
                                {SERVICES.map((service, index) => {
                                    const IconComp = service.icon as any;
                                    return (
                                        <Link key={index} href={service.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium text-foreground/70 hover:text-brand-green no-underline">
                                            {IconComp && <span className="opacity-70 text-brand-green"><IconComp size={18} /></span>}
                                            {service.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Mobile Products Accordion */}
                    <div className="border-b border-foreground/5 dark:border-white/5 pb-4">
                        <button
                            onClick={() => toggleAccordion("products")}
                            className="w-full flex justify-between items-center text-3xl font-display font-bold text-foreground hover:text-brand-blue transition-colors"
                        >
                            {t("nav.products") as string}
                            <svg className={`w-6 h-6 transform transition-transform duration-300 ${activeAccordion === "products" ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </button>
                        <div className={`grid transition-all duration-500 ease-in-out ${activeAccordion === "products" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"}`}>
                            <div className="overflow-hidden flex flex-col gap-3 pl-2">
                                {PRODUCT_ITEMS.map((product, index) => {
                                    const Icon = product.icon;
                                    const IconComp = isValidElement(Icon) ? null : (Icon as any);
                                    return (
                                        <Link key={index} href={product.href} onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 text-lg font-medium text-foreground/70 hover:text-brand-blue no-underline">
                                            {Icon && <span className="opacity-70 text-brand-blue">{isValidElement(Icon) ? React.cloneElement(Icon as React.ReactElement, { size: 18 } as any) : IconComp && <IconComp size={18} />}</span>}
                                            {product.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <Link
                        href="/news"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors pb-2 no-underline"
                    >
                        {t("nav.news") as string}
                    </Link>

                    {/* Mobile Lang & CTA */}
                    <div className="mt-6 pt-6 border-t border-foreground/10 flex flex-col gap-6">
                        <div className="flex items-center justify-between">
                            <span className="text-foreground/70 font-bold text-sm tracking-widest uppercase">{t("nav.language") as string}</span>
                            <div className="flex gap-2">
                                <button onClick={() => { setLanguage("en"); setIsMenuOpen(false); }} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${language === 'en' ? 'bg-brand-surface dark:bg-gray-800 text-brand-green' : 'text-foreground/60 hover:text-brand-green'}`}>
                                    <Image src="/assets/logo/america.png" alt="US" width={20} height={20} className="w-4 h-4 rounded-full object-cover" />
                                    {t("nav.eng") as string}
                                </button>
                                <button onClick={() => { setLanguage("sv"); setIsMenuOpen(false); }} className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-colors ${language === 'sv' ? 'bg-brand-surface dark:bg-gray-800 text-brand-green' : 'text-foreground/60 hover:text-brand-green'}`}>
                                    <Image src="/assets/logo/sweden.png" alt="SE" width={20} height={20} className="w-4 h-4 rounded-full object-cover" />
                                    {t("nav.swe") as string}
                                </button>
                            </div>
                        </div>

                        <Link
                            href="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="w-full btn-ripple py-4 rounded-xl bg-gradient-green text-center text-white font-bold tracking-widest uppercase shadow-[0_10px_30px_rgba(14,173,43,0.2)] hover:shadow-[0_15px_40px_rgba(14,173,43,0.3)] transition-all duration-300 no-underline hover:-translate-y-1 flex items-center justify-center gap-2 group/cta"
                        >
                            {t("nav.letsTalk") as string}
                            <svg className="w-5 h-5 transform group-hover/cta:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>

                </div>
            </div>
        </header>
    );
}