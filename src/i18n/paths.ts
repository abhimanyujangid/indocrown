import { locales, type Locale } from './config';

export function localizedPath(locale: Locale, path: string): string {
  if (/^(https?:|mailto:|tel:)/.test(path)) return path;
  if (path === '#' || path === '') return `/${locale}`;

  const normalized = path.startsWith('/') ? path : `/${path}`;
  if (locales.some((l) => normalized === `/${l}` || normalized.startsWith(`/${l}/`))) {
    return normalized;
  }

  return `/${locale}${normalized}`;
}
