'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { motion } from 'framer-motion';
import {
  Award,
  Users,
  Target,
  Heart,
  Lightbulb,
  Shield,
  MessageSquare,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const t = useTranslations('about');

  const values = [
    {
      icon: Award,
      title: t('values.quality.title'),
      description: t('values.quality.description'),
      color: 'bg-blue-500',
    },
    {
      icon: Lightbulb,
      title: t('values.innovation.title'),
      description: t('values.innovation.description'),
      color: 'bg-purple-500',
    },
    {
      icon: Heart,
      title: t('values.support.title'),
      description: t('values.support.description'),
      color: 'bg-red-500',
    },
    {
      icon: MessageSquare,
      title: t('values.transparency.title'),
      description: t('values.transparency.description'),
      color: 'bg-green-500',
    },
  ];

  const team = [
    {
      name: 'Aleksandar Dimitrov',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      bio: '15+ years in web development',
    },
    {
      name: 'Elena Petrova',
      role: 'Lead Designer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face',
      bio: 'UI/UX specialist with 10+ years experience',
    },
    {
      name: 'Marko Stojanovski',
      role: 'Senior Developer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      bio: 'Full-stack expert in modern technologies',
    },
    {
      name: 'Sara Angelova',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      bio: 'Ensures smooth project delivery',
    },
  ];

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '300+', label: 'Happy Clients' },
    { value: '10+', label: 'Years Experience' },
    { value: '15+', label: 'Team Members' },
  ];

  const milestones = [
    { year: '2014', title: 'Company Founded', desc: 'Started as a small freelance team' },
    { year: '2016', title: 'First Major Client', desc: 'Secured our first enterprise contract' },
    { year: '2018', title: 'Team Expansion', desc: 'Grew to 10+ team members' },
    { year: '2020', title: 'E-Commerce Focus', desc: 'Launched specialized e-commerce services' },
    { year: '2022', title: '500+ Projects', desc: 'Reached 500 completed projects milestone' },
    { year: '2024', title: 'Regional Leader', desc: 'Became leading web agency in the region' },
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
            <span className="badge badge-dark mb-6">{t('title')}</span>
            <h1 className="heading-1 text-white mb-6">{t('title')}</h1>
            <p className="text-xl text-neutral-300 mb-8">{t('subtitle')}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative -mt-10 z-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-neutral-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge mb-4">{t('story.title')}</span>
              <h2 className="heading-2 text-neutral-900 mb-6">
                {t('story.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {t('story.description')}
              </p>

              <div className="space-y-4">
                {[
                  'Over 500 websites created',
                  '300+ satisfied clients',
                  'Expert team of 15+ professionals',
                  'Serving clients across 10+ countries',
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={20} className="text-green-500" />
                    <span className="text-neutral-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Our Team"
                  width={800}
                  height={600}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
              </div>
              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center">
                    <Award size={24} className="text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">10+ Years</div>
                    <div className="text-sm text-neutral-600">of Excellence</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="card p-6"
                  >
                    <div
                      className={`w-12 h-12 rounded-xl ${value.color} flex items-center justify-center mb-4`}
                    >
                      <value.icon size={24} className="text-white" />
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-neutral-600">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <span className="badge mb-4">{t('mission.title')}</span>
              <h2 className="heading-2 text-neutral-900 mb-6">
                {t('mission.title')}
              </h2>
              <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                {t('mission.description')}
              </p>

              <h3 className="heading-4 text-neutral-900 mb-4">
                {t('values.title')}
              </h3>
              <p className="text-neutral-600">
                We believe in delivering excellence through quality work,
                continuous innovation, dedicated support, and transparent
                communication with all our clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="badge mb-4">Our Journey</span>
            <h2 className="heading-2 text-neutral-900 mb-4">
              A Decade of Growth
            </h2>
            <p className="text-lg text-neutral-600">
              From a small freelance team to a leading web development agency
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-accent-500 rounded-full hidden md:block" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'} hidden md:block`}>
                    <div className="card p-6 inline-block">
                      <div className="text-2xl font-bold text-primary-600 mb-2">
                        {milestone.year}
                      </div>
                      <h4 className="font-semibold text-neutral-900 mb-1">
                        {milestone.title}
                      </h4>
                      <p className="text-neutral-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>

                  <div className="w-4 h-4 rounded-full bg-primary-600 ring-4 ring-primary-100 z-10 hidden md:block" />

                  <div className="flex-1 hidden md:block" />

                  {/* Mobile View */}
                  <div className="md:hidden card p-6 w-full">
                    <div className="text-2xl font-bold text-primary-600 mb-2">
                      {milestone.year}
                    </div>
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-neutral-600 text-sm">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section bg-neutral-50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="badge mb-4">{t('team.title')}</span>
            <h2 className="heading-2 text-neutral-900 mb-4">{t('team.title')}</h2>
            <p className="text-lg text-neutral-600">{t('team.subtitle')}</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="card overflow-hidden">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="p-6 text-center">
                    <h4 className="font-semibold text-neutral-900 mb-1">
                      {member.name}
                    </h4>
                    <p className="text-primary-600 text-sm font-medium mb-2">
                      {member.role}
                    </p>
                    <p className="text-neutral-600 text-sm">{member.bio}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-primary-600 to-primary-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-500/20 rounded-full blur-3xl" />
        </div>
        <div className="container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help bring your vision to life.
            </p>
            <Link href="/contact" className="btn btn-white btn-lg">
              Contact Our Team
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
