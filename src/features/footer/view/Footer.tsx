'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Link from 'next/link';

import { LeafGlyph } from '../../navigation/components/NavIcons';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

// Simple Social Icons (Instagram, YouTube, Facebook)
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
    </svg>
  );
}

const SocialIcons: Record<string, React.FC> = {
  Instagram: InstagramIcon,
  YouTube: YouTubeIcon,
  Facebook: FacebookIcon,
};

type FooterProps = {
  dict: Dictionary;
};

export default function Footer({ dict }: FooterProps) {
  const section = (dict as any).footerSection;
  if (!section) return null;

  return (
    <Box component="footer" sx={{ width: '100%', pt: { xs: 8, md: 12 }, pb: 4, bgcolor: 'common.white', borderTop: '1px solid rgba(0,0,0,0.05)' }}>
      <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
        
        {/* Main Footer Layout */}
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', mb: 10, gap: 8 }}>
          
          {/* Left Column: Logo & Tagline */}
          <Box sx={{ maxWidth: 400 }}>
            {/* Logo */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 4, color: 'text.primary' }}>
              <Box sx={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <LeafGlyph size={40} />
              </Box>
              <Typography variant="h5" sx={{ fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1 }}>
                Freshfield<br />Group
              </Typography>
              <Typography variant="caption" sx={{ alignSelf: 'flex-start', mt: 0.5 }}>®</Typography>
            </Box>

            {/* Tagline */}
            <Typography variant="body1" sx={{ fontWeight: 600, color: 'text.primary', mb: 6, whiteSpace: 'pre-line', fontSize: '1.125rem' }}>
              {section.tagline}
            </Typography>

            {/* Social Pills */}
            <Stack direction="row" spacing={2} useFlexGap sx={{ flexWrap: 'wrap' }}>
              {section.socials.map((social: { label: string; href: string }) => {
                const Icon = SocialIcons[social.label];
                const isExternal = social.href.startsWith('http');
                return (
                  <Box 
                    key={social.label}
                    component="a"
                    href={social.href}
                    {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    sx={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      gap: 1, 
                      px: 2.5, 
                      py: 1, 
                      borderRadius: 999, 
                      border: '1px solid rgba(0,0,0,0.08)',
                      color: 'text.primary',
                      textDecoration: 'none',
                      transition: 'all 0.2s',
                      '&:hover': { bgcolor: 'rgba(0,0,0,0.02)', borderColor: 'rgba(0,0,0,0.15)' }
                    }}
                  >
                    {Icon && <Box sx={{ color: 'primary.main', display: 'flex' }}><Icon /></Box>}
                    <Typography variant="body2" sx={{ fontWeight: 500 }}>{social.label}</Typography>
                  </Box>
                );
              })}
            </Stack>
          </Box>

          {/* Right Column: Links */}
          <Box sx={{ minWidth: { md: 150 } }}>
            <Typography variant="subtitle1" sx={{ color: 'primary.main', fontWeight: 600, mb: 3 }}>
              {section.linksTitle}
            </Typography>
            <Stack spacing={2.5}>
              {section.links.map((link: any) => (
                <Typography 
                  key={link.label}
                  component={Link}
                  href={link.href}
                  variant="body2" 
                  sx={{ 
                    color: 'text.secondary', 
                    textDecoration: 'none',
                    fontWeight: 500,
                    transition: 'color 0.2s',
                    '&:hover': { color: 'primary.main' }
                  }}
                >
                  {link.label}
                </Typography>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Bottom Copyright */}
        <Box sx={{ pt: 4, borderTop: '1px solid rgba(0,0,0,0.08)', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 2 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
            {section.copyright}
          </Typography>
        </Box>

      </Container>
    </Box>
  );
}
