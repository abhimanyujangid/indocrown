'use client';

import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { motion } from 'framer-motion';

import { ChevronDownIcon } from './NavIcons';
import type { NavItem } from '../types';

const MotionLink = motion.create(Link);

type NavItemLinkProps = {
  item: NavItem;
};

export default function NavItemLink({ item }: NavItemLinkProps) {
  return (
    <MotionLink
      href={item.href}
      underline="none"
      color="inherit"
      initial="initial"
      whileHover="hover"
      sx={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.25,
        color: 'common.white',
        fontWeight: 500,
        fontSize: '0.9375rem',
        textDecoration: 'none',
        overflow: 'visible',
        '&:hover': {
          color: 'common.white',
        },
      }}
    >
      <Box sx={{ position: 'relative', overflow: 'hidden', display: 'flex' }}>
        <motion.div
          variants={{
            initial: { y: 0 },
            hover: { y: '-100%' },
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
        >
          {item.label}
        </motion.div>
        
        <motion.div
          variants={{
            initial: { y: '100%' },
            hover: { y: 0 },
          }}
          transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          style={{ position: 'absolute', top: 0, left: 0 }}
        >
          {item.label}
        </motion.div>
      </Box>

      {item.chevron ? <ChevronDownIcon /> : null}

      {/* Animated Bottom Border */}
      <motion.div
        variants={{
          initial: { scaleX: 0, opacity: 0 },
          hover: { scaleX: 1, opacity: 1 },
        }}
        transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
        style={{
          position: 'absolute',
          bottom: -4,
          left: 0,
          right: 0,
          height: 1.5,
          backgroundColor: 'currentColor',
          transformOrigin: 'left',
        }}
      />
    </MotionLink>
  );
}
