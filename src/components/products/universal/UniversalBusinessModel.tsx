"use client";

import { BusinessModelData } from "@/app/product/types";
import SectionHeader from "@/components/common/SectionHeader";
import { Check, CreditCard } from "lucide-react";

export default function UniversalBusinessModel({ data }: { data: BusinessModelData }) {
    if (!data) return null;

    return (
        <section className=" py-24 font-sora">
            <div className=" mx-auto px-6 max-w-7xl">
                <SectionHeader
                    badge={data.badge}
                    title={data.heading}
                    description={data.description}
                    centered={true}
                    className="max-w-3xl mx-auto mb-16"
                />

                <div className="space-y-10">
                    {data.streams.map((stream, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 rounded-[2.5rem] p-8 md:p-12 border border-foreground/10 shadow-sm">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="p-3 bg-brand-blue/10 text-brand-blue rounded-xl">
                                    <CreditCard size={24} />
                                </div>
                                <div>
                                    <h3 className="text-h4 font-black text-foreground">{stream.title}</h3>
                                    <p className="text-body-small text-foreground/60">{stream.description}</p>
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-8">
                                {stream.pricing.map((tier, i) => (
                                    <div key={i} className={`relative p-8 rounded-3xl border ${i === 1 ? 'border-brand-blue/20 bg-brand-blue/5' : 'border-foreground/10 bg-foreground/[0.02]'} hover:shadow-lg transition-all duration-300`}>
                                        {i === 1 && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-blue text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
                                                Popular
                                            </div>
                                        )}

                                        <h4 className="text-h6 font-bold text-foreground mb-2">{tier.plan}</h4>
                                        <div className="text-h3 font-black text-brand-blue mb-6">{tier.price}</div>

                                        <ul className="space-y-4">
                                            {tier.features.map((feature, f) => (
                                                <li key={f} className="flex items-start gap-3 text-body-small font-semibold text-foreground/60">
                                                    <Check size={16} className="text-brand-blue mt-0.5 shrink-0" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* <button className={`w-full mt-8 py-3 rounded-xl font-bold text-sm transition-colors ${i === 1 ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:text-blue-600'}`}>
                                            Choose {tier.plan}
                                        </button> */}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                {/* Profitability Example Section */}
                {data.profitability && (
                    <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-8 md:p-12 text-white overflow-hidden relative">
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                        <h3 className="text-h5 font-bold mb-8 flex items-center gap-3 relative z-10">
                            <span className="w-8 h-1 bg-green-500 rounded-full"></span>
                            {data.profitability.title}
                        </h3>

                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 relative z-10">
                            {data.profitability.metrics.map((metric, i) => {
                                // Highlight key summary rows
                                const isHighlight = metric.label.includes('Revenue') || metric.label.includes('Profit') || metric.label.includes('Total') || metric.label.includes('ROI');
                                return (
                                    <div key={i} className={`rounded-2xl p-5 border transition-colors ${isHighlight ? 'bg-white/10 border-white/20' : 'bg-white/5 border-white/10'}`}>
                                        <div className="text-xs font-bold text-slate-400 mb-1.5 uppercase tracking-wider">
                                            {metric.label}
                                        </div>
                                        <div className={`text-h4 font-black mb-1.5 tracking-tight ${isHighlight ? 'text-green-400' : 'text-white'}`}>
                                            {metric.value}
                                        </div>
                                        {metric.subtext && (
                                            <div className="text-xs font-medium text-slate-400 leading-relaxed">
                                                {metric.subtext}
                                            </div>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
