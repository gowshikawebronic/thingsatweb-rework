"use client";

import { ArrowRight, CheckCircle2 } from "lucide-react";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/app/services/data/types";
import SectionHeader from "@/components/common/SectionHeader";
import Link from "next/link";
import FadeUp from "@/components/UI/FadeUp";
import TextureOverlay from "@/components/UI/TextureOverlay";
import TiltCard from "@/components/Home/TiltCard";

export default function UniversalGetStarted({ data }: { data: ServicePageData['getStarted'] }) {
  if (!data) return null;

  return (
    <section className="relative bg-transparent py-24 overflow-hidden">
      <div className="container-custom relative z-10">

        <SectionHeader
          badge={data.badge}
          title={data.titleLines.join(" ")}
          description={data.description}
          // centered={true}
          className="max-w-3xl mx-auto mb-16"
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {data.cards.map((card, index) => {
            const isGreen = card.theme === "dark";
            const accentColor = isGreen ? "text-brand-green" : "text-brand-blue";
            const btnGradient = isGreen ? "bg-gradient-green" : "bg-gradient-blue";
            const hoverBorder = isGreen ? "hover:border-brand-green/30" : "hover:border-brand-blue/30";
            const glowColor = isGreen ? "bg-brand-green" : "bg-brand-blue";

            return (
              <FadeUp key={index} delay={index * 100}>
                <TiltCard className="h-full w-full">
                  <div className={`relative h-full w-full bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-10 flex flex-col shadow-xl shadow-foreground/[0.03] overflow-hidden transition-all duration-500 group ${hoverBorder}`}>

                    <TextureOverlay />

                    {/* Ambient Glow */}
                    <div className={`absolute top-0 left-0 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 ${glowColor}`}></div>

                    {/* Icon */}
                    <div className={`relative z-10 h-14 w-14 rounded-2xl flex items-center justify-center mb-6 border shadow-sm transition-transform duration-500 group-hover:scale-110 ${isGreen ? 'bg-brand-green/10 border-brand-green/20' : 'bg-brand-blue/10 border-brand-blue/20'} ${accentColor}`}>
                      <DynamicIcon name={card.icon} size={26} />
                    </div>

                    {/* Title */}
                    <h3 className={`relative z-10 text-h3 font-display font-black mb-2 text-foreground transition-colors ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>{card.title}</h3>
                    <p className="relative z-10 text-body font-medium mb-8 text-foreground/60 m-0">{card.description}</p>

                    {/* Checklist — Glass Sub-Cards */}
                    <ul className="relative z-10 space-y-3 mb-8 flex-grow">
                      {data.cards[index].list.map((item, i) => (
                        <li key={i} className={`flex items-start gap-3 text-xs font-bold text-foreground/60 bg-white/60 dark:bg-white/[0.04] backdrop-blur-lg p-3 rounded-xl border border-white/40 dark:border-white/[0.06] hover:shadow-sm transition-all ${isGreen ? 'hover:border-brand-green/20' : 'hover:border-brand-blue/20'}`}>
                          <CheckCircle2 className={`shrink-0 mt-0.5 ${accentColor}`} size={16} />
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="/contact" className={`relative z-10 w-full inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest py-4 rounded-full transition-all text-white ${btnGradient} shadow-lg hover:shadow-xl hover:scale-[1.02] no-underline group/btn`}>
                      <span>{card.cta.text}</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </TiltCard>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}