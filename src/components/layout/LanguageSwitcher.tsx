'use client';

import { useState } from 'react';
import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { Globe, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { locales, localeNames, type Locale } from '@/i18n/config';

const LanguageSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const locale = useLocale() as Locale;
  const pathname = usePathname();
  const router = useRouter();

  const handleLocaleChange = (newLocale: Locale) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className="flex items-center rounded-md font-medium transition-all duration-150"
        style={{
          gap: '4px',
          padding: '6px 10px',
          fontSize: '14px',
          color: '#525252',
          backgroundColor: isOpen ? '#F5F5F5' : 'transparent',
        }}
      >
        <Globe size={16} />
        <span style={{ textTransform: 'uppercase', fontWeight: 500 }}>{locale}</span>
        <ChevronDown
          size={14}
          style={{
            transition: 'opacity 0.15s',
            opacity: isOpen ? 0.5 : 1,
          }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.1 }}
            className="absolute top-full right-0 mt-1 overflow-hidden rounded-lg"
            style={{
              width: '140px',
              background: '#FFFFFF',
              boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
              border: '1px solid #E5E5E5',
            }}
          >
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                className="w-full flex items-center text-left transition-colors duration-100"
                style={{
                  padding: '10px 14px',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: locale === loc ? '#673DE6' : '#404040',
                  backgroundColor: locale === loc ? '#F5F3FF' : 'transparent',
                }}
              >
                {localeNames[loc]}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
