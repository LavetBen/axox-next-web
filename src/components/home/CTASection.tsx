"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const CTASection = () => {
  return (
    <section className="relative py-16 md:py-32 bg-black overflow-hidden font-cerebri">
      {/* Subtle dotted background pattern to mimic the map from the image */}
      <div 
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '24px 24px'
        }}
      />
      
      <div className="section-container relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-24 items-center">
          
          {/* Left Column - Large Title */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl text-white font-light tracking-tight leading-[1.1]">
              Ready to Build <br />Something Amazing?
            </h2>
          </motion.div>

          {/* Right Column - Content and Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-start"
          >
            <div className="text-white/60 text-[12px] uppercase tracking-[0.2em] mb-4 font-medium">
              Axox best solutions
            </div>
            
            <p className="text-lg text-white/90 mb-8 max-w-md font-light leading-relaxed">
              Let's discuss your project and see how we can help transform your ideas into reality.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-electric-blue text-white text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 hover:opacity-90 group"
              >
                Get a Free Quote
                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
              
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};
