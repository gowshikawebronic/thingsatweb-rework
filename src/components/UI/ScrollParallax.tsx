"use client";

import { useEffect, useRef, ReactNode } from "react";

interface ScrollParallaxProps {
    children: ReactNode;
    speed: number;
    className?: string;
}

export default function ScrollParallax({ children, speed, className = "" }: ScrollParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ticking = false;
        const update = () => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                const windowHeight = window.innerHeight;

                // Element is in viewport
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const yPos = (rect.top - windowHeight / 2) * speed;
                    ref.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
                }
            }
            ticking = false;
        };

        const onScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(update);
                ticking = true;
            }
        };

        // Initial check
        update();

        // Add event listener
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [speed]);

    return (
        <div ref={ref} className={`will-change-transform ${className}`}>
            {children}
        </div>
    );
}
