"use client";
import { useState, useEffect } from "react"; // Removed use
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import ContactCTA from "../../../components/home/ContactCTA/ContactCTA";
import styles from "./page.module.css";
import postsData from "../../../data/posts.json";

// Mock Data (Fallback)
const mockPosts = {
    1: {
        title: "The Role of Motion in Modern UI",
        date: "Oct 12, 2024",
        readTime: "5 min read",
        content: `
      <p>Motion is often treated as an afterthought in the design process—something to be "sprinkled on" once the "real work" is done. But purposeful motion is fundamental to the user experience.</p>
      
      <h3>Why Motion Matters</h3>
      <p>Motion tells a story. It explains how elements relate to each other, where they came from, and where they're going. It guides the user's eye and provides critical feedback for interactions.</p>
      
      <p>When we design for the web, we're designing for a medium that is inherently dynamic. Unlike print, the web is interactive. Motion is the language of that interaction.</p>

      <h3>Principles of Good Interfaces</h3>
      <p>Good motion should be:</p>
      <ul>
        <li><strong>Intentional:</strong> Every animation should serve a purpose.</li>
        <li><strong>Natural:</strong> Easing curves should mimic real-world physics.</li>
        <li><strong>Performant:</strong> It shouldn't slow down the experience.</li>
      </ul>
      
      <p>As designers, we have a responsibility to use motion to enhance usability, not just to show off.</p>
    `
    },
    2: {
        title: "Designing for Accessibility First",
        date: "Sep 28, 2024",
        readTime: "7 min read",
        content: `
      <p>Accessibility (a11y) is not a feature; it's a fundamental requirement. Designing for accessibility means designing for everyone, regardless of their abilities or situational constraints.</p>
      <p>Many designers view accessibility as a constraint that limits their creativity. In reality, accessible design challenges us to create cleaner, more semantic, and more robust interfaces.</p>
    `
    }
};

export default function BlogPost({ id }) {
    // id passed as prop

    // Find post in local data (convert id to number if needed)
    const localPost = postsData.find(p => p.id.toString() === id.toString());

    // If local post found, construct object. If not, fallback to mock.
    const post = localPost ? {
        ...localPost,
        content: localPost.content || `<p>${localPost.excerpt}</p><p>(Full content coming soon...)</p>`
    } : (mockPosts[id] || mockPosts[1]);

    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <main className={styles.main}>
            {/* Progress Bar */}
            <motion.div className={styles.progressBar} style={{ scaleX }} />

            <div className={styles.container}>
                <Link href="/blog" className={styles.backLink}>
                    <ArrowLeft size={20} /> Back to Insights
                </Link>

                <header className={styles.header}>
                    <div className={styles.meta}>
                        <span className={styles.metaItem}><Calendar size={16} /> {post.date}</span>
                        <span className={styles.metaItem}><Clock size={16} /> {post.readTime}</span>
                    </div>
                    <h1 className={styles.title}>{post.title}</h1>
                </header>

                <article
                    className={styles.content}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                <div className={styles.tags}>
                    <span>#Motion</span>
                    <span>#UXDesign</span>
                    <span>#WebDevelopment</span>
                </div>
            </div>

            <ContactCTA />
        </main>
    );
}
