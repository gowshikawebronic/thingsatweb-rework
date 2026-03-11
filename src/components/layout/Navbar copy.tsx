"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

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

    return (
        <header
            className={`fixed w-full top-0 z-50 transition-all duration-500 flex justify-center pointer-events-none ${
                scrolled ? "pt-4" : "pt-0"
            }`}
        >
            {/* --- MAIN NAVBAR --- */}
            <div
                className={`pointer-events-auto flex justify-between items-center transition-all duration-500 rounded-full border border-transparent ${
                    scrolled
                        ? "w-[95%] max-w-5xl glass-panel py-3 px-6" 
                        : "w-full max-w-7xl bg-transparent py-6 px-6 md:px-12"
                }`}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="font-display font-bold text-2xl tracking-tight z-[60] shrink-0 no-underline"
                    aria-label="Home"
                    onClick={() => setIsMenuOpen(false)}
                >
                    <span className="text-brand-green">Things</span>{" "}
                    <span className="text-foreground">at</span>{" "}
                    <span className="text-brand-blue">Web</span>
                    <span className="text-brand-green">.</span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center font-medium text-sm tracking-wide h-full relative">
                    
                    <Link href="#home" className="text-foreground hover:text-brand-green transition-colors no-underline">
                        Home
                    </Link>

                    {/* Services Dropdown */}
                    <div className="relative group/nav flex items-center h-full cursor-pointer">
                        <button className="flex items-center gap-1.5 text-foreground hover:text-brand-green transition-colors group/btn py-2">
                            Services
                            <svg
                                className="w-4 h-4 text-gray-400 group-hover/btn:text-brand-green transition-transform duration-300 group-hover/nav:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>

                        {/* Dropdown Panel - FIX: Increased opacity to 98% for readability */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[480px] invisible opacity-0 translate-y-3 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-6 grid grid-cols-2 gap-x-6 gap-y-4 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-green"></div>

                                <Link href="#cloud" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-brand-surface transition-colors no-underline">
                                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 group-hover/item:scale-110 transition-transform">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground group-hover/item:text-brand-green transition-colors mb-0.5">Cloud Solutions</div>
                                        <div className="text-xs text-gray-500 leading-snug font-normal">AWS, Azure & GCP Architectures</div>
                                    </div>
                                </Link>

                                <Link href="#cyber" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-brand-surface transition-colors no-underline">
                                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mt-1 group-hover/item:scale-110 transition-transform">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground group-hover/item:text-brand-blue transition-colors mb-0.5">Cybersecurity</div>
                                        <div className="text-xs text-gray-500 leading-snug font-normal">Threat hunting & SOC2</div>
                                    </div>
                                </Link>

                                <Link href="#dev" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-brand-surface transition-colors no-underline">
                                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 flex items-center justify-center text-brand-green mt-1 group-hover/item:scale-110 transition-transform">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground group-hover/item:text-brand-green transition-colors mb-0.5">Web & App Dev</div>
                                        <div className="text-xs text-gray-500 leading-snug font-normal">React, Node, scalable apps</div>
                                    </div>
                                </Link>

                                <Link href="#data" className="group/item flex items-start gap-3 p-2 rounded-xl hover:bg-brand-surface transition-colors no-underline">
                                    <div className="w-8 h-8 rounded-lg bg-brand-blue/10 flex items-center justify-center text-brand-blue mt-1 group-hover/item:scale-110 transition-transform">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                                    </div>
                                    <div>
                                        <div className="font-bold text-foreground group-hover/item:text-brand-blue transition-colors mb-0.5">Data & AI</div>
                                        <div className="text-xs text-gray-500 leading-snug font-normal">Analytics & ML models</div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Products Dropdown */}
                    <div className="relative group/nav flex items-center h-full cursor-pointer">
                        <button className="flex items-center gap-1.5 text-foreground hover:text-brand-green transition-colors group/btn py-2">
                            Products
                            <svg
                                className="w-4 h-4 text-gray-400 group-hover/btn:text-brand-green transition-transform duration-300 group-hover/nav:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        
                        {/* Dropdown Panel - FIX: Increased opacity to 98% for readability */}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 w-[280px] invisible opacity-0 translate-y-3 group-hover/nav:visible group-hover/nav:opacity-100 group-hover/nav:translate-y-0 transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)]">
                            <div className="bg-white/95 backdrop-blur-xl border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.08)] rounded-2xl p-3 flex flex-col gap-1 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-blue"></div>
                                
                                <Link href="#" className="block px-4 py-3 rounded-xl hover:bg-brand-surface group/item transition-colors no-underline">
                                    <div className="font-bold text-foreground group-hover/item:text-brand-blue transition-colors">WebOps Cloud</div>
                                    <div className="text-xs text-gray-500 mt-1 font-normal">Automated deployment platform</div>
                                </Link>
                                <Link href="#" className="block px-4 py-3 rounded-xl hover:bg-brand-surface group/item transition-colors no-underline">
                                    <div className="font-bold text-foreground group-hover/item:text-brand-blue transition-colors">SecureShield AI</div>
                                    <div className="text-xs text-gray-500 mt-1 font-normal">Enterprise vulnerability scanner</div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link href="#stats" className="text-foreground hover:text-brand-green transition-colors no-underline">
                        About
                    </Link>
                    <Link href="#tech" className="text-foreground hover:text-brand-green transition-colors no-underline">
                        Tech Stack
                    </Link>

                    <Link
                        href="#contact"
                        className="ml-4 px-6 py-2.5 rounded-full bg-foreground text-background hover:bg-brand-green hover:text-white shadow-md hover:shadow-lg transition-all duration-300 no-underline shrink-0"
                    >
                        Start Project
                    </Link>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    onClick={toggleMenu}
                    className="md:hidden z-[60] p-2 focus:outline-none pointer-events-auto shrink-0 relative w-10 h-10 flex flex-col items-center justify-center"
                    aria-label="Toggle Menu"
                >
                    <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 absolute ${isMenuOpen ? "rotate-45" : "-translate-y-2"}`}></div>
                    <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 absolute ${isMenuOpen ? "opacity-0" : "opacity-100"}`}></div>
                    <div className={`w-6 h-0.5 bg-foreground transition-all duration-300 absolute ${isMenuOpen ? "-rotate-45" : "translate-y-2"}`}></div>
                </button>
            </div>

            {/* --- MOBILE FULLSCREEN OVERLAY --- */}
            <div
                className={`fixed inset-0 bg-background/95 backdrop-blur-2xl z-40 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col pt-32 px-8 pb-12 overflow-y-auto pointer-events-auto ${
                    isMenuOpen ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <div className="flex flex-col gap-6 w-full max-w-sm mx-auto">
                    <Link
                        href="#home"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors border-b border-gray-100 pb-4 no-underline"
                    >
                        Home
                    </Link>

                    {/* Mobile Services Accordion */}
                    <div className="border-b border-gray-100 pb-4">
                        <button
                            onClick={() => toggleAccordion("services")}
                            className="w-full flex justify-between items-center text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors"
                        >
                            Services
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${activeAccordion === "services" ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`grid transition-all duration-500 ease-in-out ${
                                activeAccordion === "services" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden flex flex-col gap-4 pl-4">
                                <Link href="#cloud" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-green no-underline">
                                    Cloud Solutions
                                </Link>
                                <Link href="#cyber" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-green no-underline">
                                    Cybersecurity
                                </Link>
                                <Link href="#dev" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-green no-underline">
                                    Web & App Dev
                                </Link>
                                <Link href="#data" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-green no-underline">
                                    Data & AI
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Products Accordion */}
                    <div className="border-b border-gray-100 pb-4">
                        <button
                            onClick={() => toggleAccordion("products")}
                            className="w-full flex justify-between items-center text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors"
                        >
                            Products
                            <svg
                                className={`w-6 h-6 transform transition-transform duration-300 ${activeAccordion === "products" ? "rotate-180" : ""}`}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <div
                            className={`grid transition-all duration-500 ease-in-out ${
                                activeAccordion === "products" ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                            }`}
                        >
                            <div className="overflow-hidden flex flex-col gap-4 pl-4">
                                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-blue no-underline">
                                    WebOps Cloud
                                </Link>
                                <Link href="#" onClick={() => setIsMenuOpen(false)} className="text-lg font-medium text-gray-500 hover:text-brand-blue no-underline">
                                    SecureShield AI
                                </Link>
                            </div>
                        </div>
                    </div>

                    <Link
                        href="#stats"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors border-b border-gray-100 pb-4 no-underline"
                    >
                        About
                    </Link>
                    <Link
                        href="#tech"
                        onClick={() => setIsMenuOpen(false)}
                        className="text-3xl font-display font-bold text-foreground hover:text-brand-green transition-colors border-b border-gray-100 pb-4 no-underline"
                    >
                        Tech Stack
                    </Link>

                    <Link
                        href="#contact"
                        onClick={() => setIsMenuOpen(false)}
                        className="mt-8 w-full py-4 rounded-full bg-gradient-green text-center text-white font-bold text-xl shadow-lg hover:opacity-90 transition-opacity no-underline"
                    >
                        Let's Talk
                    </Link>
                </div>
            </div>
        </header>
    );
}