'use client';

import { motion } from 'framer-motion';
import { Link } from '@/i18n/routing';
import { ArrowRight } from 'lucide-react';

export default function CookiesPage() {
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
              Cookie Policy
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
            {/* What Are Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0 }}
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
                What Are Cookies
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#525252',
                  lineHeight: 1.7,
                }}
              >
                Cookies are small text files that are placed on your computer or mobile device when
                you visit a website. They are widely used to make websites work more efficiently and
                provide information to the owners of the site.
              </p>
            </motion.div>

            {/* How We Use Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
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
                How We Use Cookies
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#525252',
                  lineHeight: 1.7,
                  marginBottom: '16px',
                }}
              >
                We use cookies to:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {[
                  'Remember your preferences and settings',
                  'Understand how you use our website',
                  'Improve your browsing experience',
                  'Analyze site traffic and performance',
                ].map((item, i) => (
                  <li
                    key={i}
                    style={{
                      fontSize: '15px',
                      color: '#525252',
                      lineHeight: 1.7,
                      paddingLeft: '20px',
                      position: 'relative',
                      marginBottom: '8px',
                    }}
                  >
                    <span
                      style={{
                        position: 'absolute',
                        left: 0,
                        color: '#673DE6',
                      }}
                    >
                      •
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Types of Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
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
                  marginBottom: '24px',
                }}
              >
                Types of Cookies We Use
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  {
                    title: 'Essential Cookies',
                    desc: 'Required for the website to function properly. These cannot be disabled.',
                  },
                  {
                    title: 'Analytics Cookies',
                    desc: 'Help us understand how visitors interact with our website.',
                  },
                  {
                    title: 'Preference Cookies',
                    desc: 'Remember your settings and preferences for future visits.',
                  },
                ].map((cookie, i) => (
                  <div
                    key={i}
                    style={{
                      paddingBottom: i < 2 ? '20px' : 0,
                      borderBottom: i < 2 ? '1px solid #E5E5E5' : 'none',
                    }}
                  >
                    <h4
                      style={{
                        fontSize: '16px',
                        fontWeight: 500,
                        color: '#0A0A0A',
                        marginBottom: '8px',
                      }}
                    >
                      {cookie.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '15px',
                        color: '#525252',
                        lineHeight: 1.7,
                      }}
                    >
                      {cookie.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Managing Cookies */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
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
                Managing Cookies
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#525252',
                  lineHeight: 1.7,
                }}
              >
                Most web browsers allow you to control cookies through their settings preferences.
                However, if you limit the ability of websites to set cookies, you may affect your
                overall user experience.
              </p>
            </motion.div>

            {/* Contact Us */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
                Contact Us
              </h2>
              <p
                style={{
                  fontSize: '15px',
                  color: '#525252',
                  lineHeight: 1.7,
                }}
              >
                If you have any questions about our use of cookies, please contact us at
                privacy@oniweb.com.
              </p>
            </motion.div>
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
                If you have any questions about our cookie policy, feel free to reach out to us.
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
