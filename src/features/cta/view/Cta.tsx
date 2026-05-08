'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';

import AnimatedButton from '../../../components/AnimatedButton';
import { LeafGlyph } from '../../navigation/components/NavIcons';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

type CtaProps = {
  dict: Dictionary;
};

export default function Cta({ dict }: CtaProps) {
  const section = (dict as any).ctaSection;
  if (!section) return null;

  return (
    <Box component="section" id="cta" sx={{ width: '100%', py: { xs: 8, md: 12 }, bgcolor: 'common.white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -50px 0px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          sx={{
            width: '100%',
            minHeight: { xs: 450, md: 500 },
            borderRadius: { xs: 4, md: 6 },
            // Beautiful smooth gradient matching the design
            background: 'linear-gradient(110deg, #FCEE82 0%, #FFF387 40%, #F1D2B3 100%)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            p: { xs: 4, sm: 6, md: 8, lg: 10 }
          }}
        >
          {/* Top Section */}
          <Box sx={{ maxWidth: 600 }}>
            <Typography 
              variant="h2" 
              sx={{ 
                color: 'text.primary', 
                mb: 3, 
                whiteSpace: 'pre-line',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem', lg: '4.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.02em'
              }}
            >
              {section.headline}
            </Typography>
            <Typography 
              variant="body1" 
              sx={{ 
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
                maxWidth: 450
              }}
            >
              {section.description}
            </Typography>
          </Box>

          {/* Bottom Section */}
          <Box 
            sx={{ 
              display: 'flex', 
              flexDirection: { xs: 'column', md: 'row' }, 
              alignItems: { xs: 'flex-start', md: 'flex-end' }, 
              justifyContent: 'space-between',
              gap: 4,
              mt: 6
            }}
          >
            <AnimatedButton btnVariant={2} startIcon={<LeafGlyph size={18} />}>
              {section.cta}
            </AnimatedButton>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: { xs: 2, md: 4 } }}>
              {section.tags.map((tag: string) => (
                <Box key={tag} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ color: 'primary.main', display: 'flex' }}>
                    <LeafGlyph size={12} />
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {tag}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
