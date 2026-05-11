'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';

import AnimatedButton from '../../../components/AnimatedButton';
import { LeafGlyph } from '../../navigation/components/NavIcons';
import type { Dictionary } from '../../../app/[lang]/dictionaries';

// SVG Icons
function LocationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
      <circle cx="12" cy="10" r="3"></circle>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}

// Reusable Input Component
const FormInput = ({ placeholder, multiline = false, rows = 1 }: { placeholder: string; multiline?: boolean; rows?: number }) => (
  <InputBase
    placeholder={placeholder}
    fullWidth
    multiline={multiline}
    rows={rows}
    sx={{
      bgcolor: '#F5F5F7',
      borderRadius: 1,
      px: 2.5,
      py: 2,
      border: '1px solid transparent',
      transition: 'all 0.2s',
      fontSize: '0.95rem',
      fontWeight: 500,
      color: 'text.primary',
      '&.Mui-focused': {
        bgcolor: 'common.white',
        borderColor: 'primary.main',
        boxShadow: (theme) => `0 4px 20px ${theme.palette.primary.main}1A`,
      }
    }}
  />
);

type ContactFormProps = {
  dict: Dictionary;
};

export default function ContactForm({ dict }: ContactFormProps) {
  const section = (dict as any).contactForm;
  if (!section) return null;

  return (
    <Box component="section" id="contact-form" sx={{ width: '100%', py: { xs: 8, md: 10 }, bgcolor: 'common.white' }}>
      <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 0 } }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: 8, md: 12 },
            alignItems: 'flex-start'
          }}
        >

          {/* Left Column (Typography & Info) */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            sx={{ flex: 1, maxWidth: { md: 500 } }}
          >
            {/* Tag Pill */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 1,
                px: 2,
                py: 0.5,
                borderRadius: 999,
                border: '1px solid rgba(0,0,0,0.08)',
                mb: 4
              }}
            >
              <Box sx={{ color: 'primary.main', display: 'flex' }}>
                <LeafGlyph size={12} />
              </Box>
              <Typography variant="body2" sx={{ fontWeight: 600, color: 'text.primary' }}>
                {section.tag}
              </Typography>
            </Box>

            {/* Headline */}
            <Typography
              variant="h2"
              sx={{
                fontWeight: 700,
                mb: 3,
                whiteSpace: 'pre-line',
                fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
                color: 'text.primary'
              }}
            >
              {section.headline}
            </Typography>

            {/* Description */}
            <Typography
              variant="body1"
              sx={{
                color: 'text.secondary',
                fontSize: { xs: '1rem', md: '1.125rem' },
                lineHeight: 1.6,
                mb: 6,
                maxWidth: 400
              }}
            >
              {section.description}
            </Typography>

            {/* Subtle Divider */}
            <Box sx={{ width: '100%', height: '1px', bgcolor: 'rgba(0,0,0,0.06)', mb: 6 }} />

            {/* Contact Details List */}
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}><LocationIcon /></Box>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>{section.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}><PhoneIcon /></Box>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>{section.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <Box sx={{ color: 'primary.main', display: 'flex' }}><EmailIcon /></Box>
                <Typography variant="body1" sx={{ fontWeight: 600, color: 'primary.main' }}>{section.email}</Typography>
              </Box>
            </Stack>
          </Box>

          {/* Right Column (Form Box) */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "0px 0px -50px 0px" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            sx={{
              flex: 1,
              width: '100%',
              bgcolor: '#FAFAFA',
              borderRadius: { xs: 1, md: 2 },
              p: { xs: 4, sm: 6, md: 8 }
            }}
          >
            <Stack spacing={3}>
              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <FormInput placeholder={section.form.firstName} />
                <FormInput placeholder={section.form.lastName} />
              </Box>

              <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 3 }}>
                <FormInput placeholder={section.form.phone} />
                <FormInput placeholder={section.form.email} />
              </Box>

              <FormInput placeholder={section.form.message} multiline rows={6} />

              <Box sx={{ pt: 2 }}>
                <AnimatedButton
                  btnVariant={2}
                  sx={{ width: '100%', py: 1, fontSize: '1.125rem' }}
                >
                  {section.form.submit}
                </AnimatedButton>
              </Box>
            </Stack>
          </Box>

        </Box>
      </Container>
    </Box>
  );
}
