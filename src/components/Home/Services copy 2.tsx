"use client";

import Link from "next/link";
import FadeUp from "../UI/FadeUp";
import ScrollParallax from "../UI/ScrollParallax";
import SectionHeader from "../UI/SectionHeader";
import { servicesRegistry } from "@/app/services/data/servicesRegistry";
import TextureOverlay from "../UI/TextureOverlay";

// --- CUSTOM 3D FLIP CARD COMPONENT ---
interface FlipCardProps {
    preview: {
        title: string;
        tagline: string;
        description: string;
        image: string;
        points: string[];
        technologies: { name: string; logo: string }[];
    };
    colorClass: "brand-green" | "brand-blue";
    linkHref: string;
}

function FlipCard({ preview, colorClass, linkHref }: FlipCardProps) {
    const isGreen = colorClass === "brand-green";

    return (
        <div className="group relative h-[440px] w-full rounded-[2rem] [perspective:1200px] cursor-pointer">

            {/* Added md:will-change-transform so mobile doesn't over-allocate VRAM */}
            <div className="relative w-full h-full transition-all duration-[1200ms] ease-[cubic-bezier(0.23,1,0.32,1)] [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)_scale(1.03)] md:will-change-transform">


                {/* ==========================================
                    FRONT OF CARD (Solid on Mobile, Glass on PC)
                ========================================== */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:translateZ(0)] rounded-[2rem] flex flex-col p-8 overflow-hidden transition-colors duration-[1200ms] group-hover:border-transparent border border-foreground/10
                    bg-white dark:bg-gray-900 shadow-xl 
                    md:bg-white/70 md:dark:bg-gray-900/70 md:backdrop-blur-xl md:shadow-[0_10px_30px_rgba(0,0,0,0.05)] md:dark:shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                `}>
                    {/* The PNG Texture Overlay (Safe for mobile) */}
                    <TextureOverlay />

                    {/* Top: Large Floating Transparent Image */}
                    <div className="relative z-10 w-full h-40 flex items-center justify-center mb-6">
                        <img
                            src={preview.image}
                            alt={preview.title}
                            className="relative w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                        />
                    </div>

                    {/* Middle: Title & Tagline */}
                    <div className="relative z-10 flex flex-col items-center text-center mt-auto mb-6">
                        <h3 className="text-h4 text-foreground mb-2">
                            {preview.title}
                        </h3>
                        <h4 className={`text-sm font-bold tracking-widest uppercase ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>
                            {preview.tagline}
                        </h4>
                    </div>

                    {/* Bottom: Technologies Row */}
                    <div className="relative z-10 flex flex-col items-center gap-3 pt-6 border-t border-foreground/10 w-full">
                        <div className="flex -space-x-3">
                            {preview.technologies.slice(0, 4).map((tech, idx) => (
                                <div
                                    key={idx}
                                    className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border-2 border-brand-surface dark:border-gray-900 flex items-center justify-center p-2 shadow-sm relative z-10 hover:z-20 hover:scale-110 transition-transform"
                                    title={tech.name}
                                >
                                    <img src={tech.logo} alt={tech.name} className="w-full h-full object-contain" />
                                </div>
                            ))}
                            {preview.technologies.length > 4 && (
                                <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-700 border-2 border-brand-surface dark:border-gray-900 flex items-center justify-center text-[11px] font-bold text-gray-500 shadow-sm relative z-0">
                                    +{preview.technologies.length - 4}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* ==========================================
                    BACK OF CARD (Solid on Mobile, Glass on PC)
                ========================================== */}
                <div className={`absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)_translateZ(1px)] border ${isGreen ? 'border-brand-green/40' : 'border-brand-blue/40'} rounded-[2rem] p-8 flex flex-col items-center justify-center overflow-hidden
                    bg-white dark:bg-gray-900 shadow-2xl
                    md:bg-white/90 md:dark:bg-gray-900/90 md:backdrop-blur-xl md:shadow-md
                `}>

                    {/* The PNG Texture Overlay */}
                    <TextureOverlay />

                    {/* INNER GLOW - Hidden on mobile because blur-3xl causes massive lag during animations */}
                    <div className={`hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-40 h-40 blur-3xl opacity-20 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                    <div className="relative z-10 flex flex-col h-full items-center text-center w-full">

                        {/* Title */}
                        <div className="mb-6 pt-4">
                            <h3 className={`text-h4 m-0 ${isGreen ? 'text-gradient-green' : 'text-gradient-blue'}`}>
                                {preview.title}
                            </h3>
                        </div>

                        {/* Elegant Divider */}
                        <div className={`w-12 h-1 rounded-full mb-6 opacity-50 ${isGreen ? 'bg-gradient-green' : 'bg-gradient-blue'}`}></div>

                        {/* Brief Description */}
                        <p className="text-body-small text-gray-600 dark:text-gray-300 line-clamp-4 px-2 mb-auto font-medium">
                            {preview.description}
                        </p>

                        {/* HIGH-END MINIMAL CTA BUTTON */}
                        <div className="w-full mt-8 flex justify-center">
                            <Link
                                href={linkHref}
                                className={`group flex items-center gap-2.5 px-7 py-3 rounded-full border transition-colors duration-300 no-underline ${isGreen
                                    ? 'border-brand-green text-brand-green hover:bg-brand-green hover:text-white'
                                    : 'border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white'
                                    }`}
                            >
                                <span className="text-sm font-medium tracking-widest uppercase">
                                    Explore
                                </span>
                                <svg
                                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

const mainServiceKeys = [
    "web-development",
    "ai-machine-learning",
    "cloud-services",
    "digital-transformation",
    "devops",
    "iot-solutions",
    "data-analytics",
    "software-development",
];

export default function Services() {
    return (
        <section id="services" className="relative py-32 bg-transparent">

            {/* Hidden large background glow on mobile to prevent scroll lag */}
            <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[400px] bg-gradient-blue rounded-full filter blur-[150px] opacity-5 pointer-events-none"></div>

            <div className="container-custom relative z-10">

                <SectionHeader
                    title=""
                    subtitle="Our"
                    highlightText="Services"
                    highlightColor="primary"
                    titleColorClass="text-foreground"
                    subtitleColorClass="text-gray-400"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
                    {mainServiceKeys.map((key, index) => {
                        const service = servicesRegistry[key];
                        if (!service) return null;
                        const { preview } = service;

                        const colIndex = index % 3;
                        const scrollSpeed = colIndex === 0 ? 0.03 : colIndex === 1 ? 0.08 : 0.12;
                        const scrollClass = colIndex === 0 ? "" : colIndex === 1 ? "md:pt-12" : "xl:pt-24";

                        const isGreen = index % 2 === 0;
                        const colorClass = isGreen ? "brand-green" : "brand-blue";

                        return (
                            <ScrollParallax key={key} speed={scrollSpeed} className={scrollClass}>
                                <FadeUp>
                                    <FlipCard
                                        preview={preview}
                                        colorClass={colorClass}
                                        linkHref={`/services/${key}`}
                                    />
                                </FadeUp>
                            </ScrollParallax>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}