'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: t('categories.all') },
    { id: 'websites', label: t('categories.websites') },
    { id: 'ecommerce', label: t('categories.ecommerce') },
    { id: 'webapps', label: t('categories.webapps') },
  ];

  const projects = [
    {
      id: 1,
      title: 'Fashion E-Commerce Store',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      description: 'Modern online fashion store with seamless checkout experience',
      size: 'large',
    },
    {
      id: 2,
      title: 'Tech Startup Website',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Clean and modern landing page for a SaaS company',
      size: 'small',
    },
    {
      id: 3,
      title: 'Restaurant Booking System',
      category: 'webapps',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      description: 'Full-featured reservation management system',
      size: 'small',
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      description: 'Property listing and search platform with virtual tours',
      size: 'medium',
    },
    {
      id: 5,
      title: 'Electronics Online Shop',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
      description: 'Full-featured electronics e-commerce with comparison tools',
      size: 'medium',
    },
    {
      id: 6,
      title: 'Project Management Tool',
      category: 'webapps',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
      description: 'Team collaboration and task management application',
      size: 'large',
    },
    {
      id: 7,
      title: 'Healthcare Portal',
      category: 'webapps',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      description: 'Patient management and appointment scheduling system',
      size: 'small',
    },
    {
      id: 8,
      title: 'Travel Agency Website',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
      description: 'Beautiful travel booking website with package deals',
      size: 'small',
    },
    {
      id: 9,
      title: 'Fitness Equipment Store',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      description: 'E-commerce store for gym and fitness equipment',
      size: 'medium',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Get grid class based on size
  const getGridClass = (size: string, index: number) => {
    if (size === 'large') return 'md:col-span-2 md:row-span-2';
    if (size === 'medium') return 'md:col-span-2';
    return '';
  };

  const getHeight = (size: string) => {
    if (size === 'large') return '500px';
    if (size === 'medium') return '300px';
    return '280px';
  };

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: '#FFFFFF',
          paddingTop: '140px',
          paddingBottom: '60px',
        }}
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
            style={{ maxWidth: '800px', margin: '0 auto' }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#673DE6',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '16px',
                display: 'block',
              }}
            >
              Portfolio
            </span>
            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 400,
                color: '#0A0A0A',
                lineHeight: 1.15,
                marginBottom: '20px',
              }}
            >
              {t('title')}
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#525252',
                lineHeight: 1.7,
              }}
            >
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center"
            style={{ gap: '8px', marginTop: '48px' }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '100px',
                  fontWeight: 500,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeCategory === category.id ? '#0A0A0A' : 'transparent',
                  color: activeCategory === category.id ? '#FFFFFF' : '#525252',
                }}
              >
                {category.label}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Portfolio */}
      <section style={{ background: '#FFFFFF', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-4"
            style={{ gap: '16px' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className={getGridClass(project.size, index)}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Link
                    href="/contact"
                    className="relative block w-full h-full overflow-hidden group"
                    style={{
                      borderRadius: '20px',
                      minHeight: getHeight(project.size),
                      background: '#0A0A0A',
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-all duration-700"
                      style={{
                        opacity: hoveredProject === project.id ? 0.6 : 0.85,
                        transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                      }}
                    />

                    {/* Gradient Overlay */}
                    <div
                      className="absolute inset-0"
                      style={{
                        background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)',
                      }}
                    />

                    {/* Content */}
                    <div
                      className="absolute inset-0 flex flex-col justify-between"
                      style={{ padding: '24px', zIndex: 2 }}
                    >
                      {/* Top Row */}
                      <div className="flex justify-between items-start">
                        <span
                          style={{
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                            borderRadius: '100px',
                            color: '#FFFFFF',
                            fontSize: '12px',
                            fontWeight: 500,
                            letterSpacing: '0.02em',
                          }}
                        >
                          {categories.find((c) => c.id === project.category)?.label}
                        </span>
                        <span
                          className="flex items-center justify-center transition-all duration-300"
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '50%',
                            background: hoveredProject === project.id ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
                            backdropFilter: 'blur(10px)',
                          }}
                        >
                          <ArrowUpRight
                            size={20}
                            style={{
                              color: hoveredProject === project.id ? '#0A0A0A' : '#FFFFFF',
                              transition: 'all 0.3s',
                              transform: hoveredProject === project.id ? 'translate(2px, -2px)' : 'none',
                            }}
                          />
                        </span>
                      </div>

                      {/* Bottom Content */}
                      <div>
                        <h3
                          className="transition-transform duration-300"
                          style={{
                            fontSize: project.size === 'large' ? '28px' : '20px',
                            fontWeight: 500,
                            color: '#FFFFFF',
                            marginBottom: '8px',
                            transform: hoveredProject === project.id ? 'translateY(-4px)' : 'none',
                          }}
                        >
                          {project.title}
                        </h3>
                        <p
                          className="transition-all duration-300"
                          style={{
                            fontSize: '14px',
                            color: 'rgba(255,255,255,0.7)',
                            maxWidth: project.size === 'large' ? '400px' : '300px',
                            opacity: hoveredProject === project.id ? 1 : 0.8,
                            transform: hoveredProject === project.id ? 'translateY(-4px)' : 'none',
                          }}
                        >
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FAFAFA', padding: '100px 0' }}>
        <div className="container">
          <div
            className="relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, #673DE6 0%, #4F28B3 100%)',
              borderRadius: '24px',
              padding: 'clamp(48px, 8vw, 80px)',
            }}
          >
            <div
              className="absolute"
              style={{
                width: '400px',
                height: '400px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.08)',
                top: '-200px',
                right: '-100px',
              }}
            />
            <div
              className="absolute"
              style={{
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
                bottom: '-50px',
                left: '10%',
              }}
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative z-10 text-center"
              style={{ maxWidth: '600px', margin: '0 auto' }}
            >
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                Ready to Join Our Portfolio?
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Let&apos;s create something amazing together. Contact us to discuss your project.
              </p>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 transition-all duration-300"
                style={{
                  background: '#FFC107',
                  color: '#0A0A0A',
                  fontWeight: 600,
                  fontSize: '15px',
                  padding: '16px 32px',
                  borderRadius: '100px',
                }}
              >
                Start Your Project
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
