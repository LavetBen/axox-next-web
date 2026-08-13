"use client";

import { motion } from 'framer-motion';
import { 
  Package, UserCircle, CreditCard, Calendar, Calculator,
  RefreshCw, AlertCircle, TrendingDown, PauseCircle, Shield,
  DollarSign, FileMinus, FileText, FileSpreadsheet, Users,
  Send, ShieldCheck, BarChart3, Code2, Lock
} from 'lucide-react';
import ctaBg from '@/assets/cta.jpg';
import { CTASection } from '@/components/home/CTASection';

const categories = [
  {
    title: "Core Lending & Accounts",
    description: "The foundation of your lending operations, built for scale, flexibility, and rapid product rollout.",
    modules: [
      { name: 'Loan Products', desc: 'Create loan types, interest rates, fees, tenure, repayment rules, etc.', icon: Package },
      { name: 'Loan Accounts', desc: 'Create and manage individual loans for borrowers', icon: UserCircle },
      { name: 'Repayment Schedules', desc: 'Automatically generate EMI, weekly, monthly, interest-only, lump-sum schedules', icon: Calendar },
      { name: 'Interest Calculation', desc: 'Handles different interest structures and accruals', icon: Calculator },
    ]
  },
  {
    title: "Operations & Processing",
    description: "Streamline day-to-day operations and payment processing workflows with intelligent automation.",
    modules: [
      { name: 'Loan Disbursement', desc: 'Record/process money given to borrowers', icon: CreditCard },
      { name: 'Repayments & Collections', desc: 'Record payments and allocate them against principal, interest, penalties, etc.', icon: RefreshCw },
      { name: 'Moratoriums', desc: 'Temporarily suspend or modify repayment obligations', icon: PauseCircle },
      { name: 'Fees & Charges', desc: 'Processing fees, settlement charges and other loan charges', icon: DollarSign },
      { name: 'Write-offs & Settlements', desc: 'Handle problematic loans, settlements and write-offs', icon: FileMinus },
    ]
  },
  {
    title: "Risk, Compliance & Security",
    description: "Robust tools to monitor portfolio health, mitigate risks, and enforce strict regulatory compliance.",
    modules: [
      { name: 'Delinquency / DPD', desc: 'Track Days Past Due and overdue loans', icon: AlertCircle },
      { name: 'NPA Management', desc: 'Classify loans as Non-Performing Assets according to configured rules', icon: TrendingDown },
      { name: 'Collateral & Security', desc: 'Track collateral, valuation, release and shortfall', icon: Shield },
      { name: 'Risk & Compliance', desc: 'DPD/NPA monitoring and regulatory reporting', icon: ShieldCheck },
      { name: 'Roles & Workflows', desc: 'Role-based permissions and configurable approval workflows', icon: Lock },
    ]
  },
  {
    title: "Finance & Integration",
    description: "Seamlessly integrate with your existing financial ecosystem and gain real-time portfolio insights.",
    modules: [
      { name: 'Accounting', desc: 'Automated accounting entries, ledgers and reconciliation', icon: FileText },
      { name: 'Billing & Tax', desc: 'Invoicing, charges and taxation', icon: FileSpreadsheet },
      { name: 'Co-Lending', desc: 'Manage multiple lenders sharing a loan', icon: Users },
      { name: 'Loan Transfers', desc: 'Transfer loans/portfolios between parties or branches', icon: Send },
      { name: 'Reports', desc: 'Portfolio, repayment, accounting and financial reports', icon: BarChart3 },
      { name: 'APIs', desc: 'REST APIs for connecting mobile apps, websites and external systems', icon: Code2 },
    ]
  }
];

export function LoanManagementPage() {
  return (
    <div className="bg-white font-cerebri font-light text-charcoal selection:bg-gray-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-black">
        {/* Background Image */}
        <div 
            className="absolute inset-0 opacity-30 pointer-events-none bg-cover bg-center"
            style={{ backgroundImage: `url(${ctaBg.src})` }}
        />
        
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        
        <div className="section-container relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="text-left"
            >
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-sm bg-white/10 border border-white/20 text-white/90 text-xs tracking-wider uppercase mb-6 backdrop-blur-sm font-normal">
                  Platform Features
                </div>
                <h1 className="text-4xl md:text-6xl font-light tracking-tight mb-8 text-white">
                    Next-Gen Loan <br className="hidden md:block"/>Management System
                </h1>
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl leading-relaxed font-light">
                    An end-to-end digital lending platform designed to scale your financial institution. From origination to servicing, explore our comprehensive modules below.
                </p>
            </motion.div>
        </div>
      </section>

      {/* Modules List with Sticky Categories */}
      <section className="py-24 md:py-32 bg-gray-50/30 border-t border-gray-100 relative">
        <div className="section-container">
          <div className="flex flex-col gap-24 md:gap-32">
            {categories.map((category, catIndex) => (
              <div key={category.title} className="grid grid-cols-1 lg:grid-cols-[350px_1fr] gap-12 lg:gap-24 relative">
                
                {/* Sticky Sidebar */}
                <div className="lg:sticky lg:top-32 h-fit z-10">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="text-gray-300 text-6xl font-light mb-4">0{catIndex + 1}</div>
                    <h2 className="text-3xl md:text-4xl font-light text-charcoal mb-4 tracking-tight leading-tight">
                      {category.title}
                    </h2>
                    <div className="w-12 h-px bg-gray-300 mb-6" />
                    <p className="text-gray-500 font-light leading-relaxed text-lg">
                      {category.description}
                    </p>
                  </motion.div>
                </div>
                
                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 relative z-10">
                  {category.modules.map((mod, index) => (
                    <motion.div
                      key={mod.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="group p-6 rounded-sm bg-white hover:bg-white transition-all duration-300 border border-gray-100 shadow-[0_2px_10px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 relative overflow-hidden"
                    >
                      {/* Subtle gradient hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                      
                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-sm bg-gray-50 flex items-center justify-center text-charcoal mb-6 border border-gray-100 group-hover:bg-charcoal group-hover:text-white group-hover:border-charcoal transition-colors duration-300">
                          <mod.icon className="w-5 h-5" strokeWidth={1.25} />
                        </div>
                        <h3 className="text-lg font-normal mb-3 text-charcoal">{mod.name}</h3>
                        <p className="text-[15px] font-normal text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors duration-300">{mod.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
