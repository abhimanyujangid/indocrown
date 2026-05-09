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
        '& .MuiToggleButtonGroup-grouped': {
          borderColor: 'rgba(255, 255, 255, 0.4)',
          borderWidth: '1px',
          '&:first-of-type': {
            borderRadius: '24px 0 0 24px',
            pl: 2.5,
            pr: 2,
          },
          '&:not(:first-of-type)': {
            borderRadius: '0 24px 24px 0',
            pl: 2,
            pr: 2.5,
          },
        },
        '& .MuiToggleButton-root': {
          py: '8px',
          fontSize: '0.875rem',
          fontWeight: 600,
          color: 'common.white',
          bgcolor: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(8px)',
          transition: 'all 0.2s',
          '&:hover': {
            bgcolor: 'rgba(255, 255, 255, 0.15)',
          },
          '&.Mui-selected': {
            bgcolor: 'rgba(255, 255, 255, 0.25)',
            color: 'common.white',
            '&:hover': {
              bgcolor: 'rgba(255, 255, 255, 0.3)',
            },
          },
        },
      }}
    >
      <ToggleButton value="en" aria-label="English">
        EN
      </ToggleButton>
      <ToggleButton value="hi" aria-label="Hindi">
        हि
      </ToggleButton>
    </ToggleButtonGroup>
  );
}
