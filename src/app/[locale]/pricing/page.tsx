'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Sparkles, Plus, Minus } from 'lucide-react';

export default function PricingPage() {
  const t = useTranslations('pricing');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const plans = [
    {
      key: 'starter',
      popular: false,
    },
    {
      key: 'business',
      popular: false,
    },
    {
      key: 'ecommerce',
      popular: true,
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
      a: "Yes, you can upgrade your website at any time. We'll work with you to add new features and functionality.",
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
              Pricing
            </span>
            <h1
              style={{
                fontSize: 'clamp(36px, 5vw, 56px)',
                fontWeight: 500,
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

      {/* Pricing Cards */}
      <section style={{ background: '#FAFAFA', padding: '80px 0' }}>
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-4" style={{ gap: '24px' }}>
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
                  className="relative"
                >
                  {plan.popular && (
                    <div
                      style={{
                        position: 'absolute',
                        top: '-12px',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        zIndex: 10,
                      }}
                    >
                      <span
                        className="flex items-center gap-1"
                        style={{
                          background: '#673DE6',
                          color: '#FFFFFF',
                          fontSize: '12px',
                          fontWeight: 600,
                          padding: '6px 16px',
                          borderRadius: '100px',
                        }}
                      >
                        <Sparkles size={14} />
                        {t('popular')}
                      </span>
                    </div>
                  )}
                  <div
                    style={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: '#FFFFFF',
                      borderRadius: '16px',
                      border: plan.popular ? '2px solid #673DE6' : '1px solid #E5E5E5',
                      overflow: 'hidden',
                    }}
                  >
                    <div
                      style={{
                        padding: '32px',
                        borderBottom: '1px solid #E5E5E5',
                      }}
                    >
                      <h3
                        style={{
                          fontSize: '20px',
                          fontWeight: 500,
                          color: '#0A0A0A',
                          marginBottom: '8px',
                        }}
                      >
                        {planData.name}
                      </h3>
                      <p
                        style={{
                          fontSize: '14px',
                          color: '#525252',
                          marginBottom: '20px',
                        }}
                      >
                        {planData.description}
                      </p>
                      <div className="flex items-baseline" style={{ gap: '4px' }}>
                        <span
                          style={{
                            fontSize: '36px',
                            fontWeight: 500,
                            color: '#0A0A0A',
                          }}
                        >
                          {planData.price}
                        </span>
                        {planData.period && (
                          <span style={{ color: '#737373', fontSize: '14px' }}>
                            /{planData.period}
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ padding: '32px', flex: 1 }}>
                      <p
                        style={{
                          fontSize: '12px',
                          fontWeight: 600,
                          textTransform: 'uppercase',
                          letterSpacing: '0.05em',
                          color: '#737373',
                          marginBottom: '16px',
                        }}
                      >
                        {t('features')}
                      </p>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {planData.features.map((feature: string, i: number) => (
                          <li
                            key={i}
                            className="flex items-start"
                            style={{ gap: '12px', marginBottom: '12px' }}
                          >
                            <Check
                              size={18}
                              style={{ color: '#22C55E', flexShrink: 0, marginTop: '2px' }}
                            />
                            <span style={{ fontSize: '14px', color: '#404040' }}>
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div style={{ padding: '0 32px 32px' }}>
                      <Link
                        href={`/contact?plan=${plan.key}`}
                        className="w-full inline-flex items-center justify-center"
                        style={{
                          padding: '14px 28px',
                          borderRadius: '8px',
                          fontWeight: 500,
                          fontSize: '14px',
                          background: plan.popular ? '#0A0A0A' : 'transparent',
                          color: plan.popular ? '#FFFFFF' : '#0A0A0A',
                          border: plan.popular ? 'none' : '1px solid #E5E5E5',
                        }}
                      >
                        {plan.key === 'enterprise' ? t('contactUs') : t('getStarted')}
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
      <section style={{ background: '#FFFFFF', padding: '100px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
            style={{ maxWidth: '600px', margin: '0 auto 64px' }}
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
              FAQ
            </span>
            <h2
              style={{
                fontSize: 'clamp(28px, 4vw, 40px)',
                fontWeight: 500,
                color: '#0A0A0A',
                lineHeight: 1.2,
                marginBottom: '16px',
              }}
            >
              Frequently Asked Questions
            </h2>
            <p style={{ fontSize: '16px', color: '#525252', lineHeight: 1.7 }}>
              Have questions? We have answers. If you can&apos;t find what you&apos;re looking for, contact us directly.
            </p>
          </motion.div>

          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  borderBottom: '1px solid #E5E5E5',
                }}
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left"
                  style={{
                    padding: '24px 0',
                    cursor: 'pointer',
                    background: 'transparent',
                    border: 'none',
                  }}
                >
                  <span
                    style={{
                      fontSize: '16px',
                      fontWeight: 500,
                      color: '#0A0A0A',
                    }}
                  >
                    {faq.q}
                  </span>
                  <span style={{ color: '#0A0A0A', marginLeft: '16px' }}>
                    {expandedFaq === index ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence>
                  {expandedFaq === index && (
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
                          color: '#525252',
                          lineHeight: 1.7,
                          paddingBottom: '24px',
                        }}
                      >
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#FFFFFF', paddingTop: '40px', paddingBottom: '100px' }}>
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
                  fontWeight: 500,
                  color: '#FFFFFF',
                  lineHeight: 1.2,
                  marginBottom: '16px',
                }}
              >
                Not Sure Which Plan is Right?
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                Let&apos;s discuss your project requirements and find the perfect solution for your business.
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
                Schedule a Free Call
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
