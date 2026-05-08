'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import { LeafGlyph } from '../../navigation/components/NavIcons';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

type ContactHeroProps = {
  dict: Dictionary;
};

export default function ContactHero({ dict }: ContactHeroProps) {
  const section = (dict as any).contactHero;
  if (!section) return null;

  return (
    <Box 
      component="section" 
      sx={{ 
        position: 'relative',
        width: '100%', 
        minHeight: { xs: '60vh', md: '75vh', lg: '85vh' },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pt: { xs: 12, md: 16 }, // Padding to account for the fixed Navbar
        pb: { xs: 8, md: 12 },
        color: 'common.white'
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${section.image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -2,
        }}
      />
      
      {/* Dark Overlay for Text Readability */}
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)',
          zIndex: -1,
        }}
      />

      <Container maxWidth="md" sx={{ textAlign: 'center', px: { xs: 2, sm: 3, md: 4 }, zIndex: 1 }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        >
          {/* Glassmorphic Pill */}
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2.5,
              py: 0.75,
              borderRadius: 999,
              bgcolor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255,255,255,0.3)',
              mb: 4
            }}
          >
            <Box sx={{ color: 'common.white', display: 'flex' }}>
              <LeafGlyph size={14} />
            </Box>
            <Typography variant="body2" sx={{ fontWeight: 600, color: 'common.white' }}>
              {section.tag}
            </Typography>
          </Box>

          {/* Headline */}
          <Typography 
            variant="h1" 
            sx={{ 
              fontWeight: 700, 
              mb: 4, 
              whiteSpace: 'pre-line',
              fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem', lg: '5rem' },
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              textShadow: '0 2px 10px #3b8712e6',
              color: 'common.white'
            }}
          >
            {section.headline}
          </Typography>

          {/* Subheadline */}
          <Typography 
            variant="body1" 
            sx={{ 
              color: 'rgba(255,255,255,0.9)',
              fontSize: { xs: '1.125rem', md: '1.25rem', lg: '1.5rem' },
              lineHeight: 1.5,
              maxWidth: 700,
              mx: 'auto'
            }}
          >
            {section.description}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
