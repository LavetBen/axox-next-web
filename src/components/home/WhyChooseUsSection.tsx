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
    <section className="section-padding bg-background relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.3]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 mb-4 rounded-full font-medium text-sm bg-primary/10 text-primary"
          >
            Why Choose Us
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg mb-6"
          >
            Why Partner With Us?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-body max-w-2xl mx-auto"
          >
            We bring expertise, passion, and a commitment to excellence to every project we undertake.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: faLightbulb, title: 'Innovation', text: 'Ahead of the technology curve.', gradient: 'from-blue-500/20 to-cyan-500/20', border: 'hover:border-blue-500/50' },
            { icon: faShieldHalved, title: 'Security', text: 'Enterprise-grade protection.', gradient: 'from-emerald-500/20 to-green-500/20', border: 'hover:border-emerald-500/50' },
            { icon: faRocket, title: 'Reliability', text: 'Consistent high performance.', gradient: 'from-orange-500/20 to-red-500/20', border: 'hover:border-orange-500/50' },
            { icon: faHeadset, title: '24/7 Support', text: 'Always here when you need us.', gradient: 'from-purple-500/20 to-pink-500/20', border: 'hover:border-purple-500/50' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group p-8 rounded-3xl bg-background border border-border/50 hover:shadow-xl transition-all duration-500 ${item.border} relative overflow-hidden`}
            >
              {/* Hover Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 group-hover:bg-background/50">
                  <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
