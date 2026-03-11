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
        <section id="case-studies" className="bg-slate-50 container-pd py-20 lg:py-24 font-sora relative" ref={containerRef}>
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
                                className="group bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col min-h-[calc(100vh-120px)] overflow-hidden"
                            >
                                {/* Grid layout that stretches to fill the tall card */}
                                <div className="grid grid-cols-1 lg:grid-cols-12 flex-grow">

                                    {/* --- LEFT: NARRATIVE & DETAILS --- */}
                                    <div className="p-8 lg:p-12 lg:col-span-7 flex flex-col justify-center relative z-10 bg-white">

                                        {/* Meta Header */}
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`p-2.5 rounded-xl bg-slate-50 border border-slate-100 ${study.color} text-blue-600`}>
                                                <DynamicIcon name={study.icon} size={20} />
                                            </div>
                                            <div>
                                                <span className="block text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-0.5">
                                                    {study.category}
                                                </span>
                                                <h3 className="text-sm font-semibold text-slate-700">
                                                    {study.client}
                                                </h3>
                                            </div>
                                        </div>

                                        {/* Title (Standard Size) */}
                                        <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-8 leading-snug">
                                            {study.title}
                                        </h2>

                                        {/* Challenge & Solution Grid */}
                                        <div className="grid md:grid-cols-2 gap-6 mb-8 border-b border-slate-100 pb-8">
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span>
                                                    The Challenge
                                                </h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    {study.challenge}
                                                </p>
                                            </div>
                                            <div>
                                                <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                                                    The Solution
                                                </h4>
                                                <p className="text-sm text-slate-600 leading-relaxed">
                                                    {study.solution}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Technologies */}
                                        <div>
                                            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                                                <LayoutGrid size={14} className="text-blue-500" />
                                                Technologies & Strategy
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {study.implementation.map((tech, i) => (
                                                    <span key={i} className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-600 hover:border-blue-500/30 hover:text-blue-600 transition-colors">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* --- RIGHT: IMPACT & RESULTS --- */}
                                    <div className="bg-slate-50/50 p-8 lg:p-12 lg:col-span-5 border-t lg:border-t-0 lg:border-l border-slate-100 flex flex-col justify-center">

                                        {/* Metrics Grid */}
                                        <div className="mb-10">
                                            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">
                                                <Zap size={14} className="text-amber-500 fill-amber-500" />
                                                Key Impact
                                            </h4>

                                            <div className="grid grid-cols-1 gap-3">
                                                {study.results.map((res, i) => (
                                                    <div key={i} className="bg-white p-5 rounded-xl border border-slate-100 shadow-sm flex flex-col justify-center">
                                                        <span className="block text-xl lg:text-2xl font-bold text-blue-600 mb-1 tracking-tight">
                                                            {res.value}
                                                        </span>
                                                        <span className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                                                            {res.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>

                                        {/* Quote Box */}
                                        <div className="relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                                            <Quote size={20} className="text-blue-500/20 mb-3" />
                                            <p className="text-sm text-slate-700 italic leading-relaxed mb-5">
                                                "{study.quote}"
                                            </p>
                                            <div className="flex items-center gap-3 border-t border-slate-50 pt-4">
                                                <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 font-bold text-xs">
                                                    {study.author.charAt(0)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-slate-900 tracking-wide">
                                                        {study.author}
                                                    </span>
                                                    <span className="text-[10px] font-semibold text-slate-500 uppercase">
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