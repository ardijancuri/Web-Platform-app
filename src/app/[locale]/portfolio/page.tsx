'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ArrowRight, X } from 'lucide-react';
import Image from 'next/image';

export default function PortfolioPage() {
  const t = useTranslations('portfolio');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

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
      client: 'Fashion Boutique MK',
      technologies: ['Next.js', 'Stripe', 'MongoDB'],
      results: 'Increased online sales by 200%',
    },
    {
      id: 2,
      title: 'Tech Startup Website',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      description: 'Clean and modern landing page for a SaaS company',
      client: 'TechStart Solutions',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion'],
      results: 'Reduced bounce rate by 45%',
    },
    {
      id: 3,
      title: 'Restaurant Booking System',
      category: 'webapps',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
      description: 'Full-featured reservation management system',
      client: 'Restaurant Chain',
      technologies: ['Node.js', 'PostgreSQL', 'React'],
      results: 'Streamlined operations by 60%',
    },
    {
      id: 4,
      title: 'Real Estate Platform',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      description: 'Property listing and search platform with virtual tours',
      client: 'Property Solutions',
      technologies: ['Next.js', 'Mapbox', 'Prisma'],
      results: 'Increased property inquiries by 150%',
    },
    {
      id: 5,
      title: 'Electronics Online Shop',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&h=600&fit=crop',
      description: 'Full-featured electronics e-commerce with comparison tools',
      client: 'TechMart',
      technologies: ['WooCommerce', 'Custom Plugins', 'AWS'],
      results: 'Grew customer base by 300%',
    },
    {
      id: 6,
      title: 'Project Management Tool',
      category: 'webapps',
      image: 'https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&h=600&fit=crop',
      description: 'Team collaboration and task management application',
      client: 'Enterprise Corp',
      technologies: ['React', 'GraphQL', 'PostgreSQL'],
      results: 'Improved team productivity by 40%',
    },
    {
      id: 7,
      title: 'Healthcare Portal',
      category: 'webapps',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      description: 'Patient management and appointment scheduling system',
      client: 'MedCare Clinic',
      technologies: ['Next.js', 'HIPAA Compliant', 'MongoDB'],
      results: 'Reduced wait times by 50%',
    },
    {
      id: 8,
      title: 'Travel Agency Website',
      category: 'websites',
      image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&h=600&fit=crop',
      description: 'Beautiful travel booking website with package deals',
      client: 'Adventure Tours',
      technologies: ['WordPress', 'Custom Theme', 'Booking APIs'],
      results: 'Doubled online bookings',
    },
    {
      id: 9,
      title: 'Fitness Equipment Store',
      category: 'ecommerce',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=600&fit=crop',
      description: 'E-commerce store for gym and fitness equipment',
      client: 'FitGear Pro',
      technologies: ['Shopify', 'Custom App', 'Analytics'],
      results: 'Increased average order value by 35%',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const selectedProjectData = projects.find((p) => p.id === selectedProject);

  return (
    <>
      {/* Hero Section */}
      <section
        style={{
          background: '#FFFFFF',
          paddingTop: '140px',
          paddingBottom: '80px',
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
        </div>
      </section>

      {/* Portfolio Section */}
      <section style={{ background: '#FAFAFA', padding: '80px 0' }}>
        <div className="container">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center"
            style={{ gap: '8px', marginBottom: '48px' }}
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '100px',
                  fontWeight: 500,
                  fontSize: '14px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                  background: activeCategory === category.id ? '#0A0A0A' : '#FFFFFF',
                  color: activeCategory === category.id ? '#FFFFFF' : '#525252',
                }}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3" style={{ gap: '24px' }}>
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group"
                  style={{ cursor: 'pointer' }}
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      border: '1px solid #E5E5E5',
                    }}
                  >
                    <div className="relative" style={{ aspectRatio: '4/3' }}>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div
                        className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{ background: 'rgba(0,0,0,0.4)' }}
                      >
                        <div
                          style={{
                            width: '48px',
                            height: '48px',
                            borderRadius: '50%',
                            background: '#FFFFFF',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ExternalLink size={20} style={{ color: '#673DE6' }} />
                        </div>
                      </div>
                    </div>

                    <div style={{ padding: '24px' }}>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: '#673DE6',
                        }}
                      >
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                      <h3
                        style={{
                          fontSize: '18px',
                          fontWeight: 500,
                          color: '#0A0A0A',
                          marginTop: '8px',
                          marginBottom: '8px',
                        }}
                      >
                        {project.title}
                      </h3>
                      <p style={{ fontSize: '14px', color: '#525252' }}>
                        {project.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ padding: '16px', background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: '#FFFFFF',
                borderRadius: '16px',
                maxWidth: '800px',
                width: '100%',
                maxHeight: '90vh',
                overflow: 'auto',
              }}
            >
              <div className="relative" style={{ aspectRatio: '16/9' }}>
                <Image
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: '#FFFFFF',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <X size={20} style={{ color: '#0A0A0A' }} />
                </button>
              </div>

              <div style={{ padding: '32px' }}>
                <span
                  style={{
                    fontSize: '12px',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: '#673DE6',
                    display: 'inline-block',
                    padding: '6px 12px',
                    background: '#F5F3FF',
                    borderRadius: '100px',
                    marginBottom: '16px',
                  }}
                >
                  {categories.find((c) => c.id === selectedProjectData.category)?.label}
                </span>
                <h2
                  style={{
                    fontSize: '28px',
                    fontWeight: 400,
                    color: '#0A0A0A',
                    marginBottom: '16px',
                  }}
                >
                  {selectedProjectData.title}
                </h2>
                <p style={{ fontSize: '16px', color: '#525252', marginBottom: '32px' }}>
                  {selectedProjectData.description}
                </p>

                <div className="grid md:grid-cols-3" style={{ gap: '24px', marginBottom: '32px' }}>
                  <div>
                    <h4
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#737373',
                        marginBottom: '8px',
                      }}
                    >
                      Client
                    </h4>
                    <p style={{ color: '#0A0A0A', fontWeight: 500 }}>
                      {selectedProjectData.client}
                    </p>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#737373',
                        marginBottom: '8px',
                      }}
                    >
                      Technologies
                    </h4>
                    <div className="flex flex-wrap" style={{ gap: '8px' }}>
                      {selectedProjectData.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            padding: '4px 10px',
                            background: '#F5F5F5',
                            borderRadius: '6px',
                            fontSize: '13px',
                            color: '#404040',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: '12px',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        color: '#737373',
                        marginBottom: '8px',
                      }}
                    >
                      Results
                    </h4>
                    <p style={{ color: '#22C55E', fontWeight: 500 }}>
                      {selectedProjectData.results}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                  style={{
                    background: '#0A0A0A',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '14px',
                    padding: '14px 28px',
                    borderRadius: '8px',
                  }}
                  onClick={() => setSelectedProject(null)}
                >
                  Start a Similar Project
                  <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
