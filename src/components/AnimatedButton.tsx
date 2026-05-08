'use client';

import Button, { type ButtonProps } from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import { motion } from 'framer-motion';

export type AnimatedButtonProps = ButtonProps & {
  hoverBgColor?: string;
  hoverColor?: string;
};

export default function AnimatedButton({
  children,
  sx,
  fullWidth,
  hoverBgColor,
  hoverColor,
  ...props
}: AnimatedButtonProps) {
  const theme = useTheme();
  
  // Resolve theme colors if dot notation is used (e.g. 'primary.dark'), otherwise use raw value or fallback to white
  let fill = hoverBgColor || 'white';
  if (hoverBgColor?.includes('.')) {
    const [path1, path2] = hoverBgColor.split('.');
    // @ts-ignore - dynamic theme resolution
    if (theme.palette[path1] && theme.palette[path1][path2]) {
      // @ts-ignore
      fill = theme.palette[path1][path2];
    }
  }

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
          py: 2,
          '&:hover': {
            bgcolor: 'transparent',
            color: hoverColor || 'common.black',
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
