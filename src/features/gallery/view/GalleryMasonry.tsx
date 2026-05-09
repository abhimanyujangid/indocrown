'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Add from '@mui/icons-material/Add';
import { motion } from 'framer-motion';

import { DUMMY_GALLERY_IMAGES, type DummyGalleryImage } from '../data/dummyGalleryImages';

import GalleryLightbox from './GalleryLightbox';

/** Slightly taller row quantum → shorter row counts, less “stretched” vertical tiles */
const ROW_PX = 12;
/** Keep in sync with grid `gap` for width math (≈ gutters in reference UI) */
const GRID_GAP_PX = 12;
const INITIAL_COUNT = 9;
const PAGE_SIZE = 7;
/** Cooldown avoids loading the entire catalogue while the sentinel stays in view */
const LOAD_COOLDOWN_MS = 550;
const MIN_ROW_SPAN = 12;
/** Cap tile height vs width + absolute px so cells stay short like the reference masonry */
const MAX_HEIGHT_TO_WIDTH = 0.72;
const ABS_MAX_TILE_HEIGHT_PX = 240;
/** ~240px ÷ ROW_PX + headroom */
const MAX_ROW_SPAN = 26;

function tileWidthForSpan(gridInnerWidthPx: number, colSpan: number): number {
  if (gridInnerWidthPx <= 0 || colSpan < 1) return 1;
  const track = Math.max(gridInnerWidthPx - GRID_GAP_PX * 11, 0) / 12;
  return colSpan * track + GRID_GAP_PX * Math.max(0, colSpan - 1);
}

function rowSpanForImage(
  natW: number,
  natH: number,
  tileW: number,
  rowPx: number
): number {
  if (!natW || !natH || tileW <= 1) return MIN_ROW_SPAN;
  const intrinsicH = (natH / natW) * tileW;
  const maxByWidth = tileW * MAX_HEIGHT_TO_WIDTH;
  const displayH = Math.min(intrinsicH, maxByWidth, ABS_MAX_TILE_HEIGHT_PX);
  const span = Math.ceil(displayH / rowPx);
  return Math.min(MAX_ROW_SPAN, Math.max(MIN_ROW_SPAN, span));
}

type NaturalsMap = Record<string, { w: number; h: number }>;

type GalleryTileProps = {
  item: DummyGalleryImage;
  effectiveColSpan: number;
  tileW: number;
  naturals: NaturalsMap;
  onMeasured: (id: string, w: number, h: number) => void;
  onOpen: () => void;
};

function GalleryTile({
  item,
  effectiveColSpan,
  tileW,
  naturals,
  onMeasured,
  onOpen,
}: GalleryTileProps) {
  const natural = naturals[item.id];

  const rowSpan = natural
    ? rowSpanForImage(natural.w, natural.h, tileW, ROW_PX)
    : MIN_ROW_SPAN;

  const onLoad = useCallback(
    (e: React.SyntheticEvent<HTMLImageElement>) => {
      const el = e.currentTarget;
      onMeasured(item.id, el.naturalWidth, el.naturalHeight);
    },
    [item.id, onMeasured]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      style={{
        gridColumn: `span ${effectiveColSpan}`,
        gridRowEnd: `span ${rowSpan}`,
      }}
    >
      <Box
        component="button"
        type="button"
        onClick={onOpen}
        aria-label={item.alt ? `Open: ${item.alt}` : 'Open image in gallery'}
        sx={{
          position: 'relative',
          borderRadius: 2,
          overflow: 'hidden',
          width: '100%',
          height: '100%',
          minHeight: 0,
          cursor: 'pointer',
          display: 'block',
          p: 0,
          m: 0,
          border: 'none',
          background: 'none',
          font: 'inherit',
          color: 'inherit',
          textAlign: 'left',
          boxShadow: '0 8px 30px rgba(0,0,0,0.08)',
          bgcolor: 'grey.100',
          '&:hover .gallery-tile-img': {
            transform: 'scale(1.04)',
            filter: 'blur(10px)',
          },
          '&:hover .gallery-tile-overlay': {
            opacity: 1,
          },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 2,
          },
        }}
      >
        <Box
          component="img"
          className="gallery-tile-img"
          src={item.src}
          alt={item.alt ?? ''}
          loading="lazy"
          decoding="async"
          sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
          onLoad={onLoad}
          sx={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            transition: 'filter 0.35s ease, transform 0.45s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />
        <Box
          className="gallery-tile-overlay"
          aria-hidden
          sx={{
            position: 'absolute',
            inset: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 0,
            bgcolor: 'rgba(0,0,0,0.28)',
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
          }}
        >
          <Add
            sx={{
              fontSize: { xs: 32, md: 36 },
              color: 'common.white',
              opacity: 0.95,
            }}
          />
        </Box>
      </Box>
    </motion.div>
  );
}

export default function GalleryMasonry() {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: false });

  const gridRef = useRef<HTMLDivElement>(null);
  const sentinelRef = useRef<HTMLDivElement>(null);
  const [gridInnerWidth, setGridInnerWidth] = useState(0);
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [naturals, setNaturals] = useState<NaturalsMap>({});
  const [lightbox, setLightbox] = useState<{ open: boolean; index: number }>({
    open: false,
    index: 0,
  });

  const total = DUMMY_GALLERY_IMAGES.length;

  const openLightbox = useCallback((id: string) => {
    const idx = DUMMY_GALLERY_IMAGES.findIndex((i) => i.id === id);
    if (idx >= 0) {
      setLightbox({ open: true, index: idx });
    }
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox((s) => ({ ...s, open: false }));
  }, []);

  const onMeasured = useCallback((id: string, w: number, h: number) => {
    setNaturals((prev) => {
      if (prev[id]) return prev;
      return { ...prev, [id]: { w, h } };
    });
  }, []);

  useEffect(() => {
    const el = gridRef.current;
    if (!el || typeof ResizeObserver === 'undefined') return;
    const ro = new ResizeObserver((entries) => {
      const w = entries[0]?.contentRect?.width ?? 0;
      setGridInnerWidth(Math.round(w));
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const items = useMemo(
    () => DUMMY_GALLERY_IMAGES.slice(0, Math.min(visibleCount, total)),
    [visibleCount, total]
  );

  const tileWidthsById = useMemo(() => {
    const map = new Map<string, number>();
    if (gridInnerWidth <= 0) return map;

    items.forEach((item) => {
      const span = isMdUp
        ? Math.min(12, Math.max(1, item.colSpan))
        : 12;
      const tw = isMdUp
        ? tileWidthForSpan(gridInnerWidth, span)
        : gridInnerWidth;
      map.set(item.id, Math.max(tw, 1));
    });
    return map;
  }, [gridInnerWidth, isMdUp, items]);

  const lastLoadAt = useRef<number | null>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel || visibleCount >= total) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!entry?.isIntersecting) return;
        const now = Date.now();
        if (
          lastLoadAt.current != null &&
          now - lastLoadAt.current < LOAD_COOLDOWN_MS
        ) {
          return;
        }
        lastLoadAt.current = now;
        setVisibleCount((c) => Math.min(c + PAGE_SIZE, total));
      },
      { root: null, rootMargin: '320px', threshold: 0 }
    );

    observer.observe(sentinel);
    return () => observer.disconnect();
  }, [visibleCount, total]);

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        ref={gridRef}
        sx={{
          display: 'grid',
          gap: `${GRID_GAP_PX}px`,
          gridAutoRows: `${ROW_PX}px`,
          gridAutoFlow: 'dense',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
        }}
      >
        {items.map((item) => {
          const effectiveColSpan = isMdUp ? Math.min(12, Math.max(1, item.colSpan)) : 12;
          const tileW = tileWidthsById.get(item.id) ?? Math.max(gridInnerWidth, 1);

          return (
            <GalleryTile
              key={item.id}
              item={item}
              effectiveColSpan={effectiveColSpan}
              tileW={tileW}
              naturals={naturals}
              onMeasured={onMeasured}
              onOpen={() => openLightbox(item.id)}
            />
          );
        })}
      </Box>

      {/* Sentinel */}
      <Box ref={sentinelRef} sx={{ height: 4, mt: 2 }} />

      <GalleryLightbox
        open={lightbox.open}
        onClose={closeLightbox}
        images={DUMMY_GALLERY_IMAGES}
        startIndex={lightbox.index}
      />
    </Box>
  );
}
