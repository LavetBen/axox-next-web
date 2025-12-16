"use client";

import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import { collection, getDocs, writeBatch, doc } from "firebase/firestore";
import { fetchServices } from "@/lib/api/services";
import { fetchPricingPlans } from "@/lib/api/pricing";

// Static Data to Seed
const initialServices = [
    {
        title: 'Web Development',
        description: 'Modern, responsive websites and web applications built with cutting-edge technologies.',
        iconName: 'faGlobe',
        gridClass: 'md:col-span-2 md:row-span-2',
        featured: true,
    },
    {
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps for Android and iOS that users love.',
        iconName: 'faMobileAlt',
        gridClass: 'md:col-span-1 md:row-span-1',
        featured: false,
    },
    {
        title: 'Desktop Systems',
        description: 'Powerful desktop applications tailored to streamline your business operations.',
        iconName: 'faDesktop',
        gridClass: 'md:col-span-1 md:row-span-1',
        featured: false,
    },
    {
        title: 'Cloud Solutions',
        description: 'Scalable cloud-based systems that grow with your business needs.',
        iconName: 'faCloud',
        gridClass: 'md:col-span-1 md:row-span-2',
        featured: true,
    },
    {
        title: 'API Development',
        description: 'Robust API integrations that connect your systems seamlessly.',
        iconName: 'faPlug',
        gridClass: 'md:col-span-1 md:row-span-1',
        featured: false,
    },
    {
        title: 'Custom Software',
        description: 'Bespoke software solutions designed specifically for your unique requirements.',
        iconName: 'faCode',
        gridClass: 'md:col-span-1 md:row-span-1',
        featured: false,
    },
];

const initialPricing = [
    {
        id: 'website',
        label: 'Website Development',
        iconName: 'faGlobe',
        tiers: [
            {
                name: 'Starter',
                price: '$80',
                description: 'Perfect for small businesses and portfolios.',
                features: [
                    '5 Pages Responsive Website',
                    'Contact Form Integration',
                    'Basic SEO Setup',
                    '1 Month Support',
                ],
            },
            {
                name: 'Professional',
                price: '$200',
                description: 'Ideal for growing businesses needing more features.',
                features: [
                    '10 Pages Responsive Website',
                    'CMS Integration (WordPress/Strapi)',
                    'Advanced SEO Optimization',
                    'Social Media Integration',
                    '3 Months Support',
                ],
                popular: true,
            },
            {
                name: 'E-Commerce',
                price: '$450',
                description: 'Full-featured online store for selling products.',
                features: [
                    'Unlimited Products',
                    'Payment Gateway Integration',
                    'Inventory Management',
                    'Customer Accounts',
                    '6 Months Support',
                ],
            },
        ],
    },
    {
        id: 'mobile',
        label: 'Mobile App Development',
        iconName: 'faMobileAlt',
        tiers: [
            {
                name: 'MVP',
                price: '$250',
                description: 'Get your core idea to market quickly.',
                features: [
                    'Cross-Platform (iOS & Android)',
                    'Core Features Implementation',
                    'Basic UI/UX Design',
                    'App Store Submission Assistance',
                ],
            },
            {
                name: 'Standard',
                price: '$600',
                description: 'A robust app with polished features.',
                features: [
                    'Advanced UI/UX Design',
                    'Push Notifications',
                    'User Authentication',
                    'API Integration',
                    '3 Months Support',
                ],
                popular: true,
            },
            {
                name: 'Enterprise',
                price: 'Custom',
                description: 'Complex apps with custom requirements.',
                features: [
                    'Complex Backend Architecture',
                    'Real-time Features',
                    'Analytics & Reporting',
                    'Dedicated Project Manager',
                    '12 Months Support',
                ],
            },
        ],
    },
    {
        id: 'custom',
        label: 'Custom Systems',
        iconName: 'faDesktop',
        tiers: [
            {
                name: 'Module Based',
                price: 'From $350',
                description: 'Specific modules to enhance operations.',
                features: [
                    'Custom Business Logic',
                    'Database Design',
                    'Secure Access Control',
                    'Basic Reporting',
                ],
            },
            {
                name: 'Full ERP',
                price: 'From $1,200',
                description: 'Comprehensive business management system.',
                features: [
                    'HR, Finance, Sales Modules',
                    'Workflow Automation',
                    'Third-party Integrations',
                    'Advanced Dashboard',
                    'Training & Onboarding',
                ],
                popular: true,
            },
        ],
    },
];

export default function TestFirebasePage() {
    const [status, setStatus] = useState("Idle");
    const [servicesCount, setServicesCount] = useState<number | null>(null);
    const [pricingCount, setPricingCount] = useState<number | null>(null);

    const checkCounts = async () => {
        try {
            const s = await fetchServices();
            const p = await fetchPricingPlans();
            setServicesCount(s.length);
            setPricingCount(p.length);
        } catch (e: any) {
            console.error(e);
            setStatus("Error checking counts: " + e.message);
        }
    };

    useEffect(() => {
        checkCounts();
    }, []);

    const seedServices = async () => {
        setStatus("Seeding Services...");
        try {
            const batch = writeBatch(db);
            // Delete existing? No, just add new ones for safety in this test script.
            // Using setDoc with known ID or addDoc? Let's use addDoc logic via batch (doc() generates new ID)

            initialServices.forEach(s => {
                const docRef = doc(collection(db, "services"));
                batch.set(docRef, s);
            });

            await batch.commit();
            setStatus("Services Seeded Successfully!");
            checkCounts();
        } catch (e: any) {
            console.error(e);
            setStatus("Error seeding services: " + e.message);
        }
    };

    const seedPricing = async () => {
        setStatus("Seeding Pricing...");
        try {
            const batch = writeBatch(db);
            initialPricing.forEach(p => {
                const docRef = doc(collection(db, "pricing"));
                batch.set(docRef, p);
            });

            await batch.commit();
            setStatus("Pricing Seeded Successfully!");
            checkCounts();
        } catch (e: any) {
            console.error(e);
            setStatus("Error seeding pricing: " + e.message);
        }
    };

    return (
        <div className="min-h-screen pt-32 p-8 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold mb-8">Firebase Verification & Seeding</h1>

            <div className="bg-secondary p-6 rounded-xl mb-8">
                <h2 className="text-xl font-bold mb-4">Connection Status</h2>
                <div className="flex gap-8 mb-4">
                    <div>
                        <div className="text-sm text-muted-foreground">Services in DB</div>
                        <div className="text-4xl font-bold">{servicesCount === null ? "..." : servicesCount}</div>
                    </div>
                    <div>
                        <div className="text-sm text-muted-foreground">Pricing Categories in DB</div>
                        <div className="text-4xl font-bold">{pricingCount === null ? "..." : pricingCount}</div>
                    </div>
                </div>
                <div className="p-4 bg-background rounded-lg border">
                    Status: <span className="font-mono">{status}</span>
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="border p-6 rounded-xl">
                    <h3 className="font-bold mb-4">Services Collection</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Uploads 6 default service items to 'services' collection.</p>
                    <button
                        onClick={seedServices}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 w-full"
                    >
                        Seed Services
                    </button>
                    {servicesCount !== null && servicesCount > 0 && <p className="mt-2 text-green-500 text-sm">Data exists!</p>}
                </div>

                <div className="border p-6 rounded-xl">
                    <h3 className="font-bold mb-4">Pricing Collection</h3>
                    <p className="mb-4 text-sm text-muted-foreground">Uploads 3 pricing categories to 'pricing' collection.</p>
                    <button
                        onClick={seedPricing}
                        className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:opacity-90 w-full"
                    >
                        Seed Pricing
                    </button>
                    {pricingCount !== null && pricingCount > 0 && <p className="mt-2 text-green-500 text-sm">Data exists!</p>}
                </div>
            </div>
        </div>
    );
}
