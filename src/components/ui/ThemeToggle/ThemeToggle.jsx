"use client";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            className={styles.toggle}
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={theme}
                    initial={{ y: -20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: 20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.2 }}
                >
                    {theme === "dark" ? (
                        <Sun size={20} />
                    ) : (
                        <Moon size={20} />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
