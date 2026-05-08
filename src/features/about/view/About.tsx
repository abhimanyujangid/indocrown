'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import { motion, type Variants } from 'framer-motion';

import AnimatedButton from '../../../components/AnimatedButton';
// Re-using LeafGlyph from navigation icons, ideally should be in a shared icons folder
import { LeafGlyph } from '../../navigation/components/NavIcons';

import type { Dictionary } from '../../../app/[lang]/dictionaries';

type AboutProps = {
  dict: Dictionary;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } 
  },
};

export default function About({ dict }: AboutProps) {
  // We use `any` casting temporarily to avoid TS errors until we regenerate dictionary types
  const aboutSection = (dict as any).aboutSection;
  if (!aboutSection) return null;

  return (
    <Box component="section" id="about" sx={{ bgcolor: 'common.white', py: { xs: 8, md: 14 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack 
          component={motion.div}
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          direction={{ xs: 'column', md: 'row' }} 
          spacing={{ xs: 6, md: 12 }} 
          sx={{ alignItems: 'center' }}
        >
          
          {/* Left Column */}
          <Box sx={{ flex: 1, minWidth: 0, pl: { md: 8 } }}>
            {/* Label Pill */}
            <motion.div variants={itemVariants}>
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
                  {aboutSection.label}
                </Typography>
              </Box>
            </motion.div>

            {/* Headline */}
            <motion.div variants={itemVariants}>
              <Typography variant="h2" sx={{ mb: 5, maxWidth: 600 }}>
                {aboutSection.headline}
              </Typography>
            </motion.div>

            {/* Chips */}
            <motion.div variants={itemVariants}>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, maxWidth: 500 }}>
                {aboutSection.chips.map((chip: string) => (
                  <Box
                    key={chip}
                    sx={{
                      px: 2.5,
                      py: 1,
                      borderRadius: 1.5,
                      bgcolor: '#F2F2F2',
                      color: '#4A554A',
                      typography: 'body2',
                      fontWeight: 500,
                    }}
                  >
                    {chip}
                  </Box>
                ))}
              </Box>
            </motion.div>
          </Box>

          {/* Right Column */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div variants={itemVariants}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 560, fontSize: '1.125rem' }}>
                {aboutSection.description}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Box>
                {/* For the solid green button styling */}
                <AnimatedButton
                  startIcon={<LeafGlyph size={18} />}
                  hoverBgColor="primary.dark"
                  hoverColor="common.white"
                  sx={{
                    color: 'primary.darker',
                    borderColor: 'primary.main',
                  }}
                >
                  {aboutSection.cta}
                </AnimatedButton>
              </Box>
            </motion.div>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}
