'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

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

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 items-center" style={{ gap: '48px' }}>
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
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#171717' }}>500+</div>
                <div style={{ fontSize: '13px', color: '#737373' }}>{t('stats.websites')}</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#171717' }}>300+</div>
                <div style={{ fontSize: '13px', color: '#737373' }}>{t('stats.clients')}</div>
              </div>
              <div>
                <div style={{ fontSize: '28px', fontWeight: 700, color: '#171717' }}>10+</div>
                <div style={{ fontSize: '13px', color: '#737373' }}>{t('stats.experience')}</div>
              </div>
            </div>
          </motion.div>

          {/* Visual Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main visual card */}
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, #673DE6 0%, #2F1C6A 100%)',
                padding: '40px',
                minHeight: '420px',
              }}
            >
              {/* Decorative elements */}
              <div
                className="absolute"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.1)',
                  top: '-50px',
                  right: '-50px',
                }}
              />
              <div
                className="absolute"
                style={{
                  width: '150px',
                  height: '150px',
                  borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  bottom: '-30px',
                  left: '-30px',
                }}
              />

              {/* Browser mockup */}
              <div
                className="relative rounded-xl overflow-hidden"
                style={{
                  background: '#FFFFFF',
                  boxShadow: '0 25px 50px rgba(0,0,0,0.25)',
                }}
              >
                {/* Browser header */}
                <div
                  className="flex items-center px-4"
                  style={{
                    height: '40px',
                    background: '#F5F5F5',
                    borderBottom: '1px solid #E5E5E5',
                  }}
                >
                  <div className="flex items-center" style={{ gap: '6px' }}>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#EF4444' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#F59E0B' }} />
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#22C55E' }} />
                  </div>
                  <div
                    className="flex-1 mx-4 rounded text-center"
                    style={{
                      padding: '4px 12px',
                      background: '#FFFFFF',
                      border: '1px solid #E5E5E5',
                      color: '#737373',
                      fontSize: '12px',
                    }}
                  >
                    yourwebsite.com
                  </div>
                </div>

                {/* Browser content mockup */}
                <div style={{ padding: '20px' }}>
                  {/* Mock nav */}
                  <div className="flex items-center justify-between" style={{ marginBottom: '20px' }}>
                    <div style={{ width: '80px', height: '20px', background: '#E5E5E5', borderRadius: '4px' }} />
                    <div className="flex" style={{ gap: '12px' }}>
                      <div style={{ width: '50px', height: '10px', background: '#E5E5E5', borderRadius: '4px' }} />
                      <div style={{ width: '50px', height: '10px', background: '#E5E5E5', borderRadius: '4px' }} />
                      <div style={{ width: '50px', height: '10px', background: '#E5E5E5', borderRadius: '4px' }} />
                    </div>
                  </div>

                  {/* Mock hero area */}
                  <div
                    className="rounded-lg"
                    style={{
                      height: '100px',
                      background: 'linear-gradient(135deg, #EDE9FE 0%, #DDD6FE 100%)',
                      marginBottom: '16px',
                    }}
                  />

                  {/* Mock cards */}
                  <div className="grid grid-cols-3" style={{ gap: '12px' }}>
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className="rounded-lg"
                        style={{
                          height: '60px',
                          background: '#F5F5F5',
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute flex items-center gap-2 rounded-lg"
                style={{
                  top: '20px',
                  right: '20px',
                  padding: '10px 14px',
                  background: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#22C55E',
                  }}
                />
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#171717' }}>
                  Online
                </span>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute flex items-center gap-2 rounded-lg"
                style={{
                  bottom: '30px',
                  left: '20px',
                  padding: '10px 14px',
                  background: '#FFFFFF',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                }}
              >
                <span style={{ fontSize: '20px' }}>+150%</span>
                <span style={{ fontSize: '12px', color: '#22C55E', fontWeight: 500 }}>Growth</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
