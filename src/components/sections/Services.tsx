'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Monitor,
  ShoppingCart,
  Code,
  Server,
  ArrowUpRight,
} from 'lucide-react';

const Services = () => {
  const t = useTranslations('services');

  const services = [
    {
      id: 'web-design',
      icon: Monitor,
      title: t('webDesign.title'),
      description: t('webDesign.description'),
      features: t.raw('webDesign.features') as string[],
      number: '01',
    },
    {
      id: 'ecommerce',
      icon: ShoppingCart,
      title: t('ecommerce.title'),
      description: t('ecommerce.description'),
      features: t.raw('ecommerce.features') as string[],
      number: '02',
    },
    {
      id: 'web-apps',
      icon: Code,
      title: t('webApps.title'),
      description: t('webApps.description'),
      features: t.raw('webApps.features') as string[],
      number: '03',
    },
    {
      id: 'hosting',
      icon: Server,
      title: t('hosting.title'),
      description: t('hosting.description'),
      features: t.raw('hosting.features') as string[],
      number: '04',
    },
  ];

  return (
    <section
      style={{
        background: '#0A0A0A',
        padding: '100px 0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div
          className="flex flex-col md:flex-row md:items-end md:justify-between"
          style={{ marginBottom: '60px' }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#673DE6',
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                marginBottom: '12px',
                display: 'block',
              }}
            >
              Services
            </span>
            <h2
              style={{
                fontSize: 'clamp(32px, 5vw, 48px)',
                fontWeight: 700,
                color: '#FFFFFF',
                lineHeight: 1.1,
                maxWidth: '500px',
              }}
            >
              {t('title')}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{
              fontSize: '16px',
              color: '#A3A3A3',
              maxWidth: '400px',
              marginTop: '24px',
            }}
          >
            {t('subtitle')}
          </motion.p>
        </div>

        {/* Services List */}
        <div style={{ borderTop: '1px solid #262626' }}>
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link
                href={`/services#${service.id}`}
                className="group flex flex-col lg:flex-row lg:items-center py-8 transition-all duration-300"
                style={{
                  borderBottom: '1px solid #262626',
                  gap: '24px',
                }}
              >
                {/* Number */}
                <span
                  style={{
                    fontSize: '14px',
                    fontWeight: 500,
                    color: '#525252',
                    minWidth: '40px',
                  }}
                >
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className="transition-all duration-300 group-hover:bg-white"
                  style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '12px',
                    background: '#1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <service.icon
                    size={24}
                    className="transition-colors duration-300 group-hover:text-black"
                    style={{ color: '#FFFFFF' }}
                  />
                </div>

                {/* Content */}
                <div className="flex-1" style={{ minWidth: 0 }}>
                  <h3
                    className="transition-colors duration-300 group-hover:text-[#673DE6]"
                    style={{
                      fontSize: '24px',
                      fontWeight: 600,
                      color: '#FFFFFF',
                      marginBottom: '8px',
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: '15px',
                      lineHeight: 1.6,
                      color: '#737373',
                      maxWidth: '500px',
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div
                  className="hidden xl:flex flex-wrap justify-end"
                  style={{ gap: '8px', maxWidth: '300px' }}
                >
                  {service.features.slice(0, 3).map((feature: string, idx: number) => (
                    <span
                      key={idx}
                      style={{
                        padding: '6px 12px',
                        background: '#1A1A1A',
                        borderRadius: '100px',
                        fontSize: '12px',
                        color: '#A3A3A3',
                        fontWeight: 500,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div
                  className="transition-all duration-300 group-hover:bg-[#673DE6] group-hover:translate-x-1 group-hover:-translate-y-1"
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: '#1A1A1A',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <ArrowUpRight size={20} style={{ color: '#FFFFFF' }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
