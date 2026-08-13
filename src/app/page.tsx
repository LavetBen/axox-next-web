import { HeroSection } from '@/components/home/HeroSection';
import dynamic from 'next/dynamic';

const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(mod => mod.ServicesSection));
const LoanManagementSection = dynamic(() => import('@/components/home/LoanManagementSection').then(mod => mod.LoanManagementSection));
const FAQSection = dynamic(() => import('@/components/home/FAQSection').then(mod => mod.FAQSection));
const CTASection = dynamic(() => import('@/components/home/CTASection').then(mod => mod.CTASection));

export default async function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <LoanManagementSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
