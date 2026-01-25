'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  const t = useTranslations('cta');

  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: '100px 0',
      }}
    >
      <div className="container">
        <div
          className="relative overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, #673DE6 0%, #4F28B3 100%)',
            borderRadius: '24px',
            padding: 'clamp(48px, 8vw, 80px)',
          }}
        >
          {/* Background decorative elements */}
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
            transition={{ duration: 0.5 }}
            className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between"
            style={{ gap: '40px' }}
          >
            <div style={{ maxWidth: '600px' }}>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 400,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                {t('title')}
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                }}
              >
                {t('subtitle')}
              </p>
            </div>

            <div className="flex flex-wrap items-center" style={{ gap: '16px' }}>
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
                {t('button')}
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
              <a
                href="tel:+38970123456"
                style={{
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 500,
                  padding: '16px 24px',
                  border: '1px solid rgba(255,255,255,0.3)',
                  borderRadius: '100px',
                  transition: 'all 0.2s',
                }}
                className="hover:bg-white/10"
              >
                +389 70 123 456
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
