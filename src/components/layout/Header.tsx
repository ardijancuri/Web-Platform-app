'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import {
  Menu,
  X,
  ChevronDown,
  Monitor,
  ShoppingCart,
  Code,
  Palette,
  Smartphone,
  Search,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Mega menu structure for services only
  const servicesMegaMenu = {
    label: t('services'),
    sections: [
      {
        title: 'Web Solutions',
        items: [
          { href: '/services#web-design', label: t('webDesign'), icon: Monitor, desc: 'Professional websites' },
          { href: '/services#ecommerce', label: t('ecommerce'), icon: ShoppingCart, desc: 'Online stores' },
          { href: '/services#web-apps', label: t('webApps'), icon: Code, desc: 'Custom applications' },
        ],
      },
      {
        title: 'Features',
        items: [
          { href: '/services#design', label: 'UI/UX Design', icon: Palette, desc: 'Beautiful interfaces' },
          { href: '/services#mobile', label: 'Mobile Responsive', icon: Smartphone, desc: 'Works on all devices' },
          { href: '/services#seo', label: 'SEO Optimization', icon: Search, desc: 'Rank higher on Google' },
        ],
      },
    ],
  };

  const navLinks = [
    { href: '/pricing', label: t('pricing') },
    { href: '/portfolio', label: t('portfolio') },
    { href: '/about', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const handleDropdownEnter = (key: string) => {
    setActiveDropdown(key);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  // Render mega menu content
  const renderMegaMenu = () => {
    return (
      <div className="container">
        <div className="grid grid-cols-2 lg:grid-cols-4" style={{ padding: '32px 0', gap: '32px' }}>
          {servicesMegaMenu.sections.map((section, idx) => (
            <div key={idx}>
              <h4
                style={{
                  fontSize: '12px',
                  fontWeight: 700,
                  color: '#9CA3AF',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '20px',
                }}
              >
                {section.title}
              </h4>
              <div className="flex flex-col" style={{ gap: '6px' }}>
                {section.items.map((item) => (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    onClick={() => setActiveDropdown(null)}
                    className="flex items-center gap-4 p-3 rounded-xl transition-all duration-150 hover:bg-gray-50"
                  >
                    <div
                      className="flex items-center justify-center rounded-xl shrink-0"
                      style={{
                        width: '48px',
                        height: '48px',
                        backgroundColor: '#F3F0FF',
                      }}
                    >
                      <item.icon size={22} style={{ color: '#673DE6' }} />
                    </div>
                    <div>
                      <div style={{ fontSize: '15px', fontWeight: 600, color: '#1F2937', marginBottom: '2px' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '13px', color: '#6B7280', lineHeight: 1.4 }}>{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
          {/* CTA Section */}
          <div
            className="lg:col-span-2 flex flex-col justify-center rounded-2xl"
            style={{
              background: 'linear-gradient(135deg, #673DE6 0%, #4F28B3 100%)',
              padding: '32px',
            }}
          >
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#FFFFFF', marginBottom: '8px' }}>
              Need help choosing?
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', marginBottom: '20px', lineHeight: 1.6 }}>
              Our team is ready to help you find the perfect solution for your business needs.
            </p>
            <Link
              href="/contact"
              onClick={() => setActiveDropdown(null)}
              className="inline-flex items-center justify-center"
              style={{
                background: '#FFC107',
                color: '#2D1F66',
                fontWeight: 600,
                fontSize: '14px',
                padding: '12px 24px',
                borderRadius: '8px',
                width: 'fit-content',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 bg-white ${
        isScrolled ? 'shadow-sm' : ''
      }`}
      style={{ borderBottom: activeDropdown ? 'none' : '1px solid #EBEBEB' }}
    >
      <nav
        className="flex items-center w-full"
        style={{ height: '64px', padding: '0 40px' }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
            <div
              className="flex items-center justify-center rounded-lg"
              style={{
                width: '32px',
                height: '32px',
                background: '#673DE6',
              }}
            >
              <span className="text-white font-bold text-base">W</span>
            </div>
          <span className="text-lg" style={{ color: '#2D1F66', fontFamily: 'Inter, sans-serif', fontWeight: 500 }}>
            Oni<span style={{ color: '#673DE6' }}>Web</span>
          </span>
        </Link>

        {/* Desktop Navigation - left aligned */}
        <div className="hidden lg:flex items-center flex-1" style={{ gap: '32px', marginLeft: '48px' }}>
          {/* Services Trigger */}
          <button
            className="flex items-center gap-1 py-2 font-medium transition-colors hover:text-purple-600"
            style={{
              fontSize: '14px',
              color: activeDropdown === 'services' || isActive('/services') ? '#673DE6' : '#2D1F66',
            }}
            onMouseEnter={() => handleDropdownEnter('services')}
          >
            {servicesMegaMenu.label}
            <ChevronDown
              size={14}
              style={{
                transition: 'opacity 0.2s',
                opacity: activeDropdown === 'services' ? 0.5 : 1,
              }}
            />
          </button>

          {/* Regular nav links */}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="py-2 font-medium transition-colors hover:text-purple-600"
              style={{
                fontSize: '14px',
                color: isActive(link.href) ? '#673DE6' : '#2D1F66',
              }}
              onMouseEnter={() => setActiveDropdown(null)}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden lg:flex items-center shrink-0" style={{ gap: '16px' }}>
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="btn btn-md"
            style={{
              background: '#FFC107',
              color: '#2D1F66',
              fontWeight: 600,
              borderRadius: '8px',
              padding: '10px 20px',
            }}
          >
            {t('getStarted')}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg transition-colors ml-auto"
          style={{ color: '#2D1F66' }}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Full-width Mega Menu Dropdown */}
      <AnimatePresence>
        {activeDropdown === 'services' && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-0 right-0 bg-white hidden lg:block"
            style={{
              top: '64px',
              borderTop: '1px solid #EBEBEB',
              boxShadow: '0 20px 50px rgba(0,0,0,0.1)',
            }}
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={handleDropdownLeave}
          >
            {renderMegaMenu()}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white overflow-hidden"
            style={{ borderTop: '1px solid #EBEBEB' }}
          >
            <div style={{ padding: '16px 20px', maxHeight: '80vh', overflowY: 'auto' }}>
              {/* Services Section */}
              <div style={{ marginBottom: '16px' }}>
                <h4
                  style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#8C8C8C',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    marginBottom: '12px',
                    paddingLeft: '12px',
                  }}
                >
                  {t('services')}
                </h4>
                {servicesMegaMenu.sections.flatMap((section) =>
                  section.items.map((item) => (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors hover:bg-gray-50"
                    >
                      <item.icon size={18} style={{ color: '#673DE6' }} />
                      <span style={{ fontSize: '14px', color: '#2D1F66' }}>{item.label}</span>
                    </Link>
                  ))
                )}
              </div>

              {/* Other Links */}
              <div style={{ paddingTop: '16px', borderTop: '1px solid #EBEBEB' }}>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block px-3 py-2.5 rounded-lg font-medium transition-colors hover:bg-gray-50"
                    style={{
                      fontSize: '14px',
                      color: isActive(link.href) ? '#673DE6' : '#2D1F66',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>

              {/* Bottom Actions */}
              <div
                className="flex items-center justify-between"
                style={{ paddingTop: '16px', marginTop: '16px', borderTop: '1px solid #EBEBEB' }}
              >
                <LanguageSwitcher />
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="btn btn-md"
                  style={{
                    background: '#FFC107',
                    color: '#2D1F66',
                    fontWeight: 600,
                    borderRadius: '8px',
                  }}
                >
                  {t('getStarted')}
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
