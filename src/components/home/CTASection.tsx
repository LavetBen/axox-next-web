"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import chicagoImg from '@/assets/chicag.jpg';

export const CTASection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-primary rounded-3xl p-12 md:p-20 text-center relative overflow-hidden group"
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-105"
            style={{
              backgroundImage: `url(${chicagoImg.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-primary/90 z-0" />

          {/* Background Decor */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none z-0" />
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 z-0" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 z-0" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="heading-lg text-primary-foreground mb-6">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8">
              Let's discuss your project and see how we can help transform your ideas into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/quote"
                className="px-8 py-4 bg-background text-foreground rounded-lg font-semibold transition-all duration-300 hover:opacity-90 hover:shadow-lg inline-flex items-center gap-2"
              >
                Get a Free Quote
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 border-2 border-background text-background rounded-lg font-semibold transition-all duration-300 hover:bg-background hover:text-foreground"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
