"use client";

import { SuccessMetricsData } from "@/app/product/types";
import SectionHeader from "@/components/common/SectionHeader";
import { DynamicIcon } from "@/components/common/DynamicIcon";

export default function UniversalSuccessMetrics({ data }: { data: SuccessMetricsData }) {
    if (!data) return null;

    return (
        <section className=" py-24 lg:py-32 font-sora relative">
            <div className=" mx-auto px-6 max-w-7xl">
                {/* Changed to items-start so the columns can have different heights, enabling the sticky effect */}
                <div className="grid lg:grid-cols-13 gap-12 lg:gap-8 items-start">

                    {/* STICKY HEADER SECTION (PC ONLY) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-32 relative z-10">
                        <SectionHeader
                            badge={data.badge}
                            title={data.heading}
                            description={data.description}
                            centered={false}
                            className="mb-8"
                        />
                        {/* Can add extra context or a CTA here later */}
                    </div>

                    <div className="hidden lg:block lg:col-span-1" />

                    {/* SCROLLING METRICS GRID */}
                    <div className="lg:col-span-8">
                        <div className="grid sm:grid-cols-2 gap-6">
                            {data.metrics.map((metric, i) => (
                                <div
                                    key={i}
                                    className="bg-white dark:bg-gray-900 p-8 rounded-[2rem] border border-foreground/10 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 group"
                                >
                                    {/* Premium Icon Box */}
                                    <div className="h-14 w-14 rounded-2xl bg-foreground/5 border border-foreground/10 shadow-sm flex items-center justify-center text-brand-blue mb-6 group-hover:bg-brand-blue group-hover:text-white group-hover:border-brand-blue group-hover:scale-110 transition-all duration-500">
                                        <DynamicIcon name={metric.icon} size={24} />
                                    </div>

                                    {/* Data Value */}
                                    <div className="text-h2 font-black text-foreground mb-2 tracking-tight group-hover:text-brand-blue transition-colors duration-300">
                                        {metric.value}
                                    </div>

                                    {/* Data Label */}
                                    <div className="text-[11px] font-bold text-foreground/40 uppercase tracking-widest mb-2">
                                        {metric.label}
                                    </div>

                                    {/* Description text */}
                                    <div className="text-body-small font-medium text-foreground/60 leading-relaxed">
                                        {metric.description}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}