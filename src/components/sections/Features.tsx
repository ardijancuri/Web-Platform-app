'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Zap, Headphones, Shield, Search } from 'lucide-react';

const Features = () => {
  const t = useTranslations('features');

  const features = [
    {
      icon: Zap,
      title: t('items.speed.title'),
      description: t('items.speed.description'),
    },
    {
      icon: Headphones,
      title: t('items.support.title'),
      description: t('items.support.description'),
    },
    {
      icon: Shield,
      title: t('items.security.title'),
      description: t('items.security.description'),
    },
    {
      icon: Search,
      title: t('items.seo.title'),
      description: t('items.seo.description'),
    },
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '100px 0',
        borderTop: '1px solid #F0F0F0',
      }}
    >
      <div className="container">
        <div className="grid lg:grid-cols-12" style={{ gap: '60px' }}>
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-4"
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
              {t('badge')}
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 700,
                color: '#0A0A0A',
                lineHeight: 1.15,
                marginBottom: '16px',
              }}
            >
              {t('title')}
            </h2>
            <p
              style={{
                fontSize: '16px',
                color: '#525252',
                lineHeight: 1.7,
              }}
            >
              {t('subtitle')}
            </p>
          </motion.div>

          {/* Right Side - Features Grid */}
          <div className="lg:col-span-8">
            <div className="grid md:grid-cols-2" style={{ gap: '1px', background: '#F0F0F0' }}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="group"
                  style={{
                    padding: '40px',
                    background: '#FFFFFF',
                  }}
                >
                  <div
                    className="transition-transform duration-300 group-hover:-translate-y-1"
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '12px',
                      background: '#F5F5F5',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '24px',
                    }}
                  >
                    <feature.icon size={22} style={{ color: '#0A0A0A' }} />
                  </div>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: 600,
                      color: '#0A0A0A',
                      marginBottom: '10px',
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: '#737373',
                    }}
                  >
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
