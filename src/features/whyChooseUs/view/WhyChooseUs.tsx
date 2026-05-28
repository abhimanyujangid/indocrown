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

const NAVBAR_OFFSET = 72;
const CARD_WIDTH_MD = 360;
/** Reserve space for navbar, header, and section padding so cards fit in the viewport */
const CARD_HEIGHT_MD = `min(390px, calc(100vh - ${NAVBAR_OFFSET + 260}px))`;
const CARD_IMAGE_HEIGHT_MD = `min(180px, calc((100vh - ${NAVBAR_OFFSET + 260}px) * 0.46))`;

type WhyChooseUsProps = {
  dict: Dictionary;
};

const cardCenterSx = {
  position: { xs: 'relative' as const, md: 'absolute' as const },
  left: { md: '50%' },
  top: { md: 0 },
  ml: { md: `${-CARD_WIDTH_MD / 2}px` },
  width: { xs: '100%', sm: 320, md: CARD_WIDTH_MD },
  maxWidth: CARD_WIDTH_MD,
  height: { xs: 390, md: CARD_HEIGHT_MD },
};

export default function WhyChooseUs({ dict }: WhyChooseUsProps) {
  const section = (dict as any).whyChooseUsSection;
  if (!section) return null;

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const spreadProgress = useTransform(scrollYProgress, [0, 0.15, 0.65, 1], [0, 0, 1, 1]);

  const leftX = useTransform(spreadProgress, [0, 1], ['0%', '-95%']);
  const leftRotate = useTransform(spreadProgress, [0, 1], [0, -6]);

  const rightX = useTransform(spreadProgress, [0, 1], ['0%', '95%']);
  const rightRotate = useTransform(spreadProgress, [0, 1], [0, 6]);

  return (
    <Box
      ref={containerRef}
      component="section"
      id="why-choose-us"
      sx={{
        height: { xs: 'auto', md: '250vh' },
        bgcolor: 'common.white',
        position: 'relative',
        py: { xs: 8, md: 0 },
      }}
    >
      <Box
        sx={{
          position: { xs: 'relative', md: 'sticky' },
          top: { xs: 0, md: NAVBAR_OFFSET },
          height: { xs: 'auto', md: `calc(100vh - ${NAVBAR_OFFSET}px)` },
          overflow: { xs: 'visible', md: 'visible' },
          display: 'flex',
          flexDirection: 'column',
          pt: { xs: 4, md: 6 },
          pb: { md: 4 },
          justifyContent: { md: 'flex-start' },
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            position: 'relative',
            zIndex: 10,
            flexShrink: 0,
            textAlign: 'center',
            mb: { xs: 4, md: 0 },
            pt: { md: 1 },
            px: { xs: 2, sm: 3, md: 4 },
            bgcolor: 'common.white',
            pb: { md: 0 },
          }}
        >
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
              mb: 2,
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

        <Box
          sx={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            maxWidth: 1200,
            mx: 'auto',
            height: { xs: 'auto', md: CARD_HEIGHT_MD },
            minHeight: { md: CARD_HEIGHT_MD },
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'center',
            alignItems: { xs: 'stretch', md: 'flex-start' },
            mt: { xs: 2, md: 4 },
            gap: { xs: 4, md: 0 },
            pb: { xs: 8, md: 2 },
            flexShrink: 0,
            overflow: { md: 'visible' },
          }}
        >
          <Box
            component={motion.div}
            style={isMobile ? undefined : { x: leftX, rotate: leftRotate }}
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.6 }}
            sx={{
              ...cardCenterSx,
              bgcolor: '#0C1009',
              color: 'common.white',
              borderRadius: { xs: 1, md: 2 },
              p: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              zIndex: 1,
              transformOrigin: 'bottom right',
            }}
          >
            <Box sx={{ width: 'full', height: { xs: 180, md: CARD_IMAGE_HEIGHT_MD }, borderRadius: { xs: 1, md: 2 }, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[0].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
              {section.cards[0].title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
              {section.cards[0].description}
            </Typography>
          </Box>

          <Box
            component={motion.div}
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.6, delay: isMobile ? 0.15 : 0 }}
            sx={{
              ...cardCenterSx,
              bgcolor: '#F8F9FA',
              color: 'text.primary',
              borderRadius: { xs: 1, md: 2 },
              p: 4,
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              zIndex: 2,
            }}
          >
            <Box sx={{ width: 'full', height: { xs: 180, md: CARD_IMAGE_HEIGHT_MD }, borderRadius: { xs: 1, md: 2 }, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[1].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
              {section.cards[1].title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.6 }}>
              {section.cards[1].description}
            </Typography>
          </Box>

          <Box
            component={motion.div}
            style={isMobile ? undefined : { x: rightX, rotate: rightRotate }}
            initial={isMobile ? { opacity: 0, y: 50 } : false}
            whileInView={isMobile ? { opacity: 1, y: 0 } : undefined}
            viewport={{ once: true, margin: '0px 0px -50px 0px' }}
            transition={{ duration: 0.6, delay: isMobile ? 0.3 : 0 }}
            sx={{
              ...cardCenterSx,
              bgcolor: 'primary.main',
              color: 'common.white',
              borderRadius: { xs: 1, md: 2 },
              p: 4,
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              zIndex: 1,
              transformOrigin: 'bottom left',
            }}
          >
            <Box sx={{ width: 'full', height: { xs: 180, md: CARD_IMAGE_HEIGHT_MD }, borderRadius: 2, overflow: 'hidden', mb: 2 }}>
              <img src={section.cards[2].image} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </Box>
            <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
              {section.cards[2].title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.6 }}>
              {section.cards[2].description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
