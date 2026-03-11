import FadeUp from "../UI/FadeUp";
import SectionHeader from "../UI/SectionHeader";
import TextureOverlay from "../UI/TextureOverlay";

export default function TechStack() {
    const techList = [
        "React.js", "Node.js", "AWS", "Microsoft Azure", "Docker",
        "Kubernetes", "Python", "TensorFlow", "Google Cloud"
    ];

    // Duplicate for seamless infinite scroll
    const items = [...techList, ...techList];

    return (
        <section id="tech" className="relative py-32 md:py-48 flex flex-col justify-center z-20 -mt-16">

            {/* --- SHARP DIAGONAL BACKGROUND --- */}
            {/* The clip-diagonal class guarantees straight, sharp lines (no curves) */}
            <div className="absolute inset-0 clip-diagonal bg-gradient-green shadow-[0_30px_60px_rgba(14,173,43,0.2)] pointer-events-none"></div>

            {/* Subtle physical noise overlay inside the tilted shape */}
            <TextureOverlay className="opacity-40 mix-blend-overlay" />

            {/* --- CONTENT --- */}
            <div className="container-custom relative z-10 text-center mb-20 md:mb-24">
                <FadeUp>
                    <div className="text-white drop-shadow-sm">
                        <SectionHeader
                            subtitle="Powered by Industry Leaders"
                            highlightText="Technologies"
                            highlightColor="white"
                            bgColor="green"
                            className="justify-center text-white"
                        />
                    </div>
                </FadeUp>
            </div>

            {/* --- CLEAN FLOATING MARQUEE --- */}
            {/* Removed the box/borders. Added CSS mask for edge fading. */}
            <div
                className="relative w-full overflow-hidden flex"
                style={{
                    maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
                }}
            >
                {/* Increased gap massively for a clean, spacious look */}
                <div className="marquee-container flex items-center gap-12 md:gap-20 text-4xl md:text-6xl font-display font-black text-white/40 tracking-wider">
                    {items.map((tech, i) => (
                        <div key={i} className="flex items-center gap-12 md:gap-20">
                            <span
                                className="inline-block transition-all duration-500 cursor-default hover:text-white hover:scale-110 hover:drop-shadow-[0_0_30px_rgba(255,255,255,0.8)]"
                            >
                                {tech}
                            </span>
                            {/* Decorative Star Separator for a premium tech vibe */}
                            <span className="text-white/20 text-2xl md:text-4xl pointer-events-none">
                                ✦
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}