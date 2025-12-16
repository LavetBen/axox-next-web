import { KnowledgeBaseSection } from '@/components/home/KnowledgeBaseSection';

export const metadata = {
    title: 'Knowledge Base - AXOX Digital',
    description: 'Tutorials and guides for managing your hosting, cPanel, and website.',
};

export default function KnowledgeBasePage() {
    return (
        <div className="pt-20">
            <KnowledgeBaseSection />
        </div>
    );
}
