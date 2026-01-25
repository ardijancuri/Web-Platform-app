'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import { Check, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      key: 'starter',
      popular: false,
    },
    {
      key: 'business',
      popular: true,
    },
    {
      key: 'ecommerce',
      popular: false,
    },
    {
      key: 'enterprise',
      popular: false,
    },
  ];

  const faqs = [
    {
      q: 'What is included in the support period?',
      a: 'During the support period, we provide bug fixes, minor updates, content changes, and technical assistance.',
    },
    {
      q: 'Can I upgrade my plan later?',
      a: 'Yes, you can upgrade your website at any time. We\'ll work with you to add new features and functionality.',
    },
    {
      q: 'Do you provide hosting?',
      a: 'Yes, we offer reliable hosting solutions with 99.9% uptime guarantee, SSL certificates, and daily backups.',
    },
    {
      q: 'How long does it take to build a website?',
      a: 'Depending on the complexity, a standard website takes 2-4 weeks, while e-commerce solutions may take 4-8 weeks.',
    },
    {
      q: 'What payment methods do you accept?',
      a: 'We accept bank transfers, credit cards, and PayPal. Payment plans are available for larger projects.',
    },
    {
      q: 'Do you offer maintenance after the project is complete?',
      a: 'Yes, we offer ongoing maintenance packages to keep your website secure, updated, and running smoothly.',
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
            <span className="badge badge-dark mb-6">Pricing</span>
            <h1 className="heading-1 text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-300 mb-8">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="section -mt-10 relative z-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {plans.map((plan, index) => {
              const planData = {
                name: t(`plans.${plan.key}.name`),
                description: t(`plans.${plan.key}.description`),
                price: t(`plans.${plan.key}.price`),
                period: t(`plans.${plan.key}.period`),
                features: t.raw(`plans.${plan.key}.features`) as string[],
              };

              return (
                <motion.div
                  key={plan.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative ${plan.popular ? 'lg:-mt-4 lg:mb-4' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                      <span className="bg-gradient-to-r from-primary-600 to-accent-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full flex items-center gap-1.5">
                        <Sparkles size={14} />
                        {t('popular')}
                      </span>
                    </div>
                  )}
                  <div
                    className={`card h-full flex flex-col ${
                      plan.popular
                        ? 'border-2 border-primary-500 shadow-xl shadow-primary-500/20'
                        : ''
                    }`}
                  >
                    <div className="p-6 border-b border-neutral-200">
                      <h3 className="text-xl font-bold text-neutral-900 mb-2">
                        {planData.name}
                      </h3>
                      <p className="text-neutral-600 text-sm mb-4">
                        {planData.description}
                      </p>
                      <div className="flex items-baseline gap-1">
                        <span className="text-4xl font-bold text-neutral-900">
                          {planData.price}
                        </span>
                        {planData.period && (
                          <span className="text-neutral-500">
                            /{planData.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="p-6 flex-1">
                      <p className="text-sm font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                        {t('features')}
                      </p>
                      <ul className="space-y-3">
                        {planData.features.map((feature: string, i: number) => (
                          <li key={i} className="flex items-start gap-3">
                            <Check
                              size={18}
                              className="text-green-500 flex-shrink-0 mt-0.5"
                            />
                            <span className="text-neutral-700 text-sm">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="p-6 pt-0">
                      <Link
                        href="/contact"
                        className={`btn w-full ${
                          plan.popular ? 'btn-primary' : 'btn-secondary'
                        }`}
                      >
                        {plan.key === 'enterprise'
                          ? t('contactUs')
                          : t('getStarted')}
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <span className="badge mb-4">FAQ</span>
            <h2 className="heading-2 text-neutral-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-neutral-600">
              Have questions? We have answers. If you can&apos;t find what you&apos;re
              looking for, contact us directly.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="grid gap-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="card p-6"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <HelpCircle size={18} className="text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-neutral-900 mb-2">
                        {faq.q}
                      </h3>
                      <p className="text-neutral-600">{faq.a}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
              Not Sure Which Plan is Right for You?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss your project requirements and find the perfect solution
              for your business.
            </p>
            <Link href="/contact" className="btn btn-white btn-lg">
              Schedule a Free Call
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
