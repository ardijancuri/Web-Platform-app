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
      title: 'E-Commerce Fashion Store',
      category: 'E-Commerce',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop',
      color: '#673DE6',
      size: 'large',
    },
    {
      id: 2,
      title: 'Tech Startup Landing',
      category: 'Website',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      color: '#2563EB',
      size: 'small',
    },
    {
      id: 3,
      title: 'Restaurant Booking App',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      color: '#DC2626',
      size: 'small',
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'Website',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      color: '#059669',
      size: 'medium',
    },
    {
      id: 5,
      title: 'Project Management Tool',
      category: 'Web App',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
      color: '#7C3AED',
      size: 'medium',
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
          style={{ marginBottom: '60px' }}
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
                fontWeight: 700,
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

        {/* Bento Grid Layout */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '16px' }}
        >
          {/* Large Featured Project */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 lg:row-span-2"
            onMouseEnter={() => setHoveredProject(1)}
            onMouseLeave={() => setHoveredProject(null)}
          >
            <div
              className="relative w-full h-full overflow-hidden group cursor-pointer"
              style={{
                borderRadius: '20px',
                minHeight: '500px',
                background: '#0A0A0A',
              }}
            >
              <Image
                src={projects[0].image}
                alt={projects[0].title}
                fill
                className="object-cover transition-all duration-700"
                style={{
                  opacity: hoveredProject === 1 ? 0.6 : 0.4,
                  transform: hoveredProject === 1 ? 'scale(1.05)' : 'scale(1)',
                }}
              />
              <div
                className="absolute inset-0 p-8 flex flex-col justify-between"
                style={{ zIndex: 2 }}
              >
                <div className="flex justify-between items-start">
                  <span
                    style={{
                      padding: '8px 16px',
                      background: 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '100px',
                      color: '#FFFFFF',
                      fontSize: '13px',
                      fontWeight: 500,
                    }}
                  >
                    {projects[0].category}
                  </span>
                  <div
                    className="flex items-center justify-center transition-all duration-300"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      background: hoveredProject === 1 ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <ArrowUpRight
                      size={20}
                      style={{
                        color: hoveredProject === 1 ? '#0A0A0A' : '#FFFFFF',
                        transition: 'all 0.3s',
                        transform: hoveredProject === 1 ? 'translate(2px, -2px)' : 'none',
                      }}
                    />
                  </div>
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: '28px',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                  >
                    {projects[0].title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      color: 'rgba(255,255,255,0.7)',
                      maxWidth: '400px',
                    }}
                  >
                    Modern online fashion store with seamless checkout and inventory management
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Small Projects */}
          {projects.slice(1, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="relative w-full overflow-hidden group cursor-pointer"
                style={{
                  borderRadius: '20px',
                  height: '240px',
                  background: '#0A0A0A',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700"
                  style={{
                    opacity: hoveredProject === project.id ? 0.6 : 0.4,
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-between"
                  style={{ zIndex: 2 }}
                >
                  <div className="flex justify-between items-start">
                    <span
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '100px',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 500,
                      }}
                    >
                      {project.category}
                    </span>
                    <div
                      className="flex items-center justify-center transition-all duration-300"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: hoveredProject === project.id ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <ArrowUpRight
                        size={18}
                        style={{
                          color: hoveredProject === project.id ? '#0A0A0A' : '#FFFFFF',
                          transition: 'all 0.3s',
                          transform: hoveredProject === project.id ? 'translate(2px, -2px)' : 'none',
                        }}
                      />
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Medium Projects - Bottom Row */}
          {projects.slice(3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * (index + 3) }}
              className="lg:col-span-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div
                className="relative w-full overflow-hidden group cursor-pointer"
                style={{
                  borderRadius: '20px',
                  height: '280px',
                  background: '#0A0A0A',
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700"
                  style={{
                    opacity: hoveredProject === project.id ? 0.6 : 0.4,
                    transform: hoveredProject === project.id ? 'scale(1.05)' : 'scale(1)',
                  }}
                />
                <div
                  className="absolute inset-0 p-6 flex flex-col justify-between"
                  style={{ zIndex: 2 }}
                >
                  <div className="flex justify-between items-start">
                    <span
                      style={{
                        padding: '6px 12px',
                        background: 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                        borderRadius: '100px',
                        color: '#FFFFFF',
                        fontSize: '12px',
                        fontWeight: 500,
                      }}
                    >
                      {project.category}
                    </span>
                    <div
                      className="flex items-center justify-center transition-all duration-300"
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        background: hoveredProject === project.id ? '#FFFFFF' : 'rgba(255,255,255,0.15)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      <ArrowUpRight
                        size={18}
                        style={{
                          color: hoveredProject === project.id ? '#0A0A0A' : '#FFFFFF',
                          transition: 'all 0.3s',
                          transform: hoveredProject === project.id ? 'translate(2px, -2px)' : 'none',
                        }}
                      />
                    </div>
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                    }}
                  >
                    {project.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-1"
          >
            <Link
              href="/contact"
              className="relative w-full h-full flex flex-col justify-center items-center text-center group"
              style={{
                borderRadius: '20px',
                minHeight: '280px',
                background: 'linear-gradient(135deg, #673DE6 0%, #4F28B3 100%)',
                padding: '40px',
              }}
            >
              <h3
                style={{
                  fontSize: '24px',
                  fontWeight: 700,
                  color: '#FFFFFF',
                  marginBottom: '12px',
                }}
              >
                Have a project in mind?
              </h3>
              <p
                style={{
                  fontSize: '15px',
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '24px',
                }}
              >
                Let&apos;s work together
              </p>
              <span
                className="inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
                style={{
                  padding: '12px 24px',
                  background: '#FFC107',
                  borderRadius: '100px',
                  color: '#0A0A0A',
                  fontSize: '14px',
                  fontWeight: 600,
                }}
              >
                Start a Project
                <ArrowRight size={16} />
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
