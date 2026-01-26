'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';

const Hero = () => {
  const t = useTranslations('hero');

  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: '#FFFFFF',
        paddingTop: '120px',
        paddingBottom: '80px',
      }}
    >
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #000 1px, transparent 0)`,
          backgroundSize: '24px 24px',
        }}
      />

      <div className="container relative z-10 overflow-hidden">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '32px' }}>
          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Heading */}
            <h1
              className="h1"
              style={{
                color: '#171717',
                marginBottom: '20px',
                maxWidth: '520px',
              }}
            >
              {t('title')}{' '}
              <span style={{ color: '#673DE6' }}>
                {t('titleHighlight')}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontSize: '18px',
                lineHeight: 1.7,
                color: '#525252',
                marginBottom: '32px',
                maxWidth: '480px',
              }}
            >
              {t('subtitle')}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center" style={{ gap: '12px', marginBottom: '40px' }}>
              <Link href="/contact" className="btn btn-lg btn-accent">
                {t('cta')}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/portfolio"
                className="btn btn-lg btn-secondary"
              >
                <Play size={16} style={{ marginLeft: '-4px' }} />
                {t('ctaSecondary')}
              </Link>
            </div>

            {/* Trust Stats Row */}
            <div
              className="flex items-center flex-wrap"
              style={{ gap: '32px', paddingTop: '24px', borderTop: '1px solid #E5E5E5' }}
            >
              <div>
                <div style={{ fontSize: '28px', fontWeight: 500, color: '#171717' }}>500+</div>
                <div style={{ fontSize: '13px', color: '#737373' }}>{t('stats.websites')}</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 500, color: '#171717' }}>300+</div>
                <div style={{ fontSize: '13px', color: '#737373' }}>{t('stats.clients')}</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 500, color: '#171717' }}>10+</div>
                <div style={{ fontSize: '13px', color: '#737373' }}>{t('stats.experience')}</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Column - Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative w-full max-w-full"
          >
            <div
              className="relative rounded-2xl overflow-hidden w-full max-w-full"
              style={{
                aspectRatio: '4/3',
                minHeight: '240px',
              }}
            >
              <Image
                src="/hero-section-image.avif"
                alt="Web Development"
                fill
                className="object-cover object-center rounded-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
