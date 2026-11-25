"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullseye,
    faEye,
    faCompass,
    faShieldHalved,
    faLightbulb,
    faUsers,
    faRocket,
    faChartLine,
    faArrowRight,
    faAward,
    faCheck,
    faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { CTASection } from '@/components/home/CTASection';
import ctaBg from '@/assets/cta.jpg';

const stats = [
    { value: '150+', label: 'Delivered Projects', subtext: 'Across enterprise & startups' },
    { value: '98%', label: 'Client Satisfaction', subtext: 'Long-term client partnerships' },
    { value: '3+', label: 'Years Experience', subtext: 'Of rapid growth & delivery' },
    { value: '15+', label: 'Global Markets', subtext: 'Clients served worldwide' },
];

const values = [
    {
        icon: faShieldHalved,
        title: 'Engineering Rigor',
        tag: 'QUALITY',
        description: 'We prioritize architecture, maintainability, and clean code over shortcuts, delivering software that scales predictably.'
    },
    {
        icon: faLightbulb,
        title: 'Pragmatic Innovation',
        tag: 'INNOVATION',
        description: 'We adopt emerging tech with purpose — focusing strictly on technologies that create tangible business advantages.'
    },
    {
        icon: faCompass,
        title: 'Radical Transparency',
        tag: 'COLLABORATION',
        description: 'No black-box development. Direct communication, clear sprint commitments, and honest technical guidance at every step.'
    },
    {
        icon: faRocket,
        title: 'Outcome-Driven',
        tag: 'IMPACT',
        description: 'Code is just the vehicle. Our actual job is increasing revenue, cutting turnaround time, and solving core operational bottlenecks.'
    },
];

const leadership = [
    {
        name: 'Executive Leadership',
        role: 'Strategy & Direction',
        bio: 'Guiding global strategy, engineering standards, and enterprise client relationships.',
        badge: 'Executive',
        focus: ['Enterprise Architecture', 'Product Strategy', 'Strategic Growth']
    },
    {
        name: 'Engineering Guild',
        role: 'Full-Stack & Cloud Architecture',
        bio: 'Senior developers and solution architects building cloud-native and high-throughput systems.',
        badge: 'Engineering',
        focus: ['Next.js & React', 'Distributed Systems', 'Cloud & DevOps']
    },
    {
        name: 'Product & Design Lab',
        role: 'UI/UX & Product Strategy',
        bio: 'Specialists crafting accessible design systems and frictionless user journeys.',
        badge: 'Product & UX',
        focus: ['User Research', 'Design Systems', 'Interactive Prototyping']
    },
    {
        name: 'Delivery & QA Operations',
        role: 'Agile Operations & Quality Assurance',
        bio: 'Ensuring zero-defect releases through automated testing pipelines and agile governance.',
        badge: 'Quality & Delivery',
        focus: ['CI/CD Pipelines', 'Automated Testing', 'Agile Delivery']
    },
];

const timeline = [
    {
        year: '2023',
        title: 'Founding Axox',
        description: 'Established with a focus on modern software engineering, rapid web platforms, and custom digital transformation.'
    },
    {
        year: '2024',
        title: 'Platform & Product Expansion',
        description: 'Delivered high-impact solutions including educational portals (nots.co.zw), event platforms (joyful.co.zw), and specialized SaaS systems.'
    },
    {
        year: '2025',
        title: 'Enterprise & Fintech Scale',
        description: 'Expanded into full-lifecycle loan management, bespoke ERP architectures, and modern cloud infrastructures.'
    },
    {
        year: 'Today',
        title: 'Continuous Expansion',
        description: 'Serving diverse industries globally with senior engineering squads and high-velocity product delivery.'
    },
];

export default function About() {
    return (
        <div className="bg-white font-cerebri font-light text-charcoal selection:bg-gray-200">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-black text-white">
                <div 
                    className="absolute inset-0 opacity-25 pointer-events-none bg-cover bg-center"
                    style={{ backgroundImage: `url(${ctaBg.src})` }}
                />
                <div className="absolute inset-0 bg-black/70 pointer-events-none" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="max-w-4xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-electric-blue/20 border border-electric-blue/40 text-blue-300 rounded-sm text-xs font-bold tracking-widest uppercase mb-6">
                            <span>About Us</span>
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight mb-8 leading-[1.15]">
                            We engineer software that moves businesses forward.
                        </h1>
                        <p className="text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed font-light mb-10">
                            Axox is a custom software engineering and digital transformation consultancy. We partner with ambitious leaders to build dependable, high-performing software products that drive genuine business outcomes.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link 
                                href="/contact" 
                                className="inline-flex items-center gap-2 bg-electric-blue hover:bg-blue-700 text-white px-7 py-3.5 font-bold text-[14px] tracking-wide uppercase transition-all rounded-sm shadow-md"
                            >
                                <span>Start a Conversation</span>
                                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5" />
                            </Link>
                            <Link 
                                href="/portfolio" 
                                className="inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-white border border-white/30 hover:border-white px-7 py-3.5 font-bold text-[14px] tracking-wide uppercase transition-all rounded-sm"
                            >
                                <span>View Our Work</span>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Key Metrics / Highlights Bar */}
            <section className="border-b border-gray-100 bg-[#1a1a24] text-white py-12">
                <div className="section-container">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
                        {stats.map((stat, idx) => (
                            <motion.div 
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className={`pt-6 md:pt-0 ${idx !== 0 ? 'md:pl-8' : ''}`}
                            >
                                <div className="text-3xl sm:text-4xl md:text-5xl font-light text-white tracking-tight mb-2">
                                    <span className="text-electric-blue font-medium">{stat.value}</span>
                                </div>
                                <div className="text-sm font-semibold tracking-wide uppercase text-white/90 mb-1">
                                    {stat.label}
                                </div>
                                <div className="text-xs text-white/60 font-light">
                                    {stat.subtext}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Purpose & Mission Section */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric-blue block mb-4">
                                Who We Are
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-light text-charcoal tracking-tight mb-6 leading-snug">
                                Technical expertise paired with clear commercial awareness.
                            </h2>
                            <p className="text-gray-600 leading-relaxed text-[16px] mb-6">
                                We believe the biggest failure in software delivery isn’t bad syntax — it’s building the wrong thing or compromising architectural foundations for short-term fixes.
                            </p>
                            <p className="text-gray-600 leading-relaxed text-[16px] mb-8">
                                At Axox, we bridge the gap between business strategy and deep engineering execution. From bespoke cloud architectures and complex web systems to automated financial workflows, our team crafts software that stands up to real enterprise demands.
                            </p>

                            <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center mt-1 shrink-0">
                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-charcoal">Senior engineering lead on every project</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center mt-1 shrink-0">
                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-charcoal">End-to-end IP ownership from day one</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center mt-1 shrink-0">
                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-charcoal">Direct access to technical leads</span>
                                </div>
                                <div className="flex items-start gap-3">
                                    <div className="w-5 h-5 rounded-full bg-electric-blue/10 text-electric-blue flex items-center justify-center mt-1 shrink-0">
                                        <FontAwesomeIcon icon={faCheck} className="w-3 h-3" />
                                    </div>
                                    <span className="text-sm font-medium text-charcoal">Transparent sprint cycles and reporting</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Mission & Vision Cards */}
                        <div className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="p-8 rounded-sm bg-[#fafafa] border border-gray-100 hover:border-electric-blue/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-sm bg-electric-blue text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faBullseye} className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-charcoal">Our Mission</h3>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Purpose</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    To eliminate friction in digital execution by engineering robust, beautiful, and maintainable software that empowers organizations to outpace their competition.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="p-8 rounded-sm bg-[#fafafa] border border-gray-100 hover:border-electric-blue/30 transition-all duration-300"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-sm bg-[#1a1a24] text-white flex items-center justify-center">
                                        <FontAwesomeIcon icon={faEye} className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-medium text-charcoal">Our Vision</h3>
                                        <span className="text-xs text-gray-500 uppercase tracking-wider font-mono">Horizon</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 leading-relaxed text-[15px]">
                                    To be the benchmark for elite software craftsmanship — recognized globally as the trusted technical partner for forward-thinking enterprises.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-gray-50 border-y border-gray-100">
                <div className="section-container">
                    <div className="max-w-3xl mb-16">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric-blue block mb-3">
                            Guiding Principles
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-light text-charcoal tracking-tight mb-4">
                            How we build, decide, and collaborate.
                        </h2>
                        <p className="text-gray-600 font-light text-[17px]">
                            These principles define how our engineers evaluate technical trade-offs and build lasting partnerships with our clients.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((val, index) => (
                            <motion.div
                                key={val.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-white p-8 rounded-sm border border-gray-200/80 hover:border-electric-blue/50 hover:shadow-lg hover:shadow-electric-blue/5 transition-all duration-300 flex flex-col justify-between group"
                            >
                                <div>
                                    <div className="w-12 h-12 rounded-sm bg-electric-blue/10 text-electric-blue flex items-center justify-center mb-6 group-hover:bg-electric-blue group-hover:text-white transition-colors duration-300">
                                        <FontAwesomeIcon icon={val.icon} className="w-5 h-5" />
                                    </div>
                                    <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase block mb-2 font-mono">
                                        {val.tag}
                                    </span>
                                    <h3 className="text-xl font-medium text-charcoal mb-3 group-hover:text-electric-blue transition-colors">
                                        {val.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {val.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Teams / Disciplines Section */}
            <section className="py-24 bg-white">
                <div className="section-container">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
                        <div className="max-w-2xl">
                            <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric-blue block mb-3">
                                Our Teams
                            </span>
                            <h2 className="text-3xl sm:text-4xl font-light text-charcoal tracking-tight">
                                Cross-functional delivery squads.
                            </h2>
                        </div>
                        <p className="text-gray-500 max-w-md text-sm font-light">
                            Instead of isolated silos, our squads combine technical architecture, design, and continuous delivery under unified project ownership.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {leadership.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-[#fafafa] border border-gray-100 rounded-sm p-7 flex flex-col justify-between hover:border-gray-300 transition-colors"
                            >
                                <div>
                                    <div className="inline-block bg-white border border-gray-200 px-2.5 py-1 text-[11px] font-semibold text-charcoal rounded-sm uppercase tracking-wider mb-4">
                                        {member.badge}
                                    </div>
                                    <h4 className="text-xl font-semibold text-charcoal mb-1">{member.name}</h4>
                                    <p className="text-electric-blue text-sm font-medium mb-4">{member.role}</p>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                                        {member.bio}
                                    </p>
                                </div>

                                <div className="pt-4 border-t border-gray-200/60">
                                    <span className="text-[11px] uppercase tracking-wider text-gray-400 font-mono block mb-2">Focus Areas:</span>
                                    <div className="flex flex-wrap gap-1.5">
                                        {member.focus.map((item) => (
                                            <span key={item} className="text-xs bg-white text-gray-700 px-2 py-0.5 border border-gray-200 rounded-sm font-light">
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Journey / Timeline Section */}
            <section className="py-24 bg-[#101828] text-white">
                <div className="section-container">
                    <div className="max-w-3xl mb-16">
                        <span className="text-xs font-bold tracking-[0.2em] uppercase text-electric-blue block mb-3">
                            Milestones
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-white mb-4">
                            Our Journey & Evolution
                        </h2>
                        <p className="text-white/70 font-light text-[17px]">
                            A decade of solving hard engineering problems and adapting alongside the technology landscape.
                        </p>
                    </div>

                    <div className="max-w-4xl">
                        <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-8 sm:pl-12 space-y-12">
                            {timeline.map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="relative group"
                                >
                                    {/* Circle dot on line */}
                                    <div className="absolute -left-[41px] sm:-left-[57px] top-1 w-6 h-6 rounded-full bg-[#101828] border-2 border-electric-blue flex items-center justify-center">
                                        <div className="w-2 h-2 rounded-full bg-electric-blue group-hover:scale-125 transition-transform" />
                                    </div>

                                    <div className="inline-block px-3 py-1 bg-white/5 border border-white/10 text-electric-blue text-xs font-bold font-mono tracking-wider rounded-sm mb-2">
                                        {item.year}
                                    </div>
                                    <h4 className="text-2xl font-light text-white mb-2">{item.title}</h4>
                                    <p className="text-white/70 font-light leading-relaxed text-[15px] max-w-2xl">
                                        {item.description}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <CTASection />
        </div>
    );
}
