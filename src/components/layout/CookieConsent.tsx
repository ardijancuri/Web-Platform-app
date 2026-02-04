'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const t = useTranslations('cookieConsent');
  const [isVisible, setIsVisible] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);
  const [marketingEnabled, setMarketingEnabled] = useState(false);

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

  // Listen for open cookie preferences event from footer
  useEffect(() => {
    const handleOpenCookiePreferences = () => {
      // Load existing preferences if available
      const consent = localStorage.getItem('cookieConsent');
      if (consent) {
        try {
          const parsed = JSON.parse(consent);
          setAnalyticsEnabled(parsed.analytics || false);
          setMarketingEnabled(parsed.marketing || false);
        } catch {
          // Ignore parse errors
        }
      }
      setShowPreferences(true);
      setIsVisible(true);
    };

    window.addEventListener('openCookiePreferences', handleOpenCookiePreferences);
    return () => window.removeEventListener('openCookiePreferences', handleOpenCookiePreferences);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: true,
      marketing: true,
    }));
    setIsVisible(false);
  };

  const handleAcceptBasic = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: false,
      marketing: false,
    }));
    setIsVisible(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify({
      necessary: true,
      analytics: analyticsEnabled,
      marketing: marketingEnabled,
    }));
    setIsVisible(false);
  };

  const ToggleSwitch = ({
    enabled,
    onChange,
    disabled = false
  }: {
    enabled: boolean;
    onChange?: (value: boolean) => void;
    disabled?: boolean;
  }) => (
    <button
      onClick={() => !disabled && onChange?.(!enabled)}
      disabled={disabled}
      style={{
        width: '48px',
        height: '26px',
        borderRadius: '13px',
        background: enabled ? '#673DE6' : '#E5E5E5',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        position: 'relative',
        transition: 'background 0.2s',
        opacity: disabled ? 0.7 : 1,
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '3px',
          left: enabled ? '25px' : '3px',
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          background: '#FFFFFF',
          transition: 'left 0.2s',
          boxShadow: '0 1px 3px rgba(0,0,0,0.2)',
        }}
      />
    </button>
  );

  return (
    <AnimatePresence mode="wait">
      {isVisible && !showPreferences && (
        <motion.div
          key="banner"
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
                fontSize: '16px',
                fontWeight: 600,
                color: '#0A0A0A',
                marginBottom: '10px',
              }}
            >
              {t('title')}
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: '#525252',
                lineHeight: 1.6,
                marginBottom: '18px',
              }}
            >
              {t('description')}
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleAccept}
                className="btn btn-lg btn-primary w-full"
              >
                {t('accept')}
              </button>

              <button
                onClick={handleAcceptBasic}
                className="btn btn-lg btn-secondary w-full"
              >
                {t('acceptBasic')}
              </button>

              <button
                onClick={() => setShowPreferences(true)}
                className="btn btn-link w-full"
                style={{ marginTop: '4px' }}
              >
                {t('managePreferences')}
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {isVisible && showPreferences && (
        <motion.div
          key="preferences"
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
              maxHeight: 'calc(100vh - 100px)',
              overflowY: 'auto',
            }}
          >
            <h3
              style={{
                fontSize: '16px',
                fontWeight: 600,
                color: '#0A0A0A',
                marginBottom: '10px',
              }}
            >
              {t('preferencesTitle')}
            </h3>
            <p
              style={{
                fontSize: '13px',
                color: '#525252',
                lineHeight: 1.6,
                marginBottom: '20px',
              }}
            >
              {t('preferencesDescription')}
            </p>

            {/* Cookie Options */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '24px' }}>
              {/* Necessary Cookies */}
              <div
                style={{
                  padding: '16px',
                  background: '#FAFAFA',
                  borderRadius: '12px',
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0A0A0A' }}>
                      {t('necessaryCookies')}
                    </h4>
                    <span style={{ fontSize: '12px', color: '#673DE6', fontWeight: 500 }}>
                      {t('alwaysActive')}
                    </span>
                  </div>
                  <ToggleSwitch enabled={true} disabled={true} />
                </div>
                <p style={{ fontSize: '13px', color: '#525252', lineHeight: 1.5 }}>
                  {t('necessaryDescription')}
                </p>
              </div>

              {/* Analytics Cookies */}
              <div
                style={{
                  padding: '16px',
                  background: '#FAFAFA',
                  borderRadius: '12px',
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0A0A0A' }}>
                      {t('analyticsCookies')}
                    </h4>
                    <span style={{ fontSize: '12px', color: '#737373', fontWeight: 500 }}>
                      {t('optional')}
                    </span>
                  </div>
                  <ToggleSwitch enabled={analyticsEnabled} onChange={setAnalyticsEnabled} />
                </div>
                <p style={{ fontSize: '13px', color: '#525252', lineHeight: 1.5 }}>
                  {t('analyticsDescription')}
                </p>
              </div>

              {/* Marketing Cookies */}
              <div
                style={{
                  padding: '16px',
                  background: '#FAFAFA',
                  borderRadius: '12px',
                }}
              >
                <div className="flex items-center justify-between" style={{ marginBottom: '8px' }}>
                  <div>
                    <h4 style={{ fontSize: '15px', fontWeight: 600, color: '#0A0A0A' }}>
                      {t('marketingCookies')}
                    </h4>
                    <span style={{ fontSize: '12px', color: '#737373', fontWeight: 500 }}>
                      {t('optional')}
                    </span>
                  </div>
                  <ToggleSwitch enabled={marketingEnabled} onChange={setMarketingEnabled} />
                </div>
                <p style={{ fontSize: '13px', color: '#525252', lineHeight: 1.5 }}>
                  {t('marketingDescription')}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <button
                onClick={handleSavePreferences}
                className="btn btn-lg btn-primary w-full"
              >
                {t('savePreferences')}
              </button>

              <button
                onClick={() => setShowPreferences(false)}
                className="btn btn-link w-full"
                style={{ marginTop: '4px' }}
              >
                {t('back')}
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
