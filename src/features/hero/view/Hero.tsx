import Box from '@mui/material/Box';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

import HeroVideoBackground from '../components/HeroVideoBackground';
import HeroContent from '../components/HeroContent';

type HeroProps = {
  dict: Dictionary;
};

export default function Hero({ dict }: HeroProps) {
  return (
    <Box
      component="section"
      sx={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        color: 'common.white',
      }}
    >
      <HeroVideoBackground />
      <HeroContent dict={dict} />
    </Box>
  );
}
