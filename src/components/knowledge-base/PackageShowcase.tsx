"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { faCopy, faCheck, faDownload, faBoxOpen, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '../ui/SectionHeading';
import { packages } from '@/lib/packages';

export const PackageShowcase = () => {
    const [copiedId, setCopiedId] = useState<string | null>(null);

    const handleCopy = (command: string, id: string) => {
        navigator.clipboard.writeText(command);
        setCopiedId(id);
        setTimeout(() => setCopiedId(null), 2000);
    };

    return (
        <section className="section-padding bg-background">
            <div className="section-container">
                <SectionHeading
                    tag="Open Source"
                    title="NPM Packages"
                    subtitle="Our contribution to the developer community. Open source packages built and maintained by our team."
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {packages.map((pkg, index) => (
                        <motion.div
                            key={pkg.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-secondary rounded-2xl p-6 border border-border hover:border-primary/50 transition-all duration-300 group flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                                    <FontAwesomeIcon icon={faBoxOpen} className="w-6 h-6" />
                                </div>
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground bg-background px-2 py-1 rounded-md border border-border">
                                    <span>v{pkg.version}</span>
                                </div>
                            </div>

                            {/* Content */}
                            <h3 className="heading-sm mb-2 group-hover:text-primary transition-colors">{pkg.name}</h3>
                            <p className="text-muted-foreground text-sm mb-6 flex-grow">
                                {pkg.description}
                            </p>

                            {/* Install Command */}
                            <div className="bg-background rounded-lg p-3 border border-border flex items-center justify-between gap-3 mb-6 font-mono text-sm group-hover:border-primary/30 transition-colors">
                                <span className="truncate text-foreground/80">
                                    <span className="text-primary mr-2">$</span>
                                    {pkg.installCommand}
                                </span>
                                <button
                                    onClick={() => handleCopy(pkg.installCommand, pkg.id)}
                                    className="text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                                    title="Copy to clipboard"
                                >
                                    <FontAwesomeIcon icon={copiedId === pkg.id ? faCheck : faCopy} />
                                </button>
                            </div>

                            {/* Footer */}
                            <div className="flex items-center justify-between pt-4 border-t border-border/50">
                                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                    <FontAwesomeIcon icon={faDownload} />
                                    <span>{pkg.downloads} downloads</span>
                                </div>
                                <Link
                                    href={pkg.docsUrl}
                                    className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
                                >
                                    Documentation
                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="w-3 h-3" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
