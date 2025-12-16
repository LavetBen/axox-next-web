"use client";

import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faShieldHalved,
  faRocket,
  faHeadset
} from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '../ui/SectionHeading';

const features = [
  {
    icon: faLightbulb,
    title: 'Innovation',
    description: 'We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive edge.',
  },
  {
    icon: faShieldHalved,
    title: 'Security',
    description: 'Your data and systems are protected with enterprise-grade security measures and best practices.',
  },
  {
    icon: faRocket,
    title: 'Reliability',
    description: 'We deliver on time, every time. Our solutions are built to perform consistently under any conditions.',
  },
  {
    icon: faHeadset,
    title: '24/7 Support',
    description: 'Our dedicated support team is always available to help you with any issues or questions.',
  },
];

export const WhyChooseUsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="bg-primary text-primary-foreground relative overflow-hidden rounded-3xl p-8 md:p-16">
          {/* Background Decor */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

          <div className="relative z-10">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 mb-4 rounded-full font-medium text-sm bg-background/10 text-background backdrop-blur-sm">
                Why Choose Us
              </span>
              <h2 className="heading-lg mb-4 text-background">
                Why Partner With Us?
              </h2>
              <p className="text-body max-w-2xl mx-auto text-background/70">
                We bring expertise, passion, and a commitment to excellence to every project we undertake.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {[
                { icon: faLightbulb, title: 'Innovation', text: 'Ahead of the technology curve.' },
                { icon: faShieldHalved, title: 'Security', text: 'Enterprise-grade protection.' },
                { icon: faRocket, title: 'Reliability', text: 'Consistent high performance.' },
                { icon: faHeadset, title: '24/7 Support', text: 'Always here when you need us.' }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm transition-transform hover:scale-110 duration-300">
                    <FontAwesomeIcon icon={item.icon} className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-white/80">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
