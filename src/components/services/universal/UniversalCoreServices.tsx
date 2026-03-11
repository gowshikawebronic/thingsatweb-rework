"use client";

import { useState, useEffect, useRef } from "react";
import { Clock, Cpu, X, CheckCircle2, ChevronRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/UI/FadeUp";
import TextureOverlay from "@/components/UI/TextureOverlay";
import TiltCard from "@/components/Home/TiltCard";

export default function UniversalCoreServices({ data }: { data: ServicePageData['coreServices'] }) {
    const [selectedCard, setSelectedCard] = useState<typeof data.cards[0] | null>(null);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const mobileScrollRef = useRef<HTMLDivElement>(null);
    const [showScrollHint, setShowScrollHint] = useState(false);

    useEffect(() => {
        if (selectedCard) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => { document.body.style.overflow = "unset"; };
    }, [selectedCard]);

    const checkScroll = () => {
        let isScrollable = false;
        if (typeof window !== "undefined") {
            if (window.innerWidth < 768 && mobileScrollRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = mobileScrollRef.current;
                isScrollable = scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight - 20;
            } else if (window.innerWidth >= 768 && sidebarRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = sidebarRef.current;
                isScrollable = scrollHeight > clientHeight && scrollTop + clientHeight < scrollHeight - 20;
            }
        }
        setShowScrollHint(isScrollable);
    };

    useEffect(() => {
        if (selectedCard) {
            const timer = setTimeout(checkScroll, 100);
            window.addEventListener("resize", checkScroll);
            return () => {
                clearTimeout(timer);
                window.removeEventListener("resize", checkScroll);
            };
        }
    }, [selectedCard]);

    if (!data) return null;

    return (
        <section className="relative bg-transparent py-24 overflow-hidden">
            <div className="container-custom relative z-10">

                <SectionHeader
                    badge={data.badge}
                    title={<>{data.titleLine1} {data.titleHighlight && <span className="text-brand-blue">{data.titleHighlight}</span>}</>}
                    description={data.description}
                    align="center"
                    centered={true}
                    className="max-w-3xl mx-auto mb-16"
                    size="default"
                />

                {/* CARDS GRID — Matching Testimonials Card DNA */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                    {data.cards.map((card, index) => {
                        const hasRichContent = (card.subSections && card.subSections.length > 0) || (card.fullDescription && card.fullDescription.length > 0);
                        const isGreen = index % 2 === 0;

                        return (
                            <FadeUp key={index} delay={index * 80}>
                                <TiltCard className="h-full w-full">
                                    <div
                                        onClick={() => hasRichContent && setSelectedCard(card)}
                                        className={`relative h-full w-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-10 flex flex-col shadow-xl shadow-foreground/[0.03] overflow-hidden transition-all duration-500 group ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'} ${card.span || ""} ${hasRichContent ? "cursor-pointer" : ""}`}
                                    >
                                        <TextureOverlay />

                                        {/* Ambient Glow */}
                                        <div className={`absolute top-0 left-0 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                                        <div className="relative z-10 flex items-start justify-between mb-8">
                                            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${card.bg} ${card.color} group-hover:scale-110 transition-transform duration-500`}>
                                                <DynamicIcon name={card.icon} size={28} strokeWidth={1.5} />
                                            </div>
                                            {hasRichContent && (
                                                <div className={`h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${isGreen ? 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white' : 'bg-brand-blue/10 text-brand-blue group-hover:bg-brand-blue group-hover:text-white'}`}>
                                                    <ArrowUpRight size={18} />
                                                </div>
                                            )}
                                        </div>

                                        <div className="relative z-10 flex-1">
                                            <h3 className={`text-2xl font-display font-bold text-foreground tracking-tight mb-4 transition-colors duration-300 ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>
                                                {card.title}
                                            </h3>

                                            <p className="text-foreground/60 leading-relaxed mb-6 m-0">
                                                {card.desc}
                                            </p>

                                            {card.list && (
                                                <ul className="space-y-3 mb-6">
                                                    {card.list.map((item, i) => (
                                                        <li key={i} className="flex items-start gap-3 text-sm font-semibold text-foreground/70">
                                                            <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`} />
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}

                                            {card.tags && (
                                                <div className="flex flex-wrap gap-2 mt-auto">
                                                    {card.tags.map((tag, i) => (
                                                        <span key={i} className={`px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide transition-colors bg-foreground/5 border border-foreground/10 text-foreground/60 ${isGreen ? 'group-hover:bg-brand-green/10 group-hover:border-brand-green/20 group-hover:text-brand-green' : 'group-hover:bg-brand-blue/10 group-hover:border-brand-blue/20 group-hover:text-brand-blue'}`}>
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>

                                        {/* Bottom Action Bar — Matching ServiceGrid */}
                                        {hasRichContent && (
                                            <div className="relative z-10 pt-6 border-t border-foreground/5 mt-8 flex items-center justify-between">
                                                <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>Explore Details</span>
                                                <ChevronRight size={18} className={`transition-all group-hover:translate-x-1 ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`} />
                                            </div>
                                        )}
                                    </div>
                                </TiltCard>
                            </FadeUp>
                        );
                    })}
                </div>

                {/* COMPACT FOOTER METRICS */}
                <div className="grid lg:grid-cols-2 gap-6">
                    <FadeUp>
                        <div className="bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl rounded-[2rem] p-8 border border-white/50 dark:border-white/[0.08] shadow-xl shadow-foreground/[0.03] flex items-center gap-6 hover:border-brand-green/30 transition-colors duration-500">
                            <div className="h-12 w-12 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green shrink-0">
                                <Clock size={24} />
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-1">{data.footer.left.title}</h4>
                                <p className="text-2xl font-display font-black text-foreground tracking-tight m-0">{data.footer.left.content}</p>
                            </div>
                        </div>
                    </FadeUp>

                    <FadeUp delay={100}>
                        <div className={`${Array.isArray(data.footer.right?.content) ? "" : "hidden"} bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl rounded-[2rem] p-8 border border-white/50 dark:border-white/[0.08] shadow-xl shadow-foreground/[0.03] flex items-center gap-6 hover:border-brand-blue/30 transition-colors duration-500`}>
                            <div className="h-12 w-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue shrink-0">
                                <Cpu size={24} />
                            </div>
                            <div className="flex-1">
                                <h4 className="text-xs font-black uppercase tracking-widest text-foreground/40 mb-2">{data.footer.right?.title}</h4>
                                <div className="flex flex-wrap gap-2">
                                    {Array.isArray(data.footer.right?.content) && data.footer.right.content.map((tag: string, i: number) => (
                                        <span key={i} className="px-3 py-1 rounded-lg bg-foreground/5 text-xs font-bold text-foreground/60 border border-foreground/10">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </FadeUp>
                </div>

            </div>

            {/* DETAIL MODAL */}
            <AnimatePresence>
                {selectedCard && (
                    <div className="fixed inset-0 z-[200] flex items-end md:items-center justify-center md:p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                            onClick={() => setSelectedCard(null)}
                        />

                        <motion.div
                            initial={{ y: "100%", opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: "100%", opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative w-full max-w-6xl h-[100dvh] md:h-[85vh] bg-white dark:bg-gray-900 md:rounded-[2rem] shadow-2xl overflow-hidden border border-white/20 dark:border-white/10"
                        >
                            <button
                                onClick={() => setSelectedCard(null)}
                                className="absolute top-4 right-4 z-[210] h-10 w-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur border border-foreground/10 flex items-center justify-center text-foreground/50 hover:bg-foreground/10 hover:text-red-500 transition-colors shadow-lg cursor-pointer"
                            >
                                <X size={20} />
                            </button>

                            <div
                                className={`flex md:hidden absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/90 dark:from-gray-900/90 via-white/60 dark:via-gray-900/60 to-transparent backdrop-blur-[2px] pointer-events-none items-end justify-center pb-8 z-50 transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
                            >
                                <div className="animate-bounce bg-white dark:bg-gray-800 shadow-md border border-foreground/10 rounded-full p-2 text-brand-blue">
                                    <ChevronDown size={18} strokeWidth={2.5} />
                                </div>
                            </div>

                            <div
                                ref={mobileScrollRef}
                                onScroll={checkScroll}
                                className="h-full w-full overflow-y-auto md:overflow-hidden flex flex-col md:flex-row overscroll-contain [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
                            >
                                <div className="relative md:w-[35%] lg:w-[30%] shrink-0 border-b md:border-b-0 md:border-r border-foreground/5 bg-foreground/[0.02] flex flex-col">
                                    <div
                                        ref={sidebarRef}
                                        onScroll={checkScroll}
                                        className="h-full w-full p-8 pt-20 md:p-10 md:pb-12 md:pr-8 flex flex-col md:overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-foreground/10 [&::-webkit-scrollbar-thumb]:rounded-full"
                                    >
                                        <div className="mb-8">
                                            <div className={`h-14 w-14 rounded-2xl flex items-center justify-center ${selectedCard.bg} ${selectedCard.color} mb-6 shadow-sm`}>
                                                <DynamicIcon name={selectedCard.icon} size={28} strokeWidth={1.5} />
                                            </div>
                                            <h2 className="text-3xl font-display font-black text-foreground mb-4 tracking-tight">
                                                {selectedCard.title}
                                            </h2>
                                            <p className="text-[15px] text-foreground/60 leading-relaxed font-medium m-0">
                                                {selectedCard.desc}
                                            </p>
                                        </div>
                                    </div>

                                    <div
                                        className={`hidden md:flex absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-background via-background/90 to-transparent pointer-events-none items-end justify-center pb-6 transition-opacity duration-500 ${showScrollHint ? 'opacity-100' : 'opacity-0'}`}
                                    >
                                        <div className="animate-bounce bg-white dark:bg-gray-800 shadow-md border border-foreground/10 rounded-full p-2 text-brand-blue">
                                            <ChevronDown size={18} strokeWidth={2.5} />
                                        </div>
                                    </div>
                                </div>

                                <div className="md:flex-1 p-8 pb-12 md:p-12 md:pr-14 md:overflow-y-auto scroll-smooth bg-white dark:bg-gray-900 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-foreground/10 [&::-webkit-scrollbar-thumb]:rounded-full">

                                    {selectedCard.fullDescription && (
                                        <div className="prose prose-lg max-w-none mb-12">
                                            {selectedCard.fullDescription.map((para, i) => (
                                                <p key={i} className="text-foreground/60 leading-relaxed">{para}</p>
                                            ))}
                                        </div>
                                    )}

                                    <div className="space-y-16">
                                        {selectedCard.subSections && selectedCard.subSections.map((section, i) => (
                                            <div key={i}>
                                                {section.heading && (
                                                    <div className="flex items-center gap-4 mb-8">
                                                        <div className="h-px bg-foreground/10 flex-1" />
                                                        <h4 className="text-xl font-display font-black text-foreground bg-background px-4 border border-foreground/10 rounded-full py-1 shadow-sm">
                                                            {section.heading}
                                                        </h4>
                                                        <div className="h-px bg-foreground/10 flex-1" />
                                                    </div>
                                                )}

                                                {section.items && (
                                                    <div className="grid md:grid-cols-2 gap-6">
                                                        {section.items.map((item, j) => (
                                                            <div key={j} className="bg-foreground/[0.02] hover:bg-foreground/[0.04] rounded-2xl p-6 border border-foreground/5 transition-colors">
                                                                {item.term && (
                                                                    <div className="flex items-baseline gap-2 mb-2">
                                                                        <div className="h-2 w-2 rounded-full bg-brand-blue shrink-0" />
                                                                        <h5 className="text-lg font-bold text-foreground">{item.term}</h5>
                                                                    </div>
                                                                )}
                                                                {item.description && (
                                                                    <p className="text-foreground/60 text-sm leading-relaxed pl-4 border-l-2 border-foreground/10 m-0">
                                                                        {item.description}
                                                                    </p>
                                                                )}
                                                                {item.subItems && (
                                                                    <ul className="mt-4 space-y-2 pl-4">
                                                                        {item.subItems.map((sub, k) => (
                                                                            <li key={k} className="flex items-start gap-2 text-xs font-bold text-foreground/50 uppercase tracking-wide">
                                                                                <CheckCircle2 size={12} className="text-brand-blue mt-0.5" />
                                                                                {sub}
                                                                            </li>
                                                                        ))}
                                                                    </ul>
                                                                )}
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}

                                                {section.content && (
                                                    <div className="bg-brand-blue/5 rounded-2xl p-8 border border-brand-blue/10">
                                                        <ul className="grid md:grid-cols-2 gap-4">
                                                            {section.content.map((text, k) => (
                                                                <li key={k} className="flex items-center gap-3 text-foreground/70 font-medium">
                                                                    <div className="h-6 w-6 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center text-brand-blue shadow-sm shrink-0">
                                                                        <CheckCircle2 size={14} />
                                                                    </div>
                                                                    {text}
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}