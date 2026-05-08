'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export default function AnimatedButton({
  children,
  sx,
  fullWidth,
  ...props
}: ButtonProps) {
  const theme = useTheme();
  const fill = theme.palette.primary.main;

  return (
    <motion.div
      variants={{ rest: {}, hover: {} }}
      initial="rest"
      whileHover="hover"
      animate="rest"
      style={{
        position: 'relative',
        display: fullWidth ? 'flex' : 'inline-flex',
        width: fullWidth ? '100%' : undefined,
        borderRadius: 9999,
        overflow: 'hidden',
      }}
    >
      <motion.span
        variants={{
          rest: { scaleY: 0 },
          hover: { scaleY: 1 },
        }}
        transition={{
          duration: 0.45,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{
          display: 'block',
          position: 'absolute',
          inset: 0,
          transformOrigin: 'bottom',
          background: fill,
          zIndex: 0,
        }}
      />
      <Button
        {...props}
        fullWidth={fullWidth}
        sx={{
          position: 'relative',
          zIndex: 1,
          borderRadius: 999,
          overflow: 'hidden',
          border: '1px solid rgba(255,255,255,0.35)',
          color: 'common.white',
          bgcolor: 'rgba(255,255,255,0.14)',
          px: 3,
          py: 1.25,
          '&:hover': {
            borderColor: 'transparent',
            bgcolor: 'transparent',
            color:
              theme.palette.mode === 'dark'
                ? theme.palette.background.default
                : theme.palette.background.paper,
          },
          ...sx,
        }}
      >
        {children}
      </Button>
    </motion.div>
  );
}
