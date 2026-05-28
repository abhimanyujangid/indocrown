'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
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

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
    <Box ref={containerRef} component="section" id="why-choose-us" sx={{ height: { xs: 'auto', md: '220vh' }, bgcolor: 'common.white', position: 'relative', py: { xs: 8, md: 0 } }}>
      
      {/* Sticky Inner Container */}
      <Box sx={{ position: { xs: 'relative', md: 'sticky' }, top: 0, height: { xs: 'auto', md: '100vh' }, overflow: 'hidden', display: 'flex', flexDirection: 'column', pt: { xs: 0, md: 8 }, pb: { md: 4 } }}>
        <Container maxWidth="md" sx={{ textAlign: 'center', mb: { xs: 4, md: 3 }, px: { xs: 2, sm: 3, md: 4 }, flexShrink: 0 }}>
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

        {/* Cards Wrapper — fixed height so cards sit just below the headline (not vertically centered in 115vh) */}
        <Box sx={{ position: 'relative', width: '100%', maxWidth: 1200, mx: 'auto', height: { xs: 'auto', md: 400 }, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'center', alignItems: { xs: 'stretch', md: 'flex-start' }, mt: { xs: 0, md: 1 }, gap: { xs: 4, md: 0 }, pb: { xs: 8, md: 0 }, flexShrink: 0 }}>
          
          {/* Card 0: Left (Dark) */}
          <Box
            component={motion.div}
            style={isMobile ? undefined : { x: leftX, rotate: leftRotate }}
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6 }}
            sx={{ position: { xs: 'relative', md: 'absolute' }, width: { xs: '100%', sm: 320, md: 360 }, maxWidth: 360, height: 390, bgcolor: '#0C1009', color: 'common.white', borderRadius: { xs: 1, md: 2 }, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1, transformOrigin: 'bottom right' }}
          >
            <Box sx={{ width: 'full', height: 180, borderRadius: { xs: 1, md: 2 }, overflow: 'hidden', mb: 2}}>
              <img src={section.cards[0].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{section.cards[0].title}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>{section.cards[0].description}</Typography>
          </Box>

          {/* Card 1: Center (Light Gray) */}
          <Box
            component={motion.div}
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, delay: isMobile ? 0.15 : 0 }}
            sx={{ position: { xs: 'relative', md: 'absolute' }, width: { xs: '100%', sm: 320, md: 360 }, maxWidth: 360, height: 390, bgcolor: '#F8F9FA', color: 'text.primary', borderRadius: { xs: 1, md: 2 }, p: 4, boxShadow: '0 20px 60px rgba(0,0,0,0.15)', zIndex: 2 }}
          >
            <Box sx={{ width: 'full', height: 180, borderRadius: { xs: 1, md: 2 }, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[1].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{section.cards[1].title}</Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>{section.cards[1].description}</Typography>
          </Box>

          {/* Card 2: Right (Primary) */}
          <Box
            component={motion.div}
            style={isMobile ? undefined : { x: rightX, rotate: rightRotate }}
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.6, delay: isMobile ? 0.3 : 0 }}
            sx={{ position: { xs: 'relative', md: 'absolute' }, width: { xs: '100%', sm: 320, md: 360 }, maxWidth: 360, height: 390, bgcolor: 'primary.main', color: 'common.white', borderRadius: { xs: 1, md: 2 }, p: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', zIndex: 1, transformOrigin: 'bottom left' }}
          >
          <Box sx={{ width: 'full', height: 180, borderRadius: 2, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[2].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>{section.cards[2].title}</Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.6 }}>{section.cards[2].description}</Typography>
          </Box>

        </Box>
      </Box>
    </Box>
  );
}
