import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function GlassChip({ label, large, icon }: { label: string; large?: boolean; icon: React.ReactNode }) {
    return (
      <Box
        sx={{
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: { xs: 0.85, sm: 1 },
          px: large ? { xs: 2.25, sm: 3 } : { xs: 1.85, sm: 2.25 },
          py: large ? { xs: 1.05, sm: 1.35 } : { xs: 0.85, sm: 1 },
          borderRadius: 999,
          bgcolor: 'rgba(255,255,255,0.58)',
          backdropFilter: 'blur(18px) saturate(160%)',
          WebkitBackdropFilter: 'blur(18px) saturate(160%)',
          border: '1px solid rgba(255,255,255,0.72)',
          boxShadow:
            'inset 0 1px 0 rgba(255,255,255,0.5), 0 12px 36px rgba(0,0,0,0.16)',
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{
            fontWeight: 600,
            letterSpacing: '0.02em',
            color: 'primary.main',
            fontSize: large ? { xs: '0.9rem', sm: '1rem' } : { xs: '0.8rem', sm: '0.875rem' },
          }}
        >
          {label}
        </Typography>
      </Box>
    );
  }