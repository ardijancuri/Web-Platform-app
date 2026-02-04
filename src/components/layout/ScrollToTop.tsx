'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from '@/i18n/routing';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { gsap } from 'gsap';

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const pathname = usePathname();

  // Use layout effect to scroll before paint
  useIsomorphicLayoutEffect(() => {
    // Clear any GSAP ScrollTrigger state that might affect scroll position
    if (typeof window !== 'undefined') {
      ScrollTrigger.getAll().forEach((st) => st.kill());
      ScrollTrigger.clearScrollMemory();
      ScrollTrigger.refresh(true);
    }

    // Force scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    // Double-check with requestAnimationFrame for any delayed scroll restoration
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    });
  }, [pathname]);

  return null;
}
