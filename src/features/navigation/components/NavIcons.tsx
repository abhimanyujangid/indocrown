import Box from '@mui/material/Box';

export function LeafGlyph(props: { size?: number }) {
  const s = props.size ?? 22;
  return (
    <Box component="svg" viewBox="0 0 24 24" width={s} height={s} fill="currentColor" aria-hidden sx={{ display: 'block' }}>
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
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
