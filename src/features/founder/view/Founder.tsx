'use client';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import type { Dictionary } from '../../../app/[lang]/dictionaries';

// SVG Quote Icon
function QuoteIcon() {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 11L8 15H11V19H5V15L7.66667 9H10V11ZM19 11L17 15H20V19H14V15L16.6667 9H19V11Z" fill="currentColor" />
    </svg>
  );
}

type FounderProps = {
  dict: Dictionary;
};

export default function Founder({ dict }: FounderProps) {
  const section = (dict as any).founderSection;
  if (!section) return null;

  return (
    <Box component="section" id="founder" sx={{ width: '100%', display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, my: { xs: 8, md: 16 } }}>
      
      {/* Left Half (Image) */}
      <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          sx={{ 
            width: '100%', 
            // Max width matches exactly half of an 'xl' container (1536/2)
            maxWidth: { lg: 768 }, 
            // Margin/padding left to align with container on smaller screens
            pl: { xs: 2, sm: 3, md: 4, xl: 0 }, 
            minHeight: { xs: 400, md: 500, lg: 600 },
            position: 'relative',
            borderTopLeftRadius: { lg: 16 },
            borderBottomLeftRadius: { lg: 16 },
            overflow: 'hidden'
          }}
        >
          {/* Main Background Image */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              backgroundImage: `url(${section.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          
          {/* Gradient Overlay for Text */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 40%)',
            }}
          />

          {/* Role Text */}
          <Typography 
            variant="subtitle2" 
            sx={{ 
              position: 'absolute', 
              bottom: 32, 
              left: { xs: 32, sm: 48, md: 64, xl: 32 }, 
              color: 'common.white',
              fontWeight: 600,
              letterSpacing: '0.05em',
              textTransform: 'uppercase'
            }}
          >
            {section.role}
          </Typography>
        </Box>
      </Box>

      {/* Right Half (Green Block bleeding to 0 space on right) */}
      <Box 
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -50px 0px" }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        sx={{ 
          flex: 1, 
          bgcolor: 'primary.main', 
          color: 'common.white', 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          p: { xs: 4, sm: 6, md: 8, lg: 10 } 
        }}
      >
        <Box sx={{ maxWidth: 600 , display: "flex", flexDirection: "row", gap: 3,}}>
          <Box sx={{ color: 'rgba(255,255,255,0.3)' }}>
            <QuoteIcon />
          </Box>
          <Typography 
            variant="h6" 
            sx={{ 
              fontWeight: 600, 
              lineHeight: 1.1,
              mb: 10,
              marginTop:6,
              color: 'common.white',
              fontSize: { xs: '1.5rem', md: '1.75rem', lg: '2rem' }
            }}
          >
            {section.quote}
          </Typography>
        </Box>

        <Typography 
          variant="h1" 
          sx={{ 
            fontWeight: 700,
            whiteSpace: 'pre-line',
            lineHeight: 1.1,
            color: 'common.white'
          }}
        >
          {section.name}
        </Typography>
      </Box>

    </Box>
  );
}
