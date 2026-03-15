"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import styles from "./Journey.module.css";

const milestones = [
    {
        year: "2026",
        title: "LPU — Assistant Professor",
        description: "Joined Lovely Professional University to guide the next generation of designers.",
        highlight: true
    },
    {
        year: "2025",
        title: "OpenDhi — Bhaiyaa",
        description: "Crafted micro-animations and strengthened design systems.",
        highlight: false
    },
    {
        year: "2024",
        title: "Freelancing",
        description: "Started freelance work for global clients including UK brands.",
        highlight: true
    },
    {
        year: "2024",
        title: "First Internships",
        description: "CollegeDekho & Myrik — hands-on UX design experience.",
        highlight: false
    },
    {
        year: "2022",
        title: "Masters in Design",
        description: "Joined DIT University for M.Des with focus on UX.",
        highlight: true
    },
    {
        year: "2021",
        title: "Graduated BA",
        description: "Completed Bachelors and discovered passion for design.",
        highlight: false
    },
    {
        year: "2018",
        title: "Started BA",
        description: "Began Bachelor of Arts at Sambalpur University.",
        highlight: false
    }
];

export default function Journey() {
    const containerRef = useRef(null);
    const { scrollXProgress } = useScroll({ container: containerRef });

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <motion.span
                    className={styles.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    My Journey
                </motion.span>
                <motion.h2
                    className={styles.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                >
                    The path that brought me here
                </motion.h2>
            </div>

            <div className={styles.timelineWrapper} ref={containerRef}>
                <div className={styles.timeline}>
                    {milestones.map((milestone, index) => (
                        <motion.div
                            key={`${milestone.year}-${milestone.title}`}
                            className={`${styles.milestone} ${milestone.highlight ? styles.highlight : ""}`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className={styles.yearBadge}>
                                <span>{milestone.year}</span>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.cardTitle}>{milestone.title}</h3>
                                <p className={styles.cardDescription}>{milestone.description}</p>
                            </div>
                            <div className={styles.connector}>
                                <div className={styles.dot}></div>
                                <div className={styles.line}></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Progress indicator */}
            <div className={styles.progressWrapper}>
                <div className={styles.progressTrack}>
                    <motion.div
                        className={styles.progressBar}
                        style={{ scaleX: scrollXProgress }}
                    />
                </div>
                <span className={styles.scrollHint}>Scroll horizontally →</span>
            </div>
        </section>
    );
}
