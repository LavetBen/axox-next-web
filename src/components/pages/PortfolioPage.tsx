"use client";

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/home/CTASection';

interface Project {
  id: number;
  name: string;
  description: string;
  tags: string[];
  link?: string | null;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'NEXA Digital',
    description: 'A comprehensive school management platform covering student records, attendance tracking, grading systems, and full administration — built for schools of all sizes.',
    tags: ['Education'],
    link: 'https://nexadigital.co.zw',
  },
  {
    id: 2,
    name: 'Unify',
    description: 'A unified digital workspace that brings together business tools, team collaboration, and analytics into one cohesive platform to streamline day-to-day operations.',
    tags: ['Enterprise', 'SaaS'],
    link: 'https://unify.co.zw',
  },
  {
    id: 3,
    name: 'Tuck',
    description: 'A no-code e-commerce shop builder that lets anyone launch a professional online store in minutes — no technical knowledge required.',
    tags: ['No-Code', 'E-Commerce'],
    link: 'https://tuck.co.zw',
  },
  {
    id: 4,
    name: 'Budget App',
    description: 'A personal finance mobile app to track expenses, set budgets, and manage savings goals with AI-powered insights for smarter financial decisions.',
    tags: ['Fintech', 'Mobile'],
    link: null,
  },
  {
    id: 5,
    name: 'LoanPro System',
    description: 'An end-to-end digital loan lifecycle management system with borrower portals, automated underwriting workflows, and real-time reporting dashboards.',
    tags: ['Fintech', 'Enterprise'],
    link: null,
  },
  {
    id: 6,
    name: 'PropList Portal',
    description: 'A modern property listing and tenant management portal featuring advanced search, filtering, and integrated payment processing for landlords and agents.',
    tags: ['Real Estate', 'Web'],
    link: null,
  },
  {
    id: 7,
    name: 'ERP Suite',
    description: 'A custom ERP system covering inventory, procurement, HR, and finance — purpose-built to replace fragmented legacy tools for a manufacturing client.',
    tags: ['Enterprise', 'ERP'],
    link: null,
  },
  {
    id: 8,
    name: 'RetailApp Mobile',
    description: 'A cross-platform iOS and Android customer app with a live product catalogue, loyalty rewards programme, and push notification campaigns.',
    tags: ['Mobile', 'Retail'],
    link: null,
  },
  {
    id: 9,
    name: 'SaaS Platform',
    description: 'A full-stack SaaS platform with multi-tenant architecture, subscription billing, role-based access control, and a rich analytics dashboard.',
    tags: ['Web', 'SaaS'],
    link: null,
  },
];

export function PortfolioPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
            >
              <h1 className="text-[38px] md:text-[52px] font-light leading-[1.08] tracking-tight text-charcoal">
                Our Clients Build Modern<br />
                Software with <span className="font-semibold">axox</span>
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <p className="text-[15px] text-gray-medium leading-relaxed max-w-md">
                We have worked with{' '}
                <strong className="text-charcoal font-semibold">over 50 leading companies</strong>{' '}
                globally building solutions, staffing software development teams, managing
                large teams, and most importantly getting results and achieving our
                clients&apos; objectives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Cards Grid ── */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <AnimatePresence mode="wait">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border-l border-t border-dashed border-gray-300"
            >
              {projects.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-gray-100 py-20 bg-off-white">
        <div className="section-container text-center">
          <p className="text-[11px] font-semibold tracking-[0.18em] uppercase text-electric-blue mb-4">
            Start a project
          </p>
          <h2 className="text-[34px] md:text-[48px] font-light text-charcoal leading-tight mb-8">
            Let&apos;s build something<br />you&apos;re proud of.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/quote" className="btn-solid-dark gap-2 inline-flex items-center">
              Get a free quote
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to us
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

/* ────────────────────────────────────────────
   Card — name · description · tags · visit link
──────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="group border-r border-b border-dashed border-gray-300 bg-white hover:bg-[#fafafa] transition-colors duration-300 p-8 flex flex-col"
    >
      {/* Name */}
      <p className="text-[18px] font-bold text-charcoal tracking-tight mb-3 group-hover:text-electric-blue transition-colors duration-300">
        {project.name}
      </p>

      {/* Description */}
      <p className="text-[13px] text-gray-medium leading-relaxed flex-1 mb-5">
        {project.description}
      </p>

      {/* Footer: tags left · visit link right */}
      <div className="flex items-center justify-between gap-3 pt-4 border-t border-dashed border-gray-200">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-semibold tracking-wide uppercase px-2 py-0.5 bg-gray-100 text-gray-400 rounded"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link && (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-1 text-[12px] font-semibold text-electric-blue hover:text-charcoal transition-colors duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            Visit website
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
