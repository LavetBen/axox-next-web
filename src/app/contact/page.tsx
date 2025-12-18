import type { Metadata } from 'next';
import { ContactPage } from '@/components/pages/ContactPage';

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get in touch with Axox for your next software project. We are ready to help you build the future.",
};

export default function Contact() {
    return <ContactPage />;
}
