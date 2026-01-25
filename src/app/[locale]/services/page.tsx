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
  Clock,
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
  const navT = useTranslations('nav');

  const services = [
    {
      id: 'web-design',
      icon: Monitor,
      title: t('webDesign.title'),
      description: t('webDesign.description'),
      features: t.raw('webDesign.features') as string[],
      color: 'from-blue-500 to-cyan-500',
      bgColor: 'bg-blue-500',
      lightBg: 'bg-blue-50',
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
      color: 'from-purple-500 to-pink-500',
      bgColor: 'bg-purple-500',
      lightBg: 'bg-purple-50',
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
      color: 'from-orange-500 to-red-500',
      bgColor: 'bg-orange-500',
      lightBg: 'bg-orange-50',
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
      color: 'from-green-500 to-emerald-500',
      bgColor: 'bg-green-500',
      lightBg: 'bg-green-50',
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
            <span className="badge badge-dark mb-6">{navT('services')}</span>
            <h1 className="heading-1 text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-300 mb-8">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Detail Sections */}
      {services.map((service, index) => (
        <section
          key={service.id}
          id={service.id}
          className={`section ${index % 2 === 0 ? 'bg-white' : 'bg-neutral-50'}`}
        >
          <div className="container">
            <div
              className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Content */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={index % 2 === 1 ? 'lg:order-2' : ''}
              >
                <div
                  className={`w-16 h-16 rounded-2xl ${service.bgColor} flex items-center justify-center mb-6`}
                >
                  <service.icon size={32} className="text-white" />
                </div>
                <h2 className="heading-2 text-neutral-900 mb-4">
                  {service.title}
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {service.features.map((feature: string, i: number) => (
                    <li key={i} className="flex items-center gap-3">
                      <div className={`w-6 h-6 rounded-full ${service.lightBg} flex items-center justify-center`}>
                        <Check size={14} className={service.bgColor.replace('bg-', 'text-')} />
                      </div>
                      <span className="text-neutral-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact" className="btn btn-primary btn-lg">
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </motion.div>

              {/* Detailed Features Grid */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className={index % 2 === 1 ? 'lg:order-1' : ''}
              >
                <div className="grid grid-cols-2 gap-4">
                  {service.detailedFeatures.map((feature, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="card p-6 hover:border-primary-200"
                    >
                      <div
                        className={`w-12 h-12 rounded-xl ${service.lightBg} flex items-center justify-center mb-4`}
                      >
                        <feature.icon
                          size={24}
                          className={service.bgColor.replace('bg-', 'text-')}
                        />
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-2">
                        {feature.title}
                      </h4>
                      <p className="text-sm text-neutral-600">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let&apos;s build something amazing together.
            </p>
            <Link href="/contact" className="btn btn-white btn-lg">
              Get Free Consultation
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
