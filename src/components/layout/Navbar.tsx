"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X, ChevronDown, Fingerprint, Zap, Utensils, HeartPulse, Building2, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const industryLinks = [
  {
    name: 'Fintech',
    path: '/industries/fintech',
    icon: Fingerprint,
    color: '#000000',
    description: 'Digital banking, payments & loan management systems.',
  },
  {
    name: 'Energy',
    path: '/industries/energy',
    icon: Zap,
    color: '#000000',
    description: 'Smart metering, grid monitoring & billing platforms.',
  },
  {
    name: 'Food',
    path: '/industries/food',
    icon: Utensils,
    color: '#000000',
    description: 'POS, traceability & supply chain management for food.',
  },
  {
    name: 'Healthcare',
    path: '/industries/healthcare',
    icon: HeartPulse,
    color: '#000000',
    description: 'Hospital systems, EMR & telemedicine platforms.',
  },
  {
    name: 'Real Estate',
    path: '/industries/real-estate',
    icon: Building2,
    color: '#000000',
    description: 'PropTech, listing portals & tenant management tools.',
  },
];

const navLinks = [
  { name: 'SERVICES', path: '/services' },
  { name: 'PRICING', path: '/pricing' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'CONTACT', path: '/contact' },
  { name: 'QUOTE', path: '/quote' },
  { name: 'COMPANY', path: '/company' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isIndustriesOpen, setIsIndustriesOpen] = useState(false);
  const [isMobileIndustriesOpen, setIsMobileIndustriesOpen] = useState(false);
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsIndustriesOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const primaryLinks = navLinks.slice(0, 4);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.1)]' : 'bg-white'
        }`}
      >
        <div className="border-b border-gray-100">
          <nav className="section-container relative z-50">
            <div className="flex items-center justify-between h-[72px] relative">
              {/* Logo */}
              <div className="flex-1 flex items-center">
                <Link href="/" className="flex items-center group w-fit">
                  <span className="text-charcoal text-[28px] font-bold tracking-tight lowercase">
                    axox
                  </span>
                  <span className="text-charcoal text-[10px] self-start mt-1.5 ml-0.5">®</span>
                </Link>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden xl:flex items-center justify-center gap-8 h-full">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.path}
                    href={link.path}
                    className="flex items-center gap-1.5 text-charcoal hover:text-black text-[13px] font-semibold tracking-wide uppercase transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}

                {/* Industries Mega Menu Trigger */}
                <div 
                  className="relative h-full flex items-center" 
                  ref={dropdownRef} 
                  onMouseEnter={() => setIsIndustriesOpen(true)}
                  onMouseLeave={() => setIsIndustriesOpen(false)}
                >
                  <Link
                    href="/industries"
                    className={`flex items-center gap-1.5 text-[13px] font-semibold tracking-wide uppercase transition-colors ${
                      isIndustriesOpen ? 'text-electric-blue' : 'text-charcoal hover:text-black'
                    }`}
                  >
                    INDUSTRIES
                    <ChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  {/* ── Mega Menu (inside ref so clicks don't trigger outside handler) ── */}
                  <AnimatePresence>
                    {isIndustriesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.18, ease: 'easeOut' }}
                        className="hidden xl:block fixed top-[73px] left-1/2 -translate-x-1/2 w-[1000px] bg-white border border-gray-100 shadow-xl shadow-black/10 z-40 rounded-b-xl"
                      >
                        <div className="p-10">
                          {/* Section label */}
                          <p className="text-[13px] font-semibold tracking-wide uppercase text-gray-400 mb-6">
                            INDUSTRIES
                          </p>

                          {/* 3-column industry grid */}
                          <div className="grid grid-cols-3 gap-x-8 gap-y-1">
                            {industryLinks.map((item) => (
                              <Link
                                key={item.path}
                                href={item.path}
                                className="flex items-start gap-3 p-4 hover:bg-gray-100 transition-colors duration-200 group"
                              >
                                {/* Icon */}
                                <div className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                                  <item.icon className="w-[22px] h-[22px] text-gray-700 group-hover:text-electric-blue transition-colors" strokeWidth={1.5} />
                                </div>

                                {/* Text */}
                                <div className="min-w-0">
                                  <p className="text-[15px] font-medium text-charcoal group-hover:text-electric-blue transition-colors leading-snug mb-1">
                                    {item.name}
                                  </p>
                                  <p className="text-[13px] text-gray-500 leading-relaxed font-normal">
                                    {item.description}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>

                          {/* Footer link */}
                          <div className="mt-8 pt-6 border-t border-gray-100">
                            <Link
                              href="/industries"
                              className="inline-flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.15em] text-electric-blue hover:opacity-75 transition-opacity"
                            >
                              INDUSTRIES
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link
                  href="/quote"
                  className="flex items-center gap-1.5 text-charcoal hover:text-black text-[13px] font-semibold tracking-wide uppercase transition-colors"
                >
                  GET QUOTE
                </Link>
              </div>

              {/* Right Actions */}
              <div className="hidden lg:flex flex-1 items-center justify-end gap-6">
                <div className="flex items-center gap-3">
                  <Link
                    href="/contact"
                    className="bg-charcoal text-white px-5 h-[42px] rounded-full font-semibold text-[14.5px] flex items-center justify-center gap-2 hover:bg-black transition-colors"
                  >
                    Contact us
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden w-10 h-10 flex items-center justify-center text-charcoal"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="xl:hidden fixed inset-0 top-[72px] bg-white z-40 overflow-y-auto"
          >
            <div className="section-container py-8 flex flex-col gap-1">
              {navLinks.slice(0, 4).map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-2xl font-medium text-charcoal py-3 border-b border-gray-50"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Industries accordion */}
              <button
                onClick={() => setIsMobileIndustriesOpen(!isMobileIndustriesOpen)}
                className="flex items-center justify-between text-2xl font-medium text-charcoal py-3 border-b border-gray-50 w-full text-left"
              >
                INDUSTRIES
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${isMobileIndustriesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {isMobileIndustriesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                  >
                    {industryLinks.map((item) => (
                      <Link
                        key={item.path}
                        href={item.path}
                        className="flex items-center gap-3 py-3 pl-4 border-b border-gray-50 group"
                      >
                        <div className="flex-shrink-0 mt-0.5 transition-transform duration-300 group-hover:-translate-y-0.5">
                          <item.icon className="w-4 h-4 text-gray-700" strokeWidth={1.5} />
                        </div>
                        <div>
                          <p className="text-base font-semibold text-charcoal">{item.name}</p>
                          <p className="text-[12px] text-gray-500 font-normal">{item.description}</p>
                        </div>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>

              <Link href="/quote" className="text-2xl font-medium text-charcoal py-3 border-b border-gray-50">
                GET QUOTE
              </Link>

              <div className="mt-8 flex flex-col gap-4">
                <Link
                  href="/contact"
                  className="bg-charcoal text-white px-6 py-4 rounded-full font-semibold text-lg flex items-center justify-between"
                >
                  Contact us
                  <ArrowUpRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
