"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCreditCard,
  faBolt,
  faUtensils,
  faHospital,
  faBuilding,
} from '@fortawesome/free-solid-svg-icons';

const industryLinks = [
  { name: 'Fintech', path: '/industries/fintech', icon: faCreditCard, color: '#0000ff' },
  { name: 'Energy', path: '/industries/energy', icon: faBolt, color: '#f59e0b' },
  { name: 'Food', path: '/industries/food', icon: faUtensils, color: '#22c55e' },
  { name: 'Healthcare', path: '/industries/healthcare', icon: faHospital, color: '#ef4444' },
  { name: 'Real Estate', path: '/industries/real-estate', icon: faBuilding, color: '#8b5cf6' },
];

const navLinks = [
  { name: 'AI DEVELOPMENT', path: '/ai-development' },
  { name: 'SERVICES', path: '/services' },
  { name: 'TECHNOLOGIES', path: '/technologies' },
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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsIndustriesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const primaryLinks = navLinks.slice(0, 4);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-[0_2px_8px_-4px_rgba(0,0,0,0.05)]' : 'bg-white'
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
            <div className="hidden xl:flex items-center justify-center gap-8">
              {primaryLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="flex items-center gap-1.5 text-charcoal hover:text-black text-[13px] font-semibold tracking-wide uppercase transition-colors group"
                >
                  {link.name}
                </Link>
              ))}

              {/* Industries Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsIndustriesOpen(!isIndustriesOpen)}
                  className="flex items-center gap-1.5 text-charcoal hover:text-black text-[13px] font-semibold tracking-wide uppercase transition-colors"
                >
                  INDUSTRIES
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${isIndustriesOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {isIndustriesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: 'easeOut' }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[320px] bg-white border border-gray-100 shadow-xl shadow-black/10 rounded-sm overflow-hidden z-50"
                    >
                      {/* Dropdown header */}
                      <div className="px-5 py-3 bg-[#1a1a24] border-b border-white/5">
                        <p className="text-[11px] uppercase tracking-[0.18em] text-white/50 font-semibold">
                          Industries We Serve
                        </p>
                      </div>

                      {/* Industry items */}
                      <div className="py-2">
                        {industryLinks.map((item) => (
                          <Link
                            key={item.path}
                            href={item.path}
                            onClick={() => setIsIndustriesOpen(false)}
                            className="flex items-center gap-4 px-5 py-3 hover:bg-gray-50 transition-colors group"
                          >
                            <div
                              className="w-8 h-8 rounded-sm flex items-center justify-center flex-shrink-0 transition-all duration-200 group-hover:scale-105"
                              style={{ background: `${item.color}18`, border: `1px solid ${item.color}30` }}
                            >
                              <FontAwesomeIcon
                                icon={item.icon}
                                className="w-3.5 h-3.5"
                                style={{ color: item.color }}
                              />
                            </div>
                            <div>
                              <p className="text-[13px] font-semibold text-charcoal group-hover:text-black transition-colors">
                                {item.name}
                              </p>
                            </div>
                            <ArrowUpRight
                              className="w-3.5 h-3.5 ml-auto text-gray-300 group-hover:text-gray-500 transition-colors"
                            />
                          </Link>
                        ))}
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
                <button
                  className="w-[42px] h-[42px] rounded-full bg-[#EEF0F4] flex items-center justify-center text-charcoal hover:bg-[#E2E6EC] transition-colors"
                  aria-label="Search"
                >
                  <Search className="w-4 h-4" />
                </button>
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
                        className="flex items-center gap-3 py-3 pl-4 border-b border-gray-50"
                      >
                        <div
                          className="w-7 h-7 rounded-sm flex items-center justify-center flex-shrink-0"
                          style={{ background: `${item.color}18` }}
                        >
                          <FontAwesomeIcon icon={item.icon} className="w-3 h-3" style={{ color: item.color }} />
                        </div>
                        <span className="text-lg font-medium text-charcoal">{item.name}</span>
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
    </header>
  );
};
