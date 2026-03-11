"use client";

import { motion } from "framer-motion";

interface SectionHeaderProps {
    title?: string;
    subtitle?: string;
    highlightText?: string;
    highlightColor?: "primary" | "secondary" | "white";
    bgColor?: "green" | "blue" | "none";
    className?: string;
    titleColorClass?: string;
    subtitleColorClass?: string;
}

export default function SectionHeader({
    title,
    subtitle,
    highlightText,
    highlightColor = "primary",
    bgColor = "none",
    className = "",
    titleColorClass = "text-foreground",
    subtitleColorClass,
}: SectionHeaderProps) {

    // Determine subtitle color based on bgColor if not explicitly provided
    let finalSubtitleColor = subtitleColorClass;
    if (!finalSubtitleColor) {
        if (bgColor === "green") finalSubtitleColor = "text-green-100/90";
        else if (bgColor === "blue") finalSubtitleColor = "text-blue-100/90";
        else finalSubtitleColor = "text-gray-400";
    }

    // Determine highlight class
    let highlightClass = "";
    if (highlightColor === "primary") {
        highlightClass = "text-transparent bg-clip-text bg-gradient-green";
    } else if (highlightColor === "secondary") {
        highlightClass = "text-transparent bg-clip-text bg-gradient-blue";
    } else if (highlightColor === "white") {
        highlightClass = "text-white";
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className={`mb-16 md:mb-24 flex flex-wrap items-baseline gap-3 sm:gap-4 ${className}`}
        >
            {subtitle && (
                <span className={`text-3xl sm:text-4xl lg:text-5xl font-medium tracking-widest font-body uppercase ${finalSubtitleColor}`}>
                    {subtitle}
                </span>
            )}
            <h2
                className={`text-[55px] sm:text-[80px] lg:text-[120px] xl:text-[150px] font-display font-black leading-none tracking-tighter m-0 uppercase flex flex-wrap gap-4 ${titleColorClass}`}
            >
                {title}
                {highlightText && (
                    <span className={highlightClass}>
                        {highlightText}
                    </span>
                )}
            </h2>
        </motion.div>
    );
}
