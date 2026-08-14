import {
  faCreditCard,
  faBolt,
  faUtensils,
  faHospital,
  faBuilding,
  faCheckCircle,
  faServer,
  faMobile,
  faChartLine,
  faShieldHalved,
  faFileInvoiceDollar,
  faPlug,
  faGaugeHigh,
  faReceipt,
  faSun,
  faIndustry,
  faGears,
  faGlobe,
  faMoneyBillWave,
  faFolderOpen,
  faUsers,
  faScaleBalanced,
  faChartBar,
  faHouseMedical,
  faClipboardList,
  faVideoCamera,
  faPills,
  faMicroscope,
  faMapMarkedAlt,
  faHandshake,
  faKey,
  faGem,
  faHardHat,
  faBook,
  faShoppingCart,
  faTruck,
  faSeedling,
  faBowlFood,
  faBarcode,
  faWarehouse,
  faStore,
  faLeaf,
} from '@fortawesome/free-solid-svg-icons';
import type { IconDefinition } from '@fortawesome/fontawesome-svg-core';

export type Industry = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  accentColor: string;
  heroGradient: string;
  icon: IconDefinition;
  solutions: {
    title: string;
    description: string;
    icon: IconDefinition;
  }[];
  stats: { value: string; label: string }[];
  challenges: string[];
};

export const industries: Industry[] = [
  {
    slug: 'fintech',
    name: 'Fintech',
    tagline: 'Powering the Future of Finance',
    description:
      'We build secure, scalable financial technology solutions that modernize banking, streamline payments, and deliver exceptional digital experiences for financial institutions and startups alike.',
    accentColor: '#0000ff',
    heroGradient: 'from-[#080814] via-[#0a0a20] to-[#0d0d2b]',
    icon: faCreditCard,
    stats: [
      { value: '99.99%', label: 'Uptime SLA' },
      { value: '< 50ms', label: 'Transaction Latency' },
      { value: 'PCI DSS', label: 'Compliance Ready' },
      { value: '256-bit', label: 'Encryption' },
    ],
    solutions: [
      {
        title: 'Digital Banking Platforms',
        description:
          'Full-stack digital banking solutions with account management, transfers, and real-time notifications.',
        icon: faServer,
      },
      {
        title: 'Payment Gateways',
        description:
          'Robust payment processing systems supporting mobile money, cards, and cross-border transactions.',
        icon: faMoneyBillWave,
      },
      {
        title: 'Loan Management Systems',
        description:
          'End-to-end loan origination, processing, and collections platforms built for microfinance and banks.',
        icon: faClipboardList,
      },
      {
        title: 'Fraud Detection & Security',
        description:
          'AI-powered fraud detection systems with real-time monitoring and automated risk scoring.',
        icon: faShieldHalved,
      },
      {
        title: 'Financial Reporting & Analytics',
        description:
          'Comprehensive dashboards and reporting tools for regulatory compliance and business intelligence.',
        icon: faChartBar,
      },
      {
        title: 'Wallet & USSD Solutions',
        description:
          'Mobile wallet and USSD-based financial services built for unbanked and underbanked communities.',
        icon: faMobile,
      },
    ],
    challenges: [
      'Legacy system modernization',
      'Real-time transaction processing at scale',
      'Cross-border payment integration',
    ],
  },
  {
    slug: 'energy',
    name: 'Energy',
    tagline: 'Digitizing the Energy Sector',
    description:
      'We deliver intelligent software solutions for energy companies — from smart meter management and grid monitoring to renewable energy analytics and customer billing systems.',
    accentColor: '#f59e0b',
    heroGradient: 'from-[#100a00] via-[#1a1000] to-[#1f1500]',
    icon: faBolt,
    stats: [
      { value: '30%', label: 'Avg. Cost Reduction' },
      { value: 'IoT', label: 'Smart Grid Ready' },
      { value: 'Real-Time', label: 'Grid Monitoring' },
      { value: 'Renewable', label: 'Energy Analytics' },
    ],
    solutions: [
      {
        title: 'Smart Meter Management',
        description:
          'End-to-end AMI solutions for meter data collection, billing accuracy, and remote disconnection.',
        icon: faPlug,
      },
      {
        title: 'Grid Monitoring & Control',
        description:
          'SCADA-integrated dashboards for real-time monitoring of energy distribution infrastructure.',
        icon: faGaugeHigh,
      },
      {
        title: 'Customer Billing Platforms',
        description:
          'Automated utility billing systems with self-service portals and mobile payment integration.',
        icon: faReceipt,
      },
      {
        title: 'Renewable Energy Analytics',
        description:
          'Solar and wind generation forecasting tools with energy storage optimization modules.',
        icon: faSun,
      },
      {
        title: 'Asset Management Systems',
        description:
          'Track, maintain, and optimize energy infrastructure assets with predictive maintenance alerts.',
        icon: faIndustry,
      },
      {
        title: 'ERP for Energy Companies',
        description:
          'Fully integrated ERP solutions tailored to procurement, HR, finance, and operations in the energy sector.',
        icon: faGears,
      },
    ],
    challenges: [
      'Aging infrastructure and legacy SCADA systems',
      'Demand forecasting and load balancing',
      'Compliance with energy regulatory bodies',
      'Integration with renewable energy sources',
    ],
  },
  {
    slug: 'food',
    name: 'Food',
    tagline: 'From Farm to Fork, Digitally',
    description:
      'We build technology solutions for food producers, distributors, restaurants, and agri-businesses — enabling traceability, inventory management, POS systems, and supply chain optimization across the entire food value chain.',
    accentColor: '#22c55e',
    heroGradient: 'from-[#000f04] via-[#001508] to-[#00200a]',
    icon: faUtensils,
    stats: [
      { value: 'Farm-to-Fork', label: 'Full Traceability' },
      { value: 'HACCP', label: 'Compliance Ready' },
      { value: 'Real-Time', label: 'Inventory Tracking' },
      { value: 'Multi-Outlet', label: 'POS Support' },
    ],
    solutions: [
      {
        title: 'Restaurant POS Systems',
        description:
          'Modern point-of-sale platforms for restaurants, cafes, and food courts with table management and kitchen display.',
        icon: faStore,
      },
      {
        title: 'Food Traceability Platforms',
        description:
          'End-to-end supply chain tracking from raw ingredients to finished products with full audit trails.',
        icon: faBarcode,
      },
      {
        title: 'Inventory & Warehouse Management',
        description:
          'Real-time stock tracking, expiry management, and automated reorder systems for food businesses.',
        icon: faWarehouse,
      },
      {
        title: 'Agri-Business Management',
        description:
          'Farm management systems covering crop planning, yield tracking, and farmer payment processing.',
        icon: faSeedling,
      },
      {
        title: 'Food Delivery Platforms',
        description:
          'Online ordering and delivery management systems with driver tracking and customer loyalty features.',
        icon: faTruck,
      },
      {
        title: 'Nutritional & Compliance Reporting',
        description:
          'Automated nutritional labeling and regulatory compliance reporting for food manufacturers.',
        icon: faLeaf,
      },
    ],
    challenges: [
      'Food safety compliance and traceability',
      'Perishable inventory and wastage management',
      'Multi-location restaurant and outlet management',
      'Supply chain visibility from farm to shelf',
    ],
  },
  {
    slug: 'healthcare',
    name: 'Healthcare',
    tagline: 'Technology That Saves Lives',
    description:
      'We build HIPAA-aligned healthcare software that connects patients, clinicians, and administrators — from hospital management systems and telemedicine to pharmacy platforms and lab information systems.',
    accentColor: '#ef4444',
    heroGradient: 'from-[#0f0000] via-[#150505] to-[#1a0a0a]',
    icon: faHospital,
    stats: [
      { value: 'HIPAA', label: 'Compliant Architecture' },
      { value: 'HL7 / FHIR', label: 'Interoperability' },
      { value: '24/7', label: 'System Availability' },
      { value: 'EMR/EHR', label: 'Integration Ready' },
    ],
    solutions: [
      {
        title: 'Hospital Management Systems',
        description:
          'Comprehensive HMS covering patient registration, bed management, billing, and clinical workflows.',
        icon: faHouseMedical,
      },
      {
        title: 'Electronic Medical Records',
        description:
          'Secure, structured EMR/EHR platforms with HL7/FHIR support for seamless data exchange.',
        icon: faClipboardList,
      },
      {
        title: 'Telemedicine Platforms',
        description:
          'Virtual consultation systems with video calls, prescription management, and appointment scheduling.',
        icon: faVideoCamera,
      },
      {
        title: 'Pharmacy Management',
        description:
          'Drug inventory, dispensing, and POS systems for clinics and pharmacy chains.',
        icon: faPills,
      },
      {
        title: 'Laboratory Information Systems',
        description:
          'End-to-end LIS for test ordering, result processing, and report delivery to clinicians.',
        icon: faMicroscope,
      },
      {
        title: 'Healthcare Analytics',
        description:
          'Clinical and operational dashboards to track patient outcomes, revenue cycles, and resource utilization.',
        icon: faChartLine,
      },
    ],
    challenges: [
      'Data privacy and HIPAA compliance',
      'Integration across clinical and administrative systems',
      'Connectivity in low-resource settings',
      'Patient data interoperability',
    ],
  },
  {
    slug: 'real-estate',
    name: 'Real Estate',
    tagline: 'The Future of Property, Built Digitally',
    description:
      'We craft powerful property technology (PropTech) solutions for real estate agencies, property managers, and developers — from listing portals and CRM systems to property valuation tools and tenant management platforms.',
    accentColor: '#8b5cf6',
    heroGradient: 'from-[#0a0014] via-[#0d0019] to-[#110020]',
    icon: faBuilding,
    stats: [
      { value: 'PropTech', label: 'Specialized Solutions' },
      { value: 'MLS', label: 'Listing Integration' },
      { value: 'AI-Powered', label: 'Property Valuation' },
      { value: 'Multi-Portal', label: 'Listings Sync' },
    ],
    solutions: [
      {
        title: 'Property Listing Portals',
        description:
          'Feature-rich real estate marketplaces with advanced search, map views, and agent dashboards.',
        icon: faMapMarkedAlt,
      },
      {
        title: 'CRM for Real Estate Agents',
        description:
          'Purpose-built CRMs for managing leads, property showings, client communications, and deals.',
        icon: faHandshake,
      },
      {
        title: 'Tenant & Lease Management',
        description:
          'Digital platforms for lease management, rent collection, maintenance requests, and tenant communication.',
        icon: faKey,
      },
      {
        title: 'Property Valuation Tools',
        description:
          'AI-assisted property appraisal tools using comparable sales data and market trend analysis.',
        icon: faGem,
      },
      {
        title: 'Developer Sales Platforms',
        description:
          'Project launch and sales management tools for property developers with buyer portals.',
        icon: faHardHat,
      },
      {
        title: 'Accounting & Financial Management',
        description:
          'Property-specific accounting systems handling rental income, maintenance costs, and financial reporting.',
        icon: faBook,
      },
    ],
    challenges: [
      'Fragmented property listing ecosystems',
      'Manual lease and tenant management',
      'Lack of reliable property valuation data',
      'Slow digital adoption in the sector',
    ],
  },
];
