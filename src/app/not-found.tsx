"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, ArrowLeft, Home, Layers, BookOpen, Phone } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  {
    label: "Services",
    description: "Explore what we build",
    href: "/services",
    icon: Layers,
  },
  {
    label: "Portfolio",
    description: "See our work in action",
    href: "/portfolio",
    icon: BookOpen,
  },
  {
    label: "Contact",
    description: "Talk to our team",
    href: "/contact",
    icon: Phone,
  },
];

export default function NotFound() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-10 py-24">
        <div className="section-container">
          <div className="max-w-2xl mx-auto">

            {/* Animated 404 number */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="mb-8"
            >
              {/* Glitch-style 404 */}
              <div className="relative inline-block select-none">
                {/* Shadow layer */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 text-[120px] sm:text-[180px] font-bold leading-none tracking-tighter text-[#0000ff] opacity-10 blur-[2px] translate-x-1 translate-y-1"
                >
                  404
                </span>
                {/* Main number */}
                <span className="relative text-[120px] sm:text-[180px] font-bold leading-none tracking-tighter text-charcoal">
                  404
                </span>
              </div>
            </motion.div>

            {/* Copy */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
              className="mb-10"
            >
              <h1 className="heading-display-2 text-charcoal mb-4">
                This page doesn&apos;t exist.
              </h1>
              <p className="text-body-large text-gray-medium max-w-md">
                The URL{" "}
                <code className="text-[13px] bg-off-white border border-gray-200 text-electric-blue px-2 py-0.5 rounded font-mono">
                  {pathname}
                </code>{" "}
                couldn&apos;t be found. It may have been moved, deleted, or never existed.
              </p>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 20 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.25 }}
              className="flex flex-wrap items-center gap-3 mb-16"
            >
              <Link href="/" className="btn-solid-dark gap-2">
                <Home className="w-4 h-4" />
                Go Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-outline gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Go Back
              </button>
            </motion.div>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: mounted ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="border-t border-gray-100 mb-10"
            />

            {/* Quick links */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 16 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.45 }}
            >
              <p className="text-[12px] font-semibold tracking-[0.12em] uppercase text-gray-400 mb-5">
                You might be looking for
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {quickLinks.map((link, i) => {
                  const Icon = link.icon;
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 12 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        className="group flex items-start gap-3 p-4 rounded-xl border border-gray-100 hover:border-charcoal hover:shadow-raised transition-all duration-300"
                      >
                        <div className="flex-shrink-0 mt-0.5 w-8 h-8 rounded-lg bg-off-white flex items-center justify-center group-hover:bg-charcoal transition-colors duration-300">
                          <Icon className="w-3.5 h-3.5 text-charcoal group-hover:text-white transition-colors duration-300" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[14px] font-semibold text-charcoal group-hover:text-electric-blue transition-colors leading-snug">
                            {link.label}
                          </p>
                          <p className="text-[12px] text-gray-medium mt-0.5 leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                        <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-electric-blue transition-colors flex-shrink-0 mt-1" />
                      </Link>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* Subtle bottom bar */}
      <div className="border-t border-gray-100 py-5 px-4 sm:px-6 lg:px-10">
        <div className="section-container flex items-center justify-between">
          <Link href="/" className="text-charcoal text-[22px] font-bold tracking-tight lowercase">
            axox<span className="text-[8px] align-super ml-0.5">®</span>
          </Link>
          <p className="text-[12px] text-gray-medium">
            Error 404 &mdash; Page not found
          </p>
        </div>
      </div>
    </div>
  );
}
