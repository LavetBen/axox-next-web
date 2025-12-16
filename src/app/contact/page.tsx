"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faLocationDot,
    faPaperPlane,
    faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faInstagram
} from '@fortawesome/free-brands-svg-icons';
import { useToast } from '@/hooks/use-toast';

const socialLinks = [
    { icon: faFacebookF, href: '#', label: 'Facebook' },
    { icon: faTwitter, href: '#', label: 'Twitter' },
    { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: faInstagram, href: '#', label: 'Instagram' },
];

const FAQItem = ({ question, answer }: { question: string, answer: string }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-secondary rounded-2xl overflow-hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-6 py-4 flex items-center justify-between text-left font-medium hover:bg-secondary/80 transition-colors"
            >
                <span>{question}</span>
                <FontAwesomeIcon
                    icon={faArrowRight}
                    className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
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
                        <div className="px-6 pb-4 text-muted-foreground">
                            {answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


export default function Contact() {
    const { toast } = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));

        toast({
            title: "Message Sent!",
            description: "We'll get back to you within 24 hours.",
        });

        setFormData({ name: '', email: '', phone: '', message: '' });
        setIsSubmitting(false);
    };

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
                            Contact
                        </div>
                        <h1 className="heading-xl mb-6 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
                            Connect With Us
                        </h1>
                        <p className="text-body text-lg">
                            Have a project in mind? Get in touch with us and let's discuss
                            how we can help bring your ideas to life.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="section-padding bg-background">
                <div className="section-container">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="heading-md mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block font-medium mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block font-medium mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="+263 78 075 5864"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-primary w-full flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                    <FontAwesomeIcon icon={faPaperPlane} className="w-4 h-4" />
                                </button>
                            </form>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="lg:pl-12"
                        >
                            <h2 className="heading-md mb-6">Get in Touch</h2>
                            <p className="text-muted-foreground mb-8">
                                We'd love to hear from you. Whether you have a question about
                                our services, pricing, or anything else, our team is ready to
                                answer all your questions.
                            </p>

                            <div className="space-y-6 mb-12">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Our Office</h4>
                                        <p className="text-muted-foreground">
                                            Mount Pleasant<br />
                                            Harare, Zimbabwe
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Phone</h4>
                                        <a href="tel:+263780755864" className="text-muted-foreground hover:text-primary transition-colors">
                                            +263 78 075 5864
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center flex-shrink-0">
                                        <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary-foreground" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold mb-1">Email</h4>
                                        <a href="mailto:info@axox.com" className="text-muted-foreground hover:text-primary transition-colors">
                                            info@axox.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div>
                                <h4 className="font-bold mb-4">Follow Us</h4>
                                <div className="flex gap-4">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.label}
                                            href={social.href}
                                            aria-label={social.label}
                                            className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
                                        >
                                            <FontAwesomeIcon icon={social.icon} className="w-5 h-5" />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="section-padding bg-background/50">
                <div className="section-container max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        <h2 className="heading-md mb-4">Frequently Asked Questions</h2>
                        <p className="text-muted-foreground">
                            Find answers to common questions about our services and process.
                        </p>
                    </motion.div>

                    <div className="space-y-4">
                        {[
                            {
                                question: "How much does a website cost?",
                                answer: "Our website packages range from $80 for a starter site to $450+ for e-commerce solutions. Custom projects are quoted based on specific requirements."
                            },
                            {
                                question: "How long does it take to build a website?",
                                answer: "A standard website typically takes 1-2 weeks. Complex custom systems or mobile apps may take 4-8 weeks or more depending on the scope."
                            },
                            {
                                question: "Do you offer post-launch support?",
                                answer: "Yes! All our packages include a support period (1-6 months). We also offer ongoing maintenance plans to keep your system secure and up-to-date."
                            },
                            {
                                question: "Can you update my existing website?",
                                answer: "Absolutely. We can modernize your existing site, improve its performance, or add new features without starting from scratch."
                            },
                            {
                                question: "What technologies do you use?",
                                answer: "We use modern, scalable technologies like React, Node.js, TypeScript, and cloud services (AWS/Firebase) to ensure high performance and security."
                            }
                        ].map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}

                            >
                                <FAQItem question={faq.question} answer={faq.answer} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="h-96 bg-secondary">
                <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                        <FontAwesomeIcon icon={faLocationDot} className="w-16 h-16 text-primary mb-4" />
                        <p className="text-muted-foreground">
                            Mount Pleasant, Harare
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
