"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Navbar.module.css";
import { Menu, X } from "lucide-react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import Logo from "../Logo/Logo";

const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determine if scrolling up or down
            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Scrolling down & past threshold -> Hide
            } else {
                setIsVisible(true); // Scrolling up or at top -> Show
            }

            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <motion.header
            className={`${styles.header} ${isScrolled ? styles.scrolled : ""} ${!isVisible ? styles.hidden : ""}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <nav className={styles.nav}>
                {/* Logo */}
                <Logo />

                {/* Desktop Navigation */}
                <ul className={styles.navLinks}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className={styles.navLink}>
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Actions */}
                <div className={styles.actions}>
                    {/* CTA Button */}
                    <Link href="/contact" className={styles.ctaButton}>
                        Let's Talk
                    </Link>

                    {/* Theme Toggle */}
                    <ThemeToggle />

                    {/* Mobile Menu Button */}
                    <button
                        className={styles.mobileToggle}
                        onClick={() => setIsMobileOpen(!isMobileOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileOpen && (
                    <motion.div
                        className={styles.mobileMenu}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className={styles.mobileLinks}>
                            {navLinks.map((link, index) => (
                                <motion.div
                                    key={link.href}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 + index * 0.1 }}
                                >
                                    <Link
                                        href={link.href}
                                        className={styles.mobileLink}
                                        onClick={() => setIsMobileOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* Mobile CTA */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 + navLinks.length * 0.1 }}
                            >
                                <Link
                                    href="/contact"
                                    className={styles.mobileCta}
                                    onClick={() => setIsMobileOpen(false)}
                                >
                                    Let's Talk
                                </Link>
                            </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
