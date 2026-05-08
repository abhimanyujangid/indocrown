import 'server-only';

import type { Locale } from '../../i18n/config';

const dictionaries = {
  en: () => import('./dictionaries/en.json').then((m) => m.default),
  hi: () => import('./dictionaries/hi.json').then((m) => m.default),
} as const;

export type Dictionary = Awaited<ReturnType<(typeof dictionaries)[Locale]>>;

export function hasLocale(locale: string): locale is Locale {
  return locale in dictionaries;
}

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}
