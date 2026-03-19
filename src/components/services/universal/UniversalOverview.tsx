"use client";

import { useState } from "react";
import { Award, ChevronDown, ChevronUp } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import FadeUp from "@/components/UI/FadeUp";
import TextureOverlay from "@/components/UI/TextureOverlay";
import TiltCard from "@/components/Home/TiltCard";

export default function UniversalOverview({ data }: { data: ServicePageData['overview'] }) {
  const [isExpanded, setIsExpanded] = useState(false);
  if (!data) return null;

  return (
    <section className="relative bg-transparent py-24 overflow-hidden">
      <div className="container-custom relative z-10">

        {/* --- TOP: TEXT CONTENT --- */}
        <div className="max-w-5xl mb-20">
          <SectionHeader
            badge={data.badge}
            title={<>{data.heading} {data.highlight && <span className="text-brand-blue">{data.highlight}</span>}</>}
            align="left"
            className="mb-8"
          />

          <div className="space-y-6">
            {data.content.slice(0, 2).map((p, i) => (
              <p key={i} className="text-foreground/60 text-body font-medium">{p}</p>
            ))}

            {isExpanded && (
              <div className="space-y-6 animate-in fade-in slide-in-from-top-2 duration-300">
                {data.content.slice(2).map((p, i) => (
                  <p className="text-foreground/60 text-body font-medium" key={i + 2}>{p}</p>
                ))}
              </div>
            )}

            {data.content.length > 2 && (
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="group flex items-center gap-2 text-xs font-bold text-brand-blue hover:text-brand-blue-dark transition-colors mt-4 outline-none uppercase tracking-widest cursor-pointer"
              >
                {isExpanded ? <>Read Less <ChevronUp size={14} /></> : <>Read More <ChevronDown size={14} /></>}
              </button>
            )}
          </div>
        </div>

        {/* --- BOTTOM: DIFFERENTIATORS CARDS --- */}
        <div>
          {/* Section Title for Cards */}
          <FadeUp>
            <div className="flex items-center gap-4 mb-10">
              <div className="h-12 w-12 rounded-2xl bg-white/60 dark:bg-white/[0.06] backdrop-blur-xl border border-white/50 dark:border-white/[0.08] flex items-center justify-center text-brand-green shadow-lg">
                <Award size={24} />
              </div>
              <div>
                <h3 className="text-h4 font-display font-black text-foreground">Key Differentiators</h3>
                <p className="text-sm text-foreground/40 font-bold uppercase tracking-widest mt-1 m-0">Why Choose Us?</p>
              </div>
            </div>
          </FadeUp>

          {/* Cards Grid — Matching Testimonials Card Design */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.differentiators.map((item, index) => {
              const isGreen = index % 2 === 0;
              return (
                <FadeUp key={index} delay={index * 80}>
                  <TiltCard className="h-full w-full">
                    <div
                      className={`relative h-full w-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-10 flex flex-col shadow-xl shadow-foreground/[0.03] overflow-hidden transition-all duration-500 group ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}
                    >
                      <TextureOverlay />

                      {/* Ambient Glow */}
                      <div className={`absolute top-0 left-0 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                      <div className="relative z-10 flex flex-col h-full">
                        {/* Icon */}
                        <div className={`h-14 w-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${isGreen ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'}`}>
                          <DynamicIcon name={item.icon} size={24} />
                        </div>

                        {/* Title */}
                        <h4 className={`text-h5 font-display font-bold text-foreground mb-3 transition-colors ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>
                          {item.title}
                        </h4>

                        {/* Description */}
                        <p className="text-body-small font-medium text-foreground/60 flex-grow m-0">
                          {item.description}
                        </p>

                        {/* Bottom Accent Line */}
                        <div className="pt-6 border-t border-foreground/5 mt-6">
                          <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>
                            Differentiator
                          </span>
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                </FadeUp>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}