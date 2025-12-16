"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faExternalLinkAlt, faGlobe, faMobileAlt, faDesktop, faCloud, faPlug, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';
import nexaPreview from '@/assets/nexa-preview.png';
import unifyPreview from '@/assets/unify-preview.png';
import budgetAppPreview from '@/assets/budget-app-preview.png';
import Image, { StaticImageData } from 'next/image';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription: string;
    tech: string[];
    features: string[];
    image?: StaticImageData;
    link?: string | null;
}

const projects: Project[] = [
    {
        id: 1,
        title: 'NEXA',
        category: 'Web Development',
        description: 'A comprehensive school management platform.',
        fullDescription: 'NEXA is a comprehensive school management platform designed for student records, attendance tracking, grading systems, and complete administration. It streamlines educational operations for schools of all sizes.',
        tech: ['React', 'Node.js', 'PostgreSQL'],
        features: ['Student records management', 'Attendance tracking', 'Grading system', 'Administration tools'],
        image: nexaPreview,
        link: 'https://nexadigital.co.zw',
    },
    {
        id: 2,
        title: 'Unify',
        category: 'Web Development',
        description: 'A unified digital platform for business operations.',
        fullDescription: 'Unify is a unified digital platform designed to streamline business operations and enhance productivity. It brings together multiple business tools into one cohesive system.',
        tech: ['React', 'TypeScript', 'Cloud Services'],
        features: ['Business operations', 'Productivity tools', 'Team collaboration', 'Analytics dashboard'],
        image: unifyPreview,
        link: 'https://unify.co.zw',
    },
    {
        id: 3,
        title: 'Budget App',
        category: 'Mobile Application',
        description: 'Personal finance mobile app for expense tracking.',
        fullDescription: 'A personal finance mobile app to track expenses, set budgets, and manage savings goals. Features AI-powered insights for better financial decisions.',
        tech: ['React Native', 'Firebase', 'AI Integration'],
        features: ['Expense tracking', 'Budget management', 'Savings goals', 'AI insights'],
        image: budgetAppPreview,
        link: null,
    },
    {
        id: 4,
        title: 'HR System',
        category: 'Web Development',
        description: 'Complete human resources management solution.',
        fullDescription: 'A comprehensive HR management system for employee records, payroll processing, leave management, and performance tracking. Built for organizations of all sizes.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
        features: ['Employee management', 'Payroll processing', 'Leave tracking', 'Performance reviews'],
        link: null,
    },
    {
        id: 5,
        title: 'E-Commerce Platform',
        category: 'Web Development',
        description: 'A full-featured online store with payment integration.',
        fullDescription: 'A comprehensive e-commerce platform built for a major retail brand. Features include product catalog management, shopping cart, secure payment processing, order tracking, and admin dashboard.',
        tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
        features: ['Multi-vendor support', 'Real-time inventory', 'Analytics dashboard', 'Mobile responsive'],
    },
    {
        id: 6,
        title: 'Healthcare Mobile App',
        category: 'Mobile Application',
        description: 'Patient management with telemedicine features.',
        fullDescription: 'A healthcare application that connects patients with doctors through video consultations, appointment scheduling, and health record management.',
        tech: ['React Native', 'Firebase', 'WebRTC', 'Node.js'],
        features: ['Video consultations', 'Prescription management', 'Health tracking', 'HIPAA compliant'],
    },
    {
        id: 7,
        title: 'ERP System',
        category: 'Desktop Application',
        description: 'Enterprise resource planning for manufacturing.',
        fullDescription: 'A comprehensive ERP solution designed for manufacturing companies, featuring inventory management, production planning, and financial reporting.',
        tech: ['Electron', 'Python', 'MySQL', 'Docker'],
        features: ['Inventory tracking', 'Production planning', 'Financial reports', 'Multi-location support'],
    },
    {
        id: 8,
        title: 'Banking API Gateway',
        category: 'API Development',
        description: 'Secure API gateway for financial services.',
        fullDescription: 'A high-performance API gateway built for a major financial institution, handling millions of transactions daily with enterprise-grade security.',
        tech: ['Node.js', 'Redis', 'Kubernetes', 'OAuth 2.0'],
        features: ['Rate limiting', 'OAuth integration', 'Transaction logging', '99.99% uptime'],
    },
    {
        id: 9,
        title: 'Logistics Management',
        category: 'Cloud Solution',
        description: 'Cloud-based fleet and delivery management.',
        fullDescription: 'A comprehensive logistics platform for managing fleet operations, delivery tracking, and route optimization using AI-powered algorithms.',
        tech: ['AWS Lambda', 'React', 'PostgreSQL', 'ML/AI'],
        features: ['Real-time tracking', 'Route optimization', 'Driver management', 'Analytics'],
    },
    {
        id: 10,
        title: 'Learning Management System',
        category: 'Web Development',
        description: 'Online education platform with video courses.',
        fullDescription: 'An online learning platform supporting video courses, quizzes, certifications, and student progress tracking for educational institutions.',
        tech: ['Next.js', 'Node.js', 'MongoDB', 'AWS S3'],
        features: ['Video streaming', 'Progress tracking', 'Certifications', 'Discussion forums'],
    },
];

const categories = [
    { name: 'All', icon: faLayerGroup },
    { name: 'Web Development', icon: faGlobe },
    { name: 'Mobile Application', icon: faMobileAlt },
    { name: 'Desktop Application', icon: faDesktop },
    { name: 'API Development', icon: faPlug },
    { name: 'Cloud Solution', icon: faCloud }
];

export default function Portfolio() {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const filteredProjects = selectedCategory === 'All'
        ? projects
        : projects.filter(p => p.category === selectedCategory);

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
                            Portfolio
                        </div>
                        <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Our Showcase
                        </h1>
                        <p className="text-body text-lg">
                            Explore our latest projects and see how we've helped businesses
                            transform their operations with innovative software solutions.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Filter & Projects */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    {/* Category Filter */}
                    <div className="flex flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible justify-start md:justify-center gap-3 mb-12 pb-4 md:pb-0 scrollbar-hide">
                        {categories.map((category) => (
                            <button
                                key={category.name}
                                onClick={() => setSelectedCategory(category.name)}
                                className={`flex-shrink-0 px-6 py-2 rounded-none font-medium transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${selectedCategory === category.name
                                    ? 'bg-primary text-primary-foreground shadow-lg'
                                    : 'bg-secondary text-foreground hover:bg-foreground hover:text-background'
                                    }`}
                            >
                                <FontAwesomeIcon icon={category.icon} />
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Projects Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        <AnimatePresence>
                            {filteredProjects.map((project) => (
                                <motion.div
                                    key={project.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    className="group bg-secondary rounded-2xl overflow-hidden card-hover cursor-pointer"
                                    onClick={() => setSelectedProject(project)}
                                >
                                    {/* Project Image */}
                                    <div className="aspect-video bg-secondary relative overflow-hidden">
                                        {project.image ? (
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                className="w-full h-full object-cover"
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                style={{ objectFit: 'cover' }}
                                            />
                                        ) : (
                                            <div className="absolute inset-0 flex items-center justify-center bg-foreground">
                                                <span className="text-background text-6xl font-bold opacity-10">
                                                    {project.title.charAt(0)}
                                                </span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                                            <FontAwesomeIcon
                                                icon={faExternalLinkAlt}
                                                className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            />
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <span className="text-sm text-primary font-medium">{project.category}</span>
                                        <h3 className="heading-sm mt-2 mb-3">{project.title}</h3>
                                        <p className="text-muted-foreground mb-4">{project.description}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 bg-background rounded-full text-sm"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                </div>
            </section>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/80"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-background rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header */}
                            <div className="aspect-video bg-secondary relative overflow-hidden h-[300px]">
                                {selectedProject.image ? (
                                    <Image
                                        src={selectedProject.image}
                                        alt={selectedProject.title}
                                        className="w-full h-full object-cover"
                                        fill
                                        sizes="(max-width: 1200px) 100vw, 800px"
                                        style={{ objectFit: 'cover' }}
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center bg-foreground">
                                        <span className="text-background text-8xl font-bold opacity-10">
                                            {selectedProject.title.charAt(0)}
                                        </span>
                                    </div>
                                )}
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="absolute top-4 right-4 w-10 h-10 bg-background rounded-full flex items-center justify-center z-10"
                                >
                                    <FontAwesomeIcon icon={faXmark} className="w-5 h-5" />
                                </button>
                                {selectedProject.link && (
                                    <a
                                        href={selectedProject.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="absolute bottom-4 right-4 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors z-10"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        Visit Site
                                    </a>
                                )}
                            </div>

                            {/* Modal Content */}
                            <div className="p-8">
                                <span className="text-sm text-primary font-medium">{selectedProject.category}</span>
                                <h2 className="heading-md mt-2 mb-4">{selectedProject.title}</h2>
                                <p className="text-muted-foreground mb-6">{selectedProject.fullDescription}</p>

                                <div className="mb-6">
                                    <h4 className="font-bold mb-3">Key Features</h4>
                                    <ul className="grid grid-cols-2 gap-2">
                                        {selectedProject.features.map((feature) => (
                                            <li key={feature} className="flex items-center gap-2 text-sm">
                                                <span className="w-2 h-2 bg-primary rounded-full" />
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-bold mb-3">Technologies Used</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            <CTASection />
        </>
    );
}
