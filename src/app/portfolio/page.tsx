import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/pages/PortfolioPage';

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Explore our showcase of successful projects, including web apps, mobile solutions, and enterprise software.",
};

export default function Portfolio() {
    return <PortfolioPage />;
}
