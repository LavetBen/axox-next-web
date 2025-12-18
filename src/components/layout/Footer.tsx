"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faInstagram,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faLocationDot, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Portfolio', path: '/portfolio' },
  { name: 'Contact', path: '/contact' },
  { name: 'Get a Quote', path: '/quote' },
];

const services = [
  'Web Development',
  'Mobile Applications',
  'Desktop Systems',
  'Cloud Solutions',
  'API Integrations',
  'Custom Software',
];

const socialLinks = [
  { icon: faFacebookF, href: '#', label: 'Facebook' },
  { icon: faTwitter, href: '#', label: 'Twitter' },
  { icon: faLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: faInstagram, href: '#', label: 'Instagram' },
  { icon: faGithub, href: '#', label: 'GitHub' },
];

const MobileFooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-background/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left text-lg font-bold"
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-4 space-y-3">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2" />

      <div className="section-container pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-background to-background/70">
                ax<span className="text-primary">o</span>x
              </span>
            </Link>
            <p className="text-background/70 mb-8 leading-relaxed">
              Building powerful software solutions for businesses worldwide. We transform ideas into digital reality.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-background/5 border border-background/10 flex items-center justify-center transition-all duration-300 hover:bg-primary hover:border-primary hover:text-white group"
                >
                  <FontAwesomeIcon icon={social.icon} className="w-4 h-4 text-background/70 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid md:grid-cols-3 lg:col-span-3 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      href={link.path}
                      className="text-background/70 transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">Our Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <Link
                      href="/services"
                      className="text-background/70 transition-colors duration-200 hover:text-primary hover:translate-x-1 inline-block"
                    >
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-primary">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-primary mt-1" />
                  <span className="text-background/70">
                    Mount Pleasant, Harare
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary" />
                  <a href="tel:+263780755864" className="text-background/70 hover:text-primary transition-colors">
                    +263 78 075 5864
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary" />
                  <a href="mailto:info@axox.com" className="text-background/70 hover:text-primary transition-colors">
                    info@axox.com
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile Accordions (Hidden on Desktop) */}
          <div className="md:hidden lg:hidden col-span-1 space-y-2">
            <MobileFooterSection title="Quick Links">
              <ul className="space-y-3 pl-4 border-l-2 border-primary/20">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link href={link.path} className="text-background/70 hover:text-primary block">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileFooterSection>

            <MobileFooterSection title="Our Services">
              <ul className="space-y-3 pl-4 border-l-2 border-primary/20">
                {services.map((service) => (
                  <li key={service}>
                    <Link href="/services" className="text-background/70 hover:text-primary block">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </MobileFooterSection>

            <MobileFooterSection title="Contact Us">
              <ul className="space-y-4 pl-4 border-l-2 border-primary/20">
                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="w-5 h-5 text-primary mt-1" />
                  <span className="text-background/70">Mount Pleasant, Harare</span>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="w-5 h-5 text-primary" />
                  <a href="tel:+263780755864" className="text-background/70 hover:text-primary">
                    +263 78 075 5864
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="w-5 h-5 text-primary" />
                  <a href="mailto:info@axox.com" className="text-background/70 hover:text-primary">
                    info@axox.com
                  </a>
                </li>
              </ul>
            </MobileFooterSection>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-background/60 text-sm">
              © {new Date().getFullYear()} Axox. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-background/60 hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-background/60 hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
