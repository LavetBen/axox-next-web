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
    <section className="section-padding bg-background">
      <div className="section-container">
        <div className="bg-secondary rounded-3xl p-8 md:p-16">
          <SectionHeading
            tag="Testimonials"
            title="What Our Clients Say"
            subtitle="Don't just take our word for it. Here's what our satisfied clients have to say about working with us."
          />

          <div className="max-w-4xl mx-auto relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="bg-background rounded-3xl p-8 md:p-12 text-center shadow-sm"
              >
                <FontAwesomeIcon icon={faQuoteLeft} className="w-12 h-12 text-primary mb-6" />
                <p className="text-lg md:text-xl text-foreground leading-relaxed mb-8">
                  "{testimonials[currentIndex].content}"
                </p>
                <div>
                  <div className="w-16 h-16 bg-foreground rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-background text-xl font-bold">
                      {testimonials[currentIndex].name.charAt(0)}
                    </span>
                  </div>
                  <h4 className="font-bold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center transition-all duration-300 hover:bg-primary"
                aria-label="Previous testimonial"
              >
                <FontAwesomeIcon icon={faChevronLeft} className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full bg-foreground text-background flex items-center justify-center transition-all duration-300 hover:bg-primary"
                aria-label="Next testimonial"
              >
                <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5" />
              </button>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-primary w-8' : 'bg-foreground/30'
                    }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
