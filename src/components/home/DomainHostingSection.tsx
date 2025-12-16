"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faSearch,
    faServer,
    faGlobe,
    faRocket,
    faCheck,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export const DomainHostingSection = () => {
    const { toast } = useToast();
    const [domainQuery, setDomainQuery] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const [searchResult, setSearchResult] = useState<{ available: boolean; domain: string } | null>(null);

    const handleSearch = async () => {
        if (!domainQuery) return;

        setIsSearching(true);
        setSearchResult(null);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        setIsSearching(false);
        setSearchResult({
            available: true,
            domain: domainQuery
        });

        toast({
            title: "Service Coming Soon",
            description: "Domain registration will be available shortly!",
            duration: 3000,
        });
    };

    const handleHostingClick = (e: React.MouseEvent) => {
        e.preventDefault();
        toast({
            title: "Coming Soon!",
            description: "Our premium hosting services are launching very shortly. Stay tuned!",
            duration: 3000,
        });
    };

    const tlds = [
        { name: '.com', price: '$9.98', original: '$13.98' },
        { name: '.net', price: '$11.98', original: '$15.98' },
        { name: '.org', price: '$8.98', original: '$12.98' },
        { name: '.io', price: '$32.98', original: '$45.98' },
        { name: '.co', price: '$6.98', original: '$22.98' },
        { name: '.ai', price: '$65.98', original: '$85.98' },
    ];

    const hostingPlans = [
        {
            icon: faGlobe,
            title: 'Shared Hosting',
            description: 'Easy, affordable web hosting to get you started.',
            price: '$1.98',
            period: '/mo',
            features: ['Free Domain Name', 'Website Builder', 'cPanel Control Panel', 'Unmetered Bandwidth'],
            popular: false,
        },
        {
            icon: faRocket,
            title: 'WordPress Hosting',
            description: 'Managed hosting built specifically for WordPress speed.',
            price: '$4.98',
            period: '/mo',
            features: ['2x Faster Speed', 'Free SSL Certificate', 'Daily Backups', 'Free Migration'],
            popular: true,
        },
        {
            icon: faServer,
            title: 'VPS Hosting',
            description: 'Total control and flexibility for your growing business.',
            price: '$9.98',
            period: '/mo',
            features: ['Full Root Access', 'Dedicated IP', 'SSD Storage', 'Scalable Resources'],
            popular: false,
        },
    ];

    return (
        <section className="section-padding bg-background relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

            <div className="section-container relative z-10">

                {/* Domain Search Section */}
                <div className="text-center max-w-4xl mx-auto mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            Domain Names
                        </span>
                        <h2 className="heading-lg mb-6">
                            Get Your Perfect <span className="text-primary">Domain Name</span>
                        </h2>
                        <p className="text-body text-lg mb-10">
                            Search for your dream domain now. It's the first step to building your brand.
                        </p>

                        {/* Search Bar */}
                        <div className="relative max-w-2xl mx-auto mb-10">
                            <form
                                onSubmit={(e) => { e.preventDefault(); handleSearch(); }}
                                className="relative"
                            >
                                <input
                                    type="text"
                                    placeholder="Find your new domain name..."
                                    value={domainQuery}
                                    onChange={(e) => setDomainQuery(e.target.value)}
                                    className="w-full h-14 md:h-16 pl-6 pr-14 md:pr-36 rounded-full border-2 border-border bg-card text-foreground focus:border-primary focus:outline-none text-base md:text-lg shadow-lg transition-colors"
                                />
                                <button
                                    type="submit"
                                    disabled={isSearching}
                                    className="absolute right-2 top-2 bottom-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-8 rounded-full font-bold transition-all flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {isSearching ? (
                                        <div className="w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            <FontAwesomeIcon icon={faSearch} />
                                            <span className="hidden md:inline">Search</span>
                                        </>
                                    )}
                                </button>
                            </form>

                            {/* Search Result */}
                            <AnimatePresence>
                                {searchResult && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="absolute top-full left-0 right-0 mt-4"
                                    >
                                        <div className="bg-card border border-border rounded-xl p-6 flex flex-col md:flex-row items-center justify-between gap-4 animate-in fade-in slide-in-from-bottom-4">
                                            <div className="text-left">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="w-6 h-6 rounded-full bg-green-500/20 text-green-500 flex items-center justify-center">
                                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                                    </div>
                                                    <h3 className="font-bold text-lg">{searchResult.domain} is available!</h3>
                                                </div>
                                                <p className="text-muted-foreground text-sm">Get it now before someone else does.</p>
                                            </div>
                                            <div className="flex items-center gap-4">
                                                <span className="text-xl font-bold">$9.98<span className="text-sm font-normal text-muted-foreground">/yr</span></span>
                                                <button
                                                    onClick={handleHostingClick}
                                                    className="btn-primary"
                                                >
                                                    Add to Cart
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* TLD Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {tlds.map((tld, index) => (
                                <motion.div
                                    key={tld.name}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="bg-card border border-border p-4 rounded-xl text-center hover:border-primary/50 transition-colors shadow-sm"
                                >
                                    <div className="font-bold text-xl text-foreground mb-1">{tld.name}</div>
                                    <div className="text-primary font-bold">{tld.price}</div>
                                    <div className="text-xs text-muted-foreground line-through">{tld.original}</div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Web Hosting Section */}
                <div>
                    <div className="text-center mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                        >
                            <h2 className="heading-md mb-4">Web Hosting Made Easy</h2>
                            <p className="text-body max-w-2xl mx-auto">
                                Choose the perfect hosting plan for your website. Speed, security, and support included.
                            </p>
                        </motion.div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {hostingPlans.map((plan, index) => (
                            <motion.div
                                key={plan.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`relative p-8 rounded-3xl border ${plan.popular
                                    ? 'bg-primary text-primary-foreground border-primary shadow-xl scale-105 z-10'
                                    : 'bg-card border-border shadow-lg hover:border-primary/30 transition-colors'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-foreground text-background text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-2xl ${plan.popular ? 'bg-primary-foreground/20 text-primary-foreground' : 'bg-primary/10 text-primary'
                                    }`}>
                                    <FontAwesomeIcon icon={plan.icon} />
                                </div>

                                <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                                    {plan.title}
                                </h3>
                                <p className={`mb-6 ${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                    {plan.description}
                                </p>

                                <div className="flex items-baseline gap-1 mb-8">
                                    <span className={`text-4xl font-bold ${plan.popular ? 'text-primary-foreground' : 'text-foreground'}`}>
                                        {plan.price}
                                    </span>
                                    <span className={`${plan.popular ? 'text-primary-foreground/80' : 'text-muted-foreground'}`}>
                                        {plan.period}
                                    </span>
                                </div>

                                <ul className="space-y-4 mb-8">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3">
                                            <FontAwesomeIcon icon={faCheck} className={`w-4 h-4 ${plan.popular ? 'text-primary-foreground' : 'text-primary'}`} />
                                            <span className={`${plan.popular ? 'text-primary-foreground/90' : 'text-foreground/80'}`}>
                                                {feature}
                                            </span>
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={handleHostingClick}
                                    className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-opacity hover:opacity-90 ${plan.popular
                                        ? 'bg-primary-foreground text-primary'
                                        : 'bg-primary text-primary-foreground'
                                        }`}
                                >
                                    Get Started
                                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};
