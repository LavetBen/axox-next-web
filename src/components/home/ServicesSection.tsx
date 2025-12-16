"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faMobileAlt,
  faDesktop,
  faCloud,
  faPlug,
  faCode,
  faArrowRight
} from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '../ui/SectionHeading';
import { useQuery } from '@tanstack/react-query';
import { fetchServices } from '@/lib/api/services';
import { getIcon } from '@/lib/icon-mapping';



export const ServicesSection = () => {
  const { data: fetchedServices, isLoading } = useQuery({
    queryKey: ['services'],
    queryFn: fetchServices,
  });

  const displayServices = fetchedServices ? fetchedServices.map(s => ({
    ...s,
    icon: getIcon(s.iconName)
  })) : [];

  if (isLoading) {
    return (
      <section className="section-padding bg-background">
        <div className="section-container flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>
      </section>
    );
  }

  if (!isLoading && displayServices.length === 0) {
    return null; // Or return a message, but for a home section, hiding perfectly valid.
  }

  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        {/* Section Heading */}
        <SectionHeading
          tag="What We Do"
          title="Our Services"
          subtitle="Comprehensive digital solutions tailored to your business needs. From web development to custom software, we cover it all."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-min gap-4 md:gap-6">
          {displayServices.map((service, index) => {
            // Determine grid class based on index for a guaranteed Bento layout
            let gridClass = "md:col-span-1 md:row-span-1";
            if (index === 0) gridClass = "md:col-span-2 md:row-span-2 h-full min-h-[300px]"; // Big feature

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-3xl ${gridClass} ${index === 0 || service.featured
                  ? 'bg-primary p-8 md:p-10'
                  : 'bg-secondary p-6 md:p-8'
                  } transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20`}
              >
                {/* Background Pattern for Featured */}
                {(index === 0 || service.featured) && (
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-background rounded-full -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-background rounded-full translate-y-1/2 -translate-x-1/2" />
                  </div>
                )}

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 ${index === 0 || service.featured
                    ? 'bg-background/20'
                    : 'bg-primary'
                    }`}>
                    <FontAwesomeIcon
                      icon={service.icon}
                      className={`w-6 h-6 ${index === 0 || service.featured ? 'text-primary-foreground' : 'text-primary-foreground'}`}
                    />
                  </div>

                  {/* Text Content */}
                  <div className="flex-1">
                    <h3 className={`text-xl md:text-2xl font-bold mb-3 ${index === 0 || service.featured ? 'text-primary-foreground' : 'text-foreground'
                      }`}>
                      {service.title}
                    </h3>
                    <p className={`leading-relaxed ${index === 0 || service.featured
                      ? 'text-primary-foreground/80 md:text-lg'
                      : 'text-muted-foreground'
                      }`}>
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className={`mt-6 flex items-center gap-2 text-sm font-medium transition-all duration-300 group-hover:gap-4 ${index === 0 || service.featured ? 'text-primary-foreground' : 'text-primary'
                    }`}>
                    <span>Learn more</span>
                    <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className={`absolute inset-0 rounded-3xl border-2 transition-opacity duration-300 opacity-0 group-hover:opacity-100 ${index === 0 || service.featured ? 'border-primary-foreground/30' : 'border-primary/30'
                  }`} />
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link href="/services" className="btn-secondary inline-flex items-center gap-2">
            View All Services
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
