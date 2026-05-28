'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { motion, type Variants } from 'framer-motion';

import NextLink from 'next/link';

import AnimatedButton from '../../../components/AnimatedButton';
import type { Locale } from '../../../i18n/config';
import { localizedPath } from '../../../i18n/paths';
// Re-using LeafGlyph from navigation icons
import { LeafGlyph } from '../../navigation/components/NavIcons';
import SolutionCard from '../components/SolutionCard';

import type { Dictionary } from '../../../app/[lang]/dictionaries';

type SolutionsProps = {
  dict: Dictionary;
  locale: Locale;
};

const leftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

const rightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

export default function Solutions({ dict, locale }: SolutionsProps) {
  const galleryHref = localizedPath(locale, '/gallery/images');
  // Use `any` temporarily until dictionary types are regenerated
  const section = (dict as any).solutionsSection;
  if (!section) return null;

  return (
    <Box component="section" id="solutions" sx={{ bgcolor: 'common.white', py: { xs: 8, md: 14 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', lg: 'row' },
            gap: { xs: 6, md: 8, lg: 10 },
            alignItems: 'flex-start'
          }}
        >
          
          {/* Left Column (Sticky or static) */}
          <Box sx={{ width: { xs: '100%', lg: '30%' }, flexShrink: 0, pt: { lg: 4 } }}>
            <motion.div variants={leftVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
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
            </motion.div>

            <motion.div variants={leftVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
              <Typography variant="h2" sx={{ mb: 4 }}>
                {section.headline}
              </Typography>
            </motion.div>

            <motion.div variants={leftVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, fontSize: '1.125rem' }}>
                {section.description}
              </Typography>
            </motion.div>

            <motion.div variants={leftVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
              <AnimatedButton component={NextLink} href={galleryHref} btnVariant={2}>
                {section.cta}
              </AnimatedButton>
            </motion.div>
          </Box>

          {/* Right Column: Solution Cards Grid */}
          <Box 
            sx={{ 
              width: { xs: '100%', lg: '70%' },
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: 'repeat(3, 1fr)' },
              gap: 3,
              position: 'relative'
            }}
          >
            {/* Optional subtle background behind the cards as seen in the design */}
            <Box 
              sx={{ 
                position: 'absolute', 
                top: -30, 
                bottom: -30, 
                left: -30, 
                right: -30, 
                bgcolor: '#FAFAFA', 
                borderRadius: 8,
                zIndex: 0,
                display: { xs: 'none', lg: 'block' }
              }} 
            />

            {section.cards.map((card: any, index: number) => (
              <Box key={card.title} sx={{ position: 'relative', zIndex: 1 }}>
                <motion.div 
                  variants={rightVariants} 
                  initial="hidden" 
                  whileInView="show" 
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  // Add a small stagger delay based on index for the grid items
                  transition={{ delay: index * 0.15 }}
                >
                  <SolutionCard
                    title={card.title}
                    description={card.description}
                    image={card.image}
                  />
                </motion.div>
              </Box>
            ))}
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
