import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NextLink from 'next/link';

import AnimatedButton from '@/src/components/AnimatedButton';
import { localizedPath } from '@/src/i18n/paths';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';
import { ChevronDownIcon, LeafGlyph } from './NavIcons';
import NavItemLink from './NavItemLink';

import type { NavItem, NavbarProps, NavbarTone } from '../types';

type DesktopNavProps = NavbarProps & {
  navItems: NavItem[];
  navTone?: NavbarTone;
};

export default function DesktopNav({ dict, locale, navItems, navTone = 'onDark' }: DesktopNavProps) {
  const isLightNav = navTone === 'onLight';
  const contactHref = localizedPath(locale, '/contact-us');

  return (
    <>
      <Stack direction="row" spacing={3} sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
        {navItems.map((item) => (
          <NavItemLink key={item.label} item={item} navTone={navTone} />
        ))}
      </Stack>

      <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end' }}>
        <LanguageSwitcher locale={locale} tone={navTone} />
        <AnimatedButton
          component={NextLink}
          href={contactHref}
          btnVariant={isLightNav ? 2 : 1}
          startIcon={<LeafGlyph size={18} />}
        >
          {dict.nav.cta}
        </AnimatedButton>
      </Stack>
    </>
  );
}
