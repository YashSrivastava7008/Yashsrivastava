"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Play } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "../uiux/page.module.css";

const videoProjects = [
    {
        id: "v1",
        title: "Product Showcase Reel",
        category: "Motion Graphics",
        icon: "🎬",
        description: "Dynamic product reveal animation",
        videoSrc: null,
        thumbnail: "/images/projects/guitar.png"
    },
    {
        id: "v2",
        title: "Brand Introduction",
        category: "Video Editing",
        icon: "🎥",
        description: "Cinematic brand story video",
        videoSrc: null,
        thumbnail: "/images/projects/wearables.png"
    },
    {
        id: "v3",
        title: "Social Media Reel",
        category: "Reels",
        icon: "📱",
        description: "Engaging social media content",
        videoSrc: null,
        thumbnail: "/images/projects/zoo.png"
    },
    {
        id: "v4",
        title: "App Demo Video",
        category: "Motion Graphics",
        icon: "📲",
        description: "Interactive app walkthrough animation",
        videoSrc: null,
        thumbnail: "/images/projects/crypto.png"
    },
    {
        id: "v5",
        title: "Event Highlight Reel",
        category: "Video Editing",
        icon: "🎞️",
        description: "Professional event coverage edit",
        videoSrc: null,
        thumbnail: "/images/projects/neon.png"
    }
];

export default function VideoEditsPage() {
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
                        <span className={styles.badgeDot} style={{ background: '#FF6C8C' }} />
                        <span>Motion Stories</span>
                    </div>
                    <h1 className={styles.title}>Video Edits</h1>
                    <p className={styles.subtitle}>
                        Dynamic video editing, motion graphics, and visual storytelling that captivates audiences.
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
                    {videoProjects.map((project) => (
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
                                <div className={styles.videoWrapper}>
                                    {/* Thumbnail with play overlay */}
                                    <img
                                        src={project.thumbnail}
                                        alt={project.title}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                            position: 'absolute',
                                            inset: 0
                                        }}
                                    />
                                    <div className={styles.videoOverlay}>
                                        <motion.div
                                            className={styles.playBtn}
                                            whileHover={{ scale: 1.15 }}
                                        >
                                            <Play size={28} fill="currentColor" />
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
