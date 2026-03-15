"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Logo.module.css";
import Link from "next/link";


export default function Logo() {
    const [customLogo, setCustomLogo] = useState(null);

    useEffect(() => {
        // Use default logo
    }, []);

    const draw = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: (i) => ({
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay: i * 0.15, type: "spring", duration: 1.8, bounce: 0 },
                opacity: { delay: i * 0.15, duration: 0.01 }
            }
        })
    };

    const glow = {
        hidden: { opacity: 0 },
        visible: {
            opacity: [0.4, 0.8, 0.4],
            transition: {
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
            }
        }
    };

    return (
        <Link href="/" className={styles.logo}>
            <div className={styles.symbolContainer}>
                {customLogo ? (
                    <motion.div
                        className={styles.customLogoWrapper}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img src={customLogo} alt="Logo" className={styles.customLogo} />
                    </motion.div>
                ) : (
                    <motion.svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        initial="hidden"
                        animate="visible"
                        className={styles.symbol}
                    >
                        {/* Glow effect - using website colors */}
                        <defs>
                            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="#6C8CFF" />
                                <stop offset="100%" stopColor="#00E5A8" />
                            </linearGradient>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Background circle */}
                        <motion.circle
                            cx="22"
                            cy="22"
                            r="20"
                            fill="none"
                            stroke="url(#logoGradient)"
                            strokeWidth="1.5"
                            opacity="0.3"
                            variants={glow}
                        />

                        {/* Y shape - left arm */}
                        <motion.path
                            d="M12 12 L22 24"
                            stroke="url(#logoGradient)"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            variants={draw}
                            custom={0}
                        />

                        {/* Y shape - right arm */}
                        <motion.path
                            d="M32 12 L22 24"
                            stroke="url(#logoGradient)"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            variants={draw}
                            custom={0.3}
                        />

                        {/* Y shape - stem */}
                        <motion.path
                            d="M22 24 L22 34"
                            stroke="url(#logoGradient)"
                            strokeWidth="3"
                            fill="transparent"
                            strokeLinecap="round"
                            filter="url(#glow)"
                            variants={draw}
                            custom={0.6}
                        />

                        {/* Accent dot - teal color */}
                        <motion.circle
                            cx="22"
                            cy="36"
                            r="2"
                            fill="#00E5A8"
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.3 }}
                        />
                    </motion.svg>
                )}
            </div>
            <div className={styles.textContainer}>
                <span className={styles.firstName}>YASH</span>
                <span className={styles.lastName}>SRIVASTAVA</span>
            </div>
        </Link>
    );
}
