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
      <section
        className={`relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br pt-[72px] ${industry.heroGradient}`}
      >
        {/* Dot grid background */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />

        {/* Glowing accent orb */}
        <div
          className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none"
          style={{ background: industry.accentColor }}
        />

        <div className="section-container relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-[12px] uppercase tracking-[0.2em] mb-8"
            style={{ color: industry.accentColor }}
          >
            <Link href="/" className="opacity-60 hover:opacity-100 transition-opacity text-white">
              Home
            </Link>
            <span className="opacity-40 text-white">/</span>
            <span className="opacity-60 text-white">Industries</span>
            <span className="opacity-40 text-white">/</span>
            <span>{industry.name}</span>
          </motion.div>

          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 max-w-4xl leading-[1.1]">
              {industry.tagline}
            </h1>
            <p className="text-lg md:text-xl text-white/70 max-w-2xl leading-relaxed font-light mb-10">
              {industry.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 hover:opacity-90 group rounded-sm"
                style={{ background: industry.accentColor }}
              >
                Get a Free Quote
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white text-[13px] font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-white/10 rounded-sm"
              >
                Talk to an Expert
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Band */}
      <section className="bg-[#1a1a24] py-10 border-b border-white/5">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industry.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div
                  className="text-2xl md:text-3xl font-bold mb-1"
                  style={{ color: industry.accentColor }}
                >
                  {stat.value}
                </div>
                <div className="text-[12px] uppercase tracking-widest text-white/50">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="section-container">
          {/* Header Bar */}
          <div className="bg-[#1a1a24] text-white py-5 px-8 rounded-t-sm font-medium text-[16px] tracking-wide flex flex-col sm:flex-row items-start sm:items-center justify-between shadow-lg gap-2">
            <span
              className="font-bold tracking-wider uppercase text-sm"
              style={{ color: industry.accentColor }}
            >
              Our Solutions
            </span>
            <span className="font-light opacity-80 text-sm">
              Built specifically for the {industry.name} sector
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 border-l border-gray-100 shadow-xl shadow-gray-200/50 rounded-b-sm overflow-hidden">
            {industry.solutions.map((solution, i) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.1 }}
                className="p-8 md:p-10 flex flex-col border-b border-r border-gray-100 bg-white hover:bg-gray-50/80 transition-all duration-300 group"
              >
                {/* Solution Icon */}
                <div
                  className="w-12 h-12 rounded-sm flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-1"
                  style={{
                    background: `${industry.accentColor}15`,
                    border: `1px solid ${industry.accentColor}25`,
                  }}
                >
                  <FontAwesomeIcon
                    icon={solution.icon}
                    className="w-5 h-5 transition-colors duration-300"
                    style={{ color: industry.accentColor }}
                  />
                </div>
                <h3 className="text-[20px] font-medium text-charcoal mb-3">
                  {solution.title}
                </h3>
                <p className="text-[14px] text-gray-500 font-light leading-relaxed">
                  {solution.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 bg-[#f9f9fc]">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p
                className="text-[12px] uppercase tracking-[0.2em] mb-4 font-semibold"
                style={{ color: industry.accentColor }}
              >
                Challenges We Solve
              </p>
              <h2 className="text-3xl md:text-4xl font-light text-charcoal leading-tight mb-6">
                We understand the complexities of the{" "}
                <span className="font-semibold">{industry.name}</span> sector.
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed">
                Every industry faces unique obstacles. Our team brings deep domain expertise to deliver solutions that don't just work — they fit seamlessly into your operational reality.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              {industry.challenges.map((challenge, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-5 bg-white rounded-sm border border-gray-100 shadow-sm"
                >
                  <div
                    className="mt-0.5 flex-shrink-0"
                    style={{ color: industry.accentColor }}
                  >
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5" />
                  </div>
                  <span className="text-[15px] text-charcoal font-light">
                    {challenge}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
