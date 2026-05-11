'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafRounded from '@mui/icons-material/EnergySavingsLeafRounded';

import AnimatedButton from '@/src/components/AnimatedButton';
import TextReveal from '@/src/components/TextReveal';
import type { Dictionary } from '@/src/app/[lang]/dictionaries';

type AboutWhoWeAreProps = {
  dict: Dictionary;
};

type AboutWhoWeAreCopy = {
  label: string;
  headline: string;
  description: string;
  cta: string;
  image: string;
};

export default function AboutWhoWeAre({ dict }: AboutWhoWeAreProps) {
  const section = (dict as Record<string, unknown>).aboutWhoWeAre as
    | AboutWhoWeAreCopy
    | undefined;

  if (!section) return null;

  return (
    <Box component="section" sx={{ bgcolor: '#F7F7F5', pb: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: 430, sm: 460, md: 520 },
            borderRadius: { xs: 1, md: 2 },
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: 'common.white',
            px: { xs: 2.5, sm: 4, md: 6 },
            py: { xs: 7, md: 10 },
          }}
        >
          <Box
            component="img"
            src={section.image}
            alt=""
            sx={{
              position: 'absolute',
              inset: 0,
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
                'linear-gradient(to bottom, rgba(0,0,0,0.34), rgba(0,0,0,0.5))',
            }}
          />

          <Box
            sx={{
              position: 'relative',
              zIndex: 1,
              width: '100%',
              maxWidth: 860,
              mx: 'auto',
            }}
          >
            <TextReveal>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.8,
                  borderRadius: 3,
                  bgcolor: 'common.white',
                  color: 'text.primary',
                  mb: { xs: 2.5, md: 3 },
                  boxShadow: '0 10px 28px rgba(0,0,0,0.12)',
                }}
              >
                <EnergySavingsLeafRounded sx={{ color: 'primary.main', fontSize: 18 }} />
                <Typography component="span" variant="caption" sx={{ fontWeight: 700 }}>
                  {section.label}
                </Typography>
              </Box>
            </TextReveal>

            <TextReveal delay={0.08}>
              <Typography
                variant="h2"
                sx={{
                  color: 'common.white',
                  fontWeight: 600,
                  lineHeight: 1.12,
                  letterSpacing: '-0.035em',
                  fontSize: {
                    xs: '2rem',
                    sm: '2.7rem',
                    md: 'clamp(3rem, 3.4vw + 1rem, 2.75rem)',
                  },
                  maxWidth: 880,
                  mx: 'auto',
                }}
              >
                {section.headline}
              </Typography>
            </TextReveal>

            <TextReveal delay={0.16}>
              <Typography
                variant="body1"
                sx={{
                  color: 'rgba(255,255,255,0.9)',
                  lineHeight: 1.75,
                  fontSize: { xs: '0.98rem', md: '1.05rem' },
                  maxWidth: 720,
                  mx: 'auto',
                  mt: { xs: 2, md: 2.5 },
                }}
              >
                {section.description}
              </Typography>
            </TextReveal>

            <TextReveal delay={0.24} sx={{ mt: { xs: 4, md: 5 } }}>
              <AnimatedButton
                btnVariant={2}
                startIcon={<EnergySavingsLeafRounded sx={{ fontSize: 18 }} />}
              >
                {section.cta}
              </AnimatedButton>
            </TextReveal>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
