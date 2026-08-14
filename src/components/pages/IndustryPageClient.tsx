"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import { industries } from "@/data/industries";
import { CTASection } from "@/components/home/CTASection";

export function IndustryPageClient({ slug }: { slug: string }) {
  const industry = industries.find((i) => i.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white font-cerebri font-light text-charcoal selection:bg-gray-200">
      {/* Hero Section */}
      <section className="relative flex items-center overflow-hidden bg-white pt-24 pb-12 border-b border-gray-100">
        {/* Background Shape */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[150%] md:w-[75%] h-[85%] bg-[#f4f5f7]" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 0)' }} />
        </div>

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 bg-[#1a202c] rounded-md text-[13px] font-medium text-white mb-12 shadow-md"
          >
            <Link href="/" className="hover:text-blue-300 transition-colors">
              Home
            </Link>
            <span className="text-white/40 text-xs font-bold">❯</span>
            <span className="hover:text-blue-300 transition-colors cursor-pointer">Industries</span>
            <span className="text-white/40 text-xs font-bold">❯</span>
            <span className="text-white">{industry.name}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Industry Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center bg-transparent shadow-sm shrink-0">
                <FontAwesomeIcon icon={industry.icon} className="w-4 h-4 text-gray-500" />
              </div>
              <span className="text-blue-600 font-bold tracking-wide text-[17px]">
                {industry.name} Software Development Services
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-charcoal mb-8 leading-[1.05]">
              {industry.tagline}
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl leading-relaxed font-light mb-12">
              {industry.description}
            </p>

          </motion.div>
        </div>
      </section>


      {/* Solutions Grid */}
      <section className="py-24 bg-white border-b border-gray-100">
        <div className="section-container">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-12 justify-between items-start">
            <h2 className="text-3xl md:text-[38px] font-light leading-[1.1] text-charcoal max-w-xl tracking-tight">
              AI Software Development <br className="hidden md:block"/>Services for {industry.name}
            </h2>
            <p className="text-[15px] text-gray-500 max-w-[400px] leading-relaxed font-light">
              We build intelligent models and scalable solutions that address complex challenges and unlock new opportunities in the {industry.name} sector.
            </p>
          </div>

          {/* Grid Container */}
          <div className="relative mt-8">
            {/* Blue Tab */}
            <div className="inline-block bg-[#0000ff] text-white font-bold tracking-[0.05em] text-[12px] uppercase px-6 py-3 border-b-[3px] border-[#22c55e]">
              AI DEV SERVICES FOR {industry.name.toUpperCase()}
            </div>
            
            {/* The Box */}
            <div className="border border-charcoal p-8 md:p-12 relative overflow-hidden -mt-[1px]">
              {/* Dot Pattern Background */}
              <div 
                className="absolute inset-0 opacity-40 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle at 1.5px 1.5px, #d1d5db 1px, transparent 0)",
                  backgroundSize: "24px 24px"
                }}
              />

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 relative z-10">
                {industry.solutions.map((solution, i) => (
                  <motion.div
                    key={solution.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    {/* Yellow Check Icon */}
                    <div className="w-[30px] h-[30px] shrink-0 bg-[#fbbf24] flex items-center justify-center rounded-[2px] mt-1">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.6667 3.5L5.25001 9.91667L2.33334 7" stroke="#111827" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    
                    <div>
                      <h3 className="text-[16px] font-bold text-charcoal mb-2 leading-tight">
                        {solution.title}
                      </h3>
                      <p className="text-[14px] text-gray-500 leading-relaxed font-light">
                        {solution.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits / Challenges Section */}
      <section className="py-24 bg-[#f8f9fa] relative overflow-hidden">
        <div className="section-container">
          
          <div className="relative p-6 md:p-12">
            {/* Corner Markers */}
            <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-gray-400"></div>
            <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-gray-400"></div>
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-gray-400"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-gray-400"></div>

            {/* Header / Line */}
            <div className="mb-16">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-blue-600"></div>
                <span className="text-[12px] font-bold tracking-widest text-charcoal uppercase">
                  Challenges We Solve
                </span>
              </div>
              <div className="w-full h-[1px] bg-gray-300"></div>
            </div>

            <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">
              {/* Left Column */}
              <div>
                <h2 className="text-4xl md:text-[42px] font-light leading-[1.15] text-charcoal mb-8">
                  We understand the complexities of the {industry.name} sector.
                </h2>
                <p className="text-[16px] text-gray-500 leading-relaxed font-light mb-10 max-w-md">
                  Every industry faces unique obstacles. Our team brings deep domain expertise to deliver solutions that don't just work — they fit seamlessly into your operational reality.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-2 text-blue-600 font-bold text-[13px] tracking-wide uppercase hover:text-blue-800 transition-colors">
                  START TODAY
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l10-10M17 17V7H7"/></svg>
                </Link>
              </div>

              {/* Right Column */}
              <div className="lg:border-l border-gray-300 lg:pl-12 flex flex-col gap-6">
                {industry.challenges.map((challenge, i) => (
                  <div key={i} className="mb-2">
                    <h3 className="text-[20px] text-charcoal leading-snug font-light">
                      {challenge}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* Banner CTA */}
            <div className="mt-24 w-full bg-gradient-to-r from-[#2525d6] to-[#a832e0] p-12 md:p-16 text-center shadow-lg">
              <h2 className="text-3xl md:text-[34px] font-light text-white mb-8">
                {industry.name} Software Development Services
              </h2>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-3.5 font-bold text-[13px] tracking-wide uppercase hover:bg-gray-50 transition-colors shadow-sm">
                SCHEDULE A CALL
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
