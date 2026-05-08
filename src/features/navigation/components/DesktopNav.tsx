import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';

import AnimatedButton from '@/src/components/AnimatedButton';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';
import { ChevronDownIcon, LeafGlyph } from './NavIcons';

import type { NavItem, NavbarProps } from '../types';

type DesktopNavProps = NavbarProps & {
  navItems: NavItem[];
};

export default function DesktopNav({ dict, locale, navItems }: DesktopNavProps) {
  return (
    <>
      <Stack direction="row" spacing={3} sx={{ flex: 1, display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            underline="none"
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.25,
              color: 'common.white',
              fontWeight: 500,
              fontSize: '0.9375rem',
              '&:hover': { color: 'rgba(255,255,255,0.85)' },
            }}
          >
            {item.label}
            {item.chevron ? <ChevronDownIcon /> : null}
          </Link>
        ))}
      </Stack>

      <Stack direction="row" spacing={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'flex-end' }}>
        <LanguageSwitcher locale={locale} />
        <AnimatedButton startIcon={<LeafGlyph size={18} />}>{dict.nav.cta}</AnimatedButton>
      </Stack>
    </>
  );
}
