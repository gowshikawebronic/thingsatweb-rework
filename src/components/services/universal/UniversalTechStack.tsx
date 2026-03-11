"use client";

import { Code2, Bot, Cloud, CheckCircle2, Cpu, ArrowRight, Database, ShoppingCart } from "lucide-react";
import { ServicePageData } from "@/AllData/services/types";
import SectionHeader from "@/components/common/SectionHeader";
import { motion } from "framer-motion";
import TextureOverlay from "@/components/UI/TextureOverlay";
import FadeUp from "@/components/UI/FadeUp";
import TiltCard from "@/components/Home/TiltCard";

export default function UniversalTechStack({ id, data }: { id: string, data: ServicePageData['techStack'] }) {
  if (!data) return null;

  const hasFrameworks = data.frameworks && data.frameworks.length > 0;
  const hasLLMs = data.llms && data.llms.length > 0;
  const hasMLOps = data.mlOps && data.mlOps.length > 0;
  const hasCloud = data.cloudPlatforms && data.cloudPlatforms.length > 0;
  const hasIntelligence = hasLLMs || hasMLOps;

  const isWebDev = id === "web-development";
  const llmTitle = isWebDev ? "CMS & Headless" : "Models & LLMs";
  const llmSubtitle = isWebDev ? "Content Management" : "Core Intelligence";
  const LlmIcon = isWebDev ? Database : Bot;
  const mlOpsTitle = isWebDev ? "E-commerce Solutions" : "MLOps Pipeline";
  const mlOpsSubtitle = isWebDev ? "Digital Storefronts" : "Automated Workflows";
  const MlOpsIcon = isWebDev ? ShoppingCart : Cpu;

  return (
    <section className="relative py-32 md:py-48 overflow-hidden">
      {/* Sharp Diagonal Background */}
      <div className="absolute inset-0 clip-diagonal bg-gradient-green shadow-[0_30px_60px_rgba(14,173,43,0.2)] pointer-events-none"></div>
      <TextureOverlay className="opacity-40 mix-blend-overlay" />

      <div className="container-custom relative z-10">
        <SectionHeader
          badge={data.badge || "Tech Stack"}
          title={data.heading}
          description={data.description}
          centered={true}
          className="max-w-2xl mx-auto mb-16 text-white [&_h2]:text-white [&_h3]:text-white [&_p]:text-white/80 [&_span]:text-white/70"
          size="default"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col gap-12"
        >

          {/* 1. FRAMEWORKS — Glass Cards with Tilt */}
          {hasFrameworks && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.frameworks?.map((item, i) => {
                const isBlue = i % 2 === 0;
                return (
                  <FadeUp key={`framework-${i}`} delay={i * 60}>
                    <TiltCard className="h-full w-full">
                      <div className="relative h-full w-full bg-white/90 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/50 dark:border-white/[0.12] rounded-[2rem] p-8 flex flex-col shadow-xl overflow-hidden transition-all duration-500 group hover:border-brand-blue/30">
                        <TextureOverlay />

                        {/* Ambient Glow */}
                        <div className={`absolute top-0 left-0 w-24 h-24 blur-3xl opacity-15 pointer-events-none z-0 ${isBlue ? 'bg-brand-blue' : 'bg-brand-green-light'}`}></div>

                        <div className="relative z-10 flex flex-col h-full">
                          <div className="flex items-center gap-4 mb-5">
                            <div className="h-12 w-12 rounded-2xl bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-md transition-all duration-400 shrink-0">
                              <Code2 size={22} strokeWidth={2} />
                            </div>
                            <h4 className="text-lg font-display font-bold text-foreground leading-snug break-words group-hover:text-brand-blue transition-colors">
                              {typeof item.name === 'string' ? item.name.replace(/\//g, ' / ') : item.name}
                            </h4>
                          </div>

                          <p className="text-sm text-foreground/60 leading-relaxed break-words mt-auto m-0">
                            {item.desc}
                          </p>

                          {/* Bottom Accent */}
                          <div className="pt-5 border-t border-foreground/5 mt-5">
                            <span className="text-[10px] font-bold tracking-widest uppercase text-brand-blue">Framework</span>
                          </div>
                        </div>
                      </div>
                    </TiltCard>
                  </FadeUp>
                );
              })}
            </div>
          )}

          {/* 2. CMS / E-COMMERCE (or LLMs/MLOps) — Split Glass Cards */}
          {hasIntelligence && (
            <div className="grid lg:grid-cols-2 gap-8">
              {hasLLMs && (
                <FadeUp>
                  <TiltCard className="h-full w-full">
                    <div className="relative h-full w-full bg-white/90 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/50 dark:border-white/[0.12] rounded-[2rem] p-8 flex flex-col shadow-xl overflow-hidden transition-all duration-500 group hover:border-brand-blue/30">
                      <TextureOverlay />
                      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-brand-blue/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 -translate-y-1/2 translate-x-1/3 pointer-events-none" />

                      <div className="relative z-10 flex items-center gap-4 mb-8">
                        <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-brand-blue/10 text-brand-blue border border-brand-blue/20 shrink-0 group-hover:bg-brand-blue group-hover:text-white group-hover:shadow-md transition-all duration-400">
                          <LlmIcon size={26} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-foreground group-hover:text-brand-blue transition-colors">{llmTitle}</h3>
                          <p className="text-sm font-medium text-brand-blue/80 mt-0.5 m-0">{llmSubtitle}</p>
                        </div>
                      </div>

                      {/* Inner Sub-Cards */}
                      <div className="relative z-10 space-y-3">
                        {data.llms?.map((item, i) => (
                          <div key={`llm-${i}`} className="flex items-start gap-4 p-5 rounded-2xl border border-foreground/5 bg-white/60 dark:bg-white/[0.04] backdrop-blur-lg hover:bg-white/80 dark:hover:bg-white/[0.06] hover:border-brand-blue/20 hover:shadow-md transition-all duration-300 w-full group/item">
                            <CheckCircle2 size={18} className="text-brand-blue/60 mt-0.5 shrink-0 group-hover/item:text-brand-blue transition-colors" />
                            <div className="flex-1 min-w-0">
                              <h5 className="font-display font-semibold text-foreground text-sm mb-1">{item.name}</h5>
                              <p className="text-sm text-foreground/60 leading-relaxed m-0">{item.desc}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </TiltCard>
                </FadeUp>
              )}

              {hasMLOps && (
                <FadeUp delay={100}>
                  <TiltCard className="h-full w-full">
                    <div className="relative h-full w-full bg-white/90 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/50 dark:border-white/[0.12] rounded-[2rem] p-8 flex flex-col shadow-xl overflow-hidden transition-all duration-500 group hover:border-brand-green/30">
                      <TextureOverlay />
                      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-green/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-y-1/2 -translate-x-1/3 pointer-events-none" />

                      <div className="relative z-10 flex items-center gap-4 mb-8">
                        <div className="h-14 w-14 flex items-center justify-center rounded-2xl bg-brand-green/10 text-brand-green border border-brand-green/20 shrink-0 group-hover:bg-brand-green group-hover:text-white group-hover:shadow-md transition-all duration-400">
                          <MlOpsIcon size={26} strokeWidth={2} />
                        </div>
                        <div>
                          <h3 className="text-xl font-display font-bold text-foreground group-hover:text-brand-green transition-colors">{mlOpsTitle}</h3>
                          <p className="text-sm font-medium text-brand-green/80 mt-0.5 m-0">{mlOpsSubtitle}</p>
                        </div>
                      </div>

                      {/* Inner Sub-Cards */}
                      <div className="relative z-10 grid grid-cols-1 gap-3">
                        {data.mlOps?.map((tag, i) => {
                          const isString = typeof tag === 'string';
                          const label = isString ? tag : tag.name;
                          const desc = !isString && tag.desc ? tag.desc : null;
                          return (
                            <div key={`mlop-${i}`} className="p-5 rounded-2xl border border-foreground/5 bg-white/60 dark:bg-white/[0.04] backdrop-blur-lg hover:bg-white/80 dark:hover:bg-white/[0.06] hover:border-brand-green/20 hover:shadow-md transition-all duration-300 w-full group/mlop">
                              <div className="flex items-center gap-3 w-full">
                                <ArrowRight size={16} className="text-foreground/30 group-hover/mlop:text-brand-green transition-colors shrink-0" />
                                <span className="text-sm font-display font-semibold text-foreground flex-1 min-w-0 break-words leading-snug">
                                  {label}
                                </span>
                              </div>
                              {desc && (
                                <p className="text-sm text-foreground/60 mt-1.5 pl-7 leading-relaxed break-words m-0">
                                  {desc}
                                </p>
                              )}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </TiltCard>
                </FadeUp>
              )}
            </div>
          )}

          {/* 3. CLOUD PLATFORMS — Glass Cards with Tilt */}
          {hasCloud && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data.cloudPlatforms?.map((platform, i) => {
                const bgDotColor = platform.color.includes("text-")
                  ? platform.color.replace("text-", "bg-")
                  : "bg-foreground/40";
                const isGreen = i % 2 === 0;

                return (
                  <FadeUp key={`cloud-${i}`} delay={i * 60}>
                    <TiltCard className="h-full w-full">
                      <div className={`relative h-full w-full bg-white/90 dark:bg-white/[0.08] backdrop-blur-2xl border border-white/50 dark:border-white/[0.12] rounded-[2rem] p-8 flex flex-col shadow-xl overflow-hidden transition-all duration-500 group ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}>
                        <TextureOverlay />

                        <div className={`absolute top-0 left-0 w-24 h-24 blur-3xl opacity-15 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                        <div className="relative z-10 flex items-center justify-between mb-8">
                          <h4 className={`text-base font-display font-bold tracking-wide ${platform.color}`}>
                            {platform.provider}
                          </h4>
                          <div className={`h-10 w-10 rounded-xl flex items-center justify-center transition-all duration-400 ${isGreen ? 'bg-brand-green/10 text-brand-green border border-brand-green/20 group-hover:bg-brand-green group-hover:text-white' : 'bg-brand-blue/10 text-brand-blue border border-brand-blue/20 group-hover:bg-brand-blue group-hover:text-white'}`}>
                            <Cloud size={20} strokeWidth={2} />
                          </div>
                        </div>

                        <div className="relative z-10 space-y-4 flex-grow">
                          {platform.services.map((service, j) => {
                            const isString = typeof service === 'string';
                            const label = isString ? service : service.name;
                            const desc = !isString && service.desc ? service.desc : null;
                            return (
                              <div key={`service-${j}`} className="flex items-start gap-3 group/service">
                                <div className={`w-2 h-2 rounded-full mt-1.5 shrink-0 transition-all duration-300 shadow-sm ${bgDotColor} group-hover/service:scale-125`} />
                                <div className="flex-1">
                                  <span className="text-sm font-semibold text-foreground block transition-colors">
                                    {label}
                                  </span>
                                  {desc && (
                                    <p className="text-sm text-foreground/60 leading-relaxed mt-1 m-0">{desc}</p>
                                  )}
                                </div>
                              </div>
                            );
                          })}
                        </div>

                        {/* Bottom Accent */}
                        <div className="relative z-10 pt-5 border-t border-foreground/5 mt-5">
                          <span className={`text-[10px] font-bold tracking-widest uppercase ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>Cloud Platform</span>
                        </div>
                      </div>
                    </TiltCard>
                  </FadeUp>
                );
              })}
            </div>
          )}

        </motion.div>
      </div>
    </section>
  );
}