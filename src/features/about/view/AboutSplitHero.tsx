"use client";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import EnergySavingsLeafRounded from "@mui/icons-material/EnergySavingsLeafRounded";
import { motion } from "framer-motion";

import type { Dictionary } from "@/src/app/[lang]/dictionaries";
import GlassChip from "@/src/components/GlassChip";
import Image from "next/image";

type AboutSplitHeroProps = {
  dict: Dictionary;
};

const viewportOnce = {
  once: true,
  amount: 0.22,
  margin: "0px 0px -12% 0px",
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export default function AboutSplitHero({ dict }: AboutSplitHeroProps) {
  const p = (dict as Record<string, unknown>).aboutPage as
    | {
        label: string;
        headline: string;
        subtext: string;
        image: string;
        chipCta: string;
        chipPills: string[];
      }
    | undefined;

  if (!p) return null;

  const pills = Array.isArray(p.chipPills) ? p.chipPills : [];

  return (
    <Container
      maxWidth="xl"
      sx={{ mt: { xs: 10, lg: 15 }}}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 5, md: 10 },
          alignItems: "stretch",
          minHeight: { md: `min(calc(100dvh - 120px), 820px)` },
        }}
      >
        <Box sx={{ flex: { md: "0 1 42%" }, minWidth: 0 }}>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                pt: { xs: 0, md: 3 },
              }}
            >
              <Box
                sx={{
                  mb: { xs: 3, md: 4 },
                  display: "inline-flex",
                  alignSelf: "flex-start",
                  alignItems: "center",
                  gap: 1,
                  px: 2,
                  py: 0.85,
                  borderRadius: 999,
                  border: "1px solid",
                  borderColor: "divider",
                  bgcolor: "common.white",
                }}
              >
                <EnergySavingsLeafRounded
                  sx={{ fontSize: 18, color: "primary.main" }}
                />
                <Typography
                  variant="caption"
                  sx={{ fontWeight: 600, color: "text.primary" }}
                >
                  {p.label}
                </Typography>
              </Box>

              <Typography
                variant="h2"
                sx={{
                  fontWeight: 700,
                  letterSpacing: "-0.028em",
                  color: "text.primary",
                  fontSize: {
                    xs: "2rem",
                    sm: "2.375rem",
                    md: "clamp(2.25rem, 2.8vw + 1rem, 3.15rem)",
                  },
                  lineHeight: 1.12,
                  maxWidth: 580,
                  mb: { xs: 2.5, md: 3 },
                }}
              >
                {p.headline}
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  fontSize: { xs: "1.05rem", md: "1.125rem" },
                  lineHeight: 1.7,
                  maxWidth: 520,
                }}
              >
                {p.subtext}
              </Typography>
            </Box>
          </motion.div>
        </Box>

        <Box
          sx={{
            position: "relative",
            minWidth: 0,
            width: "100%",
            height: "100%",
            borderRadius: { xs: 1, md: 2 },
            overflow: "hidden",
            boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
          }}
        >
          <Box
            component="img"
            src={p.image}
            alt=""
            sx={{
              display: "block",
              width: "100%",
              height: { xs: 360, sm: 420, md: "min(58vh, 620px)" },
              objectFit: "cover",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              bottom: { xs: 16, sm: 22 },
              transform: "translateX(-50%)",
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 1.25,
              width: "calc(100% - 32px)",
              pointerEvents: "none",
            }}
          >
            {pills.map((word) => (
              <GlassChip
                key={word}
                label={word}
                icon={
                  <EnergySavingsLeafRounded
                    sx={{ fontSize: 18, color: "primary.main" }}
                  />
                }
              />
            ))}
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
