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
      title: 'Lesnamax',
      category: 'websites',
      image: '/work/lesnamax.avif',
      height: 580,
    },
    {
      id: 2,
      title: 'Tiamo',
      category: 'websites',
      image: '/work/tiamo.avif',
      height: 320,
    },
    {
      id: 3,
      title: 'Premium Park',
      category: 'websites',
      image: '/work/premium-park.avif',
      height: 520,
    },
    {
      id: 4,
      title: 'MonFrere',
      category: 'ecommerce',
      image: '/work/monfrere.avif',
      height: 340,
    },
    {
      id: 5,
      title: 'Cioccolatitaliani',
      category: 'websites',
      image: '/work/cioccolatitaliani.avif',
      height: 600,
    },
    {
      id: 6,
      title: 'Marah',
      category: 'websites',
      image: '/work/marah.avif',
      height: 360,
    },
    {
      id: 7,
      title: 'Best Mobile',
      category: 'ecommerce',
      image: '/work/best-mobile.avif',
      height: 550,
    },
    {
      id: 8,
      title: 'Tonus',
      category: 'websites',
      image: '/work/tonus.avif',
      height: 320,
    },
    {
      id: 9,
      title: 'Burdemplastik',
      category: 'websites',
      image: '/work/burdemplastik.avif',
      height: 480,
    },
    {
      id: 10,
      title: 'Pevalit',
      category: 'websites',
      image: '/work/pevalit.avif',
      height: 300,
    },
    {
      id: 11,
      title: 'Tesorouno',
      category: 'ecommerce',
      image: '/work/tesorouno.avif',
      height: 540,
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

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

      {/* Pinterest-style Masonry Layout */}
      <section style={{ background: '#FFFFFF', paddingBottom: '100px' }}>
        <div className="container">
          <style jsx>{`
            @media (max-width: 1024px) {
              .masonry-grid {
                column-count: 2 !important;
              }
            }
            @media (max-width: 640px) {
              .masonry-grid {
                column-count: 1 !important;
              }
            }
          `}</style>

          <div
            className="masonry-grid"
            style={{
              columnCount: 3,
              columnGap: '20px',
            }}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  style={{
                    breakInside: 'avoid',
                    marginBottom: '20px',
                  }}
                  onMouseEnter={() => setHoveredProject(project.id)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <Link
                    href="/contact"
                    className="relative w-full block overflow-hidden group"
                    style={{
                      borderRadius: '16px',
                      height: `${project.height}px`,
                      background: '#0A0A0A',
                    }}
                  >
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover object-center transition-all duration-500"
                      style={{
                        opacity: hoveredProject === project.id ? 0.7 : 0.5,
                        transform: hoveredProject === project.id ? 'scale(1.03)' : 'scale(1)',
                      }}
                    />
                    <div
                      className="absolute inset-0 flex flex-col justify-between"
                      style={{ padding: '24px', zIndex: 2 }}
                    >
                      <div className="flex justify-between items-start">
                        <span
                          style={{
                            padding: '8px 16px',
                            background: 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '8px',
                            color: '#FFFFFF',
                            fontSize: '13px',
                            fontWeight: 500,
                          }}
                        >
                          {categories.find((c) => c.id === project.category)?.label}
                        </span>
                        <span
                          className="flex items-center justify-center transition-all duration-300"
                          style={{
                            width: '44px',
                            height: '44px',
                            borderRadius: '12px',
                            background: hoveredProject === project.id ? '#FFFFFF' : 'rgba(255,255,255,0.2)',
                            backdropFilter: 'blur(8px)',
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
                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 500,
                          color: '#FFFFFF',
                        }}
                      >
                        {project.title}
                      </h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
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
