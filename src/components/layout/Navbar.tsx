"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faCode, faChevronDown, faRocket, faServer, faLaptopCode, faCloud, faLightbulb, faLayerGroup, faMobileScreen, faNetworkWired, faBriefcase, faTags, faBookOpen, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  {
    name: 'Innovation Hub',
    path: '/',
    description: 'Explore our latest digital innovations and core philosophy.',
    icon: faLightbulb
  },
  {
    name: 'Capabilities',
    path: '/services',
    description: 'Discover our comprehensive suite of technical services.',
    icon: faLayerGroup,
    subItems: [
      { name: 'Mobile Applications', icon: faMobileScreen },
      { name: 'API Development', icon: faNetworkWired },
      { name: 'Web Development', icon: faCode },
      { name: 'Cloud Solutions', icon: faCloud },
    ]
  },
  {
    name: 'Showcase',
    path: '/portfolio',
    description: 'View our successful projects and client success stories.',
    icon: faBriefcase
  },
  {
    name: 'Pricing',
    path: '/pricing',
    description: 'Transparent pricing for our services.',
    icon: faTags
  },
  {
    name: 'Knowledge Base',
    path: '/knowledge-base',
    description: 'Guides and tutorials for your hosting.',
    icon: faBookOpen
  },
  {
    name: 'Connect',
    path: '/contact',
    description: 'Get in touch with us to start your next project.',
    icon: faEnvelope
  },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setHoveredLink(null);
  }, [pathname]);

  const isHomePage = pathname === '/';
  const navBg = isScrolled || !isHomePage || isHovered
    ? 'bg-background shadow-lg border-b border-border/50'
    : 'bg-transparent';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${navBg}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setHoveredLink(null);
      }}
    >
      <nav className="section-container relative z-50">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/logo.png"
              alt="Axox Logo"
              width={150}
              height={40}
              priority
              className="h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-1 bg-muted/50 rounded-full px-2 py-1.5 relative">
              {navLinks.map((link) => (
                <div
                  key={link.path}
                  onMouseEnter={() => setHoveredLink(link.name)}
                  className="relative"
                >
                  <Link
                    href={link.path}
                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 flex items-center gap-1 ${pathname === link.path
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'text-foreground hover:bg-background hover:shadow-sm'
                      }`}
                  >
                    {link.name}
                    {link.name === 'Capabilities' && (
                      <FontAwesomeIcon icon={faChevronDown} className={`w-3 h-3 transition-transform duration-300 ${hoveredLink === link.name ? 'rotate-180' : ''}`} />
                    )}
                  </Link>
                </div>
              ))}
            </div>
            <Link
              href="/quote"
              className="ml-4 btn-primary text-sm group overflow-hidden relative"
            >
              <span className="relative z-10">Get a Quote</span>
              <div className="absolute inset-0 bg-foreground transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-12 h-12 bg-muted/50 rounded-xl flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon icon={isMobileMenuOpen ? faXmark : faBars} className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {/* Desktop Mega Menu Preview */}
      <AnimatePresence>
        {hoveredLink && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ duration: 0.2 }}
            className="hidden lg:block absolute top-[80px] left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-xl overflow-hidden z-40"
            onMouseEnter={() => setHoveredLink(hoveredLink)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <div className="section-container py-8">
              {navLinks.map((link) => (
                link.name === hoveredLink && (
                  <div key={link.name} className="flex gap-12">
                    <div className="w-1/3">
                      <h3 className="text-2xl font-bold text-primary mb-2">{link.name}</h3>
                      <p className="text-muted-foreground">{link.description}</p>
                    </div>
                    <div className="flex-1">
                      {link.subItems ? (
                        <div className="grid grid-cols-2 gap-4">
                          {link.subItems.map((item) => (
                            <div key={item.name} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                                <FontAwesomeIcon icon={item.icon} />
                              </div>
                              <span className="font-medium">{item.name}</span>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                          <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-2xl">
                            <FontAwesomeIcon icon={link.icon} />
                          </div>
                          <div>
                            <p className="font-medium text-foreground">Explore {link.name}</p>
                            <span className="text-sm text-primary underline">Learn more &rarr;</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="lg:hidden fixed inset-0 top-20 bg-background z-40 overflow-hidden"
          >
            <div className="section-container h-full py-8 flex flex-col overflow-y-auto">
              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`text-xl py-4 px-4 block rounded-xl transition-all duration-300 font-medium ${pathname === link.path
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-muted'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-3">
                          <FontAwesomeIcon icon={link.icon} className="w-5 h-5 opacity-70" />
                          {link.name}
                        </span>
                        {link.name === 'Capabilities' && <FontAwesomeIcon icon={faChevronDown} className="w-4 h-4 opacity-50" />}
                      </div>
                    </Link>
                    {/* Mobile Submenu for Capabilities */}
                    {link.name === 'Capabilities' && (
                      <div className="pl-6 pr-4 pb-2">
                        <div className="border-l-2 border-muted pl-4">
                          {link.subItems?.map((sub) => (
                            <div key={sub.name} className="py-2 text-muted-foreground text-sm font-medium">
                              {sub.name}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/quote"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn-primary text-center w-full block text-lg py-4"
                >
                  Get a Quote
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
