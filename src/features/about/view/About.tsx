import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';

import AnimatedButton from '../../../components/AnimatedButton';
// Re-using LeafGlyph from navigation icons, ideally should be in a shared icons folder
import { LeafGlyph } from '../../navigation/components/NavIcons';

import type { Dictionary } from '../../../app/[lang]/dictionaries';

type AboutProps = {
  dict: Dictionary;
};

export default function About({ dict }: AboutProps) {
  // We use `any` casting temporarily to avoid TS errors until we regenerate dictionary types
  const aboutSection = (dict as any).aboutSection;
  if (!aboutSection) return null;

  return (
    <Box component="section" id="about" sx={{ bgcolor: 'common.white', py: { xs: 8, md: 14 } }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 6, md: 12 }} sx={{ alignItems: 'center' }}>
          
          {/* Left Column */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            {/* Label Pill */}
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

            {/* Headline */}
            <Typography variant="h2" sx={{ mb: 5, maxWidth: 600 }}>
              {aboutSection.headline}
            </Typography>

            {/* Chips */}
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, maxWidth: 500 }}>
              {aboutSection.chips.map((chip: string) => (
                <Box
                  key={chip}
                  sx={{
                    px: 2.5,
                    py: 1,
                    borderRadius: 2,
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
          </Box>

          {/* Right Column */}
          <Box sx={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', mb: 5, maxWidth: 560, fontSize: '1.125rem' }}>
              {aboutSection.description}
            </Typography>

            <Box>
              {/* For the solid green button styling */}
              <AnimatedButton
                startIcon={<LeafGlyph size={18} />}
                hoverBgColor="primary.dark"
                hoverColor="common.white"
                sx={{
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  borderColor: 'primary.main',
                }}
              >
                {aboutSection.cta}
              </AnimatedButton>
            </Box>
          </Box>

        </Stack>
      </Container>
    </Box>
  );
}
