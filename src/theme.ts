import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0A5A30', dark: '#084826' }, // Dark green from the image
    secondary: { main: '#F2F2F2' }, // Light gray for pills
    background: {
      default: '#FFFFFF',
      paper: '#FFFFFF',
    },
    text: {
      primary: '#111811',
      secondary: '#4A554A',
    },
    divider: 'rgba(0,0,0,0.08)',
  },
  shape: {
    borderRadius: 8,
  },
  spacing: 8,
  typography: {
    fontFamily: `'Inter', 'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`,
    h1: {
      fontFamily: `'Inter', 'DM Sans', sans-serif`,
      fontWeight: 500,
      fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#111811',
    },
    h2: {
      fontFamily: `'Inter', 'DM Sans', sans-serif`,
      fontWeight: 500,
      fontSize: 'clamp(2rem, 3.5vw, 3rem)',
      lineHeight: 1.1,
      letterSpacing: '-0.02em',
      color: '#111811',
    },
    h3: {
      fontFamily: `'Inter', 'DM Sans', sans-serif`,
      fontWeight: 500,
      fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: '#111811',
    },
    h4: {
      fontFamily: `'Inter', 'DM Sans', sans-serif`,
      fontWeight: 500,
      fontSize: 'clamp(1.5rem, 2vw, 2rem)',
      lineHeight: 1.2,
      color: '#111811',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#4A554A',
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
      fontWeight: 400,
      color: '#4A554A',
    },
    button: {
      fontSize: '0.9375rem',
      fontWeight: 600,
      letterSpacing: '0.01em',
      textTransform: 'none',
    },
    caption: {
      fontSize: '0.8125rem',
      lineHeight: 1.5,
      color: '#4A554A',
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 600,
      lineHeight: 1.2,
      letterSpacing: '0.05em',
      textTransform: 'uppercase',
      color: '#4A554A',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#FFFFFF',
          color: '#111811',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 24,
          padding: '10px 24px',
          textTransform: 'none',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          backgroundColor: '#FFFFFF',
          boxShadow: 'none',
          border: '1px solid rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: 'none',
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#111811',
          textDecoration: 'none',
          transition: 'color 180ms ease',
          '&:hover': {
            color: '#0A5A30',
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