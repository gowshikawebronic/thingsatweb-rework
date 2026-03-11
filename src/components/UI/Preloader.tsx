"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "@/i18n/LanguageProvider";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [progress, setProgress] = useState(0);
    const { t } = useTranslation();

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                // Accelerate loading near the end
                const increment = prev < 70 ? Math.random() * 15 + 5 : Math.random() * 8 + 2;
                return Math.min(prev + increment, 100);
            });
        }, 150);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (progress >= 100) {
            const timer = setTimeout(() => setIsLoading(false), 600);
            return () => clearTimeout(timer);
        }
    }, [progress]);

    // Prevent body scroll while loading
    useEffect(() => {
        if (isLoading) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isLoading]);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background"
                >
                    {/* Background Gradient Mesh */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div className="absolute -top-[20%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-brand-blue/10 blur-[120px]" />
                        <div className="absolute top-[40%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-brand-green/10 blur-[150px]" />
                    </div>

                    {/* Logo Animation */}
                    <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="relative z-10 flex flex-col items-center"
                    >
                        {/* Logo Text */}
                        <div className="flex items-center gap-3 mb-10">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                className="w-10 h-10 rounded-xl bg-gradient-green flex items-center justify-center shadow-lg"
                            >
                                <span className="text-white font-display font-black text-lg">T</span>
                            </motion.div>
                            <div>
                                <span className="text-2xl font-display font-black text-foreground tracking-tight">Things</span>
                                <span className="text-2xl font-display font-light text-foreground/60 ml-1">at Web</span>
                            </div>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-48 h-1 bg-foreground/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-brand-green to-brand-blue rounded-full"
                                style={{ width: `${progress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-[10px] font-bold text-foreground/30 uppercase tracking-[0.3em]"
                        >
                            {t("preloader.loading") as string}
                        </motion.p>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
