'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Monitor,
  ShoppingCart,
  Code,
  Server,
  ArrowRight,
  Check,
  Zap,
  Shield,
  Headphones,
  Search,
  Palette,
  Smartphone,
  Globe,
  CreditCard,
  Package,
  TrendingUp,
  Database,
  Cloud,
  Lock,
  Wifi,
  HardDrive,
} from 'lucide-react';

export default function ServicesPage() {
  const t = useTranslations('services');

  const services = [
    {
      id: 'web-design',
      icon: Monitor,
      title: t('webDesign.title'),
      description: t('webDesign.description'),
      features: t.raw('webDesign.features') as string[],
      detailedFeatures: [
        { icon: Palette, title: 'Custom Design', desc: 'Unique designs tailored to your brand' },
        { icon: Smartphone, title: 'Responsive', desc: 'Perfect on all devices and screens' },
        { icon: Search, title: 'SEO Ready', desc: 'Built-in search engine optimization' },
        { icon: Zap, title: 'Fast Loading', desc: 'Optimized for maximum performance' },
      ],
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      features: t.raw('ecommerce.features') as string[],
      detailedFeatures: [
        { icon: CreditCard, title: 'Secure Payments', desc: 'Multiple payment gateway integrations' },
        { icon: Package, title: 'Inventory', desc: 'Complete stock management system' },
        { icon: TrendingUp, title: 'Analytics', desc: 'Track sales and customer behavior' },
        { icon: Globe, title: 'Multi-currency', desc: 'Sell globally with local currencies' },
      ],
    },
    {
      id: 'web-apps',
      icon: Code,
      title: t('webApps.title'),
      description: t('webApps.description'),
      features: t.raw('webApps.features') as string[],
      detailedFeatures: [
        { icon: Database, title: 'Custom Backend', desc: 'Tailored database and API solutions' },
        { icon: Cloud, title: 'Cloud Native', desc: 'Scalable cloud infrastructure' },
        { icon: Lock, title: 'Secure', desc: 'Enterprise-grade security measures' },
        { icon: Zap, title: 'Real-time', desc: 'Live updates and notifications' },
      ],
    },
    {
      id: 'hosting',
      icon: Server,
      title: t('hosting.title'),
      description: t('hosting.description'),
      features: t.raw('hosting.features') as string[],
      detailedFeatures: [
        { icon: Wifi, title: '99.9% Uptime', desc: 'Guaranteed availability for your site' },
        { icon: Shield, title: 'SSL Included', desc: 'Free SSL certificates for security' },
        { icon: HardDrive, title: 'Daily Backups', desc: 'Automatic backups every day' },
        { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock technical support' },
      ],
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
              Our Services
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

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          style={{
            background: index < 2 ? '#FAFAFA' : '#FFFFFF',
            padding: '100px 0',
          }}
        >
          <div className="container">
            <div className="grid lg:grid-cols-12" style={{ gap: '60px' }}>
              {/* Left Side - Service Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`lg:col-span-4 ${index % 2 === 1 ? 'lg:order-2' : ''}`}
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
                    marginBottom: '24px',
                  }}
                >
                  <service.icon size={22} style={{ color: '#0A0A0A' }} />
                </div>
                <h2
                  style={{
                    fontSize: 'clamp(28px, 4vw, 40px)',
                    fontWeight: 400,
                    color: '#0A0A0A',
                    lineHeight: 1.15,
                    marginBottom: '16px',
                  }}
                >
                  {service.title}
                </h2>
                <p
                  style={{
                    fontSize: '16px',
                    color: '#525252',
                    lineHeight: 1.7,
                    marginBottom: '24px',
                  }}
                >
                  {service.description}
                </p>

                {/* Features List */}
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 32px 0' }}>
                  {service.features.map((feature: string, i: number) => (
                    <li
                      key={i}
                      className="flex items-center"
                      style={{ gap: '12px', marginBottom: '12px' }}
                    >
                      <Check size={18} style={{ color: '#22C55E', flexShrink: 0 }} />
                      <span style={{ fontSize: '15px', color: '#404040' }}>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 transition-all duration-300"
                  style={{
                    background: '#0A0A0A',
                    color: '#FFFFFF',
                    fontWeight: 500,
                    fontSize: '15px',
                    padding: '14px 28px',
                    borderRadius: '8px',
                  }}
                >
                  Get Started
                  <ArrowRight size={18} />
                </Link>
              </motion.div>

              {/* Right Side - Features Grid (Why Choose Us style) */}
              <div className={`lg:col-span-8 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="grid md:grid-cols-2" style={{ gap: '1px', background: '#E5E5E5' }}>
                  {service.detailedFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.1 }}
                      className="group"
                      style={{
                        padding: '40px',
                        background: index < 2 ? '#FAFAFA' : '#FFFFFF',
                      }}
                    >
                      <div
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '12px',
                          background: index < 2 ? '#EEEEEE' : '#F5F5F5',
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
                        {feature.desc}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section style={{ background: '#FFFFFF', padding: '100px 0' }}>
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
                Ready to Start Your Project?
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Contact us today for a free consultation and let&apos;s build something amazing together.
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
                Get Free Consultation
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
