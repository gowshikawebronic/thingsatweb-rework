"use client";

import { useRef } from "react";
import { Quote, Zap, LayoutGrid } from "lucide-react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";

export default function UniversalCaseStudies({ data }: { data: ServicePageData['caseStudies'] }) {
    const containerRef = useRef(null);

    if (!data) return null;

    return (
        <section id="case-studies" className="bg-background py-20 lg:py-24 font-sora relative" ref={containerRef}>
            <div className=" mx-auto px-6 max-w-7xl">

                {/* Header */}
                <SectionHeader
                    badge="Proven Impact"
                    title={data.heading}
                    description={data.description}
                    centered={true}
                    className="max-w-3xl mx-auto mb-16"
                    size="default"
                />

                {/* STANDARD SCROLLING CARD container  - Increased gap for clean separation */}
                <div className="flex flex-col gap-16 lg:gap-24 pb-16 w-full">
                    {data.items.map((study, index) => {
                        return (
                            <motion.div
                                key={study.id || index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-10%" }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                // The card itself is forced to be full height, but with ZERO sticky logic
                                className="group bg-white dark:bg-gray-900 rounded-3xl border border-foreground/10 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col min-h-[calc(100vh-120px)] overflow-hidden"
                            >
                                {/* Grid layout that stretches to fill the tall card */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">

                                    {/* --- LEFT: NARRATIVE & DETAILS --- */}
                                    <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-center relative z-10 bg-white dark:bg-gray-900">

                                        {/* Meta Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`p-2.5 rounded-xl bg-foreground/5 border border-foreground/10 ${study.color} text-brand-blue`}>
                                                <DynamicIcon name={study.icon} size={20} />
                                            </div>
                                            <div>
                                                <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-blue mb-0.5">
                                                    {study.category}
                                                </span>
                                                <h3 className="text-body-small font-semibold text-foreground">
                                                    {study.client}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Title (Standard Size) */}
                                        <h2 className="text-h3 font-bold text-foreground mb-8 leading-snug">
                                            {study.title}
                                        </h2>

                                        {/* Challenge & Solution Grid */}
                                        <div className="grid md:grid-cols-2 gap-6 mb-8 border-b border-foreground/5 pb-8">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                                    The Challenge
                                                </h4>
                                                <p className="text-body-small text-foreground/60">
                                                    {study.challenge}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/40 mb-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                                    The Solution
                                                </h4>
                                                <p className="text-body-small text-foreground/60">
                                                    {study.solution}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/40 mb-4">
                                                <LayoutGrid size={14} className="text-brand-blue" />
                                                Technologies & Strategy
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {study.implementation.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-foreground/5 border border-foreground/10 rounded-lg text-xs font-medium text-foreground/60 hover:border-brand-blue/30 hover:text-brand-blue transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- RIGHT: IMPACT & RESULTS --- */}
                                    <div className="bg-foreground/[0.02] p-8 lg:p-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-foreground/10 flex flex-col justify-center">

                                        {/* Metrics Grid */}
                                        <div className="mb-10">
                                            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-foreground/40 mb-4">
                                                <Zap size={14} className="text-amber-500 fill-amber-500" />
                                                Key Impact
                                            </h4>

                                            <div className="grid grid-cols-1 gap-3">
                                                {study.results.map((res, i) => (
                                                    <div key={i} className="bg-white dark:bg-gray-800 p-5 rounded-xl border border-foreground/10 shadow-sm flex flex-col justify-center">
                                                        <span className="block text-h4 font-bold text-brand-blue mb-1 tracking-tight">
                                                            {res.value}
                                                        </span>
                                                        <span className="block text-[10px] font-bold text-foreground/50 uppercase tracking-wider">
                                                            {res.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quote Box */}
                                        <div className="relative bg-white dark:bg-gray-800 p-6 rounded-2xl border border-foreground/10 shadow-sm">
                                            <Quote size={20} className="text-blue-500/20 mb-3" />
                                            <p className="text-body-small text-foreground/70 italic mb-5">
                                                "{study.quote}"
                                            </p>
                                            <div className="flex items-center gap-3 border-t border-foreground/5 pt-4">
                                                <div className="h-8 w-8 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xs">
                                                    {study.author.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-foreground tracking-wide">
                                                        {study.author}
                                                    </span>
                                                    <span className="text-[10px] font-semibold text-foreground/50 uppercase">
                                                        {study.client}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}