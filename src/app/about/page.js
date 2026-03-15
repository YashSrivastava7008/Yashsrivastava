"use client";
import styles from "./page.module.css";
import Profile from "../../components/about/Profile/Profile";
import Experience from "../../components/about/Experience/Experience";
import Skills from "../../components/about/Skills/Skills";
import Education from "../../components/about/Education/Education";
import Philosophy from "../../components/about/Philosophy/Philosophy";
import ContactCTA from "../../components/home/ContactCTA/ContactCTA";


export default function About() {
    return (
        <main className={styles.main}>
            <Profile />
            <Experience />
            <Skills />
            <Education />
            <Philosophy />
            <ContactCTA />
        </main>
    );
}
