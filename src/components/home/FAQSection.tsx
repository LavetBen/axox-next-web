"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    id: 1,
    question: "What Should You Know About Axox?",
    answer: "Axox is an elite software engineering and design agency. We specialize in building scalable, secure, and modern digital platforms, including our comprehensive Next-Gen Loan Management System. Our team is dedicated to delivering high-quality solutions that propel your business forward."
  },
  {
    id: 2,
    question: "What types of software development projects does Axox specialize in?",
    answer: "We specialize in a wide range of projects, from custom web and mobile applications to complex enterprise resource planning (ERP) systems and dedicated FinTech platforms like loan management and core banking solutions."
  },
  {
    id: 3,
    question: "Where are Axox's developers located, and what time zone do they work in?",
    answer: "Our core engineering teams operate across multiple global time zones to ensure continuous delivery and support. We work closely with you to establish overlapping hours that maximize communication and collaboration."
  },
  {
    id: 4,
    question: "What is Axox's pricing structure for Software Development services?",
    answer: "Our pricing structure is flexible and tailored to your specific project needs. We offer fixed-price contracts for well-defined scopes, as well as time-and-materials or dedicated team models for long-term, evolving projects."
  },
  {
    id: 5,
    question: "Does Axox provide any guarantees or quality assurance measures for its software development services?",
    answer: "Absolutely. Quality is at the heart of everything we build. We employ rigorous automated and manual testing methodologies, continuous integration, and post-launch support guarantees to ensure your software is robust, secure, and bug-free."
  }
];

export const FAQSection = () => {
  const [openId, setOpenId] = useState<number | null>(null);

  const toggleFaq = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="section-container max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-10 text-left">
          Frequently Asked Questions
        </h2>
        
        <div className="flex flex-col gap-3">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id} 
                className="bg-[#f0f2f5] overflow-hidden rounded-sm transition-colors duration-200"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                >
                  <div className="flex text-base md:text-lg font-normal">
                    <span className="text-electric-blue mr-2">Q:</span>
                    <span className="text-charcoal">{faq.question}</span>
                  </div>
                  <ChevronDown 
                    className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ml-4 ${isOpen ? 'rotate-180' : ''}`} 
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-2 text-gray-600 font-light leading-relaxed">
                        <span className="font-medium mr-2 text-charcoal">A:</span>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
