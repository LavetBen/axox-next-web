import type { Metadata } from 'next';
import { ServicesPage } from '@/components/pages/ServicesPage';

export const metadata: Metadata = {
    title: "Services",
    description: "Comprehensive software development services including web apps, mobile applications, APIs, and cloud solutions.",
};

export default function Services() {
    return <ServicesPage />;
}