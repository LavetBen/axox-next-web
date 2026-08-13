"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useQuery } from '@tanstack/react-query';
import { fetchPricingPlans } from '@/lib/api/pricing';
import { getIcon } from '@/lib/icon-mapping';
import { Skeleton } from '@/components/ui/skeleton';

type PricingTier = {
    name: string;
    price: string;
    description: string;
    features: string[];
    popular?: boolean;
};

type PricingCategory = {
    id: string;
    label: string;
    icon: IconDefinition;
    tiers: PricingTier[];
};

export default function Pricing() {
    const { data: fetchedPricing, isLoading } = useQuery({
        queryKey: ['pricing'],
        queryFn: fetchPricingPlans,
    });

    const displayPricing = fetchedPricing ? fetchedPricing.map(cat => ({
        ...cat,
        icon: getIcon(cat.iconName)
    })) : [];

    const [selectedCategory, setSelectedCategory] = useState<string>("");

    useEffect(() => {
        if (displayPricing && displayPricing.length > 0 && !selectedCategory) {
            setSelectedCategory(displayPricing[0].id);
        }
    }, [displayPricing, selectedCategory]);

    const currentCategory = displayPricing.find((c) => c.id === selectedCategory) || displayPricing[0];

    return (
        <section className="pt-32 pb-20 bg-[#1a1a24] min-h-screen font-cerebri selection:bg-electric-blue/30">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">Transparent Pricing</h1>
                    <p className="text-lg text-white/70 font-light">
                        Choose the perfect plan for your business needs. No hidden fees, just quality service.
                    </p>
                </motion.div>

                {isLoading ? (
                    <>
                        {/* Category Selector Skeleton */}
                        <div className="flex justify-start md:justify-center gap-4 mb-16 pb-4 md:pb-0">
                            {[1, 2, 3].map((i) => (
                                <Skeleton key={i} className="h-14 w-40 rounded-sm bg-white/10" />
                            ))}
                        </div>

                        {/* Pricing Grid Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative rounded-sm p-8 border bg-[#22222f] border-white/5 h-[500px]">
                                    <div className="mb-8">
                                        <Skeleton className="h-8 w-1/2 mb-4 bg-white/10" />
                                        <Skeleton className="h-4 w-3/4 bg-white/10" />
                                    </div>
                                    <div className="mb-8">
                                        <Skeleton className="h-12 w-1/3 bg-white/10" />
                                    </div>
                                    <div className="space-y-4 mb-8">
                                        {[1, 2, 3, 4, 5].map((j) => (
                                            <div key={j} className="flex items-center gap-3">
                                                <Skeleton className="h-4 w-4 rounded-full bg-white/10" />
                                                <Skeleton className="h-4 w-full bg-white/10" />
                                            </div>
                                        ))}
                                    </div>
                                    <Skeleton className="h-12 w-full rounded-sm mt-auto bg-white/10" />
                                </div>
                            ))}
                        </div>
                    </>
                ) : displayPricing.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-white/50 font-light">No pricing plans available at the moment.</p>
                    </div>
                ) : (
                    <>
                        {/* Category Selector */}
                        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-4 mb-16 pb-4 md:pb-0 scrollbar-hide">
                            {displayPricing.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex-shrink-0 px-6 py-3 rounded-sm font-medium transition-all duration-300 whitespace-nowrap border ${
                                        selectedCategory === category.id
                                        ? 'bg-electric-blue text-white border-electric-blue shadow-[0_0_20px_rgba(0,0,255,0.3)]'
                                        : 'bg-[#22222f] text-white/70 border-white/10 hover:bg-white/5 hover:text-white'
                                        }`}
                                >
                                    <span className="md:hidden">
                                        <FontAwesomeIcon icon={category.icon} className="text-xl" />
                                    </span>
                                    <span className="hidden md:inline">{category.label}</span>
                                </button>
                            ))}
                        </div>

                        {/* Pricing Grid */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={selectedCategory}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
                            >
                                {currentCategory?.tiers.map((tier) => (
                                    <div
                                        key={`${currentCategory.id}-${tier.name}`}
                                        className={`relative rounded-sm p-8 border flex flex-col ${
                                            tier.popular
                                            ? 'bg-[#262635] border-electric-blue shadow-[0_8px_30px_rgba(0,0,255,0.1)] z-10'
                                            : 'bg-[#22222f] border-white/10 hover:border-white/20 transition-colors'
                                            }`}
                                    >
                                        {tier.popular && (
                                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-electric-blue text-white px-4 py-1 rounded-sm text-xs font-bold tracking-wider uppercase">
                                                Most Popular
                                            </div>
                                        )}
                                        <div className="mb-8 mt-2">
                                            <h3 className="text-2xl font-light text-white mb-2">{tier.name}</h3>
                                            <p className="text-white/60 text-sm h-10 leading-relaxed font-light">{tier.description}</p>
                                        </div>
                                        <div className="mb-8 pb-8 border-b border-white/10">
                                            <span className="text-5xl font-light text-white">{tier.price}</span>
                                        </div>
                                        <ul className="space-y-4 mb-10 flex-grow">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-4 text-[15px] font-light text-white/80">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-electric-blue mt-1 flex-shrink-0" />
                                                    <span className="leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/quote"
                                            className={`w-full block text-center px-6 py-4 rounded-sm text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 mt-auto ${
                                                tier.popular 
                                                ? 'bg-electric-blue text-white hover:opacity-90' 
                                                : 'bg-transparent border border-white/20 text-white hover:border-electric-blue hover:text-electric-blue hover:bg-electric-blue/5'
                                                }`}
                                        >
                                            Get Started
                                        </Link>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </>
                )}
            </div>
        </section>
    );
}
