"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Data arrays
const servicesEngineering = [
  { name: 'Web Development', path: '/services' },
  { name: 'Mobile Applications', path: '/services' },
  { name: 'API Development', path: '/services' },
  { name: 'Custom Software', path: '/services' }
];

const servicesAdvisory = [
  'Digital Transformation',
  'IT Strategy',
  'Technical Feasibility Study',
  'UX/UI Consulting'
];

const servicesData = [
  'Business Intelligence',
  'Data Analytics',
  'Data Engineering',
  'Predictive Modeling'
];

const servicesOptimisation = [
  'ERP Solutions',
  'Workflow Automation',
  'Software Audit',
  'Quality Assurance'
];

const expertiseLinks = [
  { name: 'Frontend Development', path: '/expertise/frontend-development' },
  { name: 'Backend Systems', path: '/expertise/backend-systems' },
  { name: 'Mobile Native iOS & Android', path: '/expertise/mobile-native-ios-android' },
  { name: 'Loan Management System', path: '/expertise/loan-management-system' },
  { name: 'ERP Solutions', path: '/expertise/erp-solutions' },
];

const industriesLinks = [
  { name: 'Fintech', path: '/industries/fintech' },
  { name: 'Energy', path: '/industries/energy' },
  { name: 'Food', path: '/industries/food' },
  { name: 'Healthcare', path: '/industries/healthcare' },
  { name: 'Real Estate', path: '/industries/real-estate' },
];

const companyLinks = [
  'Services',
  'Our clients',
  'Portfolio',
  'Contact us'
];

const MobileFooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left text-xl font-light text-white"
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-4 h-4 transition-transform duration-300 text-white/30 ${isOpen ? 'rotate-180' : ''}`}
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
            <div className="pb-6 space-y-3">
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
    <footer className="bg-[#101828] text-white/80 font-sans">
      <div className="section-container pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-12">
          
          {/* Column 1: Brand / Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-10">
              <span className="text-3xl font-bold text-white">
                axox
              </span>
            </Link>
            
            <div className="mb-8">
              <p className="text-[13px] text-white mb-2">
                Harare, Zimbabwe
              </p>
              <a href="tel:+263780755864" className="text-[13px] text-white font-bold hover:text-white/50 transition-colors">
                +263 78 075 5864
              </a>
            </div>
          </div>

          {/* Column 2 & 3: Services (Spans 2 columns) */}
          <div className="hidden lg:grid lg:col-span-2 grid-cols-2 gap-8">
            <div className="col-span-2">
              <h3 className="text-[28px] font-light mb-8 text-white">Services</h3>
            </div>
            
            {/* Engineering & Advisory */}
            <div>
              <div className="mb-10">
                <h4 className="text-[13px] mb-4 text-white uppercase tracking-widest">Engineering</h4>
                <ul className="space-y-3">
                  {servicesEngineering.map(service => (
                    <li key={service.name}><Link href={service.path} className="text-[13px] text-white hover:text-white/50 transition-colors">{service.name}</Link></li>
                  ))}
                </ul>
              </div>

            </div>
            
            {/* Data & AI & Optimisation */}
            <div>
              <div className="mb-10">
                <h4 className="text-[13px] mb-2 text-white uppercase tracking-widest">Tuck No-Code Builder</h4>
                <p className="text-[12px] text-white mb-4 leading-relaxed">
                  Launch a professional e-commerce store in minutes without writing a single line of code.
                </p>
                <div className="flex flex-col space-y-2">
                  <a href="https://tuck.co.zw/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-electric-blue font-semibold hover:text-electric-blue/70 transition-colors flex items-center gap-2">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" /></a>
                </div>
              </div>

            </div>
          </div>

          {/* Column 4: Expertise */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-[28px] font-light mb-8 text-white">Expertise</h3>
            <ul className="space-y-3 mt-14">
              {expertiseLinks.map(link => (
                <li key={link.name}><Link href={link.path} className="text-[13px] text-white hover:text-white/50 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 5: Industries */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-[28px] font-light mb-8 text-white">Industries</h3>
            <ul className="space-y-3 mt-14">
              {industriesLinks.map(link => (
                <li key={link.name}><Link href={link.path} className="text-[13px] text-white hover:text-white/50 transition-colors">{link.name}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 6: Company */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-[28px] font-light mb-8 text-white">Company</h3>
            <ul className="space-y-3 mt-14">
              {companyLinks.map(link => (
                <li key={link}><Link href="#" className="text-[13px] text-white hover:text-white/50 transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordions (Hidden on Desktop) */}
          <div className="lg:hidden col-span-1 space-y-2 mt-8 border-t border-white/10 pt-4">
            <MobileFooterSection title="Services">
               <div className="pl-4 space-y-8">
                 <div>
                     <h4 className="text-sm mb-4 text-white uppercase tracking-widest">Engineering</h4>
                     <ul className="space-y-3">
                       {servicesEngineering.map(service => <li key={service.name}><Link href={service.path} className="text-[13px] text-white hover:text-white/50 transition-colors">{service.name}</Link></li>)}
                    </ul>
                 </div>

                 <div>
                     <h4 className="text-sm mb-2 text-white uppercase tracking-widest">Tuck No-Code Builder</h4>
                     <p className="text-[12px] text-white mb-3 leading-relaxed">
                       Launch a professional e-commerce store in minutes without writing a single line of code.
                     </p>
                     <div className="text-[13px] text-white/50 space-y-3">
                       <div className="flex flex-col space-y-2">
                         <a href="https://tuck.co.zw/" target="_blank" rel="noopener noreferrer" className="text-[13px] text-electric-blue font-semibold hover:text-electric-blue/70 transition-colors flex items-center gap-2">Visit Website <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="w-3 h-3" /></a>
                      </div>
                    </div>
                 </div>

               </div>
            </MobileFooterSection>

            <MobileFooterSection title="Expertise">
               <ul className="space-y-3 pl-4">
                   {expertiseLinks.map(link => <li key={link.name}><Link href={link.path} className="text-[13px] text-white hover:text-white/50 transition-colors">{link.name}</Link></li>)}
               </ul>
            </MobileFooterSection>

            <MobileFooterSection title="Industries">
               <ul className="space-y-3 pl-4">
                   {industriesLinks.map(link => <li key={link.name}><Link href={link.path} className="text-[13px] text-white hover:text-white/50 transition-colors">{link.name}</Link></li>)}
               </ul>
            </MobileFooterSection>

            <MobileFooterSection title="Company">
               <ul className="space-y-3 pl-4">
                   {companyLinks.map(link => <li key={link}><Link href="#" className="text-[13px] text-white hover:text-white/50 transition-colors">{link}</Link></li>)}
               </ul>
            </MobileFooterSection>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};
