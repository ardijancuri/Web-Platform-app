'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function PrivacyPage() {
  const sections = [
    {
      title: '1. Information We Collect',
      content:
        'We collect information you provide directly to us, such as when you create an account, make a purchase, contact us for support, or otherwise communicate with us. This information may include your name, email address, phone number, and any other information you choose to provide.',
    },
    {
      title: '2. How We Use Your Information',
      content:
        'We use the information we collect to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, respond to your comments and questions, and provide customer service.',
    },
    {
      title: '3. Information Sharing',
      content:
        'We do not share, sell, or otherwise disclose your personal information to third parties except as described in this policy or with your consent. We may share information with service providers who perform services on our behalf.',
    },
    {
      title: '4. Data Security',
      content:
        'We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.',
    },
    {
      title: '5. Contact Us',
      content:
        'If you have any questions about this Privacy Policy, please contact us at privacy@oniweb.com or through our contact page.',
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
              Legal
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
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: '18px',
                color: '#525252',
                lineHeight: 1.7,
              }}
            >
              Last updated: January 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ background: '#FAFAFA', padding: '80px 0' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {sections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  border: '1px solid #E5E5E5',
                  padding: '32px',
                }}
              >
                <h2
                  style={{
                    fontSize: '20px',
                    fontWeight: 500,
                    color: '#0A0A0A',
                    marginBottom: '16px',
                  }}
                >
                  {section.title}
                </h2>
                <p
                  style={{
                    fontSize: '15px',
                    color: '#525252',
                    lineHeight: 1.7,
                  }}
                >
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
                Have Questions?
              </h2>
              <p
                style={{
                  fontSize: '17px',
                  color: 'rgba(255,255,255,0.8)',
                  lineHeight: 1.6,
                  marginBottom: '32px',
                }}
              >
                If you have any questions about our privacy practices, feel free to reach out to us.
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
                Contact Us
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
