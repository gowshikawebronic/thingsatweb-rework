"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { Hand, Maximize2, X } from "lucide-react";
import Image from "next/image";
import TextureOverlay from "@/components/UI/TextureOverlay";
import FadeUp from "@/components/UI/FadeUp";

export default function PanoramaViewer() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [startY, setStartY] = useState(0);
    const [rotateY, setRotateY] = useState(0);
    const [rotateX, setRotateX] = useState(0);
    const [autoRotate, setAutoRotate] = useState(true);
    const [showHint, setShowHint] = useState(true);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [imageLoaded, setImageLoaded] = useState(false);
    const autoRotateRef = useRef(autoRotate);
    const rotateYRef = useRef(rotateY);

    useEffect(() => { autoRotateRef.current = autoRotate; }, [autoRotate]);
    useEffect(() => { rotateYRef.current = rotateY; }, [rotateY]);

    // Auto-rotation
    useEffect(() => {
        let raf: number;
        const animate = () => {
            if (autoRotateRef.current) {
                setRotateY((prev) => prev + 0.15);
            }
            raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
        return () => cancelAnimationFrame(raf);
    }, []);

    // Hide hint after 3 seconds
    useEffect(() => {
        const timer = setTimeout(() => setShowHint(false), 4000);
        return () => clearTimeout(timer);
    }, []);

    const handlePointerDown = useCallback((clientX: number, clientY: number) => {
        setIsDragging(true);
        setAutoRotate(false);
        setShowHint(false);
        setStartX(clientX - rotateYRef.current);
        setStartY(clientY - 0);
    }, []);

    const handlePointerMove = useCallback((clientX: number, clientY: number) => {
        if (!isDragging) return;
        const newY = (clientX - startX) * 0.5;
        const newX = Math.max(-30, Math.min(30, (clientY - startY) * 0.3));
        setRotateY(newY);
        setRotateX(newX);
    }, [isDragging, startX, startY]);

    const handlePointerUp = useCallback(() => {
        setIsDragging(false);
        // Resume auto-rotate after 3 seconds
        setTimeout(() => setAutoRotate(true), 3000);
    }, []);

    // Mouse events
    const onMouseDown = (e: React.MouseEvent) => handlePointerDown(e.clientX, e.clientY);
    const onMouseMove = (e: React.MouseEvent) => handlePointerMove(e.clientX, e.clientY);
    const onMouseUp = () => handlePointerUp();
    const onMouseLeave = () => { if (isDragging) handlePointerUp(); };

    // Touch events
    const onTouchStart = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        handlePointerDown(touch.clientX, touch.clientY);
    };
    const onTouchMove = (e: React.TouchEvent) => {
        const touch = e.touches[0];
        handlePointerMove(touch.clientX, touch.clientY);
    };
    const onTouchEnd = () => handlePointerUp();

    const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

    const viewerContent = (
        <div
            ref={containerRef}
            onMouseDown={onMouseDown}
            onMouseMove={onMouseMove}
            onMouseUp={onMouseUp}
            onMouseLeave={onMouseLeave}
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            className={`relative w-full overflow-hidden select-none ${isFullscreen ? 'h-full rounded-none' : 'aspect-[16/9] rounded-[2rem]'} ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            style={{ perspective: "1200px" }}
        >
            {/* The 3D Image */}
            <motion.div
                animate={{ rotateY, rotateX }}
                transition={{ type: "tween", duration: 0.1 }}
                className="w-full h-full"
                style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                }}
            >
                <Image
                    src="/assets/3d/Things-at-Web-Sweden-2.jpg"
                    alt="Things at Web Sweden Office"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 80vw"
                    priority
                    onLoad={() => setImageLoaded(true)}
                />
            </motion.div>

            {/* Loading Overlay */}
            {!imageLoaded && (
                <div className="absolute inset-0 bg-foreground/5 backdrop-blur-xl flex items-center justify-center z-30">
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs font-bold text-foreground/40 uppercase tracking-widest">Loading panorama...</span>
                    </div>
                </div>
            )}

            {/* Drag Hint */}
            {showHint && imageLoaded && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none"
                >
                    <div className="bg-black/50 backdrop-blur-xl px-6 py-3 rounded-full flex items-center gap-3 border border-white/20 shadow-2xl">
                        <Hand size={18} className="text-white animate-pulse" />
                        <span className="text-white text-sm font-bold uppercase tracking-widest">Drag to Explore</span>
                    </div>
                </motion.div>
            )}

            {/* Fullscreen Toggle */}
            <button
                onClick={toggleFullscreen}
                className="absolute top-4 right-4 z-20 h-10 w-10 bg-black/40 backdrop-blur-xl border border-white/20 rounded-xl flex items-center justify-center text-white/80 hover:bg-black/60 hover:text-white transition-all cursor-pointer shadow-lg"
            >
                {isFullscreen ? <X size={18} /> : <Maximize2 size={18} />}
            </button>

            {/* Gradient Overlay at edges */}
            <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-black/20 to-transparent pointer-events-none z-10" />
            <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-black/20 to-transparent pointer-events-none z-10" />
        </div>
    );

    return (
        <>
            {/* Normal View */}
            {!isFullscreen && (
                <section className="relative bg-transparent py-12 overflow-hidden">
                    <div className="container-custom relative z-10">
                        <FadeUp>
                            <div className="relative bg-white/60 dark:bg-white/[0.06] backdrop-blur-2xl border border-white/50 dark:border-white/[0.08] rounded-[2rem] p-2 shadow-xl shadow-foreground/[0.03] overflow-hidden">
                                <TextureOverlay />
                                <div className="relative z-10">
                                    {viewerContent}
                                </div>
                            </div>
                        </FadeUp>

                        <div className="text-center mt-6">
                            <p className="text-xs font-bold text-foreground/30 uppercase tracking-widest">
                                🇸🇪 Our Office in Sweden — Drag to explore
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {/* Fullscreen View */}
            {isFullscreen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[300] bg-black"
                >
                    {viewerContent}
                </motion.div>
            )}
        </>
    );
}
