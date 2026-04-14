"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./page.module.css";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";
import { Palette, Layers, Film, ArrowRight } from "lucide-react";

const categories = [
    {
        id: "uiux",
        title: "UI/UX Projects",
        subtitle: "Digital Experiences",
        description: "Crafting intuitive interfaces and seamless user experiences for web and mobile platforms.",
        icon: Layers,
        href: "/work/uiux",
        color: "#6C8CFF",
        gradient: "linear-gradient(135deg, #6C8CFF 0%, #4A6CF7 50%, #3B5CE4 100%)",
        glowColor: "rgba(108, 140, 255, 0.3)",
        projectCount: "6+",
        tags: ["Web Apps", "Mobile", "SaaS", "Product Design"]
    },
    {
        id: "graphics",
        title: "Graphics & Artwork",
        subtitle: "Visual Creations",
        description: "Logos, branding, illustrations, and artistic compositions that tell powerful visual stories.",
        icon: Palette,
        href: "/work/graphics",
        color: "#00E5A8",
        gradient: "linear-gradient(135deg, #00E5A8 0%, #00C896 50%, #00A87C 100%)",
        glowColor: "rgba(0, 229, 168, 0.3)",
        projectCount: "10+",
        tags: ["Branding", "Illustrations", "Logos", "Art"]
    },
    {
        id: "video",
        title: "Video Edits",
        subtitle: "Motion Stories",
        description: "Dynamic video editing, motion graphics, and visual storytelling that captivates audiences.",
        icon: Film,
        href: "/work/video-edits",
        color: "#FF6C8C",
        gradient: "linear-gradient(135deg, #FF6C8C 0%, #F74A6C 50%, #E43B5C 100%)",
        glowColor: "rgba(255, 108, 140, 0.3)",
        projectCount: "5+",
        tags: ["Motion Graphics", "Editing", "Reels", "Animation"]
    }
];

const containerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

export default function Work() {
    return (
        <main className={styles.main}>
            <div className={styles.container}>
                {/* Background decorations */}
                <div className={styles.bgGlow1} />
                <div className={styles.bgGlow2} />

                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className={styles.label}>My Work</span>
                    <h1 className={styles.title}>Creative Portfolio</h1>
                    <p className={styles.subtitle}>
                        Explore my work across design, art, and motion — each category
                        showcasing a unique facet of my creative journey.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.cardsContainer}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {categories.map((cat, index) => {
                        const IconComponent = cat.icon;
                        return (
                            <motion.div
                                key={cat.id}
                                variants={cardVariants}
                                className={styles.cardWrapper}
                            >
                                <Link href={cat.href} className={styles.cardLink}>
                                    <div
                                        className={styles.card}
                                        style={{
                                            '--card-color': cat.color,
                                            '--card-gradient': cat.gradient,
                                            '--card-glow': cat.glowColor,
                                        }}
                                    >
                                        {/* Card glow effect */}
                                        <div className={styles.cardGlow} />

                                        {/* Top section with icon and count */}
                                        <div className={styles.cardTop}>
                                            <div className={styles.iconWrapper}>
                                                <IconComponent size={28} strokeWidth={1.5} />
                                            </div>
                                            <div className={styles.projectCount}>
                                                <span className={styles.countNumber}>{cat.projectCount}</span>
                                                <span className={styles.countLabel}>Projects</span>
                                            </div>
                                        </div>

                                        {/* Card content */}
                                        <div className={styles.cardContent}>
                                            <span className={styles.cardSubtitle}>{cat.subtitle}</span>
                                            <h2 className={styles.cardTitle}>{cat.title}</h2>
                                            <p className={styles.cardDescription}>{cat.description}</p>
                                        </div>

                                        {/* Tags */}
                                        <div className={styles.cardTags}>
                                            {cat.tags.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>

                                        {/* CTA */}
                                        <div className={styles.cardCta}>
                                            <span className={styles.ctaText}>Explore Work</span>
                                            <div className={styles.ctaArrow}>
                                                <ArrowRight size={18} />
                                            </div>
                                        </div>

                                        {/* Decorative border gradient */}
                                        <div className={styles.cardBorder} />
                                    </div>
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
            <ContactCTA />
        </main>
    );
}
