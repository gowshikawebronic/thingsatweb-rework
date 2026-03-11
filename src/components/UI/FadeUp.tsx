"use client";

import { useEffect, useRef, useState, ReactNode } from "react";

interface FadeUpProps {
    children: ReactNode;
    delay?: number; // Optional delay in milliseconds
    className?: string;
    threshold?: number;
}

export default function FadeUp({
    children,
    delay = 0,
    className = "",
    threshold = 0.1,
}: FadeUpProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    if (ref.current) observer.unobserve(ref.current);
                }
            },
            { threshold, rootMargin: "0px 0px -50px 0px" }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) observer.unobserve(ref.current);
        };
    }, [threshold]);

    return (
        <div
            ref={ref}
            className={`fade-up ${isVisible ? "is-visible" : ""} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
