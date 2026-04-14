"use client";
import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import styles from "./Hero.module.css";
import Link from "next/link";
import { ArrowRight, Figma, Code, Palette, Sparkles } from "lucide-react";

const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.65, delay, ease: [0.23, 1, 0.32, 1] }
});

export default function Hero() {
    const [available] = useState(true);
    const containerRef = useRef(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Parallax transform for floating cards
    const fc1X = useTransform(mouseX, [-400, 400], [12, -12]);
    const fc1Y = useTransform(mouseY, [-300, 300], [8, -8]);
    const fc2X = useTransform(mouseX, [-400, 400], [-10, 10]);
    const fc2Y = useTransform(mouseY, [-300, 300], [-6, 6]);
    const fc3X = useTransform(mouseX, [-400, 400], [8, -8]);
    const fc3Y = useTransform(mouseY, [-300, 300], [10, -10]);
    const fc4X = useTransform(mouseX, [-400, 400], [-14, 14]);
    const fc4Y = useTransform(mouseY, [-300, 300], [-8, 8]);

    useEffect(() => {
        const handleMouse = (e) => {
            const rect = containerRef.current?.getBoundingClientRect();
            if (!rect) return;
            mouseX.set(e.clientX - rect.left - rect.width / 2);
            mouseY.set(e.clientY - rect.top - rect.height / 2);
        };
        window.addEventListener("mousemove", handleMouse);
        return () => window.removeEventListener("mousemove", handleMouse);
    }, [mouseX, mouseY]);

    return (
        <section className={styles.hero} ref={containerRef}>
            {/* Background Layers */}
            <div className={styles.orbs}>
                <div className={styles.orb1} />
                <div className={styles.orb2} />
                <div className={styles.orb3} />
            </div>
            <div className={styles.gridOverlay} />
            <div className={styles.spotlight} />

            {/* Floating Glassmorphic Cards — cursor parallax */}
            <div className={styles.floatingElements}>
                <motion.div className={`${styles.floatingCard} ${styles.fc1}`} style={{ x: fc1X, y: fc1Y }}>
                    <span className={styles.cardIcon}><Figma size={16} /></span>
                    <span className={styles.cardText}>
                        <span className={styles.cardLabel}>Figma</span>
                        <span className={styles.cardValue}>Design System</span>
                    </span>
                </motion.div>
                <motion.div className={`${styles.floatingCard} ${styles.fc2}`} style={{ x: fc2X, y: fc2Y }}>
                    <span className={styles.cardIcon}><Code size={16} /></span>
                    <span className={styles.cardText}>
                        <span className={styles.cardLabel}>React</span>
                        <span className={styles.cardValue}>Component-driven</span>
                    </span>
                </motion.div>
                <motion.div className={`${styles.floatingCard} ${styles.fc3}`} style={{ x: fc3X, y: fc3Y }}>
                    <span className={styles.cardIcon}><Palette size={16} /></span>
                    <span className={styles.cardText}>
                        <span className={styles.cardLabel}>UI/UX</span>
                        <span className={styles.cardValue}>User-first design</span>
                    </span>
                </motion.div>
                <motion.div className={`${styles.floatingCard} ${styles.fc4}`} style={{ x: fc4X, y: fc4Y }}>
                    <span className={styles.cardIcon}><Sparkles size={16} /></span>
                    <span className={styles.cardText}>
                        <span className={styles.cardLabel}>Motion</span>
                        <span className={styles.cardValue}>Micro-animations</span>
                    </span>
                </motion.div>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
                <motion.div
                    className={`${styles.badge} ${available === false ? styles.unavailable : ''}`}
                    {...fadeUp(0)}
                >
                    <span className={styles.badgeDot} />
                    {available === false ? 'Currently unavailable' : 'Available for projects'}
                </motion.div>

                <motion.h1 className={styles.headline} {...fadeUp(0.1)}>
                    I design interfaces
                    <br />
                    <span className={styles.headlineGradient}>that feel alive.</span>
                </motion.h1>

                <motion.p className={styles.subtitle} {...fadeUp(0.2)}>
                    <span className={styles.subtitleEmphasis}>UI/UX Designer</span> crafting premium digital experiences — where aesthetics meet intuition and every pixel earns its place.
                </motion.p>

                <motion.div className={styles.ctas} {...fadeUp(0.3)}>
                    <Link href="/work" className={styles.ctaPrimary}>
                        <span>View My Work</span>
                        <ArrowRight size={18} />
                    </Link>
                    <Link href="/contact" className={styles.ctaSecondary}>
                        <span>Let's Talk</span>
                        <ArrowRight size={16} />
                    </Link>
                </motion.div>


            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
            >
                <span>Scroll</span>
                <motion.div
                    className={styles.scrollLine}
                    animate={{ scaleY: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                />
            </motion.div>
        </section>
    );
}
