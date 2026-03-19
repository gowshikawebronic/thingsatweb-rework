"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { ChevronRight, ArrowUpRight, CheckCircle2, ChevronDown, X } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ProductFeaturesData } from "@/app/product/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Splits a packed description string into individual bullet points.
 */
function splitIntoBullets(description: string): string[] {
    if (!description) return [];

    const lines = description.split(/\n/).map(line => line.trim()).filter(Boolean);
    if (lines.length > 1) return lines;

    const sentences = description.split(/\.\s+(?=[A-Z€<\d])/).map(s => s.trim()).filter(Boolean);
    return sentences.map(s => s.endsWith('.') ? s : s + '.');
}

/** Renders a description as a bulleted list if it has multiple points, otherwise as a paragraph */
function DescriptionRenderer({ text, className = "" }: { text: string; className?: string }) {
    const bullets = splitIntoBullets(text);

    if (bullets.length <= 1) {
        return <p className={`text-slate-500 leading-relaxed text-sm ${className}`}>{text}</p>;
    }

    return (
        <ul className={`space-y-1.5 ${className}`}>
            {bullets.map((bullet, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-slate-500 leading-relaxed">
                    <span className="text-blue-400 mt-1.5 shrink-0">
                        <svg width="6" height="6" viewBox="0 0 6 6" fill="currentColor"><circle cx="3" cy="3" r="3" /></svg>
                    </span>
                    <span>{bullet}</span>
                </li>
            ))}
        </ul>
    );
}

export default function UniversalProductFeatures({ data }: { data: ProductFeaturesData }) {
    const [selectedFeature, setSelectedFeature] = useState<typeof data.features[0] | null>(null);
    const [activeTab, setActiveTab] = useState<string>("");

    // OPTIMIZATION 2: Ready state to defer heavy DOM rendering
    const [isModalReady, setIsModalReady] = useState(false);

    // Scroll detection refs
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [showContentScrollHint, setShowContentScrollHint] = useState(false);

    // Prevent background scrolling, prevent layout shift, and handle render delay
    useEffect(() => {
        if (selectedFeature) {
            // OPTIMIZATION 3: Compensate for scrollbar width to prevent background layout shift
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;

            // Give Framer Motion 50ms to start the slide-up before blocking the main thread
            const timer = setTimeout(() => setIsModalReady(true), 50);
            return () => clearTimeout(timer);
        } else {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
            setIsModalReady(false);
        }

        // Safety cleanup on unmount
        return () => {
            document.body.style.overflow = "unset";
            document.body.style.paddingRight = "0px";
        };
    }, [selectedFeature]);

    // OPTIMIZATION 1: Unified scroll checker with useCallback and requestAnimationFrame
    const checkScroll = useCallback(() => {
        if (!mobileScrollRef.current) return;

        window.requestAnimationFrame(() => {
            const { scrollTop, scrollHeight, clientHeight } = mobileScrollRef.current!;
            const shouldShow = scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight - 20;

            // Only trigger a re-render if the boolean value actually changes
            setShowContentScrollHint(prev => prev !== shouldShow ? shouldShow : prev);
        });
    }, []);

    // Re-check scrolling on changes
    useEffect(() => {
        if (selectedFeature && isModalReady) {
            const timer = setTimeout(checkScroll, 100);
            window.addEventListener("resize", checkScroll);
            return () => {
                clearTimeout(timer);
                window.removeEventListener("resize", checkScroll);
            };
        }
    }, [selectedFeature, activeTab, isModalReady, checkScroll]);

    if (!data) return null;

    return (
        <section className="relative container-pd bg-slate-50 py-24 font-sora overflow-hidden border-b border-slate-200/60">
            <div className=" mx-auto px-6 max-w-7xl relative z-10">

                <SectionHeader
                    badge={data.badge}
                    title={data.heading}
                    description={data.description}
                    centered={true}
                    className="max-w-3xl mx-auto mb-16"
                    size="default"
                />

                {/* FEATURES GRID */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {data.features.map((feature, index) => {
                        const totalItems = feature.tabs?.reduce((sum, tab) => {
                            const c = tab.content;
                            return sum + (c.items?.length || 0) + (c.specs?.length || 0) + (c.steps?.length || 0);
                        }, 0) || 0;

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                onClick={() => {
                                    setSelectedFeature(feature);
                                    if (feature.tabs && feature.tabs.length > 0) {
                                        setActiveTab(feature.tabs[0].id);
                                    }
                                }}
                                className="group relative bg-white rounded-4xl p-8 border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-500 cursor-pointer flex flex-col h-full"
                            >
                                <div className={`absolute top-0 inset-x-8 h-1 rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${feature.bg.replace("/10", "").replace("bg-", "bg-")}`} />

                                <div className="flex items-start justify-between mb-6">
                                    <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${feature.bg} ${feature.color} group-hover:scale-110 transition-transform duration-500`}>
                                        <DynamicIcon name={feature.icon} size={28} strokeWidth={1.5} />
                                    </div>
                                    <div className="flex items-center gap-2">
                                        {totalItems > 0 && (
                                            <span className="text-[10px] font-black text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-full uppercase tracking-wider">
                                                {totalItems} specs
                                            </span>
                                        )}
                                        <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                                            <ArrowUpRight size={18} />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                        {feature.title}
                                    </h3>
                                    <p className="text-slate-500 leading-relaxed mb-4">
                                        {feature.desc}
                                    </p>

                                    {feature.fullDescription?.[0] && (
                                        <p className="text-xs text-slate-400 leading-relaxed line-clamp-2 mb-5">
                                            {feature.fullDescription[0]}
                                        </p>
                                    )}

                                    {feature.tabs && feature.tabs.length > 0 && (
                                        <div className="flex flex-wrap gap-1.5 mb-2">
                                            {feature.tabs.map((tab) => (
                                                <span
                                                    key={tab.id}
                                                    className="text-[10px] font-bold text-slate-400 bg-slate-50 border border-slate-100 px-2.5 py-1 rounded-lg uppercase tracking-wider"
                                                >
                                                    {tab.label}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                <div className="mt-6 pt-5 border-t border-slate-50 flex items-center justify-between">
                                    <span className="text-sm font-bold text-slate-400 group-hover:text-blue-600 transition-colors uppercase tracking-wider">
                                        Explore {feature.tabs?.length || 0} sections
                                    </span>
                                    <ChevronRight size={18} className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

            </div>

            {/* FULL-PAGE MODAL */}
            <AnimatePresence>
                {selectedFeature && (
                    <div className="fixed inset-0 z-200 flex items-end lg:items-stretch justify-center">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
                            onClick={() => setSelectedFeature(null)}
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="relative w-full h-[100dvh] bg-white shadow-2xl overflow-hidden flex flex-col"
                        >

                            {/* TOP BAR */}
                            <div className="shrink-0 bg-white border-b border-slate-200 px-6 lg:px-10 py-4 flex items-center justify-between z-50">
                                <div className="flex items-center gap-4 min-w-0">
                                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${selectedFeature.bg} ${selectedFeature.color} shrink-0`}>
                                        <DynamicIcon name={selectedFeature.icon} size={22} />
                                    </div>
                                    <div className="min-w-0">
                                        <h2 className="text-lg lg:text-xl font-black text-slate-900 truncate">{selectedFeature.title}</h2>
                                        <p className="text-xs text-slate-400 truncate hidden sm:block">{selectedFeature.desc}</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="h-10 w-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-red-50 hover:text-red-500 transition-colors shrink-0 ml-4"
                                >
                                    <X size={20} />
                                </button>
                            </div>

                            {/* BODY */}
                            <div className="flex-1 flex overflow-hidden min-h-0">
                                {isModalReady ? (
                                    <>
                                        {/* SIDEBAR TABS — Desktop only */}
                                        {selectedFeature.tabs && selectedFeature.tabs.length > 0 && (
                                            <div className="hidden lg:flex flex-col w-64 xl:w-72 shrink-0 border-r border-slate-100 bg-slate-50/50 overflow-y-auto">
                                                <div className="p-5 space-y-1">
                                                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-3 px-3">Sections</p>
                                                    {selectedFeature.tabs.map((tab) => {
                                                        const itemCount = (tab.content.items?.length || 0) + (tab.content.specs?.length || 0) + (tab.content.steps?.length || 0);
                                                        return (
                                                            <button
                                                                key={tab.id}
                                                                onClick={() => setActiveTab(tab.id)}
                                                                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center justify-between gap-2
                                                                    ${activeTab === tab.id
                                                                        ? "bg-blue-600 text-white shadow-md shadow-blue-500/20"
                                                                        : "text-slate-600 hover:bg-white hover:shadow-sm"
                                                                    }`}
                                                            >
                                                                <span className="truncate">{tab.label}</span>
                                                                {itemCount > 0 && (
                                                                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full shrink-0 ${activeTab === tab.id ? "bg-white/20 text-white" : "bg-slate-100 text-slate-400"}`}>
                                                                        {itemCount}
                                                                    </span>
                                                                )}
                                                            </button>
                                                        );
                                                    })}
                                                </div>

                                                <div className="mt-auto p-5 border-t border-slate-100">
                                                    <div className="text-xs text-slate-400 leading-relaxed space-y-2">
                                                        {selectedFeature.fullDescription.map((p, i) => (
                                                            <p key={i}>{p}</p>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* MAIN CONTENT AREA */}
                                        <div className="flex-1 flex flex-col overflow-hidden min-w-0">

                                            {/* MOBILE TABS */}
                                            {selectedFeature.tabs && selectedFeature.tabs.length > 0 && (
                                                <div className="lg:hidden shrink-0 bg-white border-b border-slate-100 px-4 pt-4 pb-3">
                                                    <div className="flex items-center gap-2 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1">
                                                        {selectedFeature.tabs.map((tab) => (
                                                            <button
                                                                key={tab.id}
                                                                onClick={() => setActiveTab(tab.id)}
                                                                className={`flex items-center justify-center transition-all duration-300 ease-out
                                                                    px-4 py-2 rounded-full min-w-max border text-sm font-bold tracking-wide
                                                                    ${activeTab === tab.id
                                                                        ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25"
                                                                        : "bg-white text-slate-500 border-slate-200 hover:border-blue-300 hover:bg-slate-50"
                                                                    }`}
                                                            >
                                                                {tab.label}
                                                            </button>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}

                                            {/* SCROLLABLE CONTENT */}
                                            <div
                                                ref={mobileScrollRef}
                                                onScroll={checkScroll}
                                                className="flex-1 overflow-y-auto overscroll-contain [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-slate-300"
                                            >
                                                <div
                                                    className={`fixed bottom-0 left-0 right-0 lg:left-64 xl:left-72 h-24 bg-gradient-to-t from-white/95 via-white/70 to-transparent pointer-events-none flex items-end justify-center pb-5 z-50 transition-opacity duration-500 ${showContentScrollHint ? 'opacity-100' : 'opacity-0'}`}
                                                >
                                                    <div className="animate-bounce bg-white shadow-xl border border-slate-200 rounded-full p-2 text-blue-500">
                                                        <ChevronDown size={18} strokeWidth={2.5} />
                                                    </div>
                                                </div>

                                                <div className="p-6 pb-32 lg:p-10 lg:pb-32">
                                                    <div className="max-w-5xl">
                                                        {selectedFeature.tabs?.map((tab) => {
                                                            if (tab.id !== activeTab) return null;

                                                            return (
                                                                <div key={tab.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                                                                    <div className="mb-8">
                                                                        <h3 className="text-2xl font-black text-slate-900 mb-2">{tab.label}</h3>
                                                                        <div className="h-1 w-12 rounded-full bg-blue-500" />
                                                                    </div>

                                                                    {tab.content.type === "list" && tab.content.items && (
                                                                        <div className="grid md:grid-cols-2 gap-5">
                                                                            {tab.content.items.map((item, i) => (
                                                                                <div key={i} className="flex gap-4 p-6 rounded-2xl bg-slate-50/80 border border-slate-100 hover:border-blue-200 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                                                                                    <CheckCircle2 className="text-blue-500 mt-0.5 shrink-0" size={20} />
                                                                                    <div className="min-w-0 flex-1">
                                                                                        <h4 className="font-bold text-slate-900 text-base mb-2">{item.term}</h4>
                                                                                        <DescriptionRenderer text={item.description} />
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}

                                                                    {tab.content.type === "specs" && tab.content.specs && (
                                                                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                                                                            {tab.content.specs.map((spec, i) => (
                                                                                <div key={i} className="p-5 rounded-2xl border border-slate-100 bg-white hover:border-blue-200 hover:shadow-md hover:shadow-blue-900/5 transition-all duration-300">
                                                                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest block mb-2">
                                                                                        {spec.label}
                                                                                    </span>
                                                                                    <span className="font-mono text-slate-900 font-semibold text-lg tracking-tight block break-words">
                                                                                        {spec.value}
                                                                                    </span>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}

                                                                    {tab.content.type === "steps" && tab.content.steps && (
                                                                        <div className="space-y-6 max-w-4xl">
                                                                            {tab.content.steps.map((step, i) => (
                                                                                <div key={i} className="relative flex gap-6 items-start group">
                                                                                    <div className="flex flex-col items-center shrink-0">
                                                                                        <div className="h-12 w-12 rounded-full bg-blue-50 border-4 border-white shadow-sm flex items-center justify-center text-blue-600 font-bold z-10 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                                                                                            {step.step}
                                                                                        </div>
                                                                                        {i < tab.content.steps!.length - 1 && (
                                                                                            <div className="w-0.5 flex-1 bg-slate-100 mt-2" />
                                                                                        )}
                                                                                    </div>
                                                                                    <div className="flex-1 bg-white rounded-2xl p-6 border border-slate-100 group-hover:border-blue-100 group-hover:shadow-md group-hover:shadow-blue-900/5 transition-all duration-300 min-w-0 mb-2">
                                                                                        <h4 className="font-bold text-slate-900 text-lg mb-3">{step.title}</h4>
                                                                                        <DescriptionRenderer text={step.description} />
                                                                                    </div>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    )}
                                                                </div>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    /* Lightweight loading state while animation finishes */
                                    <div className="flex-1 flex items-center justify-center bg-slate-50/30">
                                        <div className="w-8 h-8 border-4 border-blue-200 border-t-blue-500 rounded-full animate-spin" />
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}