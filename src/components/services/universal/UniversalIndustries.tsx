"use client";

import { useState, useRef } from "react";
import { ChevronRight, LayoutGrid } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import TextureOverlay from "@/components/UI/TextureOverlay";
import FadeUp from "@/components/UI/FadeUp";
import TiltCard from "@/components/Home/TiltCard";

export default function UniversalIndustries({ data }: { data: ServicePageData['industries'] }) {
  const [activeTab, setActiveTab] = useState(data.items[0]?.id);
  const scrollRef = useRef<HTMLDivElement>(null);
  const currentIndustry = data.items.find((ind) => ind.id === activeTab) || data.items[0];

  const themeConfig: Record<string, {
    badge: string;
    ping: string;
    iconBox: string;
  }> = {
    blue: {
      badge: "bg-brand-blue/10 border-brand-blue/20 text-brand-blue",
      ping: "bg-brand-blue",
      iconBox: "bg-brand-blue/10 text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white",
    },
    green: {
      badge: "bg-brand-green/10 border-brand-green/20 text-brand-green",
      ping: "bg-brand-green",
      iconBox: "bg-brand-green/10 text-brand-green border border-brand-green/20 group-hover:bg-brand-green group-hover:text-white",
    },
    orange: {
      badge: "bg-orange-500/10 border-orange-500/20 text-orange-500",
      ping: "bg-orange-500",
      iconBox: "bg-orange-500/10 text-orange-500 border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white",
    },
    purple: {
      badge: "bg-purple-500/10 border-purple-500/20 text-purple-500",
      ping: "bg-purple-500",
      iconBox: "bg-purple-500/10 text-purple-500 border border-purple-500/20 group-hover:bg-purple-500 group-hover:text-white",
    },
    teal: {
      badge: "bg-teal-500/10 border-teal-500/20 text-teal-500",
      ping: "bg-teal-500",
      iconBox: "bg-teal-500/10 text-teal-500 border border-teal-500/20 group-hover:bg-teal-500 group-hover:text-white",
    },
    indigo: {
      badge: "bg-indigo-500/10 border-indigo-500/20 text-indigo-500",
      ping: "bg-indigo-500",
      iconBox: "bg-indigo-500/10 text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white",
    }
  };

  const theme = themeConfig[currentIndustry.theme] || themeConfig.blue;

  return (
    <section className="relative py-32 lg:py-48 overflow-hidden">
      {/* Tilted Blue Background */}
      <div className="absolute inset-0 clip-diagonal-reverse bg-gradient-blue shadow-[0_30px_60px_rgba(70,136,241,0.2)] pointer-events-none"></div>
      <TextureOverlay className="opacity-40 mix-blend-overlay" />

      <div className="container-custom relative z-10">

        <SectionHeader
          badge="Impact"
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-20 text-white [&_h2]:text-white [&_h3]:text-white [&_p]:text-white/80 [&_span]:text-white/70"
        />

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* LEFT: SIDEBAR NAVIGATION */}
          <div className="lg:w-1/4 shrink-0">
            <div className="lg:sticky lg:top-32">
              <div className="hidden lg:flex items-center gap-2 mb-6 pl-1 text-white/50">
                <LayoutGrid size={14} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">Industries</span>
              </div>

              <div
                ref={scrollRef}
                className="flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden p-1"
              >
                {data.items.map((ind) => (
                  <button
                    key={ind.id}
                    onClick={() => setActiveTab(ind.id)}
                    className={`group relative flex items-center justify-between transition-all duration-300 ease-out
                                    px-5 py-2.5 rounded-full min-w-max border cursor-pointer
                                    lg:w-full lg:px-4 lg:py-3.5 lg:rounded-xl lg:border
                                    ${activeTab === ind.id
                        ? "bg-white text-foreground border-white/50 shadow-xl"
                        : "bg-white/10 text-white/80 border-white/20 hover:bg-white/20 hover:text-white hover:shadow-sm backdrop-blur-sm"
                      }`}
                  >
                    {activeTab === ind.id && (
                      <div className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 h-5 w-1 bg-brand-blue rounded-r-full" />
                    )}

                    <div className="flex items-center gap-3">
                      <div className={`transition-colors ${activeTab === ind.id ? "text-brand-blue" : "text-white/60 group-hover:text-white"}`}>
                        <DynamicIcon name={ind.icon} size={18} />
                      </div>
                      <span className="text-xs font-bold tracking-wide">{ind.label}</span>
                    </div>

                    <span className={`text-[10px] ml-3 font-bold px-2 py-0.5 rounded-md transition-colors ${activeTab === ind.id
                      ? "bg-brand-blue/10 text-brand-blue"
                      : "hidden lg:block bg-white/10 text-white/50 group-hover:bg-white/20"
                      }`}>
                      {ind.features.length}
                    </span>
                  </button>
                ))}
              </div>

              <div className="lg:hidden flex items-center gap-1 mt-2 text-[10px] font-bold text-white/40 uppercase tracking-widest animate-pulse pl-2">
                Swipe <ChevronRight size={10} />
              </div>
            </div>
          </div>

          {/* RIGHT: CONTENT AREA */}
          <div className="lg:w-3/4">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                {/* Category Meta */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-white/10">
                  <div>
                    <h3 className="text-h3 font-display font-bold text-white mb-2">
                      {currentIndustry.label}
                    </h3>
                    <p className="text-white/70 max-w-2xl font-medium leading-relaxed m-0">
                      {currentIndustry.description}
                    </p>
                  </div>
                  <div className={`hidden md:flex items-center gap-2 px-4 py-1.5 rounded-full border text-[10px] font-black uppercase tracking-widest whitespace-nowrap ${theme.badge}`}>
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${theme.ping}`}></span>
                      <span className={`relative inline-flex rounded-full h-2 w-2 ${theme.ping}`}></span>
                    </span>
                    Proven Impact
                  </div>
                </div>

                {/* Feature Cards — Premium Glass on Blue */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {currentIndustry.features.map((feature, idx) => {
                    const isGreen = idx % 2 === 0;

                    return (
                      <FadeUp key={idx} delay={idx * 60}>
                        <TiltCard className="h-full w-full">
                          <div className={`relative h-full w-full bg-white/90 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/50 dark:border-white/[0.12] rounded-[2rem] p-8 flex flex-col shadow-xl overflow-hidden transition-all duration-500 group ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}>
                            <TextureOverlay />

                            {/* Ambient Glow */}
                            <div className={`absolute top-0 left-0 w-24 h-24 blur-3xl opacity-15 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                            <div className="relative z-10 flex items-center gap-3 mb-4">
                              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 ${theme.iconBox} group-hover:shadow-md`}>
                                <DynamicIcon name={feature.icon} size={22} strokeWidth={2} />
                              </div>
                              <h4 className={`font-display font-bold text-foreground text-h5 transition-colors ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>
                                {feature.title}
                              </h4>
                            </div>

                            <p className="relative z-10 text-body-small text-foreground/60 grow m-0">
                              {feature.desc}
                            </p>

                            {/* Bottom Accent */}
                            <div className="relative z-10 pt-5 border-t border-foreground/5 mt-5">
                              <span className={`text-[10px] font-bold tracking-widest uppercase ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>
                                {currentIndustry.label}
                              </span>
                            </div>
                          </div>
                        </TiltCard>
                      </FadeUp>
                    );
                  })}
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}