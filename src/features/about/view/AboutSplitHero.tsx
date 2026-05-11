'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafRounded from '@mui/icons-material/EnergySavingsLeafRounded';
import { motion } from 'framer-motion';

import type { Dictionary } from '@/src/app/[lang]/dictionaries';
import GlassChip from '@/src/components/GlassChip';

type AboutSplitHeroProps = {
  dict: Dictionary;
};

const viewportOnce = {
  once: true,
  amount: 0.22,
  margin: '0px 0px -12% 0px',
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};



export default function AboutSplitHero({ dict }: AboutSplitHeroProps) {
  const p = (dict as Record<string, unknown>).aboutPage as
    | {
        label: string;
        headline: string;
        subtext: string;
        image: string;
        chipCta: string;
        chipPills: string[];
      }
    | undefined;

  if (!p) return null;

  const pills = Array.isArray(p.chipPills) ? p.chipPills : [];

  return (
    <Box component="main" sx={{ pb: { xs: 10, md: 14 } }}>
      <Container maxWidth="xl" sx={{ mt: { xs: 2, lg: 8 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 5, md: 10 },
            alignItems: 'stretch',
            minHeight: { md: `min(calc(100dvh - 120px), 820px)` },
          }}
        >
          <Box sx={{ flex: { md: '0 1 42%' }, minWidth: 0 }}>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={viewportOnce}>
              <Box sx={{ display: 'flex', flexDirection: 'column', pt: { xs: 0, md: 3 } }}>
                <Box
                  sx={{
                    mb: { xs: 3, md: 4 },
                    display: 'inline-flex',
                    alignSelf: 'flex-start',
                    alignItems: 'center',
                    gap: 1,
                    px: 2,
                    py: 0.85,
                    borderRadius: 999,
                    border: '1px solid',
                    borderColor: 'divider',
                    bgcolor: 'common.white',
                  }}
                >
                  <EnergySavingsLeafRounded sx={{ fontSize: 18, color: 'primary.main' }} />
                  <Typography variant="caption" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {p.label}
                  </Typography>
                </Box>

                <Typography
                  variant="h2"
                  sx={{
                    fontWeight: 700,
                    letterSpacing: '-0.028em',
                    color: 'text.primary',
                    fontSize: {
                      xs: '2rem',
                      sm: '2.375rem',
                      md: 'clamp(2.25rem, 2.8vw + 1rem, 3.15rem)',
                    },
                    lineHeight: 1.12,
                    maxWidth: 580,
                    mb: { xs: 2.5, md: 3 },
                  }}
                >
                  {p.headline}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    fontSize: { xs: '1.05rem', md: '1.125rem' },
                    lineHeight: 1.7,
                    maxWidth: 520,
                  }}
                >
                  {p.subtext}
                </Typography>
              </Box>
            </motion.div>
          </Box>

          <Box sx={{ flex: { md: '1 1 58%' }, minWidth: 0, display: 'flex', alignItems: { md: 'stretch' } }}>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={viewportOnce}
              style={{ width: '100%' }}
            >
              <Box
                sx={{
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  mx: 'auto',
                  minHeight: { xs: 360, sm: 400, md: 'min(100%, clamp(460px, 58vh, 720px))' },
                  flex: { md: 1 },
                  bgcolor: 'red',
                }}
              >
                <Box
                  component="img"
                  src={p.image}
                  alt=""
                  sx={{
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',

                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    background:
                      'linear-gradient(to top, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.05) 42%, transparent 58%)',
                    pointerEvents: 'none',
                  }}
                />

                <Box
                  sx={{
                    position: 'absolute',
                    inset: 0,
                    p: { xs: 2, sm: 2.5 },
                    pt: { xs: 2.25, md: 2.5 },
                    pb: { xs: 2, md: 2.5 },
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    pointerEvents: 'none',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'center',
                      gap: 1.25,
                    }}
                  >
                    {pills.map((word) => (
                      <GlassChip key={word} label={word} icon={<EnergySavingsLeafRounded sx={{ fontSize: 18, color: 'primary.main' }} />} />
                    ))}
                  </Box>
                </Box>
              </Box>
            </motion.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
