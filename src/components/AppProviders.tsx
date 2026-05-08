'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import ModeSwitch from './ModeSwitch';
import theme from '../theme';

type AppProvidersProps = {
  children: React.ReactNode;
};

export default function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ModeSwitch />
      {children}
    </ThemeProvider>
  );
}
