"use client";

import FadeUp from "../UI/FadeUp";
import StatCounter from "./StatCounter";
import SectionHeader from "../UI/SectionHeader";
import TiltCard from "./TiltCard";
import TextureOverlay from "../UI/TextureOverlay";

// --- CLEAN MATTE STAT CARD COMPONENT ---
interface StatCardProps {
    target: number;
    suffix?: string;
    isDecimal?: boolean;
    label: string;
}

function StatCard({ target, suffix, isDecimal, label }: StatCardProps) {
    return (
        <TiltCard className="h-full w-full">
            <div className="group relative h-full w-full flex flex-col items-center justify-center p-8 md:p-10 bg-white/40 dark:bg-gray-800/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 hover:border-brand-blue/30 overflow-hidden">

                {/* --- THE SIGNATURE TEXTURE OVERLAYS --- */}
                <TextureOverlay className="hidden lg:block opacity-30" />

                {/* Ambient Subtle Glow tucked in the corner - Always Blue */}
                <div className="absolute -top-10 -left-10 w-32 h-32 blur-3xl opacity-20 pointer-events-none z-0 bg-brand-blue transition-opacity duration-500 group-hover:opacity-30"></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                    <div className="text-[32px] md:text-[52px] font-display font-black mb-3 drop-shadow-sm text-brand-blue transition-transform duration-500 group-hover:scale-105">
                        <StatCounter target={target} isDecimal={isDecimal} suffix={suffix} />
                    </div>
                    <div className="text-[18px] font-bold text-foreground/60 uppercase tracking-[0.2em] group-hover:text-foreground/80 transition-colors duration-300">
                        {label}
                    </div>
                </div>

            </div>
        </TiltCard>
    );
}

export default function Stats() {
    return (
        <section id="stats" className="relative py-32 bg-transparent z-10">
            <div className="container-custom relative z-10">

                {/* --- HEADER --- */}
                <FadeUp>
                    <div className="mb-16 md:mb-24 flex flex-col items-center">
                        <SectionHeader
                            subtitle="Our Impact"
                            title="By The"
                            highlightText="Numbers."
                            highlightColor="primary"
                            className="justify-center text-center"
                        />
                    </div>
                </FadeUp>

                {/* --- STATS GRID --- */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                    <FadeUp delay={0} className="h-full">
                        <StatCard
                            target={500}
                            suffix="+"
                            label="Global Clients"
                        />
                    </FadeUp>

                    <FadeUp delay={100} className="h-full">
                        <StatCard
                            target={1200}
                            suffix="+"
                            label="Projects Delivered"
                        />
                    </FadeUp>

                    <FadeUp delay={200} className="h-full">
                        <StatCard
                            target={99.9}
                            isDecimal
                            suffix="%"
                            label="Service Uptime"
                        />
                    </FadeUp>

                    <FadeUp delay={300} className="h-full">
                        <StatCard
                            target={12}
                            suffix="+"
                            label="Years Experience"
                        />
                    </FadeUp>

                </div>
            </div>
        </section>
    );
}