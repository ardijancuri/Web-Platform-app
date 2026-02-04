'use client';

import { useEffect, useLayoutEffect } from 'react';
import { usePathname } from '@/i18n/routing';

const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export default function ScrollToTop() {
  const pathname = usePathname();

  // Use layout effect to scroll before paint
  useIsomorphicLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
