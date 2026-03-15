"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "./Skills.module.css";
import {
    Figma, Code, Search, Palette, Layers, Accessibility,
    BarChart3, Smartphone, Zap
} from "lucide-react";
import skillsData from "../../../data/skills.json";

const iconMap = {
    "Design Tools": Figma,
    "Frontend": Code,
    "Product & Research": Search,
    "UI & Interaction": Palette,
    "Prototyping & Handoff": Layers,
    "Accessibility": Accessibility,
    "Analytics & QA": BarChart3
};

const defaultCategories = [
    "Design Tools",
    "Frontend",
    "Product & Research",
    "UI & Interaction",
    "Prototyping & Handoff",
    "Accessibility",
    "Analytics & QA"
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Skills() {
    const [skillCategories, setSkillCategories] = useState([]);

    useEffect(() => {
        // Group skills by category
        const grouped = defaultCategories.map(catTitle => {
            return {
                title: catTitle,
                icon: iconMap[catTitle] || Zap,
                skills: skillsData
                    .filter(item => item.category === catTitle)
                    .map(item => item.name)
            };
        }).filter(cat => cat.skills.length > 0); // Only show categories with skills

        setSkillCategories(grouped);
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
                    <span className={styles.label}>Skills & Tools</span>
                    <h2 className={styles.title}>What I Work With</h2>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0 }}
                >
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            className={styles.card}
                            variants={itemVariants}
                            whileHover={{ y: -4 }}
                        >
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <category.icon size={20} />
                                </div>
                                <h3 className={styles.categoryTitle}>{category.title}</h3>
                            </div>
                            <div className={styles.skills}>
                                {category.skills.map(skill => (
                                    <span key={skill} className={styles.skill}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
