"use client";

import { UseCasesData } from "@/app/product/types";
import SectionHeader from "@/components/common/SectionHeader";
import { DynamicIcon } from "@/components/common/DynamicIcon";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function UniversalUseCases({ data }: { data: UseCasesData }) {
    if (!data) return null;

    return (
        <section className=" py-24 font-sora overflow-hidden">
            <div className=" mx-auto px-6 max-w-7xl">
                <SectionHeader
                    badge={data.badge}
                    title={data.heading}
                    description={data.description}
                    centered={true}
                    className="max-w-3xl mx-auto mb-16"
                />

                <div className="grid md:grid-cols-2 gap-8">
                    {data.cases.map((useCase, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex flex-col bg-foreground/[0.02] dark:bg-white/[0.04] rounded-3xl p-8 border border-foreground/10 hover:border-brand-blue/20 hover:shadow-xl transition-all duration-300"
                        >
                            {/* Header Icon */}
                            <div className="h-14 w-14 rounded-2xl  border border-foreground/10 shadow-sm flex items-center justify-center text-brand-blue mb-6">
                                <DynamicIcon name={useCase.icon} size={28} strokeWidth={1.5} />
                            </div>

                            <h3 className="text-h5 font-black text-foreground mb-3">{useCase.title}</h3>
                            <p className="text-body-small text-foreground/60 mb-6 leading-relaxed">{useCase.description}</p>

                            {/* Deployment Stats Box */}
                            {useCase.deploymentStats && (
                                <div className=" rounded-xl p-4 border border-foreground/10 mb-6 grid grid-cols-2 gap-4">
                                    {useCase.deploymentStats.map((stat, i) => (
                                        <div key={i}>
                                            <div className="text-xs font-bold text-foreground/40 uppercase tracking-wider mb-1">{stat.label}</div>
                                            <div className="font-bold text-foreground">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            {/* Benefits List */}
                            <ul className="space-y-3 mb-8 flex-1">
                                {useCase.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3 text-body-small font-semibold text-foreground/60">
                                        <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                                        {benefit}
                                    </li>
                                ))}
                            </ul>

                            {/* Economics / ROI Footer */}
                            {useCase.economics && (
                                <div className="mt-auto pt-6 border-t border-foreground/5">
                                    <h4 className="text-xs font-bold text-brand-blue uppercase tracking-widest mb-3 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue"></span>
                                        {useCase.economics.title}
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {useCase.economics.items.map((item, i) => (
                                            <div key={i}>
                                                <div className="text-xs text-foreground/40 font-medium mb-1">
                                                    {item.label}
                                                </div>
                                                <div className="text-h6 font-bold text-foreground">
                                                    {item.value}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
