import { LanguagesContext } from './context';

export type LanguagesEvents =
  | {
      type: 'START';
    }
  | { type: 'CHANGE_LANGUAGE'; locale: keyof LanguagesContext['locales'] };
