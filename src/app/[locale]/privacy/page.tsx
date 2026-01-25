'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
            <h1 className="heading-1 text-white mb-6">Privacy Policy</h1>
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
                <h2 className="heading-3 text-neutral-900 mb-4">1. Information We Collect</h2>
                <p className="text-neutral-600">
                  We collect information you provide directly to us, such as when you create an account,
                  make a purchase, contact us for support, or otherwise communicate with us. This information
                  may include your name, email address, phone number, and any other information you choose to provide.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">2. How We Use Your Information</h2>
                <p className="text-neutral-600">
                  We use the information we collect to provide, maintain, and improve our services,
                  process transactions, send you technical notices and support messages, respond to
                  your comments and questions, and provide customer service.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">3. Information Sharing</h2>
                <p className="text-neutral-600">
                  We do not share, sell, or otherwise disclose your personal information to third parties
                  except as described in this policy or with your consent. We may share information with
                  service providers who perform services on our behalf.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">4. Data Security</h2>
                <p className="text-neutral-600">
                  We take reasonable measures to help protect your personal information from loss, theft,
                  misuse, unauthorized access, disclosure, alteration, and destruction.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">5. Contact Us</h2>
                <p className="text-neutral-600">
                  If you have any questions about this Privacy Policy, please contact us at
                  privacy@webcraftpro.com or through our contact page.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
