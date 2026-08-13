"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import erpImage from "@/assets/erp.jpg";
import webdevImage from "@/assets/webdev.jpg";
import softwareImage from "@/assets/software.jpg";
import mobileImage from "@/assets/mobile.jpg";

const slides = [
  {
    id: 1,
    title: "Your trusted partner for guaranteed software delivery",
    subtitle:
      "Combining advanced technology and decades of industry insight, we design and develop bespoke full-cycle solutions tailored to deliver your unique software vision.",
    label: "axox overview",
    bgGradient: "bg-charcoal", // Dark elegant background
    image: softwareImage,
    type: "overview",
  },
  {
    id: 2,
    title: "Web Development",
    subtitle:
      "Crafting high-performance, scalable, and secure web applications. From intuitive front-end interfaces to robust back-end architectures, we build digital solutions that drive results.",
    label: "Web Dev",
    bgGradient: "bg-[#181722]", // Slight variation of charcoal
    image: webdevImage,
    type: "service",
  },
  {
    id: 3,
    title: "Mobile App Development",
    subtitle:
      "Building native and cross-platform mobile solutions. Engaging user experiences for iOS and Android.",
    label: "Mobile",
    bgGradient: "bg-[#14131D]", // Slight variation of charcoal
    image: mobileImage,
    type: "service",
  },
  {
    id: 4,
    title: "ERP Solutions",
    subtitle:
      "Streamline your business operations with our comprehensive ERP systems. Integrate finance, HR, manufacturing, and supply chain processes into one unified platform.",
    label: "ERP",
    bgGradient: "bg-[#111019]", // Slight variation of charcoal
    image: erpImage,
    type: "service",
  },
];

export const HeroCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // Auto play
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, 12000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-white pt-[90px] md:pt-[104px] pb-8 md:pb-12 flex items-center justify-center">
      <div className="section-container w-full h-[650px] md:h-[500px] lg:h-[560px] flex flex-col md:flex-row gap-2 md:gap-4 group/carousel">
        {slides.map((slide, idx) => {
          const isActive = idx === activeIndex;

          return (
            <motion.div
              key={slide.id}
              layout
              onClick={() => !isActive && setActiveIndex(idx)}
              className={`relative overflow-hidden rounded-2xl flex transition-all duration-300 ${
                isActive
                  ? "flex-grow cursor-default"
                  : "h-[72px] md:h-auto w-full md:w-24 cursor-pointer opacity-90 hover:opacity-100"
              } ${slide.bgGradient}`}
              transition={{ type: "spring", stiffness: 250, damping: 30 }}
            >
              {/* Background Image (if present) */}
              {slide.image && (
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={slide.image} 
                    alt={slide.title}
                    fill
                    className="object-cover"
                    priority={idx === 0}
                  />
                </div>
              )}

              {/* Subtle texture/gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/60 pointer-events-none z-0" />

              <AnimatePresence mode="wait">
                {isActive ? (
                  <motion.div
                    key="active-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="absolute inset-0 p-6 md:p-14 flex flex-col justify-between text-white z-10"
                  >
                    {/* Top Row: Label */}
                    <div className="flex justify-end w-full">
                      <div className="flex items-center gap-2 text-sm md:text-body-standard text-white/80 tracking-wide font-medium">
                        {slide.label} <span className="text-[10px]">○</span>
                      </div>
                    </div>

                    {/* Middle Content */}
                    <div className="max-w-2xl mt-auto md:mt-8 overflow-y-auto pb-4 md:pb-0 scrollbar-hide">
                      <h1 className="text-3xl md:text-[3.5rem] leading-[1.15] md:leading-[1.1] tracking-tight font-medium mb-4 md:mb-6 text-white">
                        {slide.title}
                      </h1>
                      <p className="text-[15px] md:text-lg text-white/80 max-w-xl">
                        {slide.subtitle}
                      </p>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row items-start md:items-end justify-end mt-4 md:mt-auto gap-8 md:gap-0">
                      {/* Controls */}
                      <div className="flex items-center gap-4">
                        <button
                          onClick={handlePrev}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all"
                          aria-label="Previous slide"
                        >
                          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                        <button
                          onClick={handleNext}
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:scale-105 transition-all"
                          aria-label="Next slide"
                        >
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="inactive-content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 flex flex-row md:flex-col justify-between items-center px-6 py-0 md:px-0 md:py-8 text-white/80 hover:text-white z-10"
                  >
                    <div className="flex-1 h-full md:w-full flex justify-start items-center md:items-start md:mt-8 relative">
                      <div className="md:absolute whitespace-nowrap md:-rotate-90 md:origin-center text-[15px] md:text-base tracking-widest flex items-center gap-3 md:top-1/3">
                        {slide.label} <span className="text-[10px] hidden md:inline">○</span>
                      </div>
                    </div>
                    <div className="mt-0 ml-auto md:ml-0 md:mt-auto w-8 h-8 md:w-10 md:h-10 rounded-full border border-white/30 flex items-center justify-center group-hover/carousel:bg-white/10 transition-colors">
                      <Plus className="w-4 h-4" />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
