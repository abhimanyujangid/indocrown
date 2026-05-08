import Box from '@mui/material/Box';

export function LeafGlyph(props: { size?: number }) {
  const s = props.size ?? 22;
  return (
    <Box component="svg" viewBox="0 0 24 24" width={s} height={s} fill="currentColor" aria-hidden sx={{ display: 'block' }}>
      <path d="M12 2c-4 5.5-6.5 10-6.5 14.5 0 2 1.5 3.5 3.5 3.5h2c2 0 3.5-1.5 3.5-3.5C14.5 12 12 7.5 8 2c1.2 1.6 2 3.4 2.4 5.2C12 6 14 4 16 2c-1.7 2.8-2.5 5.6-2.5 8.4 0 3.4 1 6.6 2.8 9.6H12c-2.8-4-4.3-8.3-4.3-12.8 0-1.8.3-3.5.8-5.2H12z" />
    </Box>
  );
}

export function ChevronDownIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" width={16} height={16} fill="currentColor" aria-hidden sx={{ display: 'block', opacity: 0.85 }}>
      <path d="M7 10l5 5 5-5H7z" />
    </Box>
  );
}

export function MenuIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden>
      <path d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z" />
    </Box>
  );
}

export function CloseIcon() {
  return (
    <Box component="svg" viewBox="0 0 24 24" width={24} height={24} fill="currentColor" aria-hidden>
      <path d="M18.3 5.71L12 12l6.3 6.29-1.42 1.42L10.59 13.4 4.29 19.7 2.87 18.3 9.17 12 2.87 5.71 4.29 4.29l6.3 6.3 6.3-6.3 1.42 1.42z" />
    </Box>
  );
}
