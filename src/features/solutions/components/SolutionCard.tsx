'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { PlusIcon } from './SolutionIcons';
import { useTheme } from '@mui/material/styles';

type SolutionCardProps = {
  title: string;
  description: string;
  image: string;
};

export default function SolutionCard({ title, description, image }: SolutionCardProps) {
  const theme = useTheme();

  return (
    <Box
      component={motion.div}
      whileHover="hover"
      initial="initial"
      sx={{
        position: 'relative',
        borderRadius: 4,
        overflow: 'hidden',
        height: { xs: 400, md: 480 },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        // Image background
        backgroundImage: `url(${image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Gradient Overlay for text readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(10,90,48,0.85) 100%)',
          zIndex: 1,
        }}
      />

      {/* Top Section: Animated Plus Button */}
      <Box sx={{ position: 'relative', zIndex: 2, p: 3 }}>
        <motion.div
          variants={{
            initial: { 
              backgroundColor: '#FFFFFF',
              color: theme.palette.primary.main,
              rotate: 0 
            },
            hover: { 
              backgroundColor: theme.palette.primary.main,
              color: '#FFFFFF',
              rotate: 360 
            }
          }}
          transition={{ duration: 0.5, ease: [0.25, 0.8, 0.25, 1] }}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: 44,
            height: 44,
            borderRadius: '50%',
          }}
        >
          <PlusIcon size={20} />
        </motion.div>
      </Box>

      {/* Bottom Section: Text Content */}
      <Box sx={{ position: 'relative', zIndex: 2, p: 3, pt: 0 }}>
        <Typography variant="h4" sx={{ color: 'common.white', mb: 1, fontWeight: 600, fontSize: '1.5rem' }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, fontSize: '0.9375rem' }}>
          {description}
        </Typography>
      </Box>
    </Box>
  );
}
