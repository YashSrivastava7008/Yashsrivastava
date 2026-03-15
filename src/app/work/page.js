"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "../../components/work/ProjectCard";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";
import styles from "./page.module.css";
import projectsData from "../../data/projects.json";

const filters = ["All", "UI/UX Design", "Mobile App", "Product Design", "Web Design"];

export default function Work() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        const loadProjects = () => {
            const validProjects = Array.isArray(projectsData) ? projectsData.filter(p => p.status === 'Published') : [];

            const formattedProjects = validProjects.map(p => ({
                id: p.id,
                title: p.title,
                category: p.category,
                role: p.category,
                image: p.image || '/images/placeholder.jpg',
                imageColor: '#1E3A5F', // Default color
                externalUrl: p.link
            }));
            setProjects(formattedProjects);
            setIsLoading(false);
        };

        loadProjects();
    }, []);

    const filteredProjects = activeFilter === "All"
        ? projects
        : projects.filter(p => p.category === activeFilter);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Selected Work</h1>
                    <p className={styles.subtitle}>A curated collection of projects across web, mobile, and brand identity.</p>
                </motion.div>

                <div className={styles.filters}>
                    {filters.map(filter => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`${styles.filterBtn} ${activeFilter === filter ? styles.active : ""}`}
                        >
                            {filter}
                            {activeFilter === filter && (
                                <motion.div layoutId="activeFilter" className={styles.activeBackground} />
                            )}
                        </button>
                    ))}
                </div>

                <motion.div layout className={styles.grid}>
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
            <ContactCTA />
        </main>
    );
}
