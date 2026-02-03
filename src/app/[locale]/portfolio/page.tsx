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
      title: 'Cioccolatitaliani',
      category: 'websites',
      image: '/work/cioccolatitaliani.avif',
      description: 'Premium Italian chocolate brand website',
      size: 'large',
    },
    {
      id: 2,
      title: 'Tiamo',
      category: 'websites',
      image: '/work/tiamo.avif',
      description: 'Elegant lifestyle brand web presence',
      size: 'small',
    },
    {
      id: 3,
      title: 'Premium Park',
      category: 'websites',
      image: '/work/premium-park.avif',
      description: 'Luxury real estate and parking solutions',
      size: 'small',
    },
    {
      id: 4,
      title: 'MonFrere',
      category: 'ecommerce',
      image: '/work/monfrere.avif',
      description: 'Fashion e-commerce store with modern design',
      size: 'medium',
    },
    {
      id: 5,
      title: 'Marah',
      category: 'websites',
      image: '/work/marah.avif',
      description: 'Clean and professional business website',
      size: 'medium',
    },
    {
      id: 6,
      title: 'Best Mobile',
      category: 'ecommerce',
      image: '/work/best-mobile.avif',
      description: 'Mobile devices e-commerce platform',
      size: 'large',
    },
    {
      id: 7,
      title: 'Burdemplastik',
      category: 'websites',
      image: '/work/burdemplastik.avif',
      description: 'Industrial manufacturing company website',
      size: 'small',
    },
    {
      id: 8,
      title: 'Lesnamax',
      category: 'websites',
      image: '/work/lesnamax.avif',
      description: 'Corporate business web presence',
      size: 'small',
    },
    {
      id: 9,
      title: 'Pevalit',
      category: 'websites',
      image: '/work/pevalit.avif',
      description: 'Professional services company website',
      size: 'medium',
    },
    {
      id: 10,
      title: 'Tesorouno',
      category: 'ecommerce',
      image: '/work/tesorouno.avif',
      description: 'Luxury goods online store',
      size: 'small',
    },
    {
      id: 11,
      title: 'Tonus',
      category: 'websites',
      image: '/work/tonus.avif',
      description: 'Health and wellness brand website',
      size: 'small',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  // Get grid class based on size
  const getGridClass = (size: string, index: number) => {
    if (size === 'large') return 'md:col-span-2 md:row-span-2';
    if (size === 'medium') return 'md:col-span-1';
    return '';
  };

  const getHeight = (size: string) => {
    if (size === 'large') return '600px';
    if (size === 'medium') return '450px';
    return '400px';
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
            className="grid grid-cols-1 md:grid-cols-3"
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
                      className="object-cover object-top transition-all duration-700"
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
