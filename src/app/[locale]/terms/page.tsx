'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            <h1 className="heading-1 text-white mb-6">Terms of Service</h1>
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
                <h2 className="heading-3 text-neutral-900 mb-4">1. Acceptance of Terms</h2>
                <p className="text-neutral-600">
                  By accessing and using our services, you accept and agree to be bound by the terms
                  and provision of this agreement. If you do not agree to abide by these terms,
                  please do not use our services.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">2. Services Description</h2>
                <p className="text-neutral-600">
                  WebCraft Pro provides web design, development, e-commerce solutions, and hosting
                  services. The specific details, deliverables, and timelines will be outlined in
                  individual project agreements or quotes.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">3. Payment Terms</h2>
                <p className="text-neutral-600">
                  Payment terms are specified in individual project quotes. Generally, we require
                  a 50% deposit before work begins, with the remaining balance due upon project
                  completion. All prices are in Euros unless otherwise stated.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">4. Intellectual Property</h2>
                <p className="text-neutral-600">
                  Upon full payment, clients receive ownership of the custom work created specifically
                  for their project. We retain rights to any pre-existing materials, templates, or
                  tools used in the creation of the project.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">5. Limitation of Liability</h2>
                <p className="text-neutral-600">
                  Our liability is limited to the amount paid for services. We are not responsible
                  for any indirect, incidental, or consequential damages arising from the use of
                  our services.
                </p>
              </div>

              <div className="card p-8">
                <h2 className="heading-3 text-neutral-900 mb-4">6. Contact</h2>
                <p className="text-neutral-600">
                  For any questions regarding these terms, please contact us at legal@webcraftpro.com
                  or through our contact page.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
