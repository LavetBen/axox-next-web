import { notFound } from 'next/navigation';
import { articles } from '@/lib/knowledge-base';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

// Generate static params for all articles
export async function generateStaticParams() {
    return articles.map((article) => ({
        slug: article.slug,
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    // Await params if it's a promise (Next.js 15+)
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        return {
            title: 'Article Not Found',
        };
    }

    return {
        title: `${article.title} - Knowledge Base`,
        description: article.description,
    };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const article = articles.find((a) => a.slug === slug);

    if (!article) {
        notFound();
    }

    return (
        <div className="pt-24 pb-16 min-h-screen bg-background">
            <div className="container max-w-4xl mx-auto px-4">
                <Link
                    href="/knowledge-base"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
                >
                    <FontAwesomeIcon icon={faArrowLeft} className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Knowledge Base
                </Link>

                <article className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-sm">
                    <header className="mb-8 border-b border-border pb-8">
                        <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6">
                            <FontAwesomeIcon icon={article.icon} className="w-8 h-8" />
                        </div>
                        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                            {article.title}
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            {article.description}
                        </p>
                    </header>

                    <div
                        className="prose prose-lg dark:prose-invert max-w-none 
                        prose-headings:text-foreground prose-p:text-muted-foreground 
                        prose-a:text-primary prose-strong:text-foreground
                        prose-code:text-primary prose-code:bg-muted/50 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                        prose-li:text-muted-foreground"
                        dangerouslySetInnerHTML={{ __html: article.content }}
                    />
                </article>
            </div>
        </div>
    );
}
