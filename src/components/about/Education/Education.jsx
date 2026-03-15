"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Education.module.css";
import { GraduationCap, BookOpen } from "lucide-react";
import educationDataRaw from "../../../data/education.json";

export default function Education() {
    const [educationData, setEducationData] = useState([]);

    useEffect(() => {
        setEducationData(educationDataRaw);
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
                    <span className={styles.label}>Education</span>
                    <h2 className={styles.title}>Academic Background</h2>
                </motion.div>

                <div className={styles.grid}>
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={edu.institution}
                            className={styles.card}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className={styles.iconWrapper}>
                                <GraduationCap size={24} />
                            </div>

                            <div className={styles.content}>
                                <h3 className={styles.institution}>{edu.institution}</h3>
                                <p className={styles.degree}>{edu.degree}</p>
                                <div className={styles.meta}>
                                    <span>{edu.duration}</span>
                                    <span>•</span>
                                    <span>{edu.location}</span>
                                </div>

                                {edu.coursework.length > 0 && (
                                    <div className={styles.coursework}>
                                        <h4 className={styles.courseworkTitle}>
                                            <BookOpen size={14} />
                                            Relevant Coursework
                                        </h4>
                                        <div className={styles.courses}>
                                            {edu.coursework.map(course => (
                                                <span key={course} className={styles.course}>
                                                    {course}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
