"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faBullseye,
    faEye,
    faHeart,
    faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { CTASection } from '@/components/home/CTASection';

const values = [
    { icon: faCheckCircle, title: 'Excellence', description: 'We strive for excellence in everything we do.' },
    { icon: faCheckCircle, title: 'Integrity', description: 'We operate with transparency and honesty.' },
    { icon: faCheckCircle, title: 'Innovation', description: 'We embrace new ideas and technologies.' },
    { icon: faCheckCircle, title: 'Collaboration', description: 'We work together to achieve great results.' },
];

const team = [
    { name: 'John Smith', role: 'CEO & Founder', initial: 'JS' },
    { name: 'Sarah Williams', role: 'CTO', initial: 'SW' },
    { name: 'Mike Johnson', role: 'Lead Developer', initial: 'MJ' },
    { name: 'Emily Davis', role: 'Project Manager', initial: 'ED' },
];

const timeline = [
    { year: '2014', title: 'Company Founded', description: 'Axox was established with a vision to transform businesses through technology.' },
    { year: '2016', title: 'First Major Client', description: 'Secured our first enterprise client and delivered a game-changing ERP system.' },
    { year: '2018', title: 'Team Expansion', description: 'Grew to 25+ talented developers and opened our second office.' },
    { year: '2020', title: 'Global Reach', description: 'Started serving clients across 15+ countries with remote-first approach.' },
    { year: '2023', title: '150+ Projects', description: 'Celebrated completion of 150+ successful projects with 98% client satisfaction.' },
];

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-secondary">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h1 className="heading-xl mb-6">About Axox</h1>
                        <p className="text-body">
                            We are a team of passionate technologists dedicated to building
                            innovative software solutions that empower businesses to succeed
                            in the digital age.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Mission, Vision, Values */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="grid md:grid-cols-3 gap-8 mb-20">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="p-8 bg-secondary rounded-2xl text-center"
                        >
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FontAwesomeIcon icon={faBullseye} className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="heading-sm mb-4">Our Mission</h3>
                            <p className="text-muted-foreground">
                                To deliver innovative software solutions that solve real business
                                problems and drive measurable success for our clients.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="p-8 bg-secondary rounded-2xl text-center"
                        >
                            <div className="w-16 h-16 bg-foreground rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FontAwesomeIcon icon={faEye} className="w-8 h-8 text-background" />
                            </div>
                            <h3 className="heading-sm mb-4">Our Vision</h3>
                            <p className="text-muted-foreground">
                                To be the global leader in custom software development, known for
                                transforming businesses through cutting-edge technology.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="p-8 bg-secondary rounded-2xl text-center"
                        >
                            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                                <FontAwesomeIcon icon={faHeart} className="w-8 h-8 text-primary-foreground" />
                            </div>
                            <h3 className="heading-sm mb-4">Our Values</h3>
                            <p className="text-muted-foreground">
                                Excellence, integrity, innovation, and collaboration guide every
                                decision we make and every project we undertake.
                            </p>
                        </motion.div>
                    </div>

                    {/* Values List */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="bg-foreground rounded-3xl p-8 md:p-12"
                    >
                        <h3 className="heading-md text-background mb-8 text-center">What We Stand For</h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((value, index) => (
                                <div key={value.title} className="flex items-start gap-3">
                                    <FontAwesomeIcon icon={value.icon} className="w-6 h-6 text-primary mt-1" />
                                    <div>
                                        <h4 className="font-bold text-background">{value.title}</h4>
                                        <p className="text-background/70 text-sm">{value.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="section-padding bg-secondary">
                <div className="section-container">
                    <SectionHeading
                        title="Meet Our Team"
                        subtitle="Our talented team of experts is dedicated to delivering exceptional results for every project."
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {team.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="bg-background rounded-2xl p-6 text-center card-hover"
                            >
                                <div className="w-24 h-24 bg-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                                    <span className="text-2xl font-bold text-background">{member.initial}</span>
                                </div>
                                <h4 className="font-bold text-lg">{member.name}</h4>
                                <p className="text-primary font-medium">{member.role}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Timeline Section */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <SectionHeading
                        title="Our Journey"
                        subtitle="From a small startup to a global software development company."
                    />

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex gap-6 mb-8 last:mb-0"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
                                        {item.year}
                                    </div>
                                    {index < timeline.length - 1 && (
                                        <div className="w-0.5 h-full bg-border mt-4" />
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <h4 className="heading-sm mb-2">{item.title}</h4>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <CTASection />
        </>
    );
}
