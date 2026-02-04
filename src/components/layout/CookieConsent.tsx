'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      // Small delay before showing the banner
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleAcceptBasic = () => {
    localStorage.setItem('cookieConsent', 'basic');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed z-50"
          style={{
            bottom: '24px',
            left: '24px',
            maxWidth: '400px',
            width: 'calc(100% - 48px)',
          }}
        >
          <div
            style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '24px',
              boxShadow: '0 4px 24px rgba(0, 0, 0, 0.12)',
              border: '1px solid #E5E5E5',
            }}
          >
            <h3
              style={{
                fontSize: '18px',
                fontWeight: 600,
                color: '#0A0A0A',
                marginBottom: '12px',
              }}
            >
              We care about your privacy.
            </h3>
            <p
              style={{
                fontSize: '14px',
                color: '#525252',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              Some tracking technologies are important for the correct functioning of our website
              and are always on. By clicking &quot;Accept&quot; you are also directing us to use
              optional tracking technologies. You can learn more about those technologies by
              clicking &quot;Manage Cookie Preferences.&quot;
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleAccept}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: '#673DE6',
                  color: '#FFFFFF',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: '100px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#5a34cc')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#673DE6')}
              >
                Accept
              </button>

              <button
                onClick={handleAcceptBasic}
                style={{
                  width: '100%',
                  padding: '14px 24px',
                  background: '#FFFFFF',
                  color: '#0A0A0A',
                  fontSize: '15px',
                  fontWeight: 600,
                  borderRadius: '100px',
                  border: '1px solid #E5E5E5',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#F5F5F5')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#FFFFFF')}
              >
                Accept Basic Cookies
              </button>

              <Link
                href="/cookies"
                style={{
                  display: 'block',
                  textAlign: 'center',
                  fontSize: '14px',
                  fontWeight: 500,
                  color: '#0A0A0A',
                  textDecoration: 'underline',
                  marginTop: '4px',
                }}
              >
                Manage Cookie Preferences
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
