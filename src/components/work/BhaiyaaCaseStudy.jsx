"use client";
import React from "react";
import { motion } from "framer-motion";
import {
    Smartphone, MapPin, Map, Home, Phone, Lock, User, PartyPopper,
    Search, ShoppingCart, AlertTriangle, CheckCircle2, ArrowDown,
    TrendingUp, Users, Palette, Type, Layers, Zap, BarChart3
} from 'lucide-react';
import styles from "./BhaiyaaCaseStudy.module.css";

const fadeInUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };

export default function BhaiyaaCaseStudy() {
    return (
        <div className={styles.container}>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <motion.div initial="hidden" animate="visible" variants={stagger} className={styles.heroContent}>
                    <motion.span variants={fadeInUp} className={styles.badge}>Case Study</motion.span>
                    <motion.h1 variants={fadeInUp} className={styles.title}>
                        Bhaiyaa: Redefining Hyperlocal Commerce
                    </motion.h1>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        A comprehensive revamp of the Bhaiyaa super-app to streamline the buying journey, reduce cognitive overload, and build trust across Metro cities.
                    </motion.p>
                    <motion.div variants={fadeInUp} className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Role</span>
                            <span className={styles.metaValue}>UI/UX Designer</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Timeline</span>
                            <span className={styles.metaValue}>4 Months</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Platform</span>
                            <span className={styles.metaValue}>Android & iOS</span>
                        </div>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
                    className={styles.heroMockupWrapper}
                >
                    <div className={`${styles.heroMockup} ${styles.mockupBack}`}>
                        <img src="/images/bhaiyaa/new_screen_3.jpg" alt="Bhaiyaa Mart Screen" />
                    </div>
                    <div className={`${styles.heroMockup} ${styles.mockupFront}`}>
                        <img src="/images/bhaiyaa/new_screen_1.jpg" alt="Bhaiyaa Home Screen" />
                    </div>
                </motion.div>
            </section>

            <div className={styles.contentWrapper}>

                {/* ===== 01. CHALLENGE & SOLUTION ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Overview</span>
                        <h2 className={styles.sectionTitle}>Challenge & Solution</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        <div className={styles.boxCard}>
                            <h3 className={styles.boxTitle}>The Challenge</h3>
                            <p className={styles.sectionText}>
                                The original Bhaiyaa app combined food delivery, groceries, medicines, and package delivery into a single cluttered interface. The lack of clear categorization led to <strong>cognitive overload</strong>, with users struggling to differentiate between local stores and platform-wide searches — resulting in abandoned carts and high checkout drop-off.
                            </p>
                        </div>
                        <div className={styles.boxCard}>
                            <h3 className={styles.boxTitle}>The Solution</h3>
                            <p className={styles.sectionText}>
                                We restructured the app by mapping the user's mental model to distinct "modes" (Food vs Fresh vs Deliveries). By introducing a robust Information Architecture, we simplified the home feed using <strong>progressive disclosure</strong> — transforming a cluttered utility layout into an intuitive, modern shopping experience.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== 02. KEY METRICS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Impact</span>
                        <h2 className={styles.sectionTitle}>Key Metrics & Impact</h2>
                    </div>
                    <div className={styles.grid3Col}>
                        <div className={styles.statCard}>
                            <TrendingUp size={28} color="var(--color-accent)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>40%</div>
                            <div className={styles.statLabel}>Reduction in Onboarding Drop-off</div>
                        </div>
                        <div className={styles.statCard}>
                            <BarChart3 size={28} color="var(--color-highlight)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>2.5×</div>
                            <div className={styles.statLabel}>Increase in Category Discovery</div>
                        </div>
                        <div className={styles.statCard}>
                            <Zap size={28} color="var(--color-highlight)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>35%</div>
                            <div className={styles.statLabel}>Faster Checkout Completion</div>
                        </div>
                    </div>
                </section>

                {/* ===== 03. INFORMATION ARCHITECTURE ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Architecture</span>
                        <h2 className={styles.sectionTitle}>Information Architecture</h2>
                        <p className={styles.sectionText}>
                            Mapping the user's mental model was the first critical step. We designed a taxonomy that splits the app's complex inventory into logical, actionable categories.
                        </p>
                    </div>
                    <div className={styles.iaDiagram}>
                        <div className={styles.iaRow}>
                            <div className={`${styles.iaNode} ${styles.iaNodePrimary}`}>🏠 Home Feed</div>
                        </div>
                        <div className={styles.iaArrow}><ArrowDown size={24} /></div>
                        <div className={styles.iaRow}>
                            <div className={`${styles.iaNode} ${styles.iaNodeAccent}`}>🏘️ Community</div>
                            <div className={`${styles.iaNode} ${styles.iaNodeAccent}`}>💊 Health</div>
                            <div className={`${styles.iaNode} ${styles.iaNodeAccent}`}>🛒 Mart</div>
                            <div className={`${styles.iaNode} ${styles.iaNodeAccent}`}>🍕 Food</div>
                            <div className={`${styles.iaNode} ${styles.iaNodeAccent}`}>🎉 Events</div>
                        </div>
                        <div className={styles.iaArrow}><ArrowDown size={24} /></div>
                        <div className={styles.iaRow}>
                            <div className={styles.iaNode}>Category Filters</div>
                            <div className={styles.iaNode}>Location-Based Sorting</div>
                        </div>
                        <div className={styles.iaArrow}><ArrowDown size={24} /></div>
                        <div className={styles.iaRow}>
                            <div className={styles.iaNode}>Store Cards</div>
                            <div className={styles.iaNode}>Store Detail</div>
                            <div className={styles.iaNode}>Cart</div>
                            <div className={`${styles.iaNode} ${styles.iaNodePrimary}`}>✅ Checkout</div>
                        </div>
                    </div>
                </section>

                {/* ===== 04. THE NEW EXPERIENCE ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Product</span>
                        <h2 className={styles.sectionTitle}>The New Experience</h2>
                        <p className={styles.sectionText}>
                            High-fidelity screens illustrating the streamlined user journey: from contextual discovery on the Home feed, through seamless browsing, to a frictionless checkout with OTP verification.
                        </p>
                    </div>
                    <div className={styles.mockupGrid}>
                        {[
                            { src: '/images/bhaiyaa/new_screen_1.jpg', alt: 'Community' },
                            { src: '/images/bhaiyaa/new_screen_2.jpg', alt: 'Health' },
                            { src: '/images/bhaiyaa/new_screen_3.jpg', alt: 'Mart' },
                            { src: '/images/bhaiyaa/new_screen_4.jpg', alt: 'Food' },
                            { src: '/images/bhaiyaa/new_screen_5.jpg', alt: 'Events' },
                        ].map((screen, i) => (
                            <div key={i} className={styles.mockupCard}>
                                <img src={screen.src} alt={screen.alt} className={styles.mockupImage} />
                            </div>
                        ))}
                    </div>
                </section>

                {/* ===== 05. OLD VS NEW ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Evolution</span>
                        <h2 className={styles.sectionTitle}>Old vs New Design</h2>
                        <p className={styles.sectionText}>
                            A visual leap forward. But design isn't just about aesthetics — it's about solving real user problems.
                        </p>
                    </div>

                    <div className={styles.comparisonSection}>
                        <div className={styles.comparisonGrid}>
                            <div className={styles.comparisonItem}>
                                <span className={`${styles.comparisonLabel} ${styles.oldLabel}`}>Previous Design</span>
                                <div style={{ maxWidth: '220px', margin: '0 auto' }}>
                                    <div className={styles.mockupCard} style={{ opacity: 0.75 }}>
                                        <img src="/images/bhaiyaa/old_home.png" alt="Old Design" className={styles.mockupImage} />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.comparisonItem}>
                                <span className={`${styles.comparisonLabel} ${styles.newLabel}`}>New Design</span>
                                <div style={{ maxWidth: '220px', margin: '0 auto' }}>
                                    <div className={styles.mockupCard}>
                                        <img src="/images/bhaiyaa/new_screen_1.jpg" alt="New Design" className={styles.mockupImage} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{ marginTop: '48px' }}>
                        <div className={styles.grid2Col}>
                            <div>
                                <h4 className={styles.boxTitle}>🎨 Visual Upgrades</h4>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}><strong>Modern Typography & Spacing:</strong> Replaced cluttered tight margins with generous white space for effortless scanning.</li>
                                    <li className={styles.listItem}><strong>Color Harmony:</strong> Moved from harsh contrasts to an accessible palette. Active states draw the eye naturally without overwhelming.</li>
                                    <li className={styles.listItem}><strong>Trust-Building Aesthetics:</strong> Clean, rounded cards and quality imagery elevate perceived platform value.</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className={styles.boxTitle}>🧠 UX Improvements</h4>
                                <ul className={styles.list}>
                                    <li className={styles.listItem}><strong>Reduced Cognitive Overload:</strong> Tabbed navigation (Community, Health, Mart, Food, Events) uses progressive disclosure.</li>
                                    <li className={styles.listItem}><strong>Mental Model Alignment:</strong> Users first select a service type, then explore stores within that vertical.</li>
                                    <li className={styles.listItem}><strong>Delightful Edge Cases:</strong> Friendly empty states keep the experience engaging when there's no data.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Streamlined Journey */}
                    <div className={styles.boxCard} style={{ marginTop: '32px' }}>
                        <h4 className={styles.boxTitle}>🗺️ The Streamlined User Journey</h4>
                        <p className={styles.sectionText}>
                            The previous journey was fragmented — users scrolled endlessly to find the right store. The redesigned journey eliminates this friction completely.
                        </p>
                        <div className={styles.journeySteps}>
                            <div className={styles.journeyStep}>
                                <span className={styles.journeyStepLabel}>Step 1: Intent Selection</span>
                                <span className={styles.journeyStepDesc}>Users pick their primary goal via top navigation tabs immediately upon launch.</span>
                            </div>
                            <div className={styles.journeyStep}>
                                <span className={styles.journeyStepLabel}>Step 2: Contextual Filtering</span>
                                <span className={styles.journeyStepDesc}>Secondary filters appear contextually based on intent, drilling down choices instantly.</span>
                            </div>
                            <div className={styles.journeyStep}>
                                <span className={styles.journeyStepLabel}>Step 3: Actionable Cards</span>
                                <span className={styles.journeyStepDesc}>Store cards display distance, time, and open status right on the feed.</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 06. ONBOARDING FLOW ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>User Flow</span>
                        <h2 className={styles.sectionTitle}>Re-engineering the Onboarding Flow</h2>
                        <p className={styles.sectionText}>
                            Side-by-side analysis of how we removed friction by implementing progressive authentication and postponing account creation.
                        </p>
                    </div>

                    {/* Old Flow */}
                    <div className={styles.flowSection}>
                        <h3 className={styles.boxTitle}>Old Flow — High Friction</h3>
                        <div className={`${styles.flowCard} ${styles.flowCardOld}`}>
                            <div className={styles.flowTrack}>
                                {[
                                    { icon: <Smartphone size={24} />, label: 'Open App' },
                                    { icon: <MapPin size={24} />, label: 'Location' },
                                    { icon: <Map size={24} />, label: 'Address' },
                                    { icon: <Home size={24} />, label: 'Home Screen' },
                                    { icon: <Phone size={24} />, label: 'Mobile No.' },
                                    { icon: <Lock size={24} />, label: 'OTP Verify' },
                                    { icon: <User size={24} />, label: 'Create Profile' },
                                    { icon: <PartyPopper size={24} />, label: 'Welcome' },
                                    { icon: <Smartphone size={24} />, label: 'Access App' },
                                ].map((step, i) => (
                                    <div key={i} className={styles.flowStep}>
                                        <div className={`${styles.flowIcon} ${styles.flowIconOld}`}>
                                            {step.icon}
                                        </div>
                                        <span className={`${styles.flowLabel} ${styles.flowLabelOld}`}>{step.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.flowIndicators}>
                                {[
                                    'Too many steps before accessing the app',
                                    'Forced authentication before exploring',
                                    'High cognitive load during onboarding',
                                ].map((text, i) => (
                                    <div key={i} className={styles.indicatorItem}>
                                        <AlertTriangle size={18} color="#f87171" style={{ flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* New Flow */}
                    <div className={styles.flowSection}>
                        <h3 className={styles.boxTitle}>New Flow — Progressive Authentication</h3>
                        <div className={`${styles.flowCard} ${styles.flowCardNew}`}>
                            <div className={styles.flowTrack}>
                                {[
                                    { icon: <Smartphone size={24} />, label: 'Open App' },
                                    { icon: <MapPin size={24} />, label: 'Enable Location' },
                                    { icon: <Map size={24} />, label: 'Select Address' },
                                    { icon: <Home size={24} />, label: 'Home Page' },
                                    { icon: <Search size={24} />, label: 'Explore Services' },
                                    { icon: <ShoppingCart size={24} />, label: 'User Action' },
                                    { icon: <Smartphone size={24} />, label: 'Enter Mobile' },
                                    { icon: <Lock size={24} />, label: 'OTP Verify' },
                                    { icon: <User size={24} />, label: 'Create Profile' },
                                    { icon: <CheckCircle2 size={24} />, label: 'Full Access' },
                                ].map((step, i) => (
                                    <div key={i} className={styles.flowStep}>
                                        <div className={`${styles.flowIcon} ${styles.flowIconNew}`}>
                                            {step.icon}
                                        </div>
                                        <span className={`${styles.flowLabel} ${styles.flowLabelNew}`}>{step.label}</span>
                                    </div>
                                ))}
                            </div>
                            <div className={styles.flowIndicators}>
                                {[
                                    'Users explore the app before signing up',
                                    'Reduced onboarding friction significantly',
                                    'Progressive authentication on first action',
                                    'Faster, more intuitive first-time experience',
                                ].map((text, i) => (
                                    <div key={i} className={`${styles.indicatorItem} ${styles.indicatorItemNew}`}>
                                        <CheckCircle2 size={18} color="var(--color-highlight)" style={{ flexShrink: 0 }} />
                                        <span>{text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 07. DESIGN SYSTEM ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Design System</span>
                        <h2 className={styles.sectionTitle}>Design System Snapshot</h2>
                        <p className={styles.sectionText}>
                            A unified design language ensuring visual consistency across all verticals of the super-app.
                        </p>
                    </div>
                    <div className={styles.dsGrid}>
                        <div className={styles.dsCard}>
                            <h4><Palette size={18} /> Color Palette</h4>
                            <div className={styles.colorSwatches}>
                                <div className={styles.swatch}>
                                    <div className={styles.swatchCircle} style={{ background: '#FF6B35' }} />
                                    <span className={styles.swatchLabel}>Primary</span>
                                </div>
                                <div className={styles.swatch}>
                                    <div className={styles.swatchCircle} style={{ background: '#4CD137' }} />
                                    <span className={styles.swatchLabel}>Success</span>
                                </div>
                                <div className={styles.swatch}>
                                    <div className={styles.swatchCircle} style={{ background: '#FF4757' }} />
                                    <span className={styles.swatchLabel}>Warning</span>
                                </div>
                                <div className={styles.swatch}>
                                    <div className={styles.swatchCircle} style={{ background: '#2F3542' }} />
                                    <span className={styles.swatchLabel}>Dark</span>
                                </div>
                                <div className={styles.swatch}>
                                    <div className={styles.swatchCircle} style={{ background: '#F5F5F5' }} />
                                    <span className={styles.swatchLabel}>Light</span>
                                </div>
                            </div>
                        </div>
                        <div className={styles.dsCard}>
                            <h4><Type size={18} /> Typography</h4>
                            <div className={styles.typeSample}>
                                <span style={{ fontSize: '1.5rem', fontWeight: 700, color: 'var(--color-text-primary)' }}>Heading Bold</span>
                                <span style={{ fontSize: '1.1rem', fontWeight: 500, color: 'var(--color-text-primary)' }}>Subheading Medium</span>
                                <span style={{ fontSize: '0.95rem', color: 'var(--color-text-secondary)' }}>Body text regular weight</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>CAPTION · UPPERCASE · SPACED</span>
                            </div>
                        </div>
                        <div className={styles.dsCard}>
                            <h4><Layers size={18} /> Components</h4>
                            <ul className={styles.list} style={{ marginTop: 0 }}>
                                <li className={styles.listItem}>Rounded store cards with shadow elevation</li>
                                <li className={styles.listItem}>Pill-shaped category tabs with active indicators</li>
                                <li className={styles.listItem}>Gradient CTA buttons with micro-animations</li>
                                <li className={styles.listItem}>Location-aware address bar component</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===== 08. COMPETITIVE LANDSCAPE ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Market</span>
                        <h2 className={styles.sectionTitle}>Competitive Landscape</h2>
                        <p className={styles.sectionText}>
                            How Bhaiyaa differentiates itself in the crowded hyperlocal delivery space.
                        </p>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table className={styles.compTable}>
                            <thead>
                                <tr>
                                    <th>Feature</th>
                                    <th>Bhaiyaa</th>
                                    <th>Swiggy Instamart</th>
                                    <th>Zepto</th>
                                    <th>Dunzo</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className={styles.compHighlight}>
                                    <td>Multi-Vertical</td>
                                    <td>✅ Food, Grocery, Health, Events, Community</td>
                                    <td>❌ Grocery only</td>
                                    <td>❌ Grocery only</td>
                                    <td>✅ Multi-category</td>
                                </tr>
                                <tr>
                                    <td>Hyperlocal Focus</td>
                                    <td>✅ Neighborhood-first</td>
                                    <td>⚠️ Dark stores</td>
                                    <td>⚠️ Dark stores</td>
                                    <td>✅ Local merchants</td>
                                </tr>
                                <tr className={styles.compHighlight}>
                                    <td>Community Tab</td>
                                    <td>✅ Local events & services</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                    <td>❌</td>
                                </tr>
                                <tr>
                                    <td>Progressive Auth</td>
                                    <td>✅ Explore before signup</td>
                                    <td>❌ Login required</td>
                                    <td>❌ Login required</td>
                                    <td>❌ Login required</td>
                                </tr>
                                <tr>
                                    <td>Delivery Speed</td>
                                    <td>30–60 min</td>
                                    <td>10–15 min</td>
                                    <td>10 min</td>
                                    <td>30–45 min</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== 09. MOTION & IDENTITY ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Branding</span>
                        <h2 className={styles.sectionTitle}>Motion & Identity</h2>
                    </div>
                    <div className={styles.grid2Col}>
                        <div>
                            <h3 className={styles.boxTitle}>Why this Logo Animation?</h3>
                            <p className={styles.sectionText}>
                                A logo isn't static anymore. We animated the Bhaiyaa logo to convey speed, locality, and friendly service.
                            </p>
                            <ul className={styles.list}>
                                <li className={styles.listItem}>The smooth bounce represents friendliness — the core ethos of a "Bhaiyaa" (brother).</li>
                                <li className={styles.listItem}>The swift entrance signifies hyper-fast local delivery.</li>
                                <li className={styles.listItem}>Used across splash screens and loading states to keep users engaged.</li>
                            </ul>
                        </div>
                        <div className={styles.mediaPlaceholder} style={{ minHeight: '200px', borderStyle: 'solid', padding: 0 }}>
                            <video
                                src="/images/bhaiyaa/logo_animation.mp4"
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
