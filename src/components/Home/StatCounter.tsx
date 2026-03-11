"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
    target: number;
    isDecimal?: boolean;
    prefix?: string;
    suffix?: string;
    duration?: number;
}

export default function StatCounter({
    target,
    isDecimal = false,
    prefix = "",
    suffix = "",
    duration = 2000,
}: StatCounterProps) {
    const [value, setValue] = useState(0);
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let startTimestamp: number | null = null;
        let animationFrame: number;
        let observer: IntersectionObserver;

        const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);

            // easeOutQuart
            const ease = 1 - Math.pow(1 - progress, 4);
            const current = ease * target;

            setValue(current);

            if (progress < 1) {
                animationFrame = window.requestAnimationFrame(step);
            } else {
                setValue(target); // Force end exact
            }
        };

        observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animationFrame = window.requestAnimationFrame(step);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);

        return () => {
            if (animationFrame) window.cancelAnimationFrame(animationFrame);
            if (ref.current && observer) observer.unobserve(ref.current);
        };
    }, [target, duration]);

    const displayValue = isDecimal ? value.toFixed(1) : Math.floor(value);

    return (
        <div ref={ref} className="inline-block">
            {prefix}{displayValue}{suffix}
        </div>
    );
}
