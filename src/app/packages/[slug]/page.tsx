"use client";

import { packages } from '@/lib/packages';
import { notFound, useParams } from 'next/navigation';
import { SectionHeading } from '@/components/ui/SectionHeading';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faCopy, faCheck } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import { motion } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

// We need to render this component as client component because of useState and interactivity
// But we want to simulate static generation or dynamic routing based on slug
// In Next.js App Router with "use client" we can use useParams()

export default function PackageDocsPage() {
    const params = useParams();
    const slug = params?.slug as string;
    const pkg = packages.find(p => p.id === slug);
    const [copied, setCopied] = useState(false);

    if (!pkg) {
        return notFound();
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(pkg.installCommand);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="pt-32 pb-20 min-h-screen bg-background">
            <div className="section-container">
                <Link href="/knowledge-base" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4" />
                    Back to Knowledge Base
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-border pb-8">
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <h1 className="heading-lg">{pkg.name}</h1>
                                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">v{pkg.version}</span>
                            </div>
                            <p className="text-xl text-muted-foreground">{pkg.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="bg-secondary rounded-lg p-1 border border-border flex items-center">
                                <code className="px-3 py-2 font-mono text-sm text-foreground/80">{pkg.installCommand}</code>
                                <button
                                    onClick={handleCopy}
                                    className="p-2 hover:bg-background rounded-md transition-colors text-muted-foreground hover:text-primary"
                                    title="Copy to clipboard"
                                >
                                    <FontAwesomeIcon icon={copied ? faCheck : faCopy} />
                                </button>
                            </div>
                            <div className="text-right text-sm text-muted-foreground">
                                {pkg.downloads} downloads
                            </div>
                        </div>
                    </div>

                    <div className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-secondary prose-pre:border prose-pre:border-border">
                        {/* 
                            In a real app, you might use a proper markdown renderer with syntax highlighting.
                            For now, we'll do a simple rendering or just display the content.
                            Since we added react-markdown, let's use it if available, or just fallback to simple whitespace preservation.
                         */}
                        {/* We will just verify if we have react-markdown installed. If not, I'll use whitespace-pre-wrap */}
                        <ReactMarkdown
                            components={{
                                code: ({ className, children, ...props }) => {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return match ? (
                                        // @ts-ignore
                                        <SyntaxHighlighter
                                            {...props}
                                            style={vscDarkPlus}
                                            language={match[1]}
                                            PreTag="div"
                                            customStyle={{
                                                margin: 0,
                                                borderRadius: '0.75rem',
                                                background: '#1e1e1e', // VS Code sidebar background
                                                border: '1px solid rgba(255,255,255,0.1)'
                                            }}
                                        >
                                            {String(children).replace(/\n$/, '')}
                                        </SyntaxHighlighter>
                                    ) : (
                                        <code className={className} {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        >
                            {pkg.content.replace(/^#\s(.*?)\n/, '').trim()}
                        </ReactMarkdown>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
