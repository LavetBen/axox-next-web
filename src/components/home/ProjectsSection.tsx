"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { SectionHeading } from '../ui/SectionHeading';
import nexaPreview from '@/assets/nexa-preview.png';
import unifyPreview from '@/assets/unify-preview.png';
import budgetAppPreview from '@/assets/budget-app-preview.png';

const projects = [
  {
    id: 1,
    title: 'NEXA',
    category: 'School Management System',
    description: 'A comprehensive school management platform for student records, attendance, grading, and administration.',
    tech: ['React', 'Node.js', 'PostgreSQL'],
    link: 'https://nexadigital.co.zw',
    image: nexaPreview,
  },
  {
    id: 2,
    title: 'Unify',
    category: 'Web Platform',
    description: 'A unified digital platform designed to streamline business operations and enhance productivity.',
    tech: ['React', 'TypeScript', 'Cloud Services'],
    link: 'https://unify.co.zw',
    image: unifyPreview,
  },
  {
    id: 3,
    title: 'Budget App',
    category: 'Mobile Application',
    description: 'A personal finance mobile app to track expenses, set budgets, and manage savings goals.',
    tech: ['React Native', 'Firebase', 'AI Integration'],
    link: null,
    image: budgetAppPreview,
  },
];

export const ProjectsSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <SectionHeading
          tag="Our Work"
          title="Featured Projects"
          subtitle="Take a look at some of the innovative solutions we've delivered for our clients."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.filter(project => [1, 2, 3].includes(project.id)).map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link || '#'}
              target={project.link ? '_blank' : undefined}
              rel={project.link ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group bg-secondary rounded-2xl overflow-hidden card-hover block ${!project.link ? 'pointer-events-none' : ''}`}
            >
              {/* Project Image */}
              <div className="aspect-video bg-secondary relative overflow-hidden">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-foreground">
                    <span className="text-background text-4xl font-bold opacity-20">
                      {project.title.charAt(0)}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/80 transition-all duration-300 flex items-center justify-center">
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="w-8 h-8 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </div>
              </div>

              <div className="p-6">
                <span className="text-sm text-primary font-medium">{project.category}</span>
                <h3 className="heading-sm mt-2 mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-background rounded-full text-sm text-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link href="/portfolio" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
