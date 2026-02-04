'use client';

import { Suspense, useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
} from 'lucide-react';

export default function ContactPage() {
  return (
    <Suspense>
      <ContactPageContent />
    </Suspense>
  );
}

function ContactPageContent() {
  const t = useTranslations('contact');
  const navT = useTranslations('nav');
  const pricingT = useTranslations('pricing');
  const searchParams = useSearchParams();

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    plan: '',
    message: '',
  });

  // Autofill plan from URL parameter
  useEffect(() => {
    const planParam = searchParams.get('plan');
    if (planParam && ['starter', 'business', 'ecommerce', 'enterprise'].includes(planParam)) {
      setFormState((prev) => ({ ...prev, plan: planParam }));
    }
  }, [searchParams]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        plan: '',
        message: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const plans = [
    { value: 'starter', label: pricingT('plans.starter.name') },
    { value: 'business', label: pricingT('plans.business.name') },
    { value: 'ecommerce', label: pricingT('plans.ecommerce.name') },
    { value: 'enterprise', label: pricingT('plans.enterprise.name') },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('info.email'),
      value: 'contact@oniweb.com',
      href: 'mailto:contact@oniweb.com',
    },
    {
      icon: Phone,
      title: t('info.phone'),
      value: '+389 70 123 456',
      href: 'tel:+38970123456',
    },
    {
      icon: MapPin,
      title: t('info.address'),
      value: 'Oninova, East Gate Living, Skopje',
      href: 'https://maps.google.com/?q=Oninova+East+Gate+Living+Skopje',
    },
    {
      icon: Clock,
      title: t('info.hours'),
      value: t('info.hoursValue'),
      href: null,
    },
  ];

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    fontSize: '15px',
    border: '1px solid #E5E5E5',
    borderRadius: '8px',
    background: '#FFFFFF',
    color: '#0A0A0A',
    outline: 'none',
  };

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
              {navT('contact')}
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

      {/* Contact Section */}
      <section style={{ background: '#FAFAFA', padding: '80px 0' }}>
        <div className="container">
          <div className="grid lg:grid-cols-3" style={{ gap: '48px' }}>
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <h2
                style={{
                  fontSize: '24px',
                  fontWeight: 500,
                  color: '#0A0A0A',
                  marginBottom: '24px',
                }}
              >
                {t('info.title')}
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                    style={{ gap: '16px' }}
                  >
                    <div
                      style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: '#FFFFFF',
                        border: '1px solid #E5E5E5',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <item.icon size={22} style={{ color: '#673DE6' }} />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontWeight: 500,
                          color: '#0A0A0A',
                          marginBottom: '4px',
                          fontSize: '15px',
                        }}
                      >
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          style={{ color: '#525252', fontSize: '14px' }}
                          className="hover:text-primary-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ color: '#525252', fontSize: '14px' }}>{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  padding: '40px',
                  border: '1px solid #E5E5E5',
                }}
              >
                <h3
                  style={{
                    fontWeight: 500,
                    color: '#0A0A0A',
                    marginBottom: '8px',
                    fontSize: '20px',
                  }}
                >
                  Send us a message
                </h3>
                <p style={{ fontSize: '14px', color: '#525252', marginBottom: '32px' }}>
                  We&apos;ll get back to you within 24 hours
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2" style={{ gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#404040',
                          marginBottom: '8px',
                        }}
                      >
                        {t('form.name')}
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#404040',
                          marginBottom: '8px',
                        }}
                      >
                        {t('form.email')}
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2" style={{ gap: '20px', marginBottom: '20px' }}>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#404040',
                          marginBottom: '8px',
                        }}
                      >
                        {t('form.phone')}
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="+389 70 123 456"
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: 'block',
                          fontSize: '14px',
                          fontWeight: 500,
                          color: '#404040',
                          marginBottom: '8px',
                        }}
                      >
                        {t('form.company')}
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        style={inputStyle}
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#404040',
                        marginBottom: '8px',
                      }}
                    >
                      {t('form.plan')}
                    </label>
                    <select
                      name="plan"
                      value={formState.plan}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: 'pointer' }}
                    >
                      <option value="">{t('form.selectPlan')}</option>
                      {plans.map((plan) => (
                        <option key={plan.value} value={plan.value}>
                          {plan.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label
                      style={{
                        display: 'block',
                        fontSize: '14px',
                        fontWeight: 500,
                        color: '#404040',
                        marginBottom: '8px',
                      }}
                    >
                      {t('form.message')}
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      style={{ ...inputStyle, resize: 'none' }}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center"
                      style={{
                        gap: '12px',
                        padding: '16px',
                        background: '#ECFDF5',
                        color: '#065F46',
                        borderRadius: '8px',
                        marginBottom: '24px',
                      }}
                    >
                      <CheckCircle size={20} />
                      <span>{t('form.success')}</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center"
                      style={{
                        gap: '12px',
                        padding: '16px',
                        background: '#FEF2F2',
                        color: '#991B1B',
                        borderRadius: '8px',
                        marginBottom: '24px',
                      }}
                    >
                      <AlertCircle size={20} />
                      <span>{t('form.error')}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center gap-2"
                    style={{
                      background: '#0A0A0A',
                      color: '#FFFFFF',
                      fontWeight: 500,
                      fontSize: '15px',
                      padding: '14px 28px',
                      borderRadius: '8px',
                      border: 'none',
                      cursor: isSubmitting ? 'not-allowed' : 'pointer',
                      opacity: isSubmitting ? 0.7 : 1,
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <div
                          style={{
                            width: '18px',
                            height: '18px',
                            border: '2px solid rgba(255,255,255,0.3)',
                            borderTopColor: '#FFFFFF',
                            borderRadius: '50%',
                            animation: 'spin 1s linear infinite',
                          }}
                        />
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        {t('form.submit')}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section style={{ background: '#FFFFFF', padding: '80px 0' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden"
            style={{ borderRadius: '16px', border: '1px solid #E5E5E5' }}
          >
            <iframe
              src="https://www.google.com/maps?q=Oninova+East+Gate+Living+Skopje&output=embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
