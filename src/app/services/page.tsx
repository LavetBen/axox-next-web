"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGlobe,
    faMobileAlt,
    faDesktop,
    faCloud,
    faPlug,
    faCode,
    faArrowRight,
    faCheck
} from '@fortawesome/free-solid-svg-icons';
import Lottie from 'lottie-react';
import mobileAppAnimation from '@/assets/mobile_app_animation.json';
import apiAnimation from '@/assets/api_animation.json';
import webAnimation from '@/assets/web_development_animation.json';
import cloudAnimation from '@/assets/cloud_solutions_animation.json';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';

const services = [
    {
        icon: faGlobe,
        title: 'Web Development',
        description: 'We create stunning, high-performance websites and web applications that engage users and drive conversions.',
        features: [
            'Responsive design for all devices',
            'SEO-optimized architecture',
            'Progressive Web Apps (PWA)',
            'E-commerce solutions',
            'Content Management Systems',
            'Custom web portals',
        ],
    },
    {
        icon: faMobileAlt,
        title: 'Mobile Applications',
        description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
        features: [
            'Native iOS development (Swift)',
            'Native Android development (Kotlin)',
            'Cross-platform (React Native, Flutter)',
            'App Store optimization',
            'Push notifications',
            'Offline functionality',
        ],
    },
    {
        icon: faDesktop,
        title: 'Desktop Systems',
        description: 'Powerful desktop applications tailored to streamline your business operations and boost productivity.',
        features: [
            'Windows applications',
            'macOS applications',
            'Cross-platform solutions',
            'Legacy system modernization',
            'Database integration',
            'Custom workflows',
        ],
    },
    {
        icon: faCloud,
        title: 'Cloud Solutions',
        description: 'Scalable, secure cloud-based systems that grow with your business and reduce operational costs.',
        features: [
            'AWS, Azure, GCP expertise',
            'Cloud migration services',
            'Serverless architecture',
            'Container orchestration',
            'Auto-scaling infrastructure',
            'Disaster recovery',
        ],
    },
    {
        icon: faPlug,
        title: 'API Development',
        description: 'Robust API solutions that connect your systems seamlessly and enable powerful integrations.',
        features: [
            'RESTful API design',
            'GraphQL implementations',
            'Third-party integrations',
            'API documentation',
            'Rate limiting & security',
            'Versioning strategies',
        ],
    },
    {
        icon: faCode,
        title: 'Custom Software',
        description: 'Bespoke software solutions designed specifically for your unique business requirements.',
        features: [
            'Requirements analysis',
            'UI/UX design',
            'Agile development',
            'Quality assurance',
            'Deployment & training',
            'Ongoing support',
        ],
    },
];

export default function Services() {

    return (
        <>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden bg-background">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.5]" />
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-primary/10 text-primary font-medium text-sm">
                            Services
                        </div>
                        <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Our Capabilities
                        </h1>
                        <p className="text-body text-lg">
                            We offer comprehensive software development services to help your
                            business thrive in the digital age. From web and mobile apps to
                            complex enterprise systems.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="space-y-16">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                                className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                                    <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6">
                                        <FontAwesomeIcon icon={service.icon} className="w-8 h-8 text-primary-foreground" />
                                    </div>
                                    <h2 className="heading-md mb-4">{service.title}</h2>
                                    <p className="text-body mb-6">{service.description}</p>
                                    <ul className="space-y-3 mb-8">
                                        {service.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-3">
                                                <FontAwesomeIcon icon={faCheck} className="w-5 h-5 text-primary" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    <Link
                                        href="/quote"
                                        className="btn-primary inline-flex items-center gap-2"
                                    >
                                        Request This Service
                                        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                                    </Link>
                                </div>
                                <div className={`bg-secondary rounded-3xl aspect-video flex items-center justify-center overflow-hidden ${index % 2 === 1 ? 'lg:order-1' : ''
                                    }`}>
                                    {service.title === 'Mobile Applications' ? (
                                        <div className="w-full h-full">
                                            <Lottie animationData={mobileAppAnimation} loop={true} className="w-full h-full" />
                                        </div>
                                    ) : service.title === 'API Development' ? (
                                        <div className="w-full h-full">
                                            <Lottie animationData={apiAnimation} loop={true} className="w-full h-full" />
                                        </div>
                                    ) : service.title === 'Web Development' ? (
                                        <div className="w-full h-full">
                                            <Lottie animationData={webAnimation} loop={true} className="w-full h-full" />
                                        </div>
                                    ) : service.title === 'Cloud Solutions' ? (
                                        <div className="w-full h-full">
                                            <Lottie animationData={cloudAnimation} loop={true} className="w-full h-full" />
                                        </div>
                                    ) : (
                                        <FontAwesomeIcon icon={service.icon} className="w-24 h-24 text-foreground/10" />
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom System CTA */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-foreground rounded-3xl p-12 md:p-20 text-center max-w-5xl mx-auto relative overflow-hidden"
                    >
                        {/* Background Decor */}
                        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none" />

                        <div className="relative z-10">
                            <h2 className="heading-lg text-background mb-6">
                                Need a Custom System?
                            </h2>
                            <p className="text-xl text-background/70 mb-8 max-w-2xl mx-auto">
                                Don't see exactly what you need? We specialize in building custom
                                solutions tailored to your specific requirements.
                            </p>
                            <Link
                                href="/quote"
                                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold transition-all duration-300 hover:opacity-90 inline-flex items-center gap-2"
                            >
                                Request a Custom System
                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
