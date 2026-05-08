import type { Dictionary } from '../../../app/[lang]/dictionaries';
import type { NavItem } from '../types';

export function getNavItems(dict: Dictionary): NavItem[] {
  return [
    { label: dict.nav.demos, href: '#demos', chevron: true },
    { label: dict.nav.about, href: '#about', chevron: false },
    { label: dict.nav.services, href: '#services', chevron: false },
    { label: dict.nav.pricing, href: '#pricing', chevron: false },
    { label: dict.nav.allPages, href: '#pages', chevron: true },
  ];
}
