'use client';

import type { ReactNode } from 'react';

import Box from '@mui/material/Box';
import type { SxProps, Theme } from '@mui/material/styles';
import { motion } from 'framer-motion';

type TextRevealProps = {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  sx?: SxProps<Theme>;
};

export default function TextReveal({
  children,
  delay = 0,
  duration = 0.65,
  y = 32,
  sx,
}: TextRevealProps) {
  return (
    <Box sx={sx}>
      <Box sx={{ overflow: 'hidden' }}>
        <motion.div
          initial={{ opacity: 0, y }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
          transition={{
            duration,
            delay,
            ease: [0.25, 0.46, 0.45, 0.94] as const,
          }}
        >
          {children}
        </motion.div>
      </Box>
    </Box>
  );
}
