"use client";

import { createContext, useContext, useState, useEffect, ReactNode, useCallback } from "react";
import { en, TranslationKeys } from "./en";
import { sv } from "./sv";

type Language = "en" | "sv";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string | string[];
}

const dictionaries: Record<Language, TranslationKeys> = { en, sv };

const LanguageContext = createContext<LanguageContextType>({
    language: "en",
    setLanguage: () => { },
    t: (key: string) => key,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>("en");

    // Load saved language from localStorage on mount
    useEffect(() => {
        const saved = localStorage.getItem("taw-lang") as Language | null;
        if (saved && (saved === "en" || saved === "sv")) {
            setLanguageState(saved);
        }
    }, []);

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang);
        localStorage.setItem("taw-lang", lang);
    }, []);

    // Dot-notation lookup: t("nav.home") -> dictionaries[language].nav.home
    const t = useCallback(
        (key: string): string | string[] => {
            const keys = key.split(".");
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            let result: any = dictionaries[language];
            for (const k of keys) {
                if (result && typeof result === "object" && k in result) {
                    result = result[k];
                } else {
                    return key; // Fallback: return the key itself
                }
            }
            return result;
        },
        [language]
    );

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useTranslation() {
    return useContext(LanguageContext);
}

export type { Language };
