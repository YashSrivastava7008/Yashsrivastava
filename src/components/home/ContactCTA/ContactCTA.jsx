"use client";
import { motion } from "framer-motion";
import Button from "../../ui/Button/Button";
import styles from "./ContactCTA.module.css";
import { Mail, ArrowRight } from "lucide-react";

export default function ContactCTA() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                {/* Background Elements */}
                <div className={styles.bgPattern}></div>
                <div className={styles.glowOrb}></div>

                <motion.div
                    className={styles.content}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.div
                        className={styles.iconWrapper}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                    >
                        <Mail size={32} />
                    </motion.div>

                    <h2 className={styles.title}>
                        Have a project in mind?
                        <br />
                        <span className={styles.highlight}>Let's work together</span>
                    </h2>

                    <p className={styles.description}>
                        I'm always excited to collaborate on interesting projects.
                        Whether you need a complete redesign or a fresh perspective, let's chat!
                    </p>

                    <div className={styles.ctas}>
                        <Button href="/contact">
                            Get In Touch
                        </Button>
                        <a href="mailto:Yashsrivastava7008@gmail.com" className={styles.emailLink}>
                            <span>Yashsrivastava7008@gmail.com</span>
                            <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
