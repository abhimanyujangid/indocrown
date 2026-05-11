import type { Dictionary } from '../../../app/[lang]/dictionaries';
import type { Locale } from '../../../i18n/config';

/** `onLight`: solid white bar & dark foreground (About and similar light heroes). */
export type NavbarTone = 'onDark' | 'onLight';

export type NavbarProps = {
  dict: Dictionary;
  locale: Locale;
  navbarTone?: NavbarTone;
  
};

export type NavItem = {
  label: string;
  href: string;
  chevron: boolean;
};
