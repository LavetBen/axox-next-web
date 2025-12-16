"use client";

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  tag?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionHeading = ({
  title,
  subtitle,
  tag,
  centered = true,
  light = false
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      {tag && (
        <span className={`inline-block px-4 py-1.5 mb-4 rounded-full font-medium text-sm ${light
          ? 'bg-background/10 text-background backdrop-blur-sm'
          : 'bg-primary/10 text-primary'
          }`}>
          {tag}
        </span>
      )}
      <h2 className={`heading-lg mb-4 ${light ? 'text-background' : 'text-foreground'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-body max-w-2xl ${centered ? 'mx-auto' : ''} ${light ? 'text-background/70' : ''}`}>
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};
