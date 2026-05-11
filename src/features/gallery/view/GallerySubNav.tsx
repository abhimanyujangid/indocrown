'use client';

import { useMemo } from 'react';
import { usePathname } from 'next/navigation';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';

import type { Locale } from '@/src/i18n/config';
import NextLink from 'next/link';

type GalleryNavLabels = {
  images: string;
  video: string;
};

export type GallerySubNavProps = {
  locale: Locale;
  labels: GalleryNavLabels;
};

export default function GallerySubNav({ locale, labels }: GallerySubNavProps) {
  const pathname = usePathname();
  const theme = useTheme();

  const { imagesHref, videoHref, active } = useMemo(() => {
    const base = `/${locale}/gallery`;
    const isVideo = pathname.includes('/gallery/video');
    return {
      imagesHref: `${base}/images`,
      videoHref: `${base}/video`,
      active: isVideo ? 'video' : 'images' as const,
    };
  }, [locale, pathname]);

  return (
    <Box sx={{ my: { xs: 3, md: 4 },display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Stack direction="row" spacing={1.5}>
        <Button
          component={NextLink}
          href={imagesHref}
          variant={active === 'images' ? 'contained' : 'outlined'}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 999,
            px: 3,
            borderColor:
              active === 'images'
                ? 'transparent'
                : 'rgba(0,0,0,0.12)',
            ...(active !== 'images' && {
              color: 'text.primary',
              '&:hover': { borderColor: theme.palette.primary.main },
            }),
          }}
        >
          {labels.images}
        </Button>
        <Button
          component={NextLink}
          href={videoHref}
          variant={active === 'video' ? 'contained' : 'outlined'}
          sx={{
            textTransform: 'none',
            fontWeight: 600,
            borderRadius: 999,
            px: 3,
            borderColor:
              active === 'video'
                ? 'transparent'
                : 'rgba(0,0,0,0.12)',
            ...(active !== 'video' && {
              color: 'text.primary',
              '&:hover': { borderColor: theme.palette.primary.main },
            }),
          }}
        >
          {labels.video}
        </Button>
      </Stack>
    </Box>
  );
}
