"use client";
import React from "react";
import { motion } from "framer-motion";
import { 
    Zap, MapPin, BatteryCharging, Leaf, TrendingUp, Users, DollarSign, Target,
    Activity, BarChart2, Briefcase, CheckCircle, Navigation, Package,
    AlertTriangle, Clock, Truck
} from 'lucide-react';
import styles from "./MyrikCaseStudy.module.css";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function MyrikCaseStudy() {
    return (
        <div className={styles.container}>
            {/* ===== HERO ===== */}
            <section className={styles.hero}>
                <div className={styles.heroBg} />
                <div className={styles.heroGrid} />
                <motion.div initial="hidden" animate="visible" variants={stagger} className={styles.heroContent}>
                    <motion.span variants={fadeInUp} className={styles.badge}>Case Study</motion.span>
                    <motion.h1 variants={fadeInUp} className={styles.title}>
                        Myrik: Electrifying the Last Mile in Bharat
                    </motion.h1>
                    <motion.p variants={fadeInUp} className={styles.subtitle}>
                        How a Mumbai-based startup is building the digital mobility infrastructure for India's underserved Tier-2 to Tier-4 cities.
                    </motion.p>
                    <motion.div variants={fadeInUp} className={styles.metaGrid}>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Industry</span>
                            <span className={styles.metaValue}>Mobility & Logistics</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Focus</span>
                            <span className={styles.metaValue}>Tier 2–4 India</span>
                        </div>
                        <div className={styles.metaItem}>
                            <span className={styles.metaLabel}>Core Tech</span>
                            <span className={styles.metaValue}>EV Ride-hailing</span>
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
                        <img src="/images/myrik/screens/home.png" alt="Myrik Home Screen" />
                    </div>
                    <div className={`${styles.heroMockup} ${styles.mockupFront}`}>
                        <img src="/images/myrik/screens/splash.png" alt="Myrik Splash Screen" />
                    </div>
                </motion.div>
            </section>

            <div className={styles.contentWrapper}>

                {/* ===== 01. EXECUTIVE SUMMARY ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Overview</span>
                        <h2 className={styles.sectionTitle}>Executive Summary</h2>
                    </div>
                    <div className={styles.contentRow}>
                        <div>
                            <p className={styles.sectionText}>
                                <strong>Myrik</strong> is a pioneering mobility startup focusing on India's underserved non-metro markets. It leverages app-based e-rickshaw ride-hailing to solve chaotic, unorganized transport challenges in small towns.
                            </p>
                            <p className={styles.sectionText}>
                                With rides starting at just <strong>₹10</strong>, Myrik simultaneously stacks grocery delivery and B2B logistics on the same digital infrastructure—a true "blue ocean" strategy.
                            </p>
                        </div>
                        <div className={styles.highlightCard}>
                            <Target className={styles.cardIcon} size={28} />
                            <h3 className={styles.cardTitle}>Core Value Proposition</h3>
                            <ul className={styles.swotList}>
                                <li><strong>Accessibility</strong> — Digital ride-hailing in towns where auto stands rule</li>
                                <li><strong>Affordability</strong> — Shared rides from ₹10</li>
                                <li><strong>Sustainability</strong> — 100% EV fleet, zero emissions</li>
                                <li><strong>Utility Stacking</strong> — People + parcels on one network</li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* ===== 02. COMPANY BACKGROUND ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Background</span>
                        <h2 className={styles.sectionTitle}>Company Background</h2>
                    </div>
                    <div className={styles.contentRow}>
                        <div>
                            <p className={styles.sectionText}>
                                Founded in <strong>2024</strong> in Mumbai under <em>Arohana Technologies Pvt Ltd</em>, Myrik was born from a stark realization: the digital mobility revolution completely bypassed India's smaller towns.
                            </p>
                            <div className={styles.quoteBlock}>
                                <p className={styles.quoteText}>"Our mission is to build the digital nervous system for last-mile distribution in Bharat."</p>
                                <span className={styles.quoteAuthor}>— Vision Statement</span>
                            </div>
                        </div>
                        <div className={styles.grid3Col} style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: 0 }}>
                            <div className={styles.statCard} style={{ padding: '20px' }}>
                                <div className={styles.statValue} style={{ fontSize: '1.8rem' }}>2024</div>
                                <div className={styles.statLabel}>Founded</div>
                            </div>
                            <div className={styles.statCard} style={{ padding: '20px' }}>
                                <div className={styles.statValue} style={{ fontSize: '1.8rem' }}>Mumbai</div>
                                <div className={styles.statLabel}>Headquarters</div>
                            </div>
                            <div className={styles.statCard} style={{ padding: '20px' }}>
                                <div className={styles.statValue} style={{ fontSize: '1.8rem' }}>Arohana</div>
                                <div className={styles.statLabel}>Parent Company</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 03. PROBLEM STATEMENT ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Problem</span>
                        <h2 className={styles.sectionTitle}>The Mobility Disconnect</h2>
                    </div>
                    
                    <div className={styles.swotGrid} style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
                        <div className={styles.swotItem} style={{ borderLeft: '3px solid #f87171', borderBottom: 'none' }}>
                            <AlertTriangle color="#f87171" size={24} style={{marginBottom: '12px'}} />
                            <h3 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>Unorganized Transport</h3>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', marginBottom: 0}}>
                                Price haggling, unpredictable waits, and zero reliability in small-town auto-rickshaw services.
                            </p>
                        </div>
                        <div className={styles.swotItem} style={{ borderLeft: '3px solid #facc15', borderBottom: 'none' }}>
                            <DollarSign color="#facc15" size={24} style={{marginBottom: '12px'}} />
                            <h3 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>Prohibitive Costs</h3>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', marginBottom: 0}}>
                                ₹60 for a 3km commute is unviable for someone earning ₹15,000/month in a Tier-3 city.
                            </p>
                        </div>
                        <div className={styles.swotItem} style={{ borderLeft: '3px solid var(--color-accent)', borderBottom: 'none' }}>
                            <MapPin color="var(--color-accent)" size={24} style={{marginBottom: '12px'}} />
                            <h3 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>Last-Mile Void</h3>
                            <p className={styles.sectionText} style={{fontSize: '0.9rem', marginBottom: 0}}>
                                Delivery and e-commerce struggle with high logistics costs where metro-level infrastructure doesn't exist.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ===== ECOSYSTEM INFOGRAPHIC ===== */}
                <section className={styles.section} style={{ paddingTop: '20px', paddingBottom: '40px', borderBottom: 'none' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Ecosystem</span>
                        <h2 className={styles.sectionTitle}>The Connected Ecosystem</h2>
                    </div>
                    <div className={styles.ecosystemDiagram}>
                        <div className={styles.ecoTopRow}>
                            <div className={styles.ecoNode}>
                                <div className={styles.ecoNodeIcon}><Users size={28} /></div>
                                <h4>Users</h4>
                                <p>Affordable daily commutes & micro-mobility matching</p>
                            </div>
                            <div className={styles.ecoNode}>
                                <div className={styles.ecoNodeIcon}><Package size={28} /></div>
                                <h4>Local Merchants</h4>
                                <p>On-demand B2B grocery & parcel delivery logistics</p>
                            </div>
                        </div>
                        
                        <div className={styles.ecoCenter}>
                            <Zap size={28} />
                            Myrik Mobility Platform
                            <span>One Unified Network</span>
                        </div>

                        <div className={styles.ecoTopRow}>
                            <div className={styles.ecoNode}>
                                <div className={styles.ecoNodeIcon}><Truck size={28} /></div>
                                <h4>Drivers</h4>
                                <p>Maximized earnings via pooled rides & delivery tasks</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 04. MARKET ANALYSIS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Market</span>
                        <h2 className={styles.sectionTitle}>Market Opportunity</h2>
                    </div>
                    
                    <div className={styles.grid3Col} style={{ marginTop: 0 }}>
                        <div className={styles.statCard}>
                            <TrendingUp size={28} color="var(--color-accent)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>$12B+</div>
                            <div className={styles.statLabel}>Indian Ride-Hailing Market by 2028</div>
                        </div>
                        <div className={styles.statCard}>
                            <Users size={28} color="var(--color-highlight)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>400M+</div>
                            <div className={styles.statLabel}>Population in Tier 2–4 Cities</div>
                        </div>
                        <div className={styles.statCard}>
                            <Leaf size={28} color="var(--color-highlight)" style={{marginBottom: '16px'}} />
                            <div className={styles.statValue} style={{ fontSize: '2.2rem' }}>45%</div>
                            <div className={styles.statLabel}>YoY EV 3-Wheeler Growth</div>
                        </div>
                    </div>

                    <div className={styles.highlightCard} style={{ marginTop: '24px' }}>
                        <h3 className={styles.cardTitle}>TAM / SAM / SOM</h3>
                        <ul className={styles.swotList}>
                            <li><strong>TAM:</strong> All local commute & delivery in non-metro India ($15B+)</li>
                            <li><strong>SAM:</strong> Smartphone-enabled micro-mobility users in target states ($3B+)</li>
                            <li><strong>SOM:</strong> E-rickshaw commuters in Myrik's operational zones ($300M+)</li>
                        </ul>
                    </div>
                </section>

                {/* ===== 05. PRODUCT & TECHNOLOGY ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Product</span>
                        <h2 className={styles.sectionTitle}>Technology Architecture</h2>
                    </div>

                    <div className={styles.infographicFlow}>
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Zap size={24} /></div>
                            <div className={styles.flowLabel}>Rider App</div>
                            <div className={styles.flowDesc}>Booking, tracking, UPI payments</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox} style={{ background: 'var(--color-accent)', color: 'var(--color-bg-primary)' }}><Activity size={24} /></div>
                            <div className={styles.flowLabel}>Myrik Engine</div>
                            <div className={styles.flowDesc}>AI dispatch, geo-fencing, pricing</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Navigation size={24} /></div>
                            <div className={styles.flowLabel}>Driver App</div>
                            <div className={styles.flowDesc}>Earnings, navigation, requests</div>
                        </div>
                    </div>

                    <div className={styles.contentRow} style={{ marginTop: '48px' }}>
                        <ul className={styles.swotList}>
                            <li><strong>Dispatch Algorithm:</strong> Optimized for pooled rides, matching multiple passengers along similar routes.</li>
                            <li><strong>Location Tracking:</strong> Engineered for low-bandwidth (2G/3G) environments in rural India.</li>
                            <li><strong>Incentive Engine:</strong> Gamified logic ensuring supply during peak hours like market openings.</li>
                        </ul>
                        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                            <div className={styles.heroMockup} style={{ position: 'relative', transform: 'rotateY(-8deg) scale(0.85)', left: 0, top: 0, animation: 'none', width: '200px', height: '420px' }}>
                                <img src="/images/myrik/screens/booking.png" alt="Booking Screen" />
                            </div>
                            <div className={styles.heroMockup} style={{ position: 'relative', transform: 'rotateY(8deg) scale(0.85)', left: 0, top: 0, animation: 'none', width: '200px', height: '420px' }}>
                                <img src="/images/myrik/screens/tracking.png" alt="Tracking Screen" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== 06. BUSINESS MODEL ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Revenue</span>
                        <h2 className={styles.sectionTitle}>Business Model</h2>
                    </div>

                    <div className={styles.grid3Col}>
                        <div className={styles.highlightCard}>
                            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '12px' }}>🚗</span>
                            <h4 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>Ride Commissions</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.85rem', marginBottom: 0}}>15–20% commission on gross ride value with high density ensuring strong driver earnings.</p>
                        </div>
                        <div className={styles.highlightCard}>
                            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '12px' }}>📦</span>
                            <h4 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>Delivery Services</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.85rem', marginBottom: 0}}>Returning rickshaws utilized for route-optimized grocery & parcel drops.</p>
                        </div>
                        <div className={styles.highlightCard}>
                            <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '12px' }}>🏪</span>
                            <h4 className={styles.cardTitle} style={{fontSize: '1.1rem'}}>Merchant Fees</h4>
                            <p className={styles.sectionText} style={{fontSize: '0.85rem', marginBottom: 0}}>Subscription or transaction fee for local stores to access the delivery fleet.</p>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Value</th>
                                    <th>Implication</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td>Average Ride Value</td><td>₹25–₹40</td><td>Affordable, drives extreme volume</td></tr>
                                <tr><td>Driver Hourly Payout</td><td>₹80–₹120</td><td>Competes with unskilled labor wages</td></tr>
                                <tr><td>Platform Margin</td><td>18%</td><td>Enabled by low marketing in tight geos</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== 07&08. NETWORK & COMPETITION ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Competition</span>
                        <h2 className={styles.sectionTitle}>Network Effects & Competitive Landscape</h2>
                    </div>

                    <div className={styles.contentRow}>
                        <div className={styles.highlightCard}>
                            <h3 className={styles.cardTitle}>Trilateral Network Effect</h3>
                            <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                <strong>Riders</strong> → stable driver earnings → more <strong>Drivers</strong> → faster delivery → more <strong>Merchants</strong> → richer rider experience. A self-reinforcing virtuous cycle.
                            </p>
                        </div>
                        <div className={styles.highlightCard}>
                            <h3 className={styles.cardTitle}>Why Incumbents Struggle</h3>
                            <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                Uber/Ola optimize for 4-wheeler A-to-B economics. Myrik's pooled e-rickshaw dynamics and hyper-local B2B model requires fundamentally different algorithms and ground operations.
                            </p>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr><th>Platform</th><th>Focus</th><th>Fleet</th><th>Pricing</th><th>Myrik's Edge</th></tr>
                            </thead>
                            <tbody>
                                <tr><td><strong>Uber/Ola</strong></td><td>Tier 1</td><td>Cars, Autos</td><td>Premium</td><td>Capital efficiency in Tier-3</td></tr>
                                <tr><td><strong>Rapido</strong></td><td>Tier 1–2</td><td>Bikes</td><td>Budget</td><td>Shared rides = cheaper per seat</td></tr>
                                <tr><td><strong>Namma Yatri</strong></td><td>Metros</td><td>Autos</td><td>Subscription</td><td>Multi-channel revenue model</td></tr>
                                <tr className={styles.myrikHighlight}><td><strong>Myrik</strong></td><td>Tier 2–4</td><td>E-Rickshaws</td><td>₹10 micro</td><td>Digitalizing the informal sector</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== 09. HYPERLOCAL DELIVERY ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Delivery</span>
                        <h2 className={styles.sectionTitle}>Hyperlocal Delivery Network</h2>
                    </div>

                    <div className={styles.contentRow}>
                        <div>
                            <p className={styles.sectionText}>
                                Myrik uses its e-rickshaw fleet as multi-purpose logistics infrastructure—transporting both passengers and small goods through tight neighborhood streets with quick turnaround.
                            </p>
                            <div className={styles.grid3Col} style={{ gridTemplateColumns: '1fr 1fr', marginTop: '16px' }}>
                                <div className={styles.statCard} style={{ padding: '16px' }}>
                                    <div className={styles.statValue} style={{ fontSize: '1.4rem' }}>1–10 km</div>
                                    <div className={styles.statLabel}>Delivery Range</div>
                                </div>
                                <div className={styles.statCard} style={{ padding: '16px' }}>
                                    <div className={styles.statValue} style={{ fontSize: '1.4rem' }}>20–45 min</div>
                                    <div className={styles.statLabel}>Delivery Time</div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 className={styles.cardTitle}>Target Users</h3>
                            <ul className={styles.swotList}>
                                <li><strong>Local Merchants</strong> — Grocery stores, pharmacies, clothing shops</li>
                                <li><strong>Individuals</strong> — Documents, personal items, inter-home transfers</li>
                                <li><strong>Small Businesses</strong> — Local e-commerce, service providers, wholesalers</li>
                            </ul>
                        </div>
                    </div>

                    <div className={styles.infographicFlow} style={{ marginTop: '32px' }}>
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Package size={20} /></div>
                            <div className={styles.flowLabel}>Request</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox} style={{ background: 'var(--color-accent)', color: '#fff' }}><Users size={20} /></div>
                            <div className={styles.flowLabel}>Match</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><MapPin size={20} /></div>
                            <div className={styles.flowLabel}>Pickup</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><Truck size={20} /></div>
                            <div className={styles.flowLabel}>Deliver</div>
                        </div>
                        <div className={styles.flowArrow} />
                        <div className={styles.flowNode}>
                            <div className={styles.flowIconBox}><CheckCircle size={20} /></div>
                            <div className={styles.flowLabel}>Confirm</div>
                        </div>
                    </div>

                    {/* Delivery App Mockups */}
                    <div className={styles.deliveryMockupGallery}>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src="/images/myrik/screens/delivery_welcome.png" alt="Delivery Welcome" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Welcome</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src="/images/myrik/screens/delivery_pickup.png" alt="Pickup & Drop" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Book</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src="/images/myrik/screens/delivery_select_ride.png" alt="Select Ride" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Match</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src="/images/myrik/screens/delivery_tracking.png" alt="Tracking" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>Track</span>
                        </div>
                        <div className={styles.deliveryMockupItem}>
                            <div className={styles.deliveryPhone}>
                                <img src="/images/myrik/screens/delivery_orders.png" alt="Order History" />
                            </div>
                            <span className={styles.deliveryPhoneLabel}>History</span>
                        </div>
                    </div>

                    <div className={styles.tableContainer}>
                        <table className={styles.dataTable}>
                            <thead>
                                <tr><th>Delivery Type</th><th>Examples</th></tr>
                            </thead>
                            <tbody>
                                <tr><td>Grocery</td><td>Vegetables, daily essentials</td></tr>
                                <tr><td>Retail</td><td>Local clothing & electronics stores</td></tr>
                                <tr><td>Food</td><td>Restaurant takeaway</td></tr>
                                <tr><td>Parcel</td><td>Documents, small packages</td></tr>
                                <tr><td>Pharmacy</td><td>Medicines from local pharmacies</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== 10. ECOSYSTEM STRATEGY ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Strategy</span>
                        <h2 className={styles.sectionTitle}>Platform Ecosystem</h2>
                    </div>

                    <div className={styles.contentRow}>
                        <div>
                            <h3 className={styles.cardTitle}>Operational Advantages</h3>
                            <ul className={styles.swotList}>
                                <li><strong>Low cost</strong> — EVs drastically reduce fuel expenses</li>
                                <li><strong>Fast delivery</strong> — Drivers already operate locally</li>
                                <li><strong>Access</strong> — E-rickshaws navigate narrow streets</li>
                                <li><strong>Eco-friendly</strong> — Zero local emissions</li>
                                <li><strong>Income diversity</strong> — Drivers earn beyond rides</li>
                            </ul>
                        </div>
                        <div className={styles.highlightCard}>
                            <Zap className={styles.cardIcon} size={24} />
                            <h3 className={styles.cardTitle}>Multi-Service Platform</h3>
                            <p className={styles.sectionText} style={{ marginBottom: 0 }}>
                                By combining mobility + delivery + local commerce, Myrik positions itself as a community-driven last-mile ecosystem for underserved Indian cities.
                            </p>
                        </div>
                    </div>

                    <div className={styles.tableContainer} style={{ marginTop: '24px' }}>
                        <table className={styles.dataTable}>
                            <thead><tr><th>Time</th><th>Activity</th><th>Impact</th></tr></thead>
                            <tbody>
                                <tr><td><strong>Morning</strong></td><td>Passenger rides</td><td>High-density pooling during rush</td></tr>
                                <tr><td><strong>Afternoon</strong></td><td>Merchant deliveries</td><td>B2B fulfillment replaces idle time</td></tr>
                                <tr><td><strong>Evening</strong></td><td>Parcel & retail</td><td>Delivery surges with home returns</td></tr>
                            </tbody>
                        </table>
                    </div>
                </section>

                {/* ===== BUSINESS MODEL CANVAS ===== */}
                <section className={styles.section}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Canvas</span>
                        <h2 className={styles.sectionTitle}>Business Model Canvas</h2>
                    </div>
                    <div className={styles.canvasGrid}>
                        <div className={`${styles.canvasBox} ${styles['cb-partners']}`}>
                            <h4><Briefcase size={14} /> Key Partners</h4>
                            <ul><li>EV Rickshaw OEMs</li><li>Battery Swap Networks</li><li>Kirana Stores</li><li>UPI Gateways</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-activities']}`}>
                            <h4><Activity size={14} /> Key Activities</h4>
                            <ul><li>Platform Dev</li><li>Driver Onboarding</li><li>Demand Gen</li><li>Logistics Routing</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-resources']}`}>
                            <h4><DollarSign size={14} /> Key Resources</h4>
                            <ul><li>Dispatch engine</li><li>Driver network</li><li>Merchant data</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-valueprops']}`}>
                            <h4 style={{ color: 'var(--color-accent)' }}><Target size={14} /> Value Props</h4>
                            <ul>
                                <li><strong>Riders:</strong> Safe, ₹10 rides</li>
                                <li><strong>Drivers:</strong> Formal income</li>
                                <li><strong>Merchants:</strong> Same-day delivery</li>
                            </ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-relationships']}`}>
                            <h4><Users size={14} /> Relations</h4>
                            <ul><li>In-app Support</li><li>Driver hubs</li><li>Gamified rewards</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-channels']}`}>
                            <h4><TrendingUp size={14} /> Channels</h4>
                            <ul><li>Android Apps</li><li>Referrals</li><li>Local BTL</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-segments']}`}>
                            <h4><Users size={14} /> Segments</h4>
                            <ul><li><strong>B2C:</strong> Students, workers</li><li><strong>B2B:</strong> Pharmacies, wholesale</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-costs']}`}>
                            <h4><BarChart2 size={14} /> Costs</h4>
                            <ul><li>Cloud Infra</li><li>Driver Incentives</li><li>Local Ops</li></ul>
                        </div>
                        <div className={`${styles.canvasBox} ${styles['cb-revenues']}`}>
                            <h4><DollarSign size={14} /> Revenue</h4>
                            <ul><li>Ride Commissions</li><li>B2B Delivery Fees</li><li>Merchant Ads</li></ul>
                        </div>
                    </div>
                </section>

                {/* ===== SWOT ===== */}
                <section className={styles.section} style={{ borderBottom: 'none' }}>
                    <div className={styles.sectionHeader}>
                        <span className={styles.sectionBadge}>Analysis</span>
                        <h2 className={styles.sectionTitle}>SWOT Analysis</h2>
                    </div>
                    <div className={styles.swotGrid}>
                        <div className={`${styles.swotItem} ${styles.swotS}`}>
                            <div className={styles.swotTitle}>Strengths</div>
                            <ul className={styles.swotList}>
                                <li>First-mover in Tier-3 towns</li>
                                <li>Ultra low-cost operations</li>
                            </ul>
                        </div>
                        <div className={`${styles.swotItem} ${styles.swotW}`}>
                            <div className={styles.swotTitle}>Weaknesses</div>
                            <ul className={styles.swotList}>
                                <li>Low average revenue per user</li>
                                <li>Requires intense local ops to scale</li>
                            </ul>
                        </div>
                        <div className={`${styles.swotItem} ${styles.swotO}`}>
                            <div className={styles.swotTitle}>Opportunities</div>
                            <ul className={styles.swotList}>
                                <li>EV financing/loans for drivers</li>
                                <li>Scaling B2B logistics network</li>
                            </ul>
                        </div>
                        <div className={`${styles.swotItem} ${styles.swotT}`}>
                            <div className={styles.swotTitle}>Threats</div>
                            <ul className={styles.swotList}>
                                <li>Pushback from local auto unions</li>
                                <li>Rapido/Ola aggressive expansion</li>
                            </ul>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
