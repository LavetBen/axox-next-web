import {
  Monitor,
  Server,
  Smartphone,
  Banknote,
  Briefcase,
  Layers,
  Code2,
  Cpu,
  Database,
  Cloud,
  Lock,
  Zap,
  Layout,
  Smartphone as MobileIcon,
  ShieldCheck,
  BarChart4,
  RefreshCw,
  LineChart,
  Boxes,
  Users,
  Settings,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ExpertiseArea = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  heroGradient: string;
  icon: LucideIcon;
  features: {
    title: string;
    description: string;
    icon: LucideIcon;
  }[];
  stats: { value: string; label: string }[];
  benefits: string[];
};

export const expertise: ExpertiseArea[] = [
  {
    slug: 'frontend-development',
    name: 'Frontend Development',
    tagline: 'Crafting Beautiful, Responsive User Interfaces',
    description: 'We build high-performance, accessible, and stunning web applications using modern frontend frameworks like React, Next.js, and Vue. Our focus is on delivering seamless user experiences that engage and convert.',
    accentColor: '#3b82f6',
    heroGradient: 'from-[#0b1120] via-[#0f172a] to-[#1e293b]',
    icon: Monitor,
    stats: [
      { value: '100%', label: 'Responsive Design' },
      { value: 'Sub-second', label: 'Load Times' },
      { value: '99+', label: 'Lighthouse Scores' },
      { value: 'WCAG', label: 'Accessibility Ready' },
    ],
    features: [
      {
        title: 'Modern SPA & SSR',
        description: 'Single Page Applications and Server-Side Rendered apps for optimal performance and SEO.',
        icon: Layout,
      },
      {
        title: 'Interactive UI/UX',
        description: 'Smooth micro-animations and intuitive interfaces that delight users.',
        icon: Zap,
      },
      {
        title: 'Design System Integration',
        description: 'Pixel-perfect implementation of Figma designs using Tailwind CSS and component libraries.',
        icon: Layers,
      },
      {
        title: 'Cross-Browser Compatibility',
        description: 'Ensuring your application works perfectly across Chrome, Safari, Firefox, and Edge.',
        icon: Monitor,
      },
    ],
    benefits: [
      'Increased user engagement and retention',
      'Higher conversion rates through intuitive design',
      'Improved search engine rankings with fast load times',
      'Scalable component architecture',
    ],
  },
  {
    slug: 'backend-systems',
    name: 'Backend Systems',
    tagline: 'Robust, Scalable, and Secure Architecture',
    description: 'Our backend engineers design and build the unseen engines that power your applications. From RESTful APIs and GraphQL to microservices and cloud-native architectures, we ensure your data is secure and your systems scale effortlessly.',
    accentColor: '#10b981',
    heroGradient: 'from-[#022c22] via-[#064e3b] to-[#065f46]',
    icon: Server,
    stats: [
      { value: '99.99%', label: 'Uptime Reliability' },
      { value: 'Millions', label: 'Requests/sec Scalability' },
      { value: 'Zero', label: 'Data Loss Architecture' },
      { value: 'SOC2', label: 'Compliance Standards' },
    ],
    features: [
      {
        title: 'API Development',
        description: 'Secure and well-documented REST and GraphQL APIs for web and mobile clients.',
        icon: Code2,
      },
      {
        title: 'Database Architecture',
        description: 'Optimized SQL and NoSQL database design for complex data relationships and high throughput.',
        icon: Database,
      },
      {
        title: 'Cloud Infrastructure',
        description: 'Deployment on AWS, Azure, or Google Cloud with auto-scaling and load balancing.',
        icon: Cloud,
      },
      {
        title: 'Enterprise Security',
        description: 'Implementation of OAuth, JWT, role-based access control, and data encryption.',
        icon: Lock,
      },
    ],
    benefits: [
      'Ability to handle massive traffic spikes seamlessly',
      'Secure protection of sensitive user and business data',
      'Easy integration with third-party services and legacy systems',
      'Reduced server costs through optimized code',
    ],
  },
  {
    slug: 'mobile-native-ios-android',
    name: 'Mobile Native iOS & Android',
    tagline: 'Premium Apps for the Modern Mobile Era',
    description: 'We develop high-quality native and cross-platform mobile applications that leverage device hardware capabilities. Whether using Swift, Kotlin, or React Native, we deliver smooth, responsive, and app-store-ready products.',
    accentColor: '#a855f7',
    heroGradient: 'from-[#1e1b4b] via-[#312e81] to-[#3730a3]',
    icon: Smartphone,
    stats: [
      { value: '5-Star', label: 'Average App Rating' },
      { value: '60fps', label: 'Smooth Animations' },
      { value: '100%', label: 'Offline Capability' },
      { value: 'Native', label: 'Performance' },
    ],
    features: [
      {
        title: 'Native iOS (Swift)',
        description: 'Premium Apple ecosystem experiences optimized for iPhones and iPads.',
        icon: MobileIcon,
      },
      {
        title: 'Native Android (Kotlin)',
        description: 'Robust applications tailored for the vast Android ecosystem and device variations.',
        icon: Cpu,
      },
      {
        title: 'React Native & Flutter',
        description: 'Cost-effective cross-platform development without sacrificing performance.',
        icon: Layers,
      },
      {
        title: 'App Store Deployment',
        description: 'End-to-end management of the Apple App Store and Google Play submission process.',
        icon: ShieldCheck,
      },
    ],
    benefits: [
      'Direct access to device features (camera, GPS, biometrics)',
      'Enhanced brand presence on users personal devices',
      'Push notifications for immediate user re-engagement',
      'Smooth, lag-free user experiences',
    ],
  },
  {
    slug: 'loan-management-system',
    name: 'Loan Management System',
    tagline: 'End-to-End Lending Automation',
    description: 'Our custom Loan Management Systems (LMS) streamline the entire lending lifecycle. From origination and underwriting to servicing and collections, we build secure fintech platforms that reduce risk and improve operational efficiency.',
    accentColor: '#f59e0b',
    heroGradient: 'from-[#291c0a] via-[#452705] to-[#78350f]',
    icon: Banknote,
    stats: [
      { value: '3x', label: 'Faster Processing' },
      { value: '-40%', label: 'Default Rates' },
      { value: 'Automated', label: 'Credit Scoring' },
      { value: 'Real-time', label: 'Reporting' },
    ],
    features: [
      {
        title: 'Loan Origination (LOS)',
        description: 'Streamlined digital application processes with KYC and document verification.',
        icon: Layout,
      },
      {
        title: 'Automated Underwriting',
        description: 'Custom credit scoring algorithms and automated decision engines.',
        icon: Zap,
      },
      {
        title: 'Loan Servicing',
        description: 'Automated payment scheduling, interest calculation, and ledger management.',
        icon: RefreshCw,
      },
      {
        title: 'Collections & Recovery',
        description: 'Automated reminders, penalty calculations, and restructured payment plans.',
        icon: BarChart4,
      },
    ],
    benefits: [
      'Dramatically reduced time-to-decision for borrowers',
      'Lower operational costs through automated workflows',
      'Improved regulatory compliance and auditability',
      'Better portfolio health visibility through advanced analytics',
    ],
  },
  {
    slug: 'erp-solutions',
    name: 'ERP Solutions',
    tagline: 'Unified Operations for the Enterprise',
    description: 'We develop bespoke Enterprise Resource Planning (ERP) systems tailored to your unique business workflows. Connect your finance, HR, supply chain, and operations into a single source of truth that drives data-backed decision making.',
    accentColor: '#ef4444',
    heroGradient: 'from-[#3f0f0f] via-[#5f1313] to-[#7f1d1d]',
    icon: Briefcase,
    stats: [
      { value: '360°', label: 'Business Visibility' },
      { value: 'Silo-Free', label: 'Data Integration' },
      { value: '-25%', label: 'Operational Costs' },
      { value: 'Custom', label: 'Module Architecture' },
    ],
    features: [
      {
        title: 'Financial Management',
        description: 'General ledger, accounts payable/receivable, and automated reconciliation.',
        icon: LineChart,
      },
      {
        title: 'Supply Chain & Inventory',
        description: 'Real-time stock tracking, procurement automation, and supplier management.',
        icon: Boxes,
      },
      {
        title: 'Human Resources (HRIS)',
        description: 'Employee lifecycle management, payroll integration, and performance tracking.',
        icon: Users,
      },
      {
        title: 'Custom Workflows',
        description: 'Tailored approval matrices and operational processes specific to your industry.',
        icon: Settings,
      },
    ],
    benefits: [
      'Elimination of redundant data entry across departments',
      'Real-time reporting and business intelligence',
      'Standardized processes that scale with your growth',
      'Complete visibility into company-wide resource utilization',
    ],
  },
];
