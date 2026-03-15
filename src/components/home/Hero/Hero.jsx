"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Button from "../../ui/Button/Button";
import styles from "./Hero.module.css";
import { ArrowDown } from "lucide-react";


export default function Hero() {
    const [available] = useState(true);

    return (
        <section className={styles.hero}>
            {/* Animated Gradient Orbs */}
            <div className={styles.orbs}>
                <div className={styles.orb1}></div>
                <div className={styles.orb2}></div>
                <div className={styles.orb3}></div>
            </div>

            {/* Grid Pattern Overlay */}
            <div className={styles.gridOverlay}></div>

            <div className={styles.content}>
                <motion.div
                    className={`${styles.badge} ${available === false ? styles.unavailable : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className={styles.badgeDot}></span>
                    {available === false ? 'Currently unavailable' : 'Available for new projects'}
                </motion.div>

                <motion.h1
                    className={styles.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    Yash Srivastava
                </motion.h1>

                <motion.h2
                    className={styles.role}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <span className={styles.gradientText}>UI/UX Designer</span> crafting
                    <br />digital experiences that inspire
                </motion.h2>

                <motion.p
                    className={styles.tagline}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    I design intuitive interfaces and build memorable products that
                    bridge the gap between beauty and functionality.
                </motion.p>

                <motion.div
                    className={styles.ctas}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <Button href="/work">View My Work</Button>
                    <Button href="/contact" variant="secondary">Let's Talk</Button>
                </motion.div>

                {/* Tech Stack Preview */}
                <motion.div
                    className={styles.techStack}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    <span className={styles.techLabel}>Tools I use</span>
                    <div className={styles.techIcons}>
                        <span className={styles.techItem}>Figma</span>
                        <span className={styles.techItem}>React</span>
                        <span className={styles.techItem}>Framer</span>
                        <span className={styles.techItem}>Next.js</span>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className={styles.scrollIndicator}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
            >
                <span>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                >
                    <ArrowDown size={20} />
                </motion.div>
            </motion.div>
        </section>
    );
}
