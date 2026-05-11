'use client';

import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafRounded from '@mui/icons-material/EnergySavingsLeafRounded';
import { AnimatePresence, motion } from 'framer-motion';

import TextReveal from '@/src/components/TextReveal';
import type { Dictionary } from '@/src/app/[lang]/dictionaries';
import HistoryYearSelector from '../components/HistoryYearSelector';

type AboutHistoryProps = {
  dict: Dictionary;
};

export type HistoryItem = {
  year: string;
  title: string;
  description: string;
  image: string;
};

type AboutHistoryCopy = {
  label: string;
  headline: string;
  items: HistoryItem[];
};

const panelTransition = {
  duration: 0.48,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};



export default function AboutHistory({ dict }: AboutHistoryProps) {
  const section = (dict as Record<string, unknown>).aboutHistory as
    | AboutHistoryCopy
    | undefined;

  const items = useMemo(() => section?.items ?? [], [section?.items]);
  const [activeYear, setActiveYear] = useState(items[items.length - 1]?.year ?? '');

  if (!section || items.length === 0) return null;

  const active = items.find((item) => item.year === activeYear) ?? items[0];

  return (
    <Box component="section" sx={{ bgcolor: 'common.white', py: { xs: 8, md: 12 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 5 } }}>
        <Box sx={{ textAlign: 'center', maxWidth: 780, mx: 'auto', mb: { xs: 5, md: 7 } }}>
          <TextReveal>
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 0.85,
                px: 2,
                py: 0.8,
                borderRadius: 999,
                border: '1px solid',
                borderColor: 'divider',
                bgcolor: 'common.white',
                mb: 2.5,
                boxShadow: '0 10px 28px rgba(0,0,0,0.04)',
              }}
            >
              <EnergySavingsLeafRounded sx={{ color: 'primary.main', fontSize: 18 }} />
              <Typography variant="caption" sx={{ fontWeight: 700, color: 'text.primary' }}>
                {section.label}
              </Typography>
            </Box>
          </TextReveal>

          <TextReveal delay={0.08}>
            <Typography
              variant="h2"
              sx={{
                fontWeight: 500,
                letterSpacing: '-0.035em',
                lineHeight: 1.12,
                color: 'text.primary',
                fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              }}
            >
              {section.headline}
            </Typography>
          </TextReveal>

          <HistoryYearSelector
            label={section.label}
            items={items}
            activeYear={active.year}
            onChange={setActiveYear}
          />
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'minmax(0, 1fr) minmax(0, 1fr)' },
            gap: { xs: 2.5, md: 3 },
            alignItems: 'stretch',
            maxWidth: '100%',
            mx: 'auto',
          }}
        >
          <Box
            sx={{
              minHeight: { xs: 280, md: 360 },
              borderRadius: { xs: 1, md: 2 },
              bgcolor: '#F7F7F5',
              overflow: 'hidden',
              display: 'flex',
              alignItems: 'center',
              p: { xs: 3, sm: 3.5, md: 4.5 },
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active.year}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={panelTransition}
              >
               
                <Typography
                  variant="h4"
                  sx={{
                    color: 'text.primary',
                    fontWeight: 500,
                    letterSpacing: '-0.035em',
                    lineHeight: 1.14,
                    fontSize: { xs: '1.55rem', sm: '1.85rem', md: '2.05rem' },
                    maxWidth: 520,
                    mb: 2,
                  }}
                >
                  {active.title}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.75,
                    fontSize: { xs: '0.95rem', md: '1rem' },
                    maxWidth: 560,
                  }}
                >
                  {active.description}
                </Typography>
              </motion.div>
            </AnimatePresence>
          </Box>

          <Box
            sx={{
              position: 'relative',
              minHeight: { xs: 260, md: 360 },
              borderRadius: { xs: 1, md: 2 },
              overflow: 'hidden',
              bgcolor: 'grey.100',
            }}
          >
            <AnimatePresence mode="wait">
              <Box
                key={active.image}
                component={motion.img}
                src={active.image}
                alt=""
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={panelTransition}
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
              />
            </AnimatePresence>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
