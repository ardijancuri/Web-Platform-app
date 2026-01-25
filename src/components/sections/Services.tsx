'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const Services = () => {
  const t = useTranslations('services');
  const [expandedIndex, setExpandedIndex] = useState(0);

  const services = [
    {
      id: 'web-design',
      title: t('webDesign.title'),
      description: t('webDesign.description'),
    },
    {
      id: 'ecommerce',
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
    },
    {
      id: 'web-apps',
      title: t('webApps.title'),
      description: t('webApps.description'),
    },
    {
      id: 'hosting',
      title: t('hosting.title'),
      description: t('hosting.description'),
    },
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '100px 0',
      }}
    >
      <div className="container">
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
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

          {/* Accordion */}
          <div>
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
                  onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                  className="w-full flex items-center justify-between text-left"
                  style={{
                    padding: '24px 0',
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
                      fontSize: '24px',
                      color: '#0A0A0A',
                      fontWeight: 300,
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
                          maxWidth: '600px',
                        }}
                      >
                        {service.description}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

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
      </div>
    </section>
  );
};

export default Services;
