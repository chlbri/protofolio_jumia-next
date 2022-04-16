import { locales } from './locales';

export type LanguagesContext = {
  iterator: number;
  locales: typeof locales;
  locale: keyof typeof locales;
  current: typeof locales[keyof typeof locales];
};

export const languagesContext: LanguagesContext = {
  iterator: 0,
  locales,
  locale: 'fr',
  current: locales.fr,
};
