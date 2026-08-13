"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Package, CreditCard, ShieldCheck, BarChart3, ChevronRight } from 'lucide-react';
import loanImage from '@/assets/loan.jpg';

const tabs = [
  {
    id: 'core',
    label: 'Core Lending & Accounts',
    icon: Package,
    features: [
      'Create loan types, interest rates, fees, tenure, and repayment rules.',
      'Create and manage individual loans for borrowers seamlessly.',
      'Automatically generate EMI, monthly, and interest-only schedules.',
      'Handles complex interest structures and accruals.'
    ]
  },
  {
    id: 'operations',
    label: 'Operations & Processing',
    icon: CreditCard,
    features: [
      'Record and process money given to borrowers instantly.',
      'Allocate payments against principal, interest, and penalties automatically.',
      'Temporarily suspend or modify repayment obligations with moratoriums.',
      'Handle problematic loans, settlements and write-offs.'
    ]
  },
  {
    id: 'risk',
    label: 'Risk, Compliance & Security',
    icon: ShieldCheck,
    features: [
      'Track Days Past Due (DPD) and manage overdue loans effectively.',
      'Classify loans as Non-Performing Assets (NPA) based on rules.',
      'Track collateral, valuation, release and potential shortfall.',
      'Enforce role-based permissions and configurable approval workflows.'
    ]
  },
  {
    id: 'finance',
    label: 'Finance & Integration',
    icon: BarChart3,
    features: [
      'Automated accounting entries, ledgers and reconciliation.',
      'Automate invoicing, settlement charges, and taxation.',
      'Manage multiple lenders sharing a loan with Co-Lending modules.',
      'REST APIs for connecting mobile apps, websites and external systems.'
    ]
  }
];

export const LoanManagementSection = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeData = tabs.find(t => t.id === activeTab) || tabs[0];

  return (
    <section className="bg-[#1a1a24] py-20 md:py-32 font-cerebri selection:bg-electric-blue/30">
      <div className="section-container">
        
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-light text-white tracking-tight">
            Loan Management System
          </h2>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 xl:gap-16 relative">
          
          {/* Left Navigation */}
          <div className="w-full lg:w-[280px] flex-shrink-0 flex flex-row lg:flex-col gap-3 lg:gap-2 overflow-x-auto pb-4 lg:pb-0 snap-x [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center flex-shrink-0 snap-start text-left py-2.5 px-4 lg:py-4 lg:px-2 rounded-full lg:rounded-none group focus:outline-none transition-colors duration-300 ${
                    isActive ? 'text-white bg-white/10 lg:bg-transparent' : 'text-white/60 hover:text-white/80 bg-white/5 lg:bg-transparent'
                  }`}
                >
                  <div className="w-6 flex-shrink-0 overflow-hidden relative h-5 hidden lg:flex items-center">
                    <AnimatePresence>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0"
                        >
                          <ChevronRight className="w-4 h-4 text-white" strokeWidth={2} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <span className={`text-[15px] lg:text-lg transition-all duration-300 ${isActive ? 'font-medium lg:translate-x-1' : 'font-light'}`}>
                    {tab.label}
                  </span>
                </button>
              );
            })}

            <div className="mt-12 pl-8 hidden lg:block">
              <Link href="/loan-management" className="inline-flex items-center gap-2 text-electric-blue font-light hover:opacity-80 transition-opacity border-b border-electric-blue/30 hover:border-electric-blue pb-1 text-sm tracking-wide">
                View all modules
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Right Card */}
          <div className="flex-grow bg-[#22222f] border border-white/10 rounded-2xl overflow-hidden flex flex-col xl:flex-row min-h-[500px]">
            
            {/* Card Content Area */}
            <div className="p-8 md:p-12 xl:w-[60%] flex flex-col relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="flex flex-col h-full"
                >
                  {/* Card Header */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-14 h-14 rounded-xl border border-white/20 flex items-center justify-center text-white/90 bg-white/5">
                      <activeData.icon className="w-6 h-6" strokeWidth={1.25} />
                    </div>
                    <h3 className="text-2xl md:text-3xl font-light text-white tracking-tight">
                      {activeData.label}
                    </h3>
                  </div>

                  {/* Bullet Points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mt-4">
                    {activeData.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mt-2 mr-4 flex-shrink-0" />
                        <p className="text-[15px] text-white/70 leading-relaxed font-light">
                          {feature}
                        </p>
                      </div>
                    ))}
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

            {/* Card Image Area */}
            <div className="xl:w-[40%] h-[300px] xl:h-auto relative overflow-hidden bg-black/20">
              <div className="absolute inset-0 bg-gradient-to-r from-[#22222f] via-transparent to-transparent z-10 hidden xl:block" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#22222f] via-transparent to-transparent z-10 xl:hidden block" />
              
              <Image 
                src={loanImage}
                alt="Loan Management System"
                fill
                className="object-cover opacity-90 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
            </div>
          </div>
          
          {/* Mobile Link */}
          <div className="mt-8 block lg:hidden">
            <Link href="/loan-management" className="inline-flex items-center gap-2 text-electric-blue font-light hover:opacity-80 transition-opacity border-b border-electric-blue/30 hover:border-electric-blue pb-1 text-sm tracking-wide">
              View all modules
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};
