'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Services = () => {
  const t = useTranslations('services');
  const [expandedIndex, setExpandedIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  const services = [
    {
      id: 'web-design',
      title: t('webDesign.title'),
      description: t('webDesign.description'),
      image: '/web-design.jpg',
    },
    {
      id: 'ecommerce',
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      image: '/e-commerce.webp',
    },
    {
      id: 'web-apps',
      title: t('webApps.title'),
      description: t('webApps.description'),
      image: '/web-app.jpg',
    },
    {
      id: 'hosting',
      title: t('hosting.title'),
      description: t('hosting.description'),
      image: '/hosting.jpg',
    },
  ];

  useEffect(() => {
    // Check if desktop
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || !sectionRef.current || !containerRef.current) return;

    const section = sectionRef.current;
    const servicesCount = services.length;

    // Create ScrollTrigger for pinning and progress tracking
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top top',
      end: `+=${servicesCount * 70}%`,
      pin: true,
      pinSpacing: true,
      scrub: 0.5,
      onUpdate: (self) => {
        // Calculate which service should be active based on scroll progress
        const progress = self.progress;
        const newIndex = Math.min(
          Math.floor(progress * servicesCount),
          servicesCount - 1
        );
        setExpandedIndex(newIndex);
      },
    });

    return () => {
      scrollTrigger.kill();
    };
  }, [isDesktop, services.length]);

  return (
    <section
      ref={sectionRef}
      style={{
        background: '#FFFFFF',
        padding: '80px 0',
        minHeight: isDesktop ? '100vh' : 'auto',
      }}
    >
      <div ref={containerRef} className="container h-full">
        {/* Two Column Layout */}
        <div
          className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          style={{ minHeight: isDesktop ? 'calc(100vh - 160px)' : 'auto' }}
        >
          {/* Left - Title + Accordion */}
          <div>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginBottom: '48px' }}
            >
              <h2
                style={{
                  fontSize: 'clamp(32px, 5vw, 44px)',
                  fontWeight: 400,
                  color: '#0A0A0A',
                  lineHeight: 1.2,
                }}
              >
                {t('title')}
              </h2>
            </motion.div>
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{
                  borderTop: index === 0 ? '1px solid #E5E5E5' : 'none',
                  borderBottom: '1px solid #E5E5E5',
                }}
              >
                <button
                  onClick={() => setExpandedIndex(index)}
                  className="w-full flex items-center justify-between text-left"
                  style={{
                    padding: '24px 0',
                    cursor: 'pointer',
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: 500,
                      color: '#0A0A0A',
                    }}
                  >
                    {index + 1}. {service.title}
                  </span>
                  <span
                    style={{
                      color: '#0A0A0A',
                      lineHeight: 1,
                    }}
                  >
                    {expandedIndex === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence>
                  {expandedIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p
                        style={{
                          fontSize: '15px',
                          color: '#6B7280',
                          lineHeight: 1.7,
                          paddingBottom: '24px',
                        }}
                      >
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              style={{ marginTop: '40px' }}
            >
              <Link
                href="/contact"
                style={{
                  display: 'inline-flex',
                  padding: '14px 28px',
                  background: '#0A0A0A',
                  color: '#FFFFFF',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: 500,
                }}
              >
                Get started
              </Link>
            </motion.div>
          </div>

          {/* Right - Image */}
          <div className="hidden lg:flex items-center justify-center h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={expandedIndex}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden w-full"
                style={{
                  borderRadius: '16px',
                  aspectRatio: '1/1',
                }}
              >
                <Image
                  src={services[expandedIndex].image}
                  alt={services[expandedIndex].title}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
