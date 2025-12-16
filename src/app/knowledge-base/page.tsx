import { KnowledgeBaseSection } from '@/components/home/KnowledgeBaseSection';
import { PackageShowcase } from '@/components/knowledge-base/PackageShowcase';

export const metadata = {
    title: 'Knowledge Base - AXOX Digital',
    description: 'Tutorials and guides for managing your hosting, cPanel, and website.',
};

export default function KnowledgeBasePage() {
    return (
        <div className="pt-20">
            <KnowledgeBaseSection />
            <PackageShowcase />
        </div>
    );
}
