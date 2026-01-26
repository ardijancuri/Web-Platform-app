'use client';

import { useState, useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/routing';
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  Monitor,
  ShoppingCart,
  Code,
  Palette,
  Smartphone,
  Search,
  ArrowRight,
  Globe,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from '@/i18n/routing';
import { useLocale } from 'next-intl';
import { locales, localeNames, type Locale } from '@/i18n/config';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const t = useTranslations('nav');
  const pathname = usePathname();
  const router = useRouter();
  const locale = useLocale() as Locale;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileLanguageOpen, setMobileLanguageOpen] = useState(false);
  const languageDropdownRef = useRef<HTMLDivElement>(null);

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setMobileLanguageOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      setMobileLanguageOpen(false); // Close language dropdown when menu opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Close mobile language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        languageDropdownRef.current &&
        !languageDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileLanguageOpen(false);
      }
    };

    if (mobileLanguageOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileLanguageOpen]);

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
        className="flex items-center justify-between w-full"
        style={{ height: '64px', padding: '0 16px' }}
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

        {/* Mobile Language + Menu Button */}
        <div className="lg:hidden flex items-center" style={{ gap: '8px' }}>
          {/* Mobile Language Switcher */}
          <div ref={languageDropdownRef}>
            <button
              onClick={() => setMobileLanguageOpen(!mobileLanguageOpen)}
              className="flex items-center rounded-lg transition-colors"
              style={{
                padding: '8px 10px',
                gap: '4px',
                color: '#525252',
                backgroundColor: mobileLanguageOpen ? '#F5F5F5' : 'transparent',
              }}
            >
              <Globe size={18} />
              <span style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase' }}>
                {locale}
              </span>
              <ChevronDown
                size={14}
                style={{
                  transition: 'transform 0.2s',
                  transform: mobileLanguageOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                }}
              />
            </button>
          </div>

          {/* Hamburger Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center rounded-lg transition-colors active:bg-gray-100"
            style={{
              color: '#2D1F66',
              width: '44px',
              height: '44px',
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Language Dropdown - positioned under nav border */}
      <AnimatePresence>
        {mobileLanguageOpen && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.15 }}
            className="lg:hidden absolute left-0 right-0 overflow-hidden"
            style={{
              top: '64px',
              background: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              borderTop: '1px solid #EBEBEB',
              zIndex: 60,
              padding: '10px 0',
            }}
          >
            <div style={{ padding: '8px 16px' }}>
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => handleLocaleChange(loc)}
                  className="w-full flex items-center transition-colors duration-100"
                  style={{
                    padding: '14px 12px',
                    fontSize: '15px',
                    fontWeight: 500,
                    color: locale === loc ? '#673DE6' : '#404040',
                    backgroundColor: locale === loc ? '#F5F3FF' : 'transparent',
                    borderRadius: '8px',
                  }}
                >
                  {localeNames[loc]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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

      {/* Full Screen Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-40"
            style={{ top: '64px' }}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/20"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Content */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="absolute right-0 top-0 bottom-0 w-full bg-white overflow-y-auto"
              style={{ maxWidth: '100%' }}
            >
              <div className="flex flex-col min-h-full" style={{ padding: '20px 20px' }}>
                {/* Services Accordion */}
                <div style={{ marginBottom: '8px' }}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="w-full flex items-center justify-between"
                    style={{
                      padding: '16px 0',
                      borderBottom: '1px solid #F3F4F6',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color: '#0A0A0A',
                      }}
                    >
                      {t('services')}
                    </span>
                    <ChevronDown
                      size={20}
                      style={{
                        color: '#6B7280',
                        transition: 'transform 0.2s',
                        transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      }}
                    />
                  </button>

                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        style={{ overflow: 'hidden' }}
                      >
                        <div style={{ padding: '12px 0 8px' }}>
                          {servicesMegaMenu.sections.map((section, idx) => (
                            <div key={idx} style={{ marginBottom: '16px' }}>
                              <h4
                                style={{
                                  fontSize: '11px',
                                  fontWeight: 600,
                                  color: '#9CA3AF',
                                  textTransform: 'uppercase',
                                  letterSpacing: '0.08em',
                                  marginBottom: '12px',
                                  paddingLeft: '4px',
                                }}
                              >
                                {section.title}
                              </h4>
                              {section.items.map((item) => (
                                <Link
                                  key={item.href + item.label}
                                  href={item.href}
                                  onClick={() => {
                                    setIsMobileMenuOpen(false);
                                    setMobileServicesOpen(false);
                                  }}
                                  className="flex items-center gap-4 rounded-xl transition-all active:bg-gray-100"
                                  style={{ padding: '12px 8px' }}
                                >
                                  <div
                                    className="flex items-center justify-center rounded-xl shrink-0"
                                    style={{
                                      width: '44px',
                                      height: '44px',
                                      backgroundColor: '#F3F0FF',
                                    }}
                                  >
                                    <item.icon size={20} style={{ color: '#673DE6' }} />
                                  </div>
                                  <div className="flex-1">
                                    <div
                                      style={{
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        color: '#1F2937',
                                        marginBottom: '2px',
                                      }}
                                    >
                                      {item.label}
                                    </div>
                                    <div style={{ fontSize: '13px', color: '#6B7280' }}>
                                      {item.desc}
                                    </div>
                                  </div>
                                  <ChevronRight size={18} style={{ color: '#D1D5DB' }} />
                                </Link>
                              ))}
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Main Navigation Links */}
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-between transition-all active:bg-gray-50"
                    style={{
                      padding: '16px 0',
                      borderBottom: '1px solid #F3F4F6',
                    }}
                  >
                    <span
                      style={{
                        fontSize: '18px',
                        fontWeight: 500,
                        color: isActive(link.href) ? '#673DE6' : '#0A0A0A',
                      }}
                    >
                      {link.label}
                    </span>
                    {isActive(link.href) && (
                      <div
                        style={{
                          width: '8px',
                          height: '8px',
                          borderRadius: '50%',
                          backgroundColor: '#673DE6',
                        }}
                      />
                    )}
                  </Link>
                ))}

                {/* Spacer */}
                <div className="flex-1" style={{ minHeight: '24px' }} />

                {/* CTA Button */}
                <div
                  style={{
                    marginTop: 'auto',
                  }}
                >
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2"
                    style={{
                      background: '#673DE6',
                      color: '#FFFFFF',
                      fontWeight: 600,
                      fontSize: '16px',
                      padding: '16px 24px',
                      borderRadius: '12px',
                    }}
                  >
                    {t('getStarted')}
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
