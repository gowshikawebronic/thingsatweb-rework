"use client";

import FadeUp from "../UI/FadeUp";
import ScrollParallax from "../UI/ScrollParallax";
import TiltCard from "./TiltCard";
import SectionHeader from "../UI/SectionHeader";
import TextureOverlay from "../UI/TextureOverlay";

const StarList = ({ colorClass }: { colorClass: string }) => (
    <div className={`flex gap-1 ${colorClass} mb-6`}>
        {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-5 h-5 fill-current drop-shadow-sm" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
        ))}
    </div>
);

// --- PREMIUM FROSTED GLASS CARD COMPONENT ---
interface TestimonialCardProps {
    quote: string;
    author: string;
    role: string;
    colorClass: "brand-green" | "brand-blue";
}

function TestimonialCard({ quote, author, role, colorClass }: TestimonialCardProps) {
    const isGreen = colorClass === "brand-green";

    return (
        <TiltCard className="h-full w-full">
            <div className={`relative h-full w-full bg-white/60 dark:bg-gray-900/60 backdrop-blur-2xl border border-white/50 dark:border-white/10 rounded-[2rem] p-10 flex flex-col shadow-xl shadow-foreground/[0.03] overflow-hidden transition-colors duration-500 ${isGreen ? 'hover:border-brand-green/30' : 'hover:border-brand-blue/30'}`}>

                {/* --- THE SIGNATURE TEXTURE OVERLAYS --- */}
                <TextureOverlay />

                {/* Ambient Subtle Glow */}
                <div className={`absolute top-0 left-0 w-32 h-32 blur-3xl opacity-10 pointer-events-none z-0 ${isGreen ? 'bg-brand-green' : 'bg-brand-blue'}`}></div>

                {/* Card Content */}
                <div className="relative z-10 flex flex-col h-full">
                    <StarList colorClass={isGreen ? "text-brand-green" : "text-brand-blue"} />

                    <p className="text-foreground/80 text-lg mb-8 italic flex-grow leading-relaxed">
                        &quot;{quote}&quot;
                    </p>

                    <div className="pt-6 border-t border-foreground/10 mt-auto">
                        <h4 className="font-bold text-foreground font-display text-xl mb-1">{author}</h4>
                        <p className={`text-sm font-bold tracking-widest uppercase ${isGreen ? 'text-brand-green' : 'text-brand-blue'}`}>
                            {role}
                        </p>
                    </div>
                </div>

            </div>
        </TiltCard>
    );
}

export default function Testimonials() {
    return (
        <section id="testimonials" className="relative py-32 bg-transparent overflow-hidden">

            <div className="container-custom relative z-10">

                {/* Header Area */}
                <div className="text-center mb-20 flex flex-col items-center">
                    <SectionHeader
                        subtitle="Trusted by"
                        title="Visionaries"
                        highlightText="."
                        highlightColor="primary"
                        className="justify-center"
                    />
                    <FadeUp delay={100}>
                        <p className="text-foreground/70 text-lg font-medium -mt-6">
                            Don&apos;t just take our word for it.
                        </p>
                    </FadeUp>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Card 1 */}
                    <ScrollParallax speed={0.05}>
                        <FadeUp>
                            <TestimonialCard
                                colorClass="brand-green"
                                quote="Things at Web transformed our legacy infrastructure into a cloud-native powerhouse. Our deployment cycles went from weeks to hours."
                                author="Sarah Jenkins"
                                role="CTO, FinServe Global"
                            />
                        </FadeUp>
                    </ScrollParallax>

                    {/* Card 2 */}
                    <ScrollParallax speed={0.1} className="md:pt-12">
                        <FadeUp>
                            <TestimonialCard
                                colorClass="brand-blue"
                                quote="Their cybersecurity audit uncovered vulnerabilities we didn't know existed. The remediation was swift, professional, and zero-disruption."
                                author="David Chen"
                                role="Director of IT, HealthFlow"
                            />
                        </FadeUp>
                    </ScrollParallax>

                    {/* Card 3 */}
                    <ScrollParallax speed={0.15} className="md:pt-24">
                        <FadeUp>
                            <TestimonialCard
                                colorClass="brand-green"
                                quote="The sheer technical competence of the Things at Web team is unmatched. They delivered a complex AI-driven data pipeline 2 months ahead of schedule."
                                author="Marcus Vance"
                                role="CEO, RetailGenix"
                            />
                        </FadeUp>
                    </ScrollParallax>

                </div>
            </div>
        </section>
    );
}