import type { Dictionary } from '../../../app/[lang]/dictionaries';
import type { Locale } from '../../../i18n/config';

export type NavbarProps = {
  dict: Dictionary;
  locale: Locale;
};

export type NavItem = {
  label: string;
  href: string;
  chevron: boolean;
};
