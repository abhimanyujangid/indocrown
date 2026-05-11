'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import EnergySavingsLeafRounded from '@mui/icons-material/EnergySavingsLeafRounded';
import { motion, type Variants } from 'framer-motion';

import type { Dictionary } from '@/src/app/[lang]/dictionaries';

type AboutStatsProps = {
  dict: Dictionary;
};

type StatCard = {
  value: string;
  title: string;
  description: string;
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 52 },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function AboutStats({ dict }: AboutStatsProps) {
  const section = (dict as Record<string, unknown>).aboutStats as
    | { cards: StatCard[] }
    | undefined;

  if (!section?.cards?.length) return null;

  return (
    <Box component="section" sx={{ bgcolor: '#F7F7F5', py: { xs: 8, md: 11 } }}>
      <Container maxWidth="xl" >
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(3, minmax(0, 1fr))',
            },
            gap: { xs: 2.5, md: 3 },
          }}
        >
          {section.cards.map((card, index) => (
            <Box
              key={`${card.value}-${card.title}`}
              component={motion.article}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.28, margin: '0px 0px -10% 0px' }}
              sx={{
                bgcolor: 'common.white',
                borderRadius: 2,
                p: { xs: 3.5, sm: 4, md: 4.5 },
                minHeight: { md: 270 },
                boxShadow: '0 18px 50px rgba(0,0,0,0.04)',
                border: '1px solid rgba(0,0,0,0.03)',
              }}
            >
              <EnergySavingsLeafRounded
                sx={{ color: 'primary.main', fontSize: 24, mb: 1.5 }}
              />
              <Typography
                variant="h2"
                sx={{
                  fontSize: { xs: '3rem', md: '3.5rem' },
                  fontWeight: 500,
                  lineHeight: 1,
                  letterSpacing: '-0.05em',
                  color: 'text.primary',
                  mb: 2,
                }}
              >
                {card.value}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 700,
                  color: 'text.primary',
                  mb: 2,
                  lineHeight: 1.35,
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: 'text.secondary',
                  lineHeight: 1.7,
                  maxWidth: 330,
                }}
              >
                {card.description}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}
