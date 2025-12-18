import { HeroSection } from '@/components/home/HeroSection';
import dynamic from 'next/dynamic';

const DomainHostingSection = dynamic(() => import('@/components/home/DomainHostingSection').then(mod => mod.DomainHostingSection));
const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(mod => mod.ServicesSection));
const WhyChooseUsSection = dynamic(() => import('@/components/home/WhyChooseUsSection').then(mod => mod.WhyChooseUsSection));
const ProjectsSection = dynamic(() => import('@/components/home/ProjectsSection').then(mod => mod.ProjectsSection));
const TestimonialsSection = dynamic(() => import('@/components/home/TestimonialsSection').then(mod => mod.TestimonialsSection));
const CTASection = dynamic(() => import('@/components/home/CTASection').then(mod => mod.CTASection));

import { fetchServices } from '@/lib/api/services';

export default async function Home() {
  const services = await fetchServices();

  return (
    <>
      <HeroSection />
      <DomainHostingSection />
      <ServicesSection services={services} />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
