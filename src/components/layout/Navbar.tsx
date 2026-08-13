"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Search, ArrowUpRight, Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'ABOUT', path: '/about' },
  { name: 'AI DEVELOPMENT', path: '/ai-development' },
  { name: 'SERVICES', path: '/services' },
  { name: 'TECHNOLOGIES', path: '/technologies' },
  { name: 'INDUSTRIES', path: '/industries' },
  { name: 'PRICING', path: '/pricing' },
  { name: 'PORTFOLIO', path: '/portfolio' },
  { name: 'CONTACT', path: '/contact' },
  { name: 'QUOTE', path: '/quote' },
  { name: 'COMPANY', path: '/company' },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => setIsMobileMenuOpen(false), [pathname]);
  const primaryLinks = navLinks.slice(0, 5);
  const moreLinks = navLinks.slice(5);

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
              {moreLinks.length > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setIsMoreOpen(!isMoreOpen)}
                    className="flex items-center gap-1.5 text-charcoal hover:text-black text-[13px] font-semibold tracking-wide uppercase transition-colors"
                  >
                    More
                    <ChevronDown className={`w-4 h-4 transition-transform ${isMoreOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isMoreOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg z-20">
                      {moreLinks.map((link) => (
                        <Link
                          key={link.path}
                          href={link.path}
                          className="block px-4 py-2 text-sm text-charcoal hover:bg-gray-100"
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
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
            <div className="section-container py-8 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className="text-2xl font-medium text-charcoal"
                >
                  {link.name}
                </Link>
              ))}
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
