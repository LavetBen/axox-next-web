"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Panashe',
    role: 'CEO, TechStart Inc.',
    content: 'Axox transformed our business with their innovative software solutions. Their team is professional, responsive, and truly understands our needs. The results exceeded our expectations.',
  },
  {
    id: 2,
    name: 'Austine',
    role: 'CTO, HealthPlus',
    content: 'Working with Axox was a game-changer for our healthcare platform. They delivered a robust, scalable solution that has improved patient care significantly.',
  },
  {
    id: 3,
    name: 'Talent',
    role: 'Founder, RetailMax',
    content: 'The e-commerce platform Axox built for us has increased our sales by 200%. Their attention to detail and user experience expertise is unmatched.',
  },
];

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-12 bg-background">
      <div className="section-container">
        <div className="bg-secondary/50 rounded-2xl p-6 md:p-10 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

          <div className="text-center mb-8">
            <h2 className="heading-md mb-2">What Our Clients Say</h2>
            <p className="text-sm text-muted-foreground max-w-lg mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say.
            </p>
          </div>

          <div className="max-w-3xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-2xl p-6 shadow-sm border border-border/50 text-center relative z-10"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg">
                  <FontAwesomeIcon icon={faQuoteLeft} className="w-3 h-3" />
                </div>

                <p className="text-base md:text-lg text-foreground leading-relaxed mb-6 pt-2 italic">
                  "{testimonials[currentIndex].content}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <span className="text-primary text-sm font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-sm text-foreground">{testimonials[currentIndex].name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 -right-4 md:-right-12 flex justify-between z-0 pointer-events-none">
              <button
                onClick={prev}
                className="w-10 h-10 rounded-full bg-background border border-border text-foreground flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground pointer-events-auto shadow-sm"
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-3 h-3" />
              </button>
              <button
                onClick={next}
                className="w-10 h-10 rounded-full bg-background border border-border text-foreground flex items-center justify-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground pointer-events-auto shadow-sm"
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-1.5 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-6' : 'bg-foreground/20 w-1.5'
                  }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};
