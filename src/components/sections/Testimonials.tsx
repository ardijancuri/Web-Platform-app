'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import Image from 'next/image';

const Testimonials = () => {
  const t = useTranslations('testimonials');

  const testimonials = [
    {
      id: 1,
      name: 'Marko Petrovski',
      role: 'CEO, TechStart MK',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'The team delivered an exceptional website that perfectly represents our brand. Our online presence has never been stronger.',
    },
    {
      id: 2,
      name: 'Ana Stefanovska',
      role: 'Owner, Fashion Boutique',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face',
      content: 'Our e-commerce store has transformed our business. Sales increased by 200% in the first three months!',
    },
    {
      id: 3,
      name: 'Blerim Ahmeti',
      role: 'Founder, Restaurant Chain',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Professional service from start to finish. The booking system they built has streamlined our operations completely.',
    },
  ];

  return (
    <section
      style={{
        background: '#FFFFFF',
        padding: '100px 0',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
          style={{ marginBottom: '60px' }}
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
            Testimonials
          </span>
          <h2
            style={{
              fontSize: 'clamp(32px, 5vw, 48px)',
              fontWeight: 700,
              color: '#0A0A0A',
              lineHeight: 1.1,
            }}
          >
            {t('title')}
          </h2>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3" style={{ gap: '24px' }}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div
                className="h-full flex flex-col transition-all duration-300"
                style={{
                  background: '#FAFAFA',
                  borderRadius: '20px',
                  padding: '32px',
                }}
              >
                {/* Quote Icon */}
                <div
                  style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '12px',
                    background: '#F0F0F0',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '24px',
                  }}
                >
                  <Quote size={20} style={{ color: '#673DE6' }} />
                </div>

                {/* Content */}
                <p
                  className="flex-1"
                  style={{
                    color: '#0A0A0A',
                    fontSize: '17px',
                    lineHeight: 1.7,
                    marginBottom: '32px',
                    fontWeight: 500,
                  }}
                >
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center" style={{ gap: '14px' }}>
                  <div
                    className="relative rounded-full overflow-hidden"
                    style={{
                      width: '48px',
                      height: '48px',
                      border: '2px solid #E5E5E5',
                    }}
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        color: '#0A0A0A',
                        fontWeight: 600,
                        fontSize: '15px',
                        marginBottom: '2px',
                      }}
                    >
                      {testimonial.name}
                    </h4>
                    <p style={{ color: '#737373', fontSize: '13px' }}>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
