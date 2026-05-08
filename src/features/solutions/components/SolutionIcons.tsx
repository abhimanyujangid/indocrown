import Box from '@mui/material/Box';

export function PlusIcon({ size = 24 }: { size?: number }) {
  return (
    <Box component="svg" viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" sx={{ display: 'block' }}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </Box>
  );
}
