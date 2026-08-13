import { HeroSection } from '@/components/home/HeroSection';
import dynamic from 'next/dynamic';

const ServicesSection = dynamic(() => import('@/components/home/ServicesSection').then(mod => mod.ServicesSection));
const ProjectsSection = dynamic(() => import('@/components/home/ProjectsSection').then(mod => mod.ProjectsSection));
const CTASection = dynamic(() => import('@/components/home/CTASection').then(mod => mod.CTASection));

export default async function Home() {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <CTASection />
    </>
  );
}
