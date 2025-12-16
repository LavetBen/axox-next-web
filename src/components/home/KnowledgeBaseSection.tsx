"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { SectionHeading } from '../ui/SectionHeading';
import { articles } from '@/lib/knowledge-base';

export const KnowledgeBaseSection = () => {
    return (
        <section className="section-padding bg-secondary/30">
            <div className="section-container">
                <SectionHeading
                    tag="Support & Tutorials"
                    title="Knowledge Base"
                    subtitle="Everything you need to know about managing your hosting account and cPanel."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {articles.map((article, index) => (
                        <motion.div
                            key={article.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-background rounded-2xl p-8 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 group"
                        >
                            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                <FontAwesomeIcon icon={article.icon} className="w-6 h-6" />
                            </div>

                            <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                            <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                                {article.description}
                            </p>

                            <Link
                                href={`/knowledge-base/${article.slug}`}
                                className="inline-flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all"
                            >
                                Read Article
                                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-12 text-center"
                >
                    <p className="text-muted-foreground mb-4">
                        Can't find what you're looking for?
                    </p>
                    <Link href="/contact" className="btn-outline">
                        Contact Support
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
