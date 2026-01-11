"use client";

import { useState, useEffect } from "react";

const STORAGE_KEY = "jules_rust_course_progress";
const AUTH_KEY = "jules_rust_is_logged_in";

export function useCourseProgress() {
    const [completedModules, setCompletedModules] = useState<string[]>([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedProgress = localStorage.getItem(STORAGE_KEY);
        const storedAuth = localStorage.getItem(AUTH_KEY);

        if (storedProgress) {
            try {
                setCompletedModules(JSON.parse(storedProgress));
            } catch (e) {
                console.error("Failed to parse course progress", e);
            }
        }

        if (storedAuth === "true") {
            setIsLoggedIn(true);
        }
    }, []);

    const markAsCompleted = (moduleId: string) => {
        setCompletedModules((prev) => {
            if (prev.includes(moduleId)) return prev;
            const updated = [...prev, moduleId];
            localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
            return updated;
        });
    };

    const login = () => {
        setIsLoggedIn(true);
        localStorage.setItem(AUTH_KEY, "true");
    };

    const logout = () => {
        setIsLoggedIn(false);
        localStorage.removeItem(AUTH_KEY);
    };

    const isUnlocked = (moduleId: string, previousModuleId?: string) => {
        // First module is always unlocked
        if (!previousModuleId) return true;
        // Otherwise, check if previous module is completed
        return completedModules.includes(previousModuleId);
    };

    const isCompleted = (moduleId: string) => {
        return completedModules.includes(moduleId);
    }

    return {
        completedModules,
        markAsCompleted,
        isUnlocked,
        isCompleted,
        isLoggedIn,
        login,
        logout,
        mounted,
    };
}
