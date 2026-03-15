"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Experience.module.css";
import { Briefcase, ChevronDown, MapPin, Calendar } from "lucide-react";
import experienceData from "../../../data/experience.json";

const experiences = [];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState(0);
    const [experiences, setExperiences] = useState([]);

    useEffect(() => {
        // Format data to match component structure
        const formattedData = experienceData.map(item => ({
            company: item.company,
            role: item.role,
            duration: item.duration,
            location: item.location || "Remote", // Fallback
            current: item.current || false,
            highlights: item.description ? item.description.split('\n') : []
        }));
        setExperiences(formattedData);
    }, []);

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>Experience</span>
                    <h2 className={styles.title}>Where I've Worked</h2>
                </motion.div>

                <div className={styles.timeline}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.company}
                            className={`${styles.card} ${expandedIndex === index ? styles.expanded : ""}`}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <button
                                className={styles.cardHeader}
                                onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                                aria-expanded={expandedIndex === index}
                            >
                                <div className={styles.cardLeft}>
                                    <div className={styles.iconWrapper}>
                                        <Briefcase size={20} />
                                    </div>
                                    <div className={styles.cardInfo}>
                                        <h3 className={styles.company}>
                                            {exp.company}
                                            {exp.current && <span className={styles.currentBadge}>Current</span>}
                                        </h3>
                                        <p className={styles.role}>{exp.role}</p>
                                        <div className={styles.meta}>
                                            <span className={styles.metaItem}>
                                                <Calendar size={14} />
                                                {exp.duration}
                                            </span>
                                            <span className={styles.metaItem}>
                                                <MapPin size={14} />
                                                {exp.location}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <motion.div
                                    className={styles.chevron}
                                    animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                                >
                                    <ChevronDown size={20} />
                                </motion.div>
                            </button>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        className={styles.cardContent}
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ul className={styles.highlights}>
                                            {exp.highlights.map((item, i) => (
                                                <li key={i} className={styles.highlight}>
                                                    <span className={styles.bullet}></span>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
