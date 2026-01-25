'use client';

import { motion } from 'framer-motion';

export default function CookiesPage() {
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

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="heading-1 text-white mb-6">Cookie Policy</h1>
            <p className="text-xl text-neutral-300">Last updated: January 2024</p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">What Are Cookies</h2>
                <p className="text-neutral-600">
                  Cookies are small text files that are placed on your computer or mobile device when you
                  visit a website. They are widely used to make websites work more efficiently and provide
                  information to the owners of the site.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">How We Use Cookies</h2>
                <p className="text-neutral-600 mb-4">We use cookies to:</p>
                <ul className="list-disc pl-6 text-neutral-600 space-y-2">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve your browsing experience</li>
                  <li>Analyze site traffic and performance</li>
                </ul>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">Types of Cookies We Use</h2>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-neutral-900">Essential Cookies</h4>
                    <p className="text-neutral-600">
                      Required for the website to function properly. These cannot be disabled.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Analytics Cookies</h4>
                    <p className="text-neutral-600">
                      Help us understand how visitors interact with our website.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900">Preference Cookies</h4>
                    <p className="text-neutral-600">
                      Remember your settings and preferences for future visits.
                    </p>
                  </div>
                </div>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">Managing Cookies</h2>
                <p className="text-neutral-600">
                  Most web browsers allow you to control cookies through their settings preferences.
                  However, if you limit the ability of websites to set cookies, you may affect your
                  overall user experience.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">Contact Us</h2>
                <p className="text-neutral-600">
                  If you have any questions about our use of cookies, please contact us at
                  privacy@webcraftpro.com.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
