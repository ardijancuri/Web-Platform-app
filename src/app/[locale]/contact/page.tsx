'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  AlertCircle,
  MessageSquare,
  Headphones,
} from 'lucide-react';

export default function ContactPage() {
  const t = useTranslations('contact');
  const navT = useTranslations('nav');

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Reset form after success
    setTimeout(() => {
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
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

  const services = [
    { value: 'web-design', label: navT('webDesign') },
    { value: 'ecommerce', label: navT('ecommerce') },
    { value: 'web-apps', label: navT('webApps') },
    { value: 'hosting', label: navT('hosting') },
  ];

  const budgets = [
    { value: 'under-500', label: 'Under €500' },
    { value: '500-1000', label: '€500 - €1,000' },
    { value: '1000-5000', label: '€1,000 - €5,000' },
    { value: '5000-plus', label: '€5,000+' },
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: t('info.email'),
      value: 'contact@webcraftpro.com',
      href: 'mailto:contact@webcraftpro.com',
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
      value: 'Skopje, North Macedonia',
      href: null,
    },
    {
      icon: Clock,
      title: t('info.hours'),
      value: t('info.hoursValue'),
      href: null,
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
            <span className="badge badge-dark mb-6">{navT('contact')}</span>
            <h1 className="heading-1 text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-300 mb-8">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h2 className="heading-3 text-neutral-900 mb-6">
                {t('info.title')}
              </h2>

              <div className="space-y-6 mb-8">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                      <item.icon size={24} className="text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {item.title}
                      </h4>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-neutral-600 hover:text-primary-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-neutral-600">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Support */}
              <div className="card p-6 bg-gradient-to-br from-primary-50 to-white border-primary-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center">
                    <Headphones size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-neutral-900">Need Quick Support?</h4>
                </div>
                <p className="text-neutral-600 text-sm mb-4">
                  Our team is available during business hours to assist you with any questions.
                </p>
                <a
                  href="tel:+38970123456"
                  className="btn btn-primary w-full"
                >
                  <Phone size={18} />
                  Call Us Now
                </a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="card p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <MessageSquare size={20} className="text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900">Send us a message</h3>
                    <p className="text-sm text-neutral-600">We&apos;ll get back to you within 24 hours</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">{t('form.name')}</label>
                      <input
                        type="text"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="label">{t('form.email')}</label>
                      <input
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">{t('form.phone')}</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        className="input"
                        placeholder="+389 70 123 456"
                      />
                    </div>
                    <div>
                      <label className="label">{t('form.company')}</label>
                      <input
                        type="text"
                        name="company"
                        value={formState.company}
                        onChange={handleChange}
                        className="input"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="label">{t('form.service')}</label>
                      <select
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">{t('form.selectService')}</option>
                        {services.map((service) => (
                          <option key={service.value} value={service.value}>
                            {service.label}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="label">{t('form.budget')}</label>
                      <select
                        name="budget"
                        value={formState.budget}
                        onChange={handleChange}
                        className="input"
                      >
                        <option value="">{t('form.selectBudget')}</option>
                        {budgets.map((budget) => (
                          <option key={budget.value} value={budget.value}>
                            {budget.label}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="label">{t('form.message')}</label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="input resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  {/* Submit Status Messages */}
                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-green-50 text-green-700 rounded-xl"
                    >
                      <CheckCircle size={20} />
                      <span>{t('form.success')}</span>
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-3 p-4 bg-red-50 text-red-700 rounded-xl"
                    >
                      <AlertCircle size={20} />
                      <span>{t('form.error')}</span>
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg w-full md:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <Send size={20} />
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
      <section className="section pt-0">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden shadow-xl"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47567.42028252057!2d21.393792!3d41.9981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1354151e7b2f33f9%3A0x5c8d6a3c14f2c9c4!2sSkopje%2C%20North%20Macedonia!5e0!3m2!1sen!2sus!4v1705512000000!5m2!1sen!2sus"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
