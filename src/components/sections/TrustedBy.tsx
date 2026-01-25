'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const TrustedBy = () => {
  const t = useTranslations('trustedBy');

  // Placeholder company logos (using text placeholders styled as logos)
  const companies = [
    { name: 'TechCorp', width: '120px' },
    { name: 'Innovate', width: '100px' },
    { name: 'GrowthLab', width: '110px' },
    { name: 'DataFlow', width: '95px' },
    { name: 'CloudSync', width: '115px' },
    { name: 'WebScale', width: '105px' },
  ];

  return (
    <section
      style={{
        background: '#FAFAFA',
        borderTop: '1px solid #E5E5E5',
        borderBottom: '1px solid #E5E5E5',
        padding: '48px 0',
      }}
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <p
            style={{
              fontSize: '14px',
              color: '#737373',
              marginBottom: '32px',
              fontWeight: 500,
            }}
          >
            {t('title')}
          </p>

          {/* Logo grid */}
          <div
            className="flex flex-wrap items-center justify-center"
            style={{ gap: '40px' }}
          >
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                style={{
                  fontSize: '18px',
                  fontWeight: 700,
                  color: '#A3A3A3',
                  letterSpacing: '-0.02em',
                }}
              >
                {company.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBy;
