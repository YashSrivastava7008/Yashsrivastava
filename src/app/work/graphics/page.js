"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "../uiux/page.module.css";

const graphicsProjects = [
    {
        id: "g1",
        title: "Brand Identity — Vyntra",
        category: "Branding",
        icon: "🎨",
        image: "/images/projects/crypto.png",
        description: "Complete brand identity design for a fintech startup"
    },
    {
        id: "g2",
        title: "Neon Poster Series",
        category: "Illustration",
        icon: "✨",
        image: "/images/projects/neon.png",
        description: "Vibrant neon-themed poster collection"
    },
    {
        id: "g3",
        title: "Portfolio Artwork",
        category: "Digital Art",
        icon: "🖼️",
        image: "/images/projects/portfolio.png",
        description: "Creative portfolio visual compositions"
    },
    {
        id: "g4",
        title: "Fitness Brand Graphics",
        category: "Branding",
        icon: "💪",
        image: "/images/projects/fitness.png",
        description: "Visual identity for a fitness brand"
    },
    {
        id: "g5",
        title: "Eco Travel Visuals",
        category: "Illustration",
        icon: "🌿",
        image: "/images/projects/ecotravel.png",
        description: "Eco-conscious travel themed illustrations"
    },
    {
        id: "g6",
        title: "Fintech Dashboard Art",
        category: "Digital Art",
        icon: "📊",
        image: "/images/projects/fintech.png",
        description: "Artistic dashboard UI compositions"
    }
];

export default function GraphicsPage() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Back link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <Link href="/work" className={styles.backLink}>
                        <ArrowLeft size={18} />
                        <span>Back to Work</span>
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                >
                    <div className={styles.headerBadge}>
                        <span className={styles.badgeDot} style={{ background: '#00E5A8' }} />
                        <span>Visual Creations</span>
                    </div>
                    <h1 className={styles.title}>Graphics & Artwork</h1>
                    <p className={styles.subtitle}>
                        Logos, branding, illustrations, and artistic compositions — crafted with passion and precision.
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className={styles.grid}
                    initial="hidden"
                    animate="visible"
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.12, delayChildren: 0.3 } }
                    }}
                >
                    {graphicsProjects.map((project) => (
                        <motion.article
                            key={project.id}
                            className={styles.card}
                            variants={{
                                hidden: { opacity: 0, y: 40, scale: 0.97 },
                                visible: {
                                    opacity: 1, y: 0, scale: 1,
                                    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                                }
                            }}
                        >
                            <div className={styles.cardLink}>
                                <div className={styles.imageWrapper}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        unoptimized
                                        style={{ objectFit: "cover" }}
                                        className={styles.image}
                                    />
                                    <div className={styles.imageOverlay}>
                                        <motion.div
                                            className={styles.viewBtn}
                                            whileHover={{ scale: 1.1 }}
                                        >
                                            <ArrowUpRight size={22} />
                                        </motion.div>
                                    </div>
                                </div>

                                <div className={styles.cardContent}>
                                    <span className={styles.cardCategory}>{project.category}</span>
                                    <h3 className={styles.cardTitle}>{project.title}</h3>
                                    <div className={styles.cardMeta}>
                                        <span className={styles.cardIcon}>{project.icon}</span>
                                        <span>{project.description}</span>
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
            <ContactCTA />
        </main>
    );
}
