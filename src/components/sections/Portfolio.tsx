'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const Portfolio = () => {
  const t = useTranslations('portfolio');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'Lesnamax',
      category: 'Website',
      image: '/work/lesnamax.avif',
      link: '/portfolio',
      height: 580,
    },
    {
      id: 2,
      title: 'Tiamo',
      category: 'Website',
      image: '/work/tiamo.avif',
      link: '/portfolio',
      height: 320,
    },
    {
      id: 3,
      title: 'Premium Park',
      category: 'Website',
      image: '/work/premium-park.avif',
      link: '/portfolio',
      height: 520,
    },
    {
      id: 4,
      title: 'MonFrere',
      category: 'E-Commerce',
      image: '/work/monfrere.avif',
      link: '/portfolio',
      height: 340,
    },
    {
      id: 5,
      title: 'Cioccolatitaliani',
      category: 'Website',
      image: '/work/cioccolatitaliani.avif',
      link: '/portfolio',
      height: 600,
    },
    {
      id: 6,
      title: 'Marah',
      category: 'Website',
      image: '/work/marah.avif',
      link: '/portfolio',
      height: 360,
    },
    {
      id: 7,
      title: 'Best Mobile',
      category: 'E-Commerce',
      image: '/work/best-mobile.avif',
      link: '/portfolio',
      height: 550,
    },
    {
      id: 8,
      title: 'Tonus',
      category: 'Website',
      image: '/work/tonus.avif',
      link: '/portfolio',
      height: 320,
    },
    {
      id: 9,
      title: 'Burdemplastik',
      category: 'Website',
      image: '/work/burdemplastik.avif',
      link: '/portfolio',
      height: 480,
    },
    {
      id: 10,
      title: 'Pevalit',
      category: 'Website',
      image: '/work/pevalit.avif',
      link: '/portfolio',
      height: 300,
    },
    {
      id: 11,
      title: 'Tesorouno',
      category: 'E-Commerce',
      image: '/work/tesorouno.avif',
      link: '/portfolio',
      height: 540,
    },
  ];

  return (
    <section
      style={{
        background: '#FAFAFA',
        padding: '100px 0',
      }}
    >
      <div className="container">
        {/* Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ marginBottom: '48px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#673DE6',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              {t('title')}
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 400,
                color: '#0A0A0A',
                lineHeight: 1.1,
                maxWidth: '500px',
              }}
            >
              {t('subtitle')}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginTop: '24px' }}
          >
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2"
              style={{
                fontSize: '14px',
                fontWeight: 600,
                color: '#0A0A0A',
              }}
            >
              {t('viewAll')}
              <ArrowRight
                size={16}
                style={{ transition: 'transform 0.2s' }}
                className="group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>

        {/* Pinterest-style Masonry Layout */}
        <div
          style={{
            columnCount: 3,
            columnGap: '20px',
          }}
          className="masonry-grid"
        >
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

          {/* Project Cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              style={{
                breakInside: 'avoid',
                marginBottom: '20px',
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Link
                href={project.link}
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
                      {project.category}
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

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{
              breakInside: 'avoid',
              marginBottom: '20px',
            }}
          >
            <Link
              href="/contact"
              className="relative w-full flex flex-col justify-center items-center text-center group"
              style={{
                borderRadius: '16px',
                height: '320px',
                background: 'linear-gradient(135deg, #673DE6 0%, #4F28B3 100%)',
                padding: '32px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#FFFFFF',
                  marginBottom: '10px',
                }}
              >
                Have a project in mind?
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '20px',
                }}
              >
                Let&apos;s work together
              </p>
              <span
                className="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                style={{
                  padding: '14px 28px',
                  background: '#FFC107',
                  borderRadius: '10px',
                  color: '#0A0A0A',
                  fontSize: '15px',
                  fontWeight: 600,
                }}
              >
                Start a Project
                <ArrowRight size={18} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
