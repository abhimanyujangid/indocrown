'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export type AnimatedButtonProps = ButtonProps & {
  btnVariant?: 1 | 2;
};

export default function AnimatedButton({
  children,
  sx,
  fullWidth,
  btnVariant = 1,
  ...props
}: AnimatedButtonProps) {
  const theme = useTheme();

  // Determine styling based on variant
  const isV1 = btnVariant === 1;

  // Variant 1: Initial Blur/White, Hover White bg + Primary text
  // Variant 2: Initial Primary bg, Hover Gold gradient bg + Primary text
  
  const initialBg = isV1 ? 'rgba(255,255,255,0.14)' : theme.palette.primary.main;
  const initialColor = 'common.white';
  const initialBorder = isV1 ? '1px solid rgba(255,255,255,0.35)' : `1px solid ${theme.palette.primary.main}`;
  
  const hoverFill = isV1 ? '#FFFFFF' : 'linear-gradient(135deg, #d4af37 0%, #fffacd 50%, #d4af37 100%)';
  const hoverColor = theme.palette.primary.main;
  
  const animationDuration = isV1 ? 0.45 : 0.25;

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
          duration: animationDuration,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
        style={{
          display: 'block',
          position: 'absolute',
          inset: 0,
          transformOrigin: 'bottom',
          background: hoverFill,
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
          border: initialBorder,
          color: initialColor,
          bgcolor: initialBg,
          px: 3,
          py: 2,
          '&:hover': {
            bgcolor: 'transparent',
            color: hoverColor,
            borderColor: 'transparent',
          },
          ...sx,
        }}
      >
        <Box sx={{ position: 'relative', overflow: 'hidden', display: 'flex', width: '100%', justifyContent: 'center' }}>
          <motion.div
            variants={{
              rest: { y: 0 },
              hover: { y: '-100%' },
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
          >
            {children}
          </motion.div>
          <motion.div
            variants={{
              rest: { y: '100%' },
              hover: { y: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.8, 0.25, 1] }}
            style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
          >
            {children}
          </motion.div>
        </Box>
      </Button>
    </motion.div>
  );
}
