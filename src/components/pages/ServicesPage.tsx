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
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { CTASection } from '@/components/home/CTASection';
import ctaBg from '@/assets/cta.jpg';

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

const processSteps = [
    {
        step: "STEP 1",
        title: "Requirement Definition",
        description: "We dive deep to understand your vision, goals, and users. This collaborative stage shapes the foundation of your project, ensuring perfect alignment with your needs."
    },
    {
        step: "STEP 2",
        title: "UX/UI & Technical Design",
        description: "Our design maestros craft a captivating user experience (UX) and visually stunning interface (UI), while our technical architects lay the groundwork for a powerful and secure solution."
    },
    {
        step: "STEP 3",
        title: "Development",
        description: "Axox's skilled developers bring your vision to life, meticulously crafting a high-performance application using the latest technologies and best practices."
    },
    {
        step: "STEP 4",
        title: "Test and QA",
        description: "We leave no stone unturned. Rigorous testing by our QA experts ensures your application is bug-free, secure, and delivers a flawless user experience across all devices."
    },
    {
        step: "STEP 5",
        title: "Deployment",
        description: "Seamlessly launch your application to the world. We handle everything from server configuration to performance optimization, ensuring a smooth and successful debut."
    },
    {
        step: "STEP 6",
        title: "Support and Project Management",
        description: "Your success is our mission. We provide ongoing support, maintenance, and updates, while our dedicated project managers keep you informed throughout the entire journey."
    }
];

export function ServicesPage() {
    return (
        <div className="bg-white font-cerebri font-light text-charcoal selection:bg-gray-200">
            {/* Hero Section */}
            <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black">
                {/* Background Image */}
                <div 
                    className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center"
                    style={{ backgroundImage: `url(${ctaBg.src})` }}
                />
                
                {/* Black Overlay */}
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                
                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-white">
                            Architecting <br className="hidden md:block"/>Digital Excellence
                        </h1>
                        <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
                            Transform your vision into reality with our elite engineering and design teams. We engineer powerful, scalable, and intelligent software solutions designed to propel your business forward.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    {/* Header Bar */}
                    <div className="bg-gray-100 py-4 px-6 border border-gray-200 border-b-0 font-medium text-charcoal text-[16px] tracking-wide">
                        A Selection of Our Digital Services and What They Will Deliver for You
                    </div>
                    
                    {/* Dotted Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-dotted border-gray-400">
                        {services.map((service) => (
                            <div 
                                key={service.title}
                                className="p-8 md:p-10 flex flex-col h-full border-b border-r border-dotted border-gray-400 hover:bg-gray-50 transition-colors duration-300"
                            >
                                <h3 className="text-[22px] font-light text-charcoal mb-4">
                                    {service.title}
                                </h3>
                                <p className="text-[15px] text-gray-500 font-light leading-relaxed mb-10 flex-grow">
                                    {service.description}
                                </p>
                                
                                <div className="mt-auto">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-charcoal font-semibold text-[13px] uppercase tracking-wide group hover:text-black"
                                    >
                                        Contact Us
                                        <svg 
                                            className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" 
                                            fill="none" 
                                            stroke="currentColor" 
                                            viewBox="0 0 24 24" 
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" className="hidden" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="border border-dotted border-gray-400"
                    >
                        {processSteps.map((step, index) => (
                            <div 
                                key={step.step}
                                className={`grid md:grid-cols-[240px_1fr] ${
                                    index !== processSteps.length - 1 ? 'border-b border-dotted border-gray-400' : ''
                                }`}
                            >
                                {/* Left Column: Step Indicator */}
                                <div className="p-8 md:p-10 md:border-r border-dotted border-gray-400 flex items-center md:items-start">
                                    <span className="text-lg md:text-xl font-light text-charcoal tracking-wide">
                                        {step.step}
                                    </span>
                                </div>

                                {/* Right Column: Content */}
                                <div className="p-8 md:p-10 flex flex-col justify-center">
                                    <h3 className="text-xl md:text-[22px] font-bold text-charcoal mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-[16px] leading-relaxed text-gray-500 font-light">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
