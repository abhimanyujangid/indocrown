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
          bgcolor: 'rgba(255,255,255,0.2)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          border: '1px solid rgba(255,255,255,0.48)',
          color: 'common.white',
          boxShadow: '0 10px 40px rgba(0,0,0,0.14)',
        }}
      >
        {icon}
        <Typography
          component="span"
          sx={{
            fontWeight: 600,
            letterSpacing: '0.02em',
            fontSize: large ? { xs: '0.9rem', sm: '1rem' } : { xs: '0.8rem', sm: '0.875rem' },
          }}
        >
          {label}
        </Typography>
      </Box>
    );
  }