import Box from '@mui/material/Box';

const HERO_VIDEO = 'bg_hero.mp4';

export default function HeroVideoBackground() {
  return (
    <Box sx={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden' }}>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, rgba(8,12,8,0.72) 0%, rgba(8,12,8,0.35) 55%, rgba(8,12,8,0.55) 100%)',
        }}
      />
    </Box>
  );
}
