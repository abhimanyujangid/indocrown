import { Dictionary } from '@/src/app/[lang]/dictionaries';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';


function DiamondIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" width={18} height={18} fill="currentColor" aria-hidden sx={{ display: 'block', opacity: 0.95 }}>
      <path d="M12 2l8 10-8 10-8-10 8-10zm0 3.2L7.2 12 12 18.8 16.8 12 12 5.2z" />
    </Box>
  );
}

type HeroContentProps = {
  dict: Dictionary;
};

export default function HeroContent({ dict }: HeroContentProps) {
  const chips = [
    { key: 'driven', label: dict.hero.chips.driven },
    { key: 'rooted', label: dict.hero.chips.rooted },
    { key: 'impactful', label: dict.hero.chips.impactful },
  ] as const;

  return (
    <Box sx={{ position: 'relative', zIndex: 1, flex: 1, display: 'flex', flexDirection: 'column', pt: { xs: 10, md: 16 }, pb: { xs: 3, md: 4 } }}>
      <Container maxWidth="xl" sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack direction={{ xs: 'column', md: 'row' }} spacing={{ xs: 4, md: 6 }} sx={{ alignItems: { xs: 'stretch', md: 'flex-end' }, justifyContent: 'space-between' }}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Stack spacing={3}>
              <Stack direction="row" spacing={2.5} useFlexGap sx={{ flexWrap: 'wrap', columnGap: 2.5, rowGap: 1.5 }}>
                {chips.map((chip) => (
                  <Stack key={chip.key} direction="row" spacing={1} sx={{ alignItems: 'center', opacity: 0.95 }}>
                    <DiamondIcon />
                    <Typography variant="overline" sx={{ color: 'common.white', letterSpacing: '0.14em', fontWeight: 600 }}>{chip.label}</Typography>
                  </Stack>
                ))}
              </Stack>
              <Typography variant="body1" sx={{ maxWidth: 520, color: 'rgba(255,255,255,0.92)', fontWeight: 500 }}>{dict.hero.tagline}</Typography>
              <Link href="#contact" underline="always" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'common.white', fontWeight: 600, width: 'fit-content', textUnderlineOffset: 6 }}>
                {dict.hero.cta}
                <Box component="span" aria-hidden>→</Box>
              </Link>
            </Stack>
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography variant="h1" sx={{ textAlign: { xs: 'left', md: 'right' }, ml: { md: 'auto' }, maxWidth: { md: 490 }, color: 'common.white', textShadow: '0 12px 48px rgba(0,0,0,0.35)', fontWeight: 'semibold', fontSize: { xs: '3rem', md: '5rem' } }}>
              {dict.hero.headline}
            </Typography>
          </Box>
        </Stack>
        <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mt: { xs: 6, md: 8 }, justifyContent: 'space-between', alignItems: { xs: 'flex-start', sm: 'flex-end' } }}>
          <Typography variant="caption" sx={{ color: 'rgba(255,255,255,0.75)' }}>{dict.hero.coords}</Typography>
          <Link href="#explore" underline="none" sx={{ display: 'inline-flex', alignItems: 'center', gap: 1, color: 'rgba(255,255,255,0.85)', fontSize: '0.875rem', fontWeight: 600 }}>
            {dict.hero.scrollCue}
            <Box component="span" aria-hidden sx={{ fontSize: '1.1rem' }}>↓</Box>
          </Link>
        </Stack>
      </Container>
    </Box>
  );
}
