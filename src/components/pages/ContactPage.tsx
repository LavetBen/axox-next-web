"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faPaperPlane,
    faChevronDown
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { useToast } from '@/hooks/use-toast';
import { sanitizeText, sanitizeEmail, sanitizePhone } from '@/lib/sanitize';

const socialLinks = [
    { icon: faFacebookF, href: '#', label: 'Facebook' },
    { icon: faTwitter, href: '#', label: 'Twitter' },
    { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: faInstagram, href: '#', label: 'Instagram' },
];

const contactInfo = [
    {
        icon: faLocationDot,
        label: 'Our Office',
        value: 'Mount Pleasant, Harare, Zimbabwe',
        href: null,
    },
    {
        icon: faPhone,
        label: 'Phone',
        value: '+263 78 075 5864',
        href: 'tel:+263780755864',
    },
    {
        icon: faEnvelope,
        label: 'Email',
        value: 'info@axox.com',
        href: 'mailto:info@axox.com',
    },
];

const faqs = [
    {
        question: "How much does a website cost?",
        answer: "Our website packages range from $80 for a starter site to $450+ for e-commerce solutions. Custom projects are quoted based on specific requirements."
    },
    {
        question: "How long does it take to build a website?",
        answer: "A standard website typically takes 1–2 weeks. Complex custom systems or mobile apps may take 4–8 weeks or more depending on the scope."
    },
    {
        question: "Do you offer post-launch support?",
        answer: "Yes! All our packages include a support period (1–6 months). We also offer ongoing maintenance plans to keep your system secure and up-to-date."
    },
    {
        question: "Can you update my existing website?",
        answer: "Absolutely. We can modernize your existing site, improve its performance, or add new features without starting from scratch."
    },
    {
        question: "What technologies do you use?",
        answer: "We use modern, scalable technologies like React, Node.js, TypeScript, and cloud services (AWS/Firebase) to ensure high performance and security."
    }
];

const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className={`rounded-sm border transition-colors duration-300 overflow-hidden ${isOpen ? 'border-electric-blue/40 bg-[#22222f]' : 'border-white/5 bg-[#22222f] hover:border-white/10'}`}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-5 flex items-center justify-between text-left gap-4"
            >
                <span className="font-light text-white text-[15px] leading-relaxed">{question}</span>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className={`w-4 h-4 text-electric-blue flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="px-6 pb-6 text-white/60 font-light text-[15px] leading-relaxed border-t border-white/5 pt-4">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export function ContactPage() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        let sanitized = value;
        if (name === 'email') sanitized = sanitizeEmail(value);
        else if (name === 'phone') sanitized = sanitizePhone(value);
        else sanitized = sanitizeText(value);
        setFormData({ ...formData, [name]: sanitized });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

    return (
        <div className="bg-[#1a1a24] min-h-screen font-cerebri selection:bg-electric-blue/30">

            {/* Hero */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                {/* Subtle glow orbs */}
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-electric-blue/5 rounded-full blur-3xl translate-y-1/2 pointer-events-none" />

                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <div className="inline-block px-4 py-1.5 mb-6 rounded-sm bg-electric-blue/10 text-electric-blue font-light text-xs tracking-widest uppercase border border-electric-blue/20">
                            Contact
                        </div>
                        <h1 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
                            Connect With Us
                        </h1>
                        <p className="text-lg text-white/60 font-light leading-relaxed">
                            Have a project in mind? Get in touch and let's discuss how we can
                            help bring your ideas to life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Form + Info */}
            <section className="pb-24">
                <div className="section-container">
                    <div className="grid lg:grid-cols-5 gap-8 items-start">

                        {/* Form — wider column */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-3 bg-[#22222f] p-8 md:p-12 rounded-sm border border-white/5 shadow-2xl"
                        >
                            <h2 className="text-2xl font-light text-white mb-2">Send Us a Message</h2>
                            <p className="text-white/50 font-light text-sm mb-8">We typically respond within 24 hours.</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid md:grid-cols-2 gap-5">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-light text-white/50 uppercase tracking-widest mb-2">Full Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#1a1a24] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20 text-sm"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-xs font-light text-white/50 uppercase tracking-widest mb-2">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#1a1a24] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20 text-sm"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-xs font-light text-white/50 uppercase tracking-widest mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#1a1a24] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20 text-sm"
                                        placeholder="+263 78 075 5864"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-xs font-light text-white/50 uppercase tracking-widest mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3 rounded-sm border border-white/10 bg-[#1a1a24] text-white focus:outline-none focus:border-electric-blue transition-colors font-light placeholder:text-white/20 text-sm resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-electric-blue text-white font-semibold text-[13px] tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-40 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-3.5 h-3.5" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info — narrower column */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:col-span-2 flex flex-col gap-6"
                        >
                            <div className="bg-[#22222f] p-8 rounded-sm border border-white/5">
                                <h2 className="text-2xl font-light text-white mb-2">Get in Touch</h2>
                                <p className="text-white/50 font-light text-sm mb-8 leading-relaxed">
                                    We'd love to hear from you. Whether you have a question about our services,
                                    pricing, or anything else — our team is ready to help.
                                </p>

                                <div className="space-y-6">
                                    {contactInfo.map((item) => (
                                        <div key={item.label} className="flex items-start gap-4">
                                            <div className="w-10 h-10 rounded-sm bg-electric-blue/10 border border-electric-blue/20 flex items-center justify-center flex-shrink-0">
                                                <FontAwesomeIcon icon={item.icon} className="w-4 h-4 text-electric-blue" />
                                            </div>
                                            <div>
                                                <p className="text-[11px] font-medium text-white/40 uppercase tracking-widest mb-1">{item.label}</p>
                                                {item.href ? (
                                                    <a href={item.href} className="text-white/80 font-light text-sm hover:text-electric-blue transition-colors">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-white/80 font-light text-sm">{item.value}</p>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="bg-[#22222f] p-8 rounded-sm border border-white/5">
                                <p className="text-[11px] font-medium text-white/40 uppercase tracking-widest mb-5">Follow Us</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-white/50 hover:border-electric-blue hover:text-electric-blue transition-all duration-300"
                                        >
                                            <FontAwesomeIcon icon={social.icon} className="w-4 h-4" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="pb-24">
                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-light text-white tracking-tight mb-4">Frequently Asked Questions</h2>
                        <p className="text-white/50 font-light">Find answers to common questions about our services and process.</p>
                    </motion.div>

                    <div className="space-y-3">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.07 }}
                            >
                                <FAQItem question={faq.question} answer={faq.answer} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map */}
            <section className="pb-24">
                <div className="section-container">
                    <div className="h-80 md:h-[420px] w-full relative rounded-sm overflow-hidden border border-white/5">
                        <iframe
                            src="https://maps.google.com/maps?q=Mount%20Pleasant%2C%20Harare&t=&z=14&ie=UTF8&iwloc=&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Axox Location"
                            className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

