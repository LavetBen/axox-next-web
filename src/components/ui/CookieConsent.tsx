"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite, faXmark } from '@fortawesome/free-solid-svg-icons';

export const CookieConsent = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check if user has already made a choice (true or false)
        const consent = localStorage.getItem('axox_cookie_consent');

        // Only show if no choice has been stored
        if (consent === null) {
            // Show banner after a short delay
            const timer = setTimeout(() => {
                setIsVisible(true);
            }, 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAccept = () => {
        localStorage.setItem('axox_cookie_consent', 'true');
        setIsVisible(false);
    };

    const handleDecline = () => {
        // Store rejection so it doesn't pop up again
        localStorage.setItem('axox_cookie_consent', 'false');
        setIsVisible(false);
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ duration: 0.5, type: "spring", damping: 20 }}
                    className="fixed bottom-0 left-0 right-0 p-4 z-[100] md:bottom-4 md:left-auto md:right-4 md:max-w-md"
                >
                    <div className="bg-background border border-border shadow-2xl rounded-2xl p-6 relative overflow-hidden">
                        {/* Background Decoration */}
                        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl pointer-events-none" />

                        <div className="flex items-start gap-4 relative z-10">
                            <div className="hidden sm:flex w-10 h-10 bg-primary/10 rounded-full items-center justify-center flex-shrink-0 text-primary">
                                <FontAwesomeIcon icon={faCookieBite} className="w-5 h-5" />
                            </div>

                            <div className="flex-1">
                                <div className="flex justify-between items-start mb-2">
                                    <h4 className="font-bold text-foreground">Cookie Preferences</h4>
                                    <button
                                        onClick={handleDecline}
                                        className="text-muted-foreground hover:text-foreground transition-colors sm:hidden"
                                    >
                                        <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                                    </button>
                                </div>

                                <p className="text-sm text-muted-foreground mb-4">
                                    We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={handleAccept}
                                        className="flex-1 px-4 py-2 bg-primary text-primary-foreground text-sm font-medium rounded-lg hover:bg-primary/90 transition-colors text-center"
                                    >
                                        Accept All
                                    </button>
                                    <button
                                        onClick={handleDecline}
                                        className="px-4 py-2 bg-secondary text-foreground text-sm font-medium rounded-lg hover:bg-secondary/80 transition-colors text-center"
                                    >
                                        Decline
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleDecline}
                                className="text-muted-foreground hover:text-foreground transition-colors hidden sm:block"
                            >
                                <FontAwesomeIcon icon={faXmark} className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
