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
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-primary-900 via-primary-950 to-neutral-950 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                'linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary-500/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="badge badge-dark mb-6">Portfolio</span>
            <h1 className="heading-1 text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-300 mb-8">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="section">
        <div className="container">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="card overflow-hidden">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button className="w-12 h-12 rounded-full bg-white text-primary-600 flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                          <ExternalLink size={20} />
                        </button>
                      </div>
                    </div>

                    <div className="p-6">
                      <span className="text-xs font-semibold uppercase tracking-wider text-primary-600">
                        {categories.find((c) => c.id === project.category)?.label}
                      </span>
                      <h3 className="heading-4 text-neutral-900 mt-2 mb-2">
                        {project.title}
                      </h3>
                      <p className="text-neutral-600 text-sm">
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-auto"
            >
              <div className="relative aspect-video">
                <Image
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  fill
                  className="object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 text-neutral-900 flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-8">
                <span className="badge mb-4">
                  {categories.find((c) => c.id === selectedProjectData.category)?.label}
                </span>
                <h2 className="heading-3 text-neutral-900 mb-4">
                  {selectedProjectData.title}
                </h2>
                <p className="text-neutral-600 mb-6">
                  {selectedProjectData.description}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Client
                    </h4>
                    <p className="text-neutral-900 font-medium">
                      {selectedProjectData.client}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Technologies
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProjectData.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-neutral-100 rounded-md text-sm text-neutral-700"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-2">
                      Results
                    </h4>
                    <p className="text-green-600 font-medium">
                      {selectedProjectData.results}
                    </p>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className="btn btn-primary"
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
      <section className="section bg-gradient-to-br from-primary-600 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-4">
              Ready to Join Our Portfolio?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s create something amazing together. Contact us to discuss your
              project.
            </p>
            <Link href="/contact" className="btn btn-white btn-lg">
              Start Your Project
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
