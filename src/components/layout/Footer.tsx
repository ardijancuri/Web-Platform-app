'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowRight,
} from 'lucide-react';

const Footer = () => {
  const t = useTranslations('footer');
  const navT = useTranslations('nav');

  const services = [
    { href: '/services#web-design', label: navT('webDesign') },
    { href: '/services#ecommerce', label: navT('ecommerce') },
    { href: '/services#web-apps', label: navT('webApps') },
    { href: '/services#hosting', label: navT('hosting') },
  ];

  const company = [
    { href: '/about', label: navT('about') },
    { href: '/portfolio', label: navT('portfolio') },
    { href: '/pricing', label: navT('pricing') },
    { href: '/contact', label: navT('contact') },
  ];

  const legal = [
    { href: '/privacy', label: t('privacy') },
    { href: '/terms', label: t('terms') },
    { href: '/cookies', label: t('cookies') },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ];

  return (
    <footer style={{ background: '#11092A' }}>
      {/* Main Footer */}
      <div className="container" style={{ paddingTop: '64px', paddingBottom: '48px' }}>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5"
          style={{ gap: '48px' }}
        >
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="flex items-center"
              style={{ gap: '12px', marginBottom: '24px' }}
            >
              <div
                className="flex items-center justify-center rounded-lg"
                style={{
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #673DE6 0%, #1A0E4D 100%)',
                }}
              >
                <span style={{ color: '#FFFFFF', fontWeight: 700, fontSize: '18px' }}>W</span>
              </div>
              <span style={{ fontWeight: 500, fontSize: '20px', color: '#FFFFFF', fontFamily: 'Inter, sans-serif' }}>
                Oni<span style={{ color: '#673DE6' }}>Web</span>
              </span>
            </Link>
            <p
              style={{
                color: '#A3A2A1',
                fontSize: '15px',
                lineHeight: 1.7,
                maxWidth: '320px',
                marginBottom: '24px',
              }}
            >
              {t('description')}
            </p>

            {/* Contact Info */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a
                href="mailto:contact@oniweb.com"
                className="flex items-center transition-colors"
                style={{ gap: '12px', color: '#A3A2A1', fontSize: '14px' }}
              >
                <Mail size={18} style={{ color: '#673DE6' }} />
                <span>contact@oniweb.com</span>
              </a>
              <a
                href="tel:+38975222542"
                className="flex items-center transition-colors"
                style={{ gap: '12px', color: '#A3A2A1', fontSize: '14px' }}
              >
                <Phone size={18} style={{ color: '#673DE6' }} />
                <span>+389 75 222 542</span>
              </a>
              <div
                className="flex items-center"
                style={{ gap: '12px', color: '#A3A2A1', fontSize: '14px' }}
              >
                <MapPin size={18} style={{ color: '#673DE6' }} />
                <span>East Gate Living, A2-1, Skopje</span>
              </div>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '20px',
              }}
            >
              {t('services')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors"
                    style={{ color: '#A3A2A1', fontSize: '14px' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '20px',
              }}
            >
              {t('company')}
            </h4>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="transition-colors"
                    style={{ color: '#A3A2A1', fontSize: '14px' }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4
              style={{
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '16px',
                marginBottom: '20px',
              }}
            >
              {t('newsletter.title')}
            </h4>
            <form style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <input
                type="email"
                placeholder={t('newsletter.placeholder')}
                className="transition-colors"
                style={{
                  width: '100%',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  color: '#FFFFFF',
                  fontSize: '14px',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                className="btn btn-md btn-primary flex items-center justify-center"
                style={{ width: '100%', gap: '8px' }}
              >
                {t('newsletter.button')}
                <ArrowRight size={16} />
              </button>
            </form>

            {/* Social Links */}
            <div className="flex items-center" style={{ gap: '12px', marginTop: '24px' }}>
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex items-center justify-center rounded-lg transition-all"
                  style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.05)',
                    color: '#A3A2A1',
                  }}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div className="container" style={{ paddingTop: '24px', paddingBottom: '24px' }}>
          <div className="flex flex-col-reverse md:flex-row items-center justify-between" style={{ gap: '16px' }}>
            <p style={{ color: '#737271', fontSize: '14px' }}>
              © 2026 oniweb. Powered by{' '}
              <a
                href="https://oninova.net"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'underline', color: '#FFC107' }}
              >
                Oninova
              </a>
            </p>
            <div className="flex items-center justify-center flex-wrap" style={{ gap: '16px' }}>
              {legal.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors"
                  style={{ color: '#737271', fontSize: '14px' }}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('openCookiePreferences'))}
                className="transition-colors"
                style={{
                  color: '#737271',
                  fontSize: '14px',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                }}
              >
                {t('manageCookies')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
