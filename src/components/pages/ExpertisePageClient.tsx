"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { notFound } from "next/navigation";
import { expertise } from "@/data/expertise";
import { CTASection } from "@/components/home/CTASection";

export function ExpertisePageClient({ slug }: { slug: string }) {
  const expertiseItem = expertise.find((e) => e.slug === slug);

  if (!expertiseItem) {
    notFound();
  }

  const IconComponent = expertiseItem.icon;

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
            <span className="text-white">Expertise</span>
            <span className="text-white/40 text-xs font-bold">❯</span>
            <span className="text-white">{expertiseItem.name}</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="max-w-4xl"
          >
            {/* Expertise Tag */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-11 h-11 rounded-full border border-gray-300 flex items-center justify-center bg-white shadow-sm shrink-0">
                <IconComponent className="w-5 h-5 text-gray-700" />
              </div>
              <span className="text-blue-600 font-bold tracking-wide text-[17px]">
                {expertiseItem.name} Services
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-charcoal mb-8 leading-[1.05]">
              {expertiseItem.tagline}
            </h1>

            <p className="text-lg md:text-xl text-gray-500 font-light leading-relaxed mb-10 max-w-3xl">
              {expertiseItem.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/quote"
                className="inline-flex items-center gap-2 bg-electric-blue text-white px-8 py-4 text-[13px] font-bold uppercase tracking-widest hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-500/20 group rounded-none"
              >
                Discuss Your Project
                <FontAwesomeIcon icon={faArrowRight} className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-[#1a202c]">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/10">
            {expertiseItem.stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`flex flex-col items-center text-center ${idx !== 0 ? 'pl-8 md:pl-12' : ''}`}
              >
                <span className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-tight">{stat.value}</span>
                <span className="text-sm md:text-base text-gray-400 font-medium tracking-wide uppercase">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid Section */}
      <section className="py-24 bg-white relative">
        <div className="section-container">
          <div className="mb-16">
            <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Core Capabilities</h2>
            <h3 className="text-3xl md:text-4xl font-light text-charcoal">
              Our <span className="font-semibold">{expertiseItem.name}</span> Expertise
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertiseItem.features.map((feature, idx) => {
              const FeatureIcon = feature.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white p-10 border border-gray-100 hover:border-blue-100 shadow-sm hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group rounded-2xl"
                >
                  <div className="w-14 h-14 bg-gray-50 group-hover:bg-blue-50 rounded-xl flex items-center justify-center mb-6 transition-colors">
                    <FeatureIcon className="w-6 h-6 text-gray-600 group-hover:text-blue-600 transition-colors" />
                  </div>
                  <h4 className="text-xl font-semibold text-charcoal mb-4 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h4>
                  <p className="text-gray-500 font-light leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-[#f4f5f7] border-y border-gray-100">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-sm font-bold text-blue-600 tracking-[0.2em] uppercase mb-4">Why Choose Us</h2>
              <h3 className="text-3xl md:text-4xl font-light text-charcoal mb-6 leading-tight">
                The Business Value of our <span className="font-semibold">{expertiseItem.name}</span>
              </h3>
              <p className="text-lg text-gray-500 font-light mb-8">
                We don't just write code; we deliver strategic technology solutions designed to solve complex business problems, drive growth, and give you a competitive edge.
              </p>
              <div className="space-y-5">
                {expertiseItem.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <FontAwesomeIcon icon={faCheckCircle} className="w-5 h-5 text-blue-600 mt-1 shrink-0" />
                    <p className="text-charcoal font-medium">{benefit}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-12"
            >
              {/* Abstract Representation */}
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
              <div className={`absolute inset-0 opacity-20 bg-gradient-to-tr ${expertiseItem.heroGradient}`} />
              <div className="relative z-10 text-center">
                <IconComponent className="w-32 h-32 text-white/90 mx-auto mb-8 stroke-1" />
                <h4 className="text-2xl text-white font-light tracking-wide">{expertiseItem.name}</h4>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reusable CTA */}
      <CTASection />
    </div>
  );
}
