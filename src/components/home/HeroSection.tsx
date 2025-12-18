"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlay } from '@fortawesome/free-solid-svg-icons';
import { TextAnimate } from '@/components/magicui/text-animate';
import dynamic from 'next/dynamic';

const HeroAnimation = dynamic(() => import('./HeroAnimation').then(mod => mod.HeroAnimation), {
  ssr: false,
  loading: () => <div className="w-full aspect-square bg-gray-100 rounded-3xl animate-pulse" />
});

const phrases = [
  'Powerful Software',
  'Mobile Apps',
  'Robust APIs',
  'Cloud Systems',
  'Custom Solutions'
];

export const HeroSection = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        {/* Grid Pattern with many lines */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.6]" />

        {/* Gradient Overlay for fade */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />

      </div>

      <div className="section-container relative z-10 pt-32 md:pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-foreground">
              <span className="block mb-2">We Build</span>
              <span className="text-primary block mb-2 h-[1.2em] overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <TextAnimate
                      animation="blurInUp"
                      by="character"
                      duration={0.5}
                    >
                      {phrases[index]}
                    </TextAnimate>
                  </motion.div>
                </AnimatePresence>
              </span>
              <span className="block">for the Future</span>
            </h1>
            <p className="text-body mb-8 max-w-xl">
              Axox delivers cutting-edge technology solutions that transform businesses.
              From custom systems to mobile apps, we bring your vision to life with
              precision and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/quote" className="btn-primary inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </Link>
              <Link href="/services" className="btn-outline inline-flex items-center justify-center gap-2 w-full sm:w-auto">
                <FontAwesomeIcon icon={faPlay} className="w-4 h-4" />
                View Services
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-6 md:gap-8">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">150+</div>
                <div className="text-muted-foreground text-sm md:text-base">Projects Delivered</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">50+</div>
                <div className="text-muted-foreground text-sm md:text-base">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-foreground">10+</div>
                <div className="text-muted-foreground text-sm md:text-base">Years Experience</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animation */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <HeroAnimation />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
