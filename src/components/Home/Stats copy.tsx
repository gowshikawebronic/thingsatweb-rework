import FadeUp from "../UI/FadeUp";
import StatCounter from "./StatCounter";

export default function Stats() {
    return (
        <section id="stats" className="relative py-32 bg-white text-brand-foreground clip-diagonal z-10 -mt-10">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
                    <FadeUp>
                        <div className="text-5xl md:text-7xl font-display font-bold text-brand-green mb-2">
                            <StatCounter target={500} suffix="+" />
                        </div>
                        <div className="text-lg font-medium text-gray-500 uppercase tracking-widest">Global Clients</div>
                    </FadeUp>

                    <FadeUp delay={100}>
                        <div className="text-5xl md:text-7xl font-display font-bold text-brand-blue mb-2">
                            <StatCounter target={1200} suffix="+" />
                        </div>
                        <div className="text-lg font-medium text-gray-500 uppercase tracking-widest">Projects Delivered</div>
                    </FadeUp>

                    <FadeUp delay={200}>
                        <div className="text-5xl md:text-7xl font-display font-bold text-brand-green mb-2">
                            <StatCounter target={99.9} isDecimal suffix="%" />
                        </div>
                        <div className="text-lg font-medium text-gray-500 uppercase tracking-widest">Service Uptime</div>
                    </FadeUp>

                    <FadeUp delay={300}>
                        <div className="text-5xl md:text-7xl font-display font-bold text-brand-blue mb-2">
                            <StatCounter target={12} suffix="+" />
                        </div>
                        <div className="text-lg font-medium text-gray-500 uppercase tracking-widest">Years Experience</div>
                    </FadeUp>
                </div>
            </div>
        </section>
    );
}
