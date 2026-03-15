"use client";
import { motion } from "framer-motion";
import styles from "./Services.module.css";
import { Palette, Users, Sparkles, Code, Layers, Zap } from "lucide-react";

const services = [
    {
        icon: Palette,
        title: "UI Design",
        description: "Creating visually stunning interfaces that balance aesthetics with usability.",
        featured: true,
        color: "#6C8CFF"
    },
    {
        icon: Users,
        title: "UX Research",
        description: "Understanding user needs through research, testing, and data-driven insights.",
        featured: false,
        color: "#00E5A8"
    },
    {
        icon: Sparkles,
        title: "Motion Design",
        description: "Bringing interfaces to life with purposeful, delightful animations.",
        featured: false,
        color: "#FF6B9D"
    },
    {
        icon: Code,
        title: "Frontend Dev",
        description: "Translating designs into responsive, performant code.",
        featured: true,
        color: "#FFB86C"
    },
    {
        icon: Layers,
        title: "Design Systems",
        description: "Building scalable component libraries and documentation.",
        featured: false,
        color: "#BD93F9"
    },
    {
        icon: Zap,
        title: "Prototyping",
        description: "Rapid iteration with high-fidelity interactive prototypes.",
        featured: false,
        color: "#8BE9FD"
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 }
    }
};

export default function Services() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <span className={styles.label}>What I Do</span>
                    <h2 className={styles.title}>
                        Designing experiences that
                        <span className={styles.highlight}> matter</span>
                    </h2>
                    <p className={styles.subtitle}>
                        From concept to launch, I help brands create digital products that users love.
                    </p>
                </motion.div>

                <motion.div
                    className={styles.grid}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className={`${styles.card} ${service.featured ? styles.featured : ""}`}
                            variants={itemVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div
                                className={styles.iconWrapper}
                                style={{ "--icon-color": service.color }}
                            >
                                <service.icon size={24} />
                            </div>
                            <h3 className={styles.cardTitle}>{service.title}</h3>
                            <p className={styles.cardDescription}>{service.description}</p>

                            {/* Decorative corner */}
                            <div className={styles.corner}></div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
