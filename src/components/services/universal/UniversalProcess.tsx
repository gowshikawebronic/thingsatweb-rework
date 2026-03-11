"use client";

import { Clock, Check, ArrowDown, ArrowRight, Package } from "lucide-react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import TextureOverlay from "@/components/UI/TextureOverlay";

export default function UniversalProcess({ data }: { data: ServicePageData['process'] }) {
  if (!data) return null;

  return (
    <section className="relative bg-transparent py-24 overflow-hidden">
      <div className="container-custom max-w-5xl relative z-10">

        <SectionHeader
          badge="Workflow"
          title={data.title}
          description={data.description}
          centered={true}
          className="max-w-3xl mx-auto mb-20"
        />

        {/* STACKING CONTAINER */}
        <div className="flex flex-col gap-6 max-w-4xl mx-auto pb-24">

          {/* Vertical Guide Line */}
          <div className="absolute left-10 md:left-[88px] top-40 bottom-24 w-0.5 bg-foreground/10 -z-10" />

          {data.phases.map((phase, index) => {
            const stickyTop = `calc(120px + ${index * 15}px)`;
            const isGreen = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ top: stickyTop }}
                className={`sticky group bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl rounded-[2rem] border border-white/50 dark:border-white/[0.08] p-1 shadow-xl shadow-foreground/[0.03] hover:shadow-2xl transition-all duration-500  ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}
              >
                <TextureOverlay />

                <div className="relative z-10 flex flex-col md:flex-row gap-6 p-6 md:p-8 bg-white/40 dark:bg-white/[0.03] rounded-[1.5rem] border border-white/30 dark:border-white/[0.05] h-full">

                  {/* --- LEFT: STEP INDICATOR --- */}
                  <div className="flex flex-row md:flex-col items-center gap-4 md:w-20 shrink-0">
                    <div className="flex flex-col items-center">
                      <span className={`text-5xl sm:text-6xl font-display font-black transition-colors ${isGreen ? 'text-brand-green/15 group-hover:text-brand-green/25' : 'text-brand-blue/15 group-hover:text-brand-blue/25'}`}>
                        0{index + 1}
                      </span>
                      {phase.phase && (
                        <span className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest hidden md:block">
                          {phase.phase.replace(/Phase\s/i, '')}
                        </span>
                      )}
                    </div>

                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center border-4 border-white/80 dark:border-gray-900/80 shadow-lg transition-transform duration-500 group-hover:scale-110 ${phase.color} text-white`}>
                      <DynamicIcon name={phase.icon} size={24} strokeWidth={2} />
                    </div>
                  </div>

                  {/* --- RIGHT: CONTENT --- */}
                  <div className="flex-1 pt-1">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                      <h3 className={`text-2xl sm:text-3xl font-display font-black text-foreground tracking-tight transition-colors ${isGreen ? 'group-hover:text-brand-green' : 'group-hover:text-brand-blue'}`}>{phase.title}</h3>

                      <div className="flex items-center gap-1.5 px-3 py-1 bg-white/80 dark:bg-white/[0.06] backdrop-blur-sm rounded-lg border border-white/50 dark:border-white/[0.08] shadow-sm w-fit">
                        <Clock size={12} className="text-foreground/40" />
                        <span className="text-[10px] font-bold text-foreground/50 uppercase tracking-wide">{phase.duration}</span>
                      </div>
                    </div>

                    {/* Objectives — Glass Sub-Cards */}
                    <ul className="grid sm:grid-cols-2 gap-3 mb-6">
                      {phase.objectives.map((item, i) => (
                        <li key={i} className={`flex items-start gap-2.5 text-xs font-semibold text-foreground/70 bg-white/70 dark:bg-white/[0.05] backdrop-blur-lg p-4 rounded-2xl border border-white/50 dark:border-white/[0.06] shadow-sm transition-all hover:shadow-md ${isGreen ? 'hover:border-brand-green/20' : 'hover:border-brand-blue/20'}`}>
                          <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${isGreen ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-blue/10 text-brand-blue'}`}>
                            <Check size={10} strokeWidth={4} />
                          </div>
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Activities Section */}
                    {phase.activities && phase.activities.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-xs font-bold text-foreground/40 uppercase tracking-widest mb-3 flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></span>
                          Key Activities
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-x-4 gap-y-2">
                          {phase.activities.map((activity, i) => (
                            <div key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                              <ArrowRight size={14} className={`mt-1 shrink-0 ${isGreen ? 'text-brand-green/60' : 'text-brand-blue/60'}`} />
                              <span className="leading-relaxed">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Deliverables Section */}
                    {phase.deliverables && phase.deliverables.length > 0 && (
                      <div className="pt-5 border-t border-foreground/5">
                        <div className="flex items-start md:items-center gap-3 md:gap-4 flex-col md:flex-row">
                          <div className={`flex items-center gap-2 text-xs font-bold uppercase tracking-widest shrink-0 ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>
                            <Package size={14} />
                            <span>Deliverables</span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {phase.deliverables.map((item, i) => (
                              <span key={i} className={`px-3 py-1.5 bg-white/70 dark:bg-white/[0.05] backdrop-blur-sm text-foreground/60 text-xs font-bold rounded-xl border border-white/50 dark:border-white/[0.06] shadow-sm hover:shadow-md transition-all ${isGreen ? 'hover:border-brand-green/20' : 'hover:border-brand-blue/20'}`}>
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                </div>

                {/* Arrow Hint */}
                {index !== data.phases.length - 1 && (
                  <div className={`absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-white/80 dark:bg-white/[0.06] border border-white/50 dark:border-white/[0.08] rounded-full flex items-center justify-center shadow-sm z-20 ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>
                    <ArrowDown size={14} />
                  </div>
                )}

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}