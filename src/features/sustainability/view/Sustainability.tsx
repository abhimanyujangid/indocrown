'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { motion, type Variants } from 'framer-motion';

import AnimatedButton from '../../../components/AnimatedButton';
import { LeafGlyph } from '../../navigation/components/NavIcons';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

type SustainabilityProps = {
  dict: Dictionary;
};

// Bottom-to-top scroll reveal animation
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
  },
};

export default function Sustainability({ dict }: SustainabilityProps) {
  // Use `any` temporarily until dictionary types are regenerated
  const section = (dict as any).sustainabilitySection;
  if (!section) return null;

  return (
    <Box component="section" id="sustainability" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'common.white' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Box
          sx={{
            bgcolor: '#FAFAFA',
            borderRadius: { xs: 4, md: 6 },
            overflow: 'hidden',
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            minHeight: { lg: 400 }
          }}
        >

          {/* Left Column (Content) */}
          <Box sx={{ flex: 1, p: { xs: 4, sm: 5, md: 6, lg: 8 }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
              <Typography variant="h2" sx={{ mb: 3, maxWidth: 400 }}>
                {section.headline}
              </Typography>
            </motion.div>

            <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4, maxWidth: 450 }}>
                {section.description}
              </Typography>
            </motion.div>

            <Stack spacing={0} sx={{ mb: 6, maxWidth: 450 }}>
              {section.initiatives.map((item: any, index: number) => (
                <motion.div
                  key={item.title}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "0px 0px -50px 0px" }}
                  transition={{ delay: index * 0.15 }}
                >
                  <Box sx={{ py: 2 }}>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 0.5, color: 'text.primary' }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
                    </Typography>
                  </Box>
                  <Divider />
                </motion.div>
              ))}
            </Stack>

            <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true, margin: "0px 0px -50px 0px" }}>
              <AnimatedButton btnVariant={2} startIcon={<LeafGlyph size={18} />}>
                {section.cta}
              </AnimatedButton>
            </motion.div>
          </Box>

          {/* Right Column (Image) */}
          <Box sx={{ flex: 1, position: 'relative', minHeight: { xs: 300, md: 350, lg: 'auto' } }}>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.95 },
                show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } }
              }}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "0px 0px -50px 0px" }}
              style={{ width: '100%', height: '100%' }}
            >
              <Box
                sx={{
                  position: 'absolute',
                  top: { xs: 0, lg: 32 },
                  bottom: { xs: 0, lg: 32 },
                  left: { xs: 0, lg: 0 },
                  right: { xs: 0, lg: 32 },
                  borderRadius: { xs: 0, lg: 4 },
                  overflow: 'hidden',
                  backgroundImage: `url(${section.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            </motion.div>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
