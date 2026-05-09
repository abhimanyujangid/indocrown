'use client';

import { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

import { getNavItems } from '../data/useNavItems';
import DesktopNav from '../components/DesktopNav';
import MobileDrawer from '../components/MobileDrawer';
import { LeafGlyph, MenuIcon } from '../components/NavIcons';
import type { NavbarProps } from '../types';

export default function Navbar({ dict, locale }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navItems = getNavItems(dict, locale);
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  return (
    <AppBar
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        bgcolor: trigger ? theme.palette.primary.main : 'transparent',
        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        borderBottom: 'none',
        color: 'common.white',
        borderRadius: 0
      }}
    >
      <Toolbar sx={{ py: 1.5, maxWidth: 'xl', width: '100%', mx: 'auto', px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center', minWidth: 0 }}>
          <LeafGlyph />
          <Typography variant="subtitle1" noWrap sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>
            {dict.brand}
          </Typography>
        </Stack>

        <DesktopNav dict={dict} locale={locale} navItems={navItems} />

        <IconButton color="inherit" edge="end" onClick={() => setMobileOpen(true)} sx={{ display: { xs: 'inline-flex', md: 'none' }, ml: 'auto' }} aria-label="Open menu">
          <MenuIcon />
        </IconButton>
      </Toolbar>

      <MobileDrawer dict={dict} locale={locale} navItems={navItems} open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </AppBar>
  );
}
