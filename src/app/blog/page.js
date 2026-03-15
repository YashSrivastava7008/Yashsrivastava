"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import styles from "./page.module.css";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";
import postsData from "../../data/posts.json";

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setBlogPosts(postsData);
        setIsLoading(false);
    }, []);

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <motion.div
                    className={styles.header}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className={styles.title}>Thoughts & Insights</h1>
                    <p className={styles.subtitle}>Writing about design, technology, and the creative process.</p>
                </motion.div>

                {isLoading ? (
                    <div style={{ textAlign: 'center', padding: '2rem' }}>Loading...</div>
                ) : (
                    <div className={styles.grid}>
                        {blogPosts.map((post, index) => (
                            <motion.article
                                key={post.id}
                                className={styles.card}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                            >
                                <Link href={`/blog/${post.id}`} className={styles.link}>
                                    <div className={styles.imageWrapper} style={{ backgroundColor: post.imageColor || '#eee' }}>
                                        {post.image ? (
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                fill
                                                style={{ objectFit: "cover" }}
                                                className={styles.image}
                                            />
                                        ) : (
                                            <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem' }}>
                                                {post.icon || '📝'}
                                            </div>
                                        )}
                                    </div>
                                    <div className={styles.content}>
                                        <div className={styles.meta}>
                                            <span>{post.date}</span>
                                            {post.readTime && (
                                                <>
                                                    <span>•</span>
                                                    <span>{post.readTime}</span>
                                                </>
                                            )}
                                        </div>
                                        <h2 className={styles.postTitle}>{post.title}</h2>
                                        <p className={styles.excerpt}>{post.excerpt}</p>
                                        <div className={styles.tags}>
                                            {post.tags?.map(tag => (
                                                <span key={tag} className={styles.tag}>{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                </Link>
                            </motion.article>
                        ))}
                    </div>
                )}
            </div>
            <ContactCTA />
        </main>
    );
}
