"use client";

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

// Data arrays
const servicesEngineering = [
  'Web Development',
  'Mobile App Development',
  'Custom Software Development',
  'Cloud Architecture'
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
  'Frontend Development',
  'Backend Systems',
  'Mobile Native iOS & Android',
  'Cloud Computing',
  'Database Management'
];

const industriesLinks = [
  'Fintech',
  'Energy',
  'Government',
  'Healthcare',
  'Real Estate'
];

const companyLinks = [
  'About us',
  'Services',
  'Our clients',
  'Portfolio',
  'Contact us'
];

const MobileFooterSection = ({ title, children }: { title: string, children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-5 text-left text-xl font-light text-charcoal"
      >
        {title}
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`w-4 h-4 transition-transform duration-300 text-gray-400 ${isOpen ? 'rotate-180' : ''}`}
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
    <footer className="bg-white text-charcoal border-t border-gray-100 font-sans">
      <div className="section-container pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-x-8 gap-y-12">
          
          {/* Column 1: Brand / Info */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-10">
              <span className="text-3xl font-bold text-charcoal">
                axox
              </span>
            </Link>
            
            <div className="mb-8">
              <h4 className="font-bold text-[13px] mb-3 text-charcoal">Axox' office near you:</h4>
              <p className="text-[13px] text-gray-500 hover:text-charcoal transition-colors leading-loose cursor-pointer underline decoration-gray-300 underline-offset-4">
                Harare, Zimbabwe
              </p>
            </div>
          </div>

          {/* Column 2 & 3: Services (Spans 2 columns) */}
          <div className="hidden lg:grid lg:col-span-2 grid-cols-2 gap-8">
            <div className="col-span-2">
              <h3 className="text-[28px] font-light mb-8 text-charcoal">Services</h3>
            </div>
            
            {/* Engineering & Advisory */}
            <div>
              <div className="mb-10">
                <h4 className="font-bold text-[13px] mb-4">Engineering</h4>
                <ul className="space-y-3">
                  {servicesEngineering.map(link => (
                    <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[13px] mb-4">Advisory</h4>
                <ul className="space-y-3">
                  {servicesAdvisory.map(link => (
                    <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Data & AI & Optimisation */}
            <div>
              <div className="mb-10">
                <h4 className="font-bold text-[13px] mb-4">Data & AI</h4>
                <ul className="space-y-3">
                  {servicesData.map(link => (
                    <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-[13px] mb-4">Optimisation</h4>
                <ul className="space-y-3">
                  {servicesOptimisation.map(link => (
                    <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 4: Expertise */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-[28px] font-light mb-8 text-charcoal">Expertise</h3>
            <ul className="space-y-3 mt-14">
              {expertiseLinks.map(link => (
                <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 5: Industries */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-[28px] font-light mb-8 text-charcoal">Industries</h3>
            <ul className="space-y-3 mt-14">
              {industriesLinks.map(link => (
                <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Column 6: Company */}
          <div className="hidden lg:block lg:col-span-1">
            <h3 className="text-[28px] font-light mb-8 text-charcoal">Company</h3>
            <ul className="space-y-3 mt-14">
              {companyLinks.map(link => (
                <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Mobile Accordions (Hidden on Desktop) */}
          <div className="lg:hidden col-span-1 space-y-2 mt-8 border-t border-gray-100 pt-4">
            <MobileFooterSection title="Services">
               <div className="pl-4 space-y-8">
                 <div>
                    <h4 className="font-bold text-sm mb-4">Engineering</h4>
                    <ul className="space-y-3">
                      {servicesEngineering.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-bold text-sm mb-4">Advisory</h4>
                    <ul className="space-y-3">
                      {servicesAdvisory.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-bold text-sm mb-4">Data & AI</h4>
                    <ul className="space-y-3">
                      {servicesData.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
                    </ul>
                 </div>
                 <div>
                    <h4 className="font-bold text-sm mb-4">Optimisation</h4>
                    <ul className="space-y-3">
                      {servicesOptimisation.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
                    </ul>
                 </div>
               </div>
            </MobileFooterSection>

            <MobileFooterSection title="Expertise">
               <ul className="space-y-3 pl-4">
                  {expertiseLinks.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
               </ul>
            </MobileFooterSection>

            <MobileFooterSection title="Industries">
               <ul className="space-y-3 pl-4">
                  {industriesLinks.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
               </ul>
            </MobileFooterSection>

            <MobileFooterSection title="Company">
               <ul className="space-y-3 pl-4">
                  {companyLinks.map(link => <li key={link}><Link href="#" className="text-[13px] text-gray-500 hover:text-charcoal transition-colors">{link}</Link></li>)}
               </ul>
            </MobileFooterSection>
            
          </div>
          
        </div>
      </div>
    </footer>
  );
};
