export const locales = ['en', 'mk', 'sq'] as const;
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'mk';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  mk: 'Македонски',
  sq: 'Shqip',
};

export const localeFlags: Record<Locale, string> = {
  en: '🇬🇧',
  mk: '🇲🇰',
  sq: '🇦🇱',
};
