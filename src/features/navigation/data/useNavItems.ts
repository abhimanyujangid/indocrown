import type { Dictionary } from '../../../app/[lang]/dictionaries';
import type { Locale } from '../../../i18n/config';
import { localizedPath } from '../../../i18n/paths';
import type { NavItem } from '../types';

export function getNavItems(dict: Dictionary, locale: Locale): NavItem[] {
  return [
    { label: dict.nav.about, href: localizedPath(locale, '/about'), chevron: false },
    { label: dict.nav.gallery, href: localizedPath(locale, '/gallery/images'), chevron: false },
    { label: dict.nav.contact, href: localizedPath(locale, '/contact-us'), chevron: false },
  ];
}
