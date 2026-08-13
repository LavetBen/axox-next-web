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
                    className="absolute inset-0 pointer-events-none bg-cover bg-center"
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
            <section className="py-24 bg-[#F8F8F9]">
                <div className="section-container">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-white p-10 border border-gray-200 hover:border-gray-300 transition-all duration-300 group flex flex-col h-full"
                            >
                                <div className="mb-8">
                                    <FontAwesomeIcon icon={service.icon} className="w-8 h-8 text-charcoal font-light opacity-80" />
                                </div>
                                <h2 className="text-2xl font-light mb-4 text-charcoal group-hover:text-black transition-colors">{service.title}</h2>
                                <p className="text-gray-500 mb-8 leading-relaxed font-light flex-grow">{service.description}</p>
                                
                                <ul className="space-y-4 mb-10">
                                    {service.features.slice(0, 4).map((feature) => (
                                        <li key={feature} className="flex items-start gap-3">
                                            <div className="mt-2.5 flex-shrink-0">
                                                <div className="w-1.5 h-1.5 rounded-full bg-gray-300" />
                                            </div>
                                            <span className="text-[15px] text-gray-500 font-light leading-snug">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                
                                <div className="mt-auto pt-6 border-t border-gray-100">
                                    <Link
                                        href="/contact"
                                        className="inline-flex items-center gap-2 text-charcoal hover:text-black font-light text-[15px] group/link uppercase tracking-wide"
                                    >
                                        Learn more
                                        <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                                    </Link>
                                </div>
                            </motion.div>
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
