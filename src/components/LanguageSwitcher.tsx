'use client';

import type { MouseEvent } from 'react';

import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { usePathname, useRouter } from 'next/navigation';

import type { Locale } from '../i18n/config';

type LanguageSwitcherProps = {
  locale: Locale;
};

export default function LanguageSwitcher({ locale }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLocale = (_event: MouseEvent<HTMLElement>, next: Locale | null) => {
    if (!next || next === locale) return;

    const segments = pathname.split('/').filter(Boolean);
    if (segments.length === 0) {
      router.push(`/${next}`);
      return;
    }

    segments[0] = next;
    router.push(`/${segments.join('/')}`);
  };

  return (
    <ToggleButtonGroup
      value={locale}
      exclusive
      onChange={handleLocale}
      size="small"
      sx={{
        '& .MuiToggleButton-root': {
          px: 1.25,
          py: 0.25,
          fontSize: '0.8125rem',
          fontWeight: 600,
          color: 'common.white',
          borderColor: 'rgba(255,255,255,0.35)',
          '&.Mui-selected': {
            bgcolor: 'rgba(255,255,255,0.18)',
            color: 'common.white',
            '&:hover': {
              bgcolor: 'rgba(255,255,255,0.22)',
            },
          },
        },
      }}
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="hi" aria-label="Hindi">
        हिं
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
