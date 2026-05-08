'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  colorSchemes: {
    // Keep both schemes available for MUI's mode API, but preserve
    // the same dark-canvas visual language in both.
    light: {
      palette: {
        mode: 'light',
        primary: { main: '#5C7A2E' },
        secondary: { main: '#B8B2A4' },
        background: {
          default: '#0C1009',
          paper: '#151C0F',
        },
        text: {
          primary: '#F5F0E8',
          secondary: '#B8B2A4',
        },
        divider: 'rgba(255,255,255,0.10)',
      },
    },
    dark: {
      palette: {
        mode: 'dark',
        primary: { main: '#5C7A2E' },
        secondary: { main: '#B8B2A4' },
        background: {
          default: '#0C1009',
          paper: '#151C0F',
        },
        text: {
          primary: '#F5F0E8',
          secondary: '#B8B2A4',
        },
        divider: 'rgba(255,255,255,0.10)',
      },
    },
  },
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  shape: {
    borderRadius: 0,
  },
  spacing: 8,
  typography: {
    fontFamily: `'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    h1: {
      fontFamily: `'Cormorant Garamond', 'Playfair Display', serif`,
      fontWeight: 700,
      fontSize: 'clamp(3rem, 7vw, 6.5rem)',
      lineHeight: 0.95,
      letterSpacing: '-0.03em',
      color: '#F5F0E8',
    },
    h2: {
      fontFamily: `'Cormorant Garamond', 'Playfair Display', serif`,
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
      lineHeight: 1.05,
      letterSpacing: '-0.02em',
      color: '#F5F0E8',
    },
    h3: {
      fontFamily: `'Cormorant Garamond', 'Playfair Display', serif`,
      fontWeight: 700,
      fontSize: 'clamp(2rem, 4vw, 3.25rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.01em',
      color: '#F5F0E8',
    },
    h4: {
      fontFamily: `'Cormorant Garamond', 'Playfair Display', serif`,
      fontWeight: 600,
      fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)',
      lineHeight: 1.2,
      color: '#F5F0E8',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.65,
      fontWeight: 400,
      color: '#F5F0E8',
    },
    body2: {
      fontSize: '0.9375rem',
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#B8B2A4',
    },
    button: {
      fontSize: '0.9375rem',
      fontWeight: 500,
      letterSpacing: '0.04em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      letterSpacing: '0.02em',
      color: '#6E6B62',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: '#B8B2A4',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0C1009',
          color: '#F5F0E8',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        variant: 'outlined',
        color: 'inherit',
      },
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '14px 28px',
          borderColor: 'rgba(255,255,255,0.70)',
          color: '#F5F0E8',
          textTransform: 'none',
          '&:hover': {
            borderColor: '#5C7A2E',
            color: '#5C7A2E',
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          backgroundColor: '#151C0F',
          boxShadow: 'none',
          border: '1px solid rgba(255,255,255,0.10)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#F5F0E8',
          textDecoration: 'none',
          transition: 'color 180ms ease',
          '&:hover': {
            color: '#5C7A2E',
          },
        },
      },
    },
    MuiContainer: {
      defaultProps: {
        maxWidth: 'xl',
      },
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width:1200px)': {
            paddingLeft: 64,
            paddingRight: 64,
          },
        },
      },
    },
  },
});

export default theme;