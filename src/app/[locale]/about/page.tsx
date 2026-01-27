'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Award,
  Lightbulb,
  Heart,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    {
      icon: Award,
      title: t('values.quality.title'),
      description: t('values.quality.description'),
    },
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
    },
    {
      icon: Heart,
      title: t('values.support.title'),
      description: t('values.support.description'),
    },
    {
      icon: MessageSquare,
      title: t('values.transparency.title'),
      description: t('values.transparency.description'),
    },
  ];

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
              {t('title')}
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

      {/* Story Section */}
      <section style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
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
                  marginBottom: '16px',
                  display: 'block',
                }}
              >
                {t('story.title')}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 400,
                  color: '#0A0A0A',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {t('story.title')}
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#525252',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}
              >
                {t('story.description')}
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  'Over 500 websites created',
                  '300+ satisfied clients',
                  'Expert team of 15+ professionals',
                  'Serving clients across 10+ countries',
                ].map((item, index) => (
                  <div key={index} className="flex items-center" style={{ gap: '12px' }}>
                    <CheckCircle size={20} style={{ color: '#22C55E' }} />
                    <span style={{ color: '#404040', fontSize: '15px' }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div
                className="relative overflow-hidden"
                style={{ borderRadius: '16px' }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Values Section */}
      <section style={{ background: '#FAFAFA', padding: '100px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-2 items-center" style={{ gap: '64px' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2" style={{ gap: '16px' }}>
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      padding: '24px',
                      border: '1px solid #E5E5E5',
                    }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: '#F5F5F5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '16px',
                      }}
                    >
                      <value.icon size={24} style={{ color: '#673DE6' }} />
                    </div>
                    <h4
                      style={{
                        fontWeight: 500,
                        color: '#0A0A0A',
                        marginBottom: '8px',
                        fontSize: '16px',
                      }}
                    >
                      {value.title}
                    </h4>
                    <p style={{ fontSize: '14px', color: '#525252', lineHeight: 1.6 }}>
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="order-1 lg:order-2"
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
                {t('mission.title')}
              </span>
              <h2
                style={{
                  fontSize: 'clamp(28px, 4vw, 40px)',
                  fontWeight: 400,
                  color: '#0A0A0A',
                  lineHeight: 1.2,
                  marginBottom: '20px',
                }}
              >
                {t('mission.title')}
              </h2>
              <p
                style={{
                  fontSize: '16px',
                  color: '#525252',
                  lineHeight: 1.7,
                  marginBottom: '24px',
                }}
              >
                {t('mission.description')}
              </p>

              <h3
                style={{
                  fontSize: '18px',
                  fontWeight: 500,
                  color: '#0A0A0A',
                  marginBottom: '12px',
                }}
              >
                {t('values.title')}
              </h3>
              <p style={{ fontSize: '15px', color: '#525252', lineHeight: 1.7 }}>
                We believe in delivering excellence through quality work,
                continuous innovation, dedicated support, and transparent
                communication with all our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
                Ready to Work With Us?
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Let&apos;s discuss how we can help bring your vision to life.
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
                Contact Our Team
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
