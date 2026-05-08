import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import { ChevronDownIcon, CloseIcon, LeafGlyph } from './NavIcons';

import type { NavItem, NavbarProps } from '../types';
import LanguageSwitcher from '@/src/components/LanguageSwitcher';
import AnimatedButton from '@/src/components/AnimatedButton';

type MobileDrawerProps = NavbarProps & {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
};

export default function MobileDrawer({ dict, locale, open, onClose, navItems }: MobileDrawerProps) {
  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      ModalProps={{ keepMounted: true }}
      slotProps={{ paper: { sx: { bgcolor: 'transparent', boxShadow: 'none' } } }}
    >
      <Box sx={{ width: 'min(100vw, 360px)', height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'rgba(12, 16, 9, 0.98)', color: 'common.white' }}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 2 }}>
          <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
            <LeafGlyph />
            <Typography variant="subtitle1" sx={{ fontWeight: 700, letterSpacing: '-0.02em' }}>{dict.brand}</Typography>
          </Stack>
          <IconButton edge="end" onClick={onClose} sx={{ color: 'common.white' }} aria-label="Close menu">
            <CloseIcon />
          </IconButton>
        </Toolbar>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
        <List sx={{ px: 1, py: 2, flex: 1 }}>
          {navItems.map((item) => (
            <ListItemButton key={item.label} component={Link} href={item.href} onClick={onClose} sx={{ borderRadius: 1, mb: 0.5, alignItems: 'center', gap: 0.5 }}>
              <ListItemText primary={item.label} />
              {item.chevron ? <ChevronDownIcon /> : null}
            </ListItemButton>
          ))}
        </List>
        <Box sx={{ p: 2, pt: 0 }}>
          <LanguageSwitcher locale={locale} />
          <Box sx={{ mt: 2 }}>
            <AnimatedButton fullWidth startIcon={<LeafGlyph size={18} />} onClick={onClose}>{dict.nav.cta}</AnimatedButton>
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
}
