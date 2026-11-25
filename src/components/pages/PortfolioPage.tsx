"use client";

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { CTASection } from '@/components/home/CTASection';

interface Project {
  id: number;
  name: string;
  category: 'live' | 'edtech' | 'fintech' | 'enterprise' | 'mobile';
  description: string;
  tags: string[];
  link?: string | null;
  badge: string;
  isLive: boolean;
  meta: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: 'nots.co.zw',
    category: 'edtech',
    description: 'An intuitive university study companion offering past exam materials, structured revision resources, lecture notes, and essential academic tools for university students.',
    tags: ['Education', 'EdTech', 'Exam Prep'],
    link: 'https://nots.co.zw',
    badge: 'Live Platform',
    isLive: true,
    meta: 'Production Deployment',
  },
  {
    id: 2,
    name: 'joyful.co.zw',
    category: 'live',
    description: 'A seamless event management and RSVP platform designed for effortless guest registrations, digital invitations, real-time attendee tracking, and event coordination.',
    tags: ['Events', 'Web App', 'RSVP System'],
    link: 'https://joyful.co.zw',
    badge: 'Live Platform',
    isLive: true,
    meta: 'Production Deployment',
  },
  {
    id: 3,
    name: 'NEXA Digital',
    category: 'edtech',
    description: 'A comprehensive school management platform covering student records, attendance tracking, grading systems, and full administration — built for schools of all sizes.',
    tags: ['Education', 'SaaS', 'School Admin'],
    link: 'https://nexadigital.co.zw',
    badge: 'Live Product',
    isLive: true,
    meta: 'Production Deployment',
  },
  {
    id: 4,
    name: 'Unify',
    category: 'enterprise',
    description: 'A unified digital workspace that brings together business tools, team collaboration, and analytics into one cohesive platform to streamline day-to-day operations.',
    tags: ['Enterprise', 'Workspace', 'SaaS'],
    link: 'https://unify.co.zw',
    badge: 'Live Platform',
    isLive: true,
    meta: 'Production Deployment',
  },
  {
    id: 5,
    name: 'Tuck',
    category: 'live',
    description: 'A no-code e-commerce shop builder that lets anyone launch a professional online store in minutes — no technical knowledge required.',
    tags: ['No-Code', 'E-Commerce', 'Storefronts'],
    link: 'https://tuck.co.zw',
    badge: 'Live Product',
    isLive: true,
    meta: 'Production Deployment',
  },
  {
    id: 6,
    name: 'LoanPro System',
    category: 'fintech',
    description: 'An end-to-end digital loan lifecycle management system with borrower portals, automated underwriting workflows, and real-time reporting dashboards.',
    tags: ['Fintech', 'Enterprise', 'Lending'],
    link: null,
    badge: 'Enterprise Architecture',
    isLive: false,
    meta: 'Internal System',
  },
  {
    id: 7,
    name: 'Budget App',
    category: 'fintech',
    description: 'A personal finance mobile app to track expenses, set budgets, and manage savings goals with AI-powered insights for smarter financial decisions.',
    tags: ['Fintech', 'Mobile', 'iOS & Android'],
    link: null,
    badge: 'Mobile Product',
    isLive: false,
    meta: 'Client Delivery',
  },
  {
    id: 8,
    name: 'PropList Portal',
    category: 'enterprise',
    description: 'A modern property listing and tenant management portal featuring advanced search, filtering, and integrated payment processing for landlords and agents.',
    tags: ['Real Estate', 'Web Portal'],
    link: null,
    badge: 'Web Portal',
    isLive: false,
    meta: 'Client Delivery',
  },
  {
    id: 9,
    name: 'ERP Suite',
    category: 'enterprise',
    description: 'A custom ERP system covering inventory, procurement, HR, and finance — purpose-built to replace fragmented legacy tools for a manufacturing client.',
    tags: ['Enterprise', 'ERP', 'Automation'],
    link: null,
    badge: 'Enterprise Architecture',
    isLive: false,
    meta: 'Internal System',
  },
  {
    id: 10,
    name: 'RetailApp Mobile',
    category: 'mobile',
    description: 'A cross-platform iOS and Android customer app with a live product catalogue, loyalty rewards programme, and push notification campaigns.',
    tags: ['Mobile', 'Retail', 'E-Commerce'],
    link: null,
    badge: 'Mobile Product',
    isLive: false,
    meta: 'Client Delivery',
  },
  {
    id: 11,
    name: 'SaaS Platform',
    category: 'enterprise',
    description: 'A full-stack SaaS platform with multi-tenant architecture, subscription billing, role-based access control, and a rich analytics dashboard.',
    tags: ['Web', 'SaaS', 'Cloud'],
    link: null,
    badge: 'Cloud Platform',
    isLive: false,
    meta: 'Client Delivery',
  },
];

const categories = [
  { id: 'all', label: 'All Projects' },
  { id: 'live', label: 'Live Products' },
  { id: 'edtech', label: 'Education & EdTech' },
  { id: 'fintech', label: 'Fintech & Lending' },
  { id: 'enterprise', label: 'Enterprise Systems' },
];

export function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'live') return project.isLive;
    if (activeFilter === 'edtech') return project.category === 'edtech';
    if (activeFilter === 'fintech') return project.category === 'fintech';
    if (activeFilter === 'enterprise') return project.category === 'enterprise';
    return true;
  });

  return (
    <div className="bg-white font-cerebri selection:bg-electric-blue/20">
      {/* ── Hero ── */}
      <section className="pt-32 pb-16 bg-[#101828] text-white border-b border-white/10">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-end">
            <div>
              <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-electric-blue block mb-4">
                Selected Work
              </span>
              <h1 className="text-[36px] sm:text-[44px] md:text-[52px] font-light leading-[1.1] tracking-tight text-white">
                Modern software engineered for <span className="font-semibold text-white">real business impact</span>.
              </h1>
            </div>
            <div>
              <p className="text-[16px] text-white/70 leading-relaxed max-w-lg font-light">
                Explore our portfolio of live client systems, educational platforms, automated fintech architectures, and enterprise SaaS solutions designed and delivered by Axox.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Minimalist Filter Bar ── */}
      <section className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5">
        <div className="section-container flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-sm text-xs font-mono transition-colors whitespace-nowrap ${
                  activeFilter === cat.id
                    ? 'bg-charcoal text-white'
                    : 'text-gray-500 hover:text-charcoal hover:bg-gray-100'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          <span className="text-xs text-gray-400 font-mono hidden sm:inline">
            {filteredProjects.length} {filteredProjects.length === 1 ? 'project' : 'projects'}
          </span>
        </div>
      </section>

      {/* ── Smart Minimalist Grid ── */}
      <section className="py-16 bg-white min-h-[500px]">
        <div className="section-container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-gray-200">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="border-t border-gray-100 py-20 bg-off-white">
        <div className="section-container text-center">
          <span className="text-xs font-mono font-medium tracking-[0.2em] uppercase text-electric-blue block mb-4">
            Start a project
          </span>
          <h2 className="text-[34px] md:text-[48px] font-light text-charcoal leading-tight mb-8">
            Let&apos;s engineer your next<br /><span className="font-medium">digital product</span>.
          </h2>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/quote" className="btn-solid-dark gap-2 inline-flex items-center">
              <span>Get a free quote</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link href="/contact" className="btn-outline">
              Talk to our team
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

/* ────────────────────────────────────────────
   Minimalist Smart Card
──────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: Project; index: number }) {
  const indexStr = String(index + 1).padStart(2, '0');

  return (
    <div className="border-r border-b border-gray-200 p-8 sm:p-9 flex flex-col justify-between bg-white hover:bg-[#fafafa] transition-colors duration-200 group">
      <div>
        {/* Top Header: Index & Status */}
        <div className="flex items-center justify-between gap-2 pb-6 mb-6 border-b border-gray-100">
          <span className="text-xs font-mono text-gray-400 group-hover:text-charcoal transition-colors">
            /{indexStr}
          </span>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono tracking-wider uppercase text-gray-500">
              {project.badge}
            </span>
            {project.isLive && (
              <span className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
            )}
          </div>
        </div>

        {/* Project Name */}
        <div className="mb-4">
          <h3 className="text-[22px] font-medium text-charcoal tracking-tight group-hover:text-electric-blue transition-colors flex items-center justify-between gap-2">
            <span>{project.name}</span>
            {project.link && (
              <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-electric-blue transition-colors shrink-0" />
            )}
          </h3>
          <span className="text-[11px] font-mono text-gray-400 uppercase tracking-widest block mt-1">
            {project.meta}
          </span>
        </div>

        {/* Description */}
        <p className="text-[14px] text-gray-600 font-light leading-relaxed mb-8">
          {project.description}
        </p>
      </div>

      {/* Footer: Tags and Action Link */}
      <div className="pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 bg-gray-100 text-gray-600 rounded-sm"
            >
              {t}
            </span>
          ))}
        </div>

        {project.link ? (
          <Link
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[12px] font-mono font-medium text-electric-blue hover:text-charcoal transition-colors shrink-0"
          >
            Visit website &rarr;
          </Link>
        ) : (
          <span className="text-[11px] font-mono text-gray-400 shrink-0">
            Proprietary
          </span>
        )}
      </div>
    </div>
  );
}
