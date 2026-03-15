'use client';
import { useState, useEffect } from 'react';
import styles from './AvailabilityBadge.module.css';

import config from '../../../config/api';

export default function AvailabilityBadge() {
    const [available, setAvailable] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAvailability = async () => {
            try {
                const res = await fetch(`${config.dashboardApi}/api/settings`);
                const data = await res.json();
                // Check if property exists, defaulting to true if fetch fails or property missing
                if (data && typeof data.available !== 'undefined') {
                    setAvailable(data.available);
                } else {
                    setAvailable(true);
                }
            } catch (error) {
                console.error("Failed to fetch availability status:", error);
                setAvailable(true);
            } finally {
                setLoading(false);
            }
        };

        fetchAvailability();
    }, []);

    // Don't show badge while loading or if fetch failed
    if (loading || available === null) return null;

    return (
        <div className={`${styles.badge} ${available ? styles.available : styles.unavailable}`}>
            <span className={styles.dot}></span>
            <span className={styles.text}>
                {available ? 'Available for Work' : 'Not Available'}
            </span>
        </div>
    );
}
