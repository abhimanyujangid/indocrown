import type { Dictionary } from '../../../app/[lang]/dictionaries';
import type { NavItem } from '../types';

export function getNavItems(dict: Dictionary, locale?: 'en' | 'hi'): NavItem[] {
  const currentLocale = locale;
  return [
    { label: dict.nav.about, href: '#about', chevron: false },
    { label: dict.nav.gallery, href: '#gallery', chevron: false },
    { label: dict.nav.contact, href: `/${currentLocale}/contact-us`, chevron: false },
  ];
}
