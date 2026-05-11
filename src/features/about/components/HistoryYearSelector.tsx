import { HistoryItem } from "../view/AboutHistory";
import Box from "@mui/material/Box";
import { motion } from "framer-motion";
import Chip from "@mui/material/Chip";

type HistoryYearSelectorProps = {
    label: string;
    items: HistoryItem[];
    activeYear: string;
    onChange: (year: string) => void;
  };
  
  export default function HistoryYearSelector({
    label,
    items,
    activeYear,
    onChange,
  }: HistoryYearSelectorProps) {
    return (
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.35, margin: '0px 0px -10% 0px' }}
        transition={{
          duration: 0.55,
          delay: 0.16,
          ease: [0.25, 0.46, 0.45, 0.94] as const,
        }}
        role="tablist"
        aria-label={label}
        sx={{
          display: 'inline-flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 0.75,
          mt: { xs: 3, md: 4 },
          p: 0.5,
          borderRadius: 999,
          bgcolor: '#F7F7F5',
          border: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        {items.map((item) => {
          const selected = item.year === activeYear;
  
          return (
            <Chip
              key={item.year}
              label={item.year}
              clickable
              role="tab"
              aria-selected={selected}
              onClick={() => onChange(item.year)}
              color={selected ? 'primary' : 'default'}
              variant={selected ? 'filled' : 'outlined'}
              sx={{
                minWidth: 62,
                height: 30,
                px: 0.5,
                borderRadius: 999,
                bgcolor: selected ? 'primary.main' : 'common.white',
                borderColor: selected ? 'primary.main' : 'rgba(0,0,0,0.12)',
                boxShadow: selected
                  ? '0 8px 20px rgba(10, 90, 49, 0.18)'
                  : '0 2px 8px rgba(0,0,0,0.04)',
                transition:
                  'background-color 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
                '& .MuiChip-label': {
                  px: 1.1,
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: selected ? 'common.white' : 'text.primary',
                },
                '&:hover': {
                  bgcolor: selected ? 'primary.dark' : 'rgba(10, 90, 49, 0.06)',
                  borderColor: 'primary.main',
                  transform: 'translateY(-1px)',
                  '& .MuiChip-label': {
                    color: selected ? 'common.white' : 'primary.main',
                  },
                },
                '&:focus-visible': {
                  outline: '2px solid',
                  outlineColor: 'primary.main',
                  outlineOffset: 3,
                },
              }}
            />
          );
        })}
      </Box>
    );
  }