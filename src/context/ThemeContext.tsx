'use client';

import { createContext, useContext, useState, useEffect } from "react";
import { ThemeContextValue, PhosphorMode } from "@/types";


const ThemeContext = createContext<ThemeContextValue | null>(null); 

function getInitialMode(): PhosphorMode {
    if (typeof window === "undefined") return "green";
    const saved = localStorage.getItem("phosphor-mode") as PhosphorMode | null;
    return saved === "green" || saved === "amber" ? saved : "green";
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<PhosphorMode>(getInitialMode);

    useEffect(() => {
        const body = document.body;
        if (mode === "amber") {
            body.classList.add("amber-mode");
        } else {
            body.classList.remove("amber-mode");
        }
        localStorage.setItem("phosphor-mode", mode);
    }, [mode]);

    const toggleMode = () => { setMode(prev => prev === "green" ? "amber" : "green") };

    return <ThemeContext.Provider value={{ mode, toggleMode, isAmberMode: mode === "amber" }}>{children}</ThemeContext.Provider>
}

export function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}