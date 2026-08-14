"use client";

import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, Globe, Smartphone, Database, BarChart } from 'lucide-react';
import webdevImage from '@/assets/webdev.jpg';
import erpImage from '@/assets/erp.jpg';
import erpbsImage from '@/assets/erpbs.jpg';
import softwareImage from '@/assets/software.jpg';
import realestateImage from '@/assets/realestate.jpg';
import mobappImage from '@/assets/mobapp.jpg';
import businessImage from '@/assets/business.jpg';

const industries = [
  {
    id: 1,
    title: 'Web Development',
    points: [
      'Crafting high-performance, scalable web apps',
      'Intuitive interfaces and robust architectures'
    ],
    image: webdevImage,
    icon: Globe,
  },
  {
    id: 2,
    title: 'Mobile App Development',
    points: [
      'Native and cross-platform mobile solutions',
      'Engaging user experiences for iOS and Android'
    ],
    image: mobappImage,
    icon: Smartphone,
  },
  {
    id: 3,
    title: 'ERP Solutions',
    points: [
      'Streamline business operations and workflows',
      'Centralize data for enhanced productivity'
    ],
    image: erpbsImage,
    icon: Database,
  },
  {
    id: 4,
    title: 'Business Intelligence',
    points: [
      'Turn raw data into actionable insights',
      'Advanced analytics and reporting dashboards'
    ],
    image: businessImage,
    icon: BarChart,
  }
];

export const ServicesSection = () => {
  return (
    <section className="bg-white py-16 md:py-24 border-t border-gray-100">
      <div className="section-container">
        
        {/* Header Row */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
          <h2 className="heading-display-2 text-charcoal max-w-2xl font-normal tracking-tight">
            Game-changing solutions<br/>tailored for every sector
          </h2>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full border border-gray-light flex items-center justify-center text-gray-medium hover:border-electric-blue hover:text-electric-blue transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button className="w-12 h-12 rounded-full border border-electric-blue flex items-center justify-center text-electric-blue hover:bg-electric-blue hover:text-white transition-colors">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Grid Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-l border-gray-100">
          {industries.map((industry) => (
            <div 
              key={industry.id} 
              className="relative overflow-hidden rounded-sm flex flex-col p-6 lg:p-8 border-r border-b lg:border-b-0 border-gray-100 group transition-colors"
            >
              
              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-sm bg-gray-100 group-hover:bg-white/20 flex items-center justify-center mb-6 text-electric-blue group-hover:text-white transition-colors duration-500">
                <industry.icon className="w-7 h-7" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-2xl text-charcoal group-hover:text-white font-normal mb-8 transition-colors duration-500">
                {industry.title}
              </h3>

              {/* Points */}
              <div className="relative z-10 flex flex-col gap-6 flex-grow mb-10">
                {industry.points.map((point, idx) => (
                  <p key={idx} className="text-[15px] leading-relaxed text-gray-medium group-hover:text-white/90 transition-colors duration-500">
                    {point}
                  </p>
                ))}
              </div>

              {/* Spacer for absolute image */}
              <div className="h-[100px] w-full mt-auto relative z-10" />

              {/* Expanding Image */}
              <div className="absolute bottom-0 left-0 right-0 h-[100px] transition-[height] duration-500 group-hover:h-full z-0">
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                <Image 
                  src={industry.image} 
                  alt={industry.title}
                  fill
                  className="object-cover transform transition-transform duration-700 group-hover:scale-110"
                />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
