import { HeroSection } from '@/components/home/HeroSection';
import { DomainHostingSection } from '@/components/home/DomainHostingSection';
import { ServicesSection } from '@/components/home/ServicesSection';
import { WhyChooseUsSection } from '@/components/home/WhyChooseUsSection';
import { ProjectsSection } from '@/components/home/ProjectsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { CTASection } from '@/components/home/CTASection';

export default function Home() {
  return (
    <>
      <HeroSection />
      <DomainHostingSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProjectsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
