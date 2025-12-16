"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight, faGlobe, faMobileAlt, faCode, faDesktop } from '@fortawesome/free-solid-svg-icons';
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
        <section className="pt-32 pb-20 bg-background min-h-screen">
            <div className="section-container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center max-w-3xl mx-auto mb-16"
                >
                    <h1 className="heading-xl mb-6">Transparent Pricing</h1>
                    <p className="text-body text-lg">
                        Choose the perfect plan for your business needs. No hidden fees, just quality service.
                    </p>
                </motion.div>

                {isLoading ? (
                    <>
                        {/* Category Selector Skeleton */}
                        <div className="flex justify-start md:justify-center gap-4 mb-16 pb-4 md:pb-0">
                            {[1, 2, 3].map((i) => (
                                <Skeleton key={i} className="h-14 w-40 rounded-none" />
                            ))}
                        </div>

                        {/* Pricing Grid Skeleton */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="relative rounded-3xl p-8 border bg-secondary/20 border-transparent h-[500px]">
                                    <div className="mb-8">
                                        <Skeleton className="h-8 w-1/2 mb-4" />
                                        <Skeleton className="h-4 w-3/4" />
                                    </div>
                                    <div className="mb-8">
                                        <Skeleton className="h-12 w-1/3" />
                                    </div>
                                    <div className="space-y-4 mb-8">
                                        {[1, 2, 3, 4, 5].map((j) => (
                                            <div key={j} className="flex items-center gap-3">
                                                <Skeleton className="h-4 w-4 rounded-full" />
                                                <Skeleton className="h-4 w-full" />
                                            </div>
                                        ))}
                                    </div>
                                    <Skeleton className="h-12 w-full rounded-lg mt-auto" />
                                </div>
                            ))}
                        </div>
                    </>
                ) : displayPricing.length === 0 ? (
                    <div className="text-center py-20">
                        <p className="text-xl text-muted-foreground">No pricing plans available at the moment.</p>
                    </div>
                ) : (
                    <>
                        {/* Category Selector */}
                        <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-4 mb-16 pb-4 md:pb-0 scrollbar-hide">
                            {displayPricing.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setSelectedCategory(category.id)}
                                    className={`flex-shrink-0 px-6 py-3 rounded-none font-medium transition-all duration-300 whitespace-nowrap ${selectedCategory === category.id
                                        ? 'bg-primary text-primary-foreground shadow-lg scale-105'
                                        : 'bg-secondary text-foreground hover:bg-secondary/80'
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
                                {currentCategory?.tiers.map((tier, index) => (
                                    <div
                                        key={`${currentCategory.id}-${tier.name}`}
                                        className={`relative rounded-3xl p-8 border ${tier.popular
                                            ? 'bg-background border-primary shadow-xl scale-105 z-10'
                                            : 'bg-secondary/50 border-transparent hover:bg-secondary transition-colors'
                                            }`}
                                    >
                                        {tier.popular && (
                                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-bold">
                                                Most Popular
                                            </div>
                                        )}
                                        <div className="mb-8">
                                            <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                                            <p className="text-muted-foreground text-sm h-10">{tier.description}</p>
                                        </div>
                                        <div className="mb-8">
                                            <span className="text-4xl font-bold">{tier.price}</span>
                                        </div>
                                        <ul className="space-y-4 mb-8">
                                            {tier.features.map((feature) => (
                                                <li key={feature} className="flex items-start gap-3 text-sm">
                                                    <FontAwesomeIcon icon={faCheck} className="w-4 h-4 text-primary mt-1" />
                                                    <span>{feature}</span>
                                                </li>
                                            ))}
                                        </ul>
                                        <Link
                                            href="/quote"
                                            className={`nav-button w-full block text-center ${tier.popular ? 'btn-primary' : 'bg-background border border-border hover:border-primary hover:text-primary'
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
