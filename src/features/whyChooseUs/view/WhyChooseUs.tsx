'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

import { LeafGlyph } from '../../navigation/components/NavIcons';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

type WhyChooseUsProps = {
  dict: Dictionary;
};

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const section = (dict as any).whyChooseUsSection;
  if (!section) return null;

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // The animation starts when the top of the container hits the top of the viewport
    // and ends when the bottom of the container hits the bottom of the viewport
    offset: ["start start", "end end"]
  });

  // Left card animations (Card 0)
  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-105%"]);
  const leftRotate = useTransform(scrollYProgress, [0, 1], [0, -10]);

  // Right card animations (Card 2)
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "105%"]);
  const rightRotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

  return (
    <Box ref={containerRef} component="section" id="why-choose-us" sx={{ height: '300vh', bgcolor: 'common.white', position: 'relative' }}>
      
      {/* Sticky Inner Container */}
      <Box sx={{ position: 'sticky', top: 0, height: '115vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', pt: { xs: 12, md: 16 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', mb: 8, px: { xs: 2, sm: 3, md: 4 } }}>
          <Box
            sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 1,
              px: 2,
              py: 0.75,
              borderRadius: 999,
              border: '1px solid rgba(0,0,0,0.08)',
              bgcolor: 'common.white',
              mb: 4,
            }}
          >
            <Box sx={{ color: 'primary.main' }}>
              <LeafGlyph size={16} />
            </Box>
            <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
              {section.label}
            </Typography>
          </Box>

          <Typography variant="h4" sx={{ maxWidth: 800, mx: 'auto' }}>
            {section.headline}
          </Typography>
        </Container>

        {/* Cards Wrapper */}
        <Box sx={{ position: 'relative', flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'flex-start', mt: 2 }}>
          
          {/* Card 0: Left (Dark) */}
          <Box
            component={motion.div}
            style={{ x: leftX, rotate: leftRotate }}
            sx={{ position: 'absolute', width: { xs: 280, sm: 320, md: 360 }, height: 390, bgcolor: '#0C1009', color: 'common.white', borderRadius: 4, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1, transformOrigin: 'bottom right' }}
          >
            <Box sx={{ width: 'full', height: 180, borderRadius: 2, overflow: 'hidden', mb: 2}}>
              <img src={section.cards[0].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{section.cards[0].title}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{section.cards[0].description}</Typography>
          </Box>

          {/* Card 2: Right (Primary) */}
          <Box
            component={motion.div}
            style={{ x: rightX, rotate: rightRotate }}
            sx={{ position: 'absolute', width: { xs: 280, sm: 320, md: 360 }, height: 390, bgcolor: 'primary.main', color: 'common.white', borderRadius: 4, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1, transformOrigin: 'bottom left' }}
          >
          <Box sx={{ width: 'full', height: 180, borderRadius: 2, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[2].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{section.cards[2].title}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.6 }}>{section.cards[2].description}</Typography>
          </Box>

          {/* Card 1: Center (Light Gray) */}
          <Box
            component={motion.div}
            sx={{ position: 'absolute', width: { xs: 280, sm: 320, md: 360 }, height: 390, bgcolor: '#F8F9FA', color: 'text.primary', borderRadius: 4, p: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', zIndex: 2 }}
          >
            <Box sx={{ width: 'full', height: 180, borderRadius: 2, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[1].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{section.cards[1].title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{section.cards[1].description}</Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
