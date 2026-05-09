'use client';

import { useCallback, useEffect, useRef, useState } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Close from '@mui/icons-material/Close';
import NavigateBefore from '@mui/icons-material/NavigateBefore';
import NavigateNext from '@mui/icons-material/NavigateNext';

import type { DummyGalleryImage } from '../data/dummyGalleryImages';

export type GalleryLightboxProps = {
  open: boolean;
  onClose: () => void;
  images: DummyGalleryImage[];
  startIndex: number;
};

export default function GalleryLightbox({
  open,
  onClose,
  images,
  startIndex,
}: GalleryLightboxProps) {
  const [active, setActive] = useState(startIndex);
  const thumbRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    if (open) {
      const safe = Math.min(Math.max(0, startIndex), Math.max(0, images.length - 1));
      setActive(safe);
    }
  }, [open, startIndex, images.length]);

  const count = images.length;
  const current = count > 0 ? images[active] : null;

  const goPrev = useCallback(() => {
    setActive((i) => (i <= 0 ? count - 1 : i - 1));
  }, [count]);

  const goNext = useCallback(() => {
    setActive((i) => (i >= count - 1 ? 0 : i + 1));
  }, [count]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') goPrev();
      if (e.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose, goPrev, goNext]);

  useEffect(() => {
    thumbRefs.current[active]?.scrollIntoView({
      behavior: 'smooth',
      inline: 'center',
      block: 'nearest',
    });
  }, [active]);

  if (count === 0) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeAfterTransition
      slotProps={{
        backdrop: {
          sx: { bgcolor: 'rgba(0,0,0,0.92)' },
        },
      }}
    >
      <Box
        role="dialog"
        aria-modal="true"
        aria-label={current?.alt ?? 'Gallery image'}
        sx={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          bgcolor: 'rgba(0,0,0,0.94)',
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label="Close gallery"
          sx={{
            position: 'absolute',
            top: { xs: 8, sm: 16 },
            right: { xs: 8, sm: 16 },
            zIndex: 2,
            color: 'common.white',
            bgcolor: 'rgba(255,255,255,0.08)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.16)' },
          }}
        >
          <Close sx={{ fontSize: 28 }} />
        </IconButton>

        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: 0,
            px: { xs: 1, sm: 6, md: 10 },
            pt: { xs: 7, sm: 8 },
            pb: 1,
            position: 'relative',
          }}
        >
          <IconButton
            onClick={goPrev}
            aria-label="Previous image"
            sx={{
              position: 'absolute',
              left: { xs: 4, sm: 12, md: 20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              color: 'common.white',
              bgcolor: 'rgba(255,255,255,0.06)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' },
            }}
          >
            <NavigateBefore sx={{ fontSize: { xs: 36, md: 48 } }} />
          </IconButton>

          {current ? (
            <Box
              component="img"
              src={current.src}
              alt={current.alt ?? ''}
              sx={{
                maxWidth: '100%',
                maxHeight: { xs: 'calc(100dvh - 200px)', sm: 'calc(100dvh - 180px)' },
                width: 'auto',
                height: 'auto',
                objectFit: 'contain',
                borderRadius: 1,
                userSelect: 'none',
              }}
            />
          ) : null}

          <IconButton
            onClick={goNext}
            aria-label="Next image"
            sx={{
              position: 'absolute',
              right: { xs: 4, sm: 12, md: 20 },
              top: '50%',
              transform: 'translateY(-50%)',
              zIndex: 1,
              color: 'common.white',
              bgcolor: 'rgba(255,255,255,0.06)',
              '&:hover': { bgcolor: 'rgba(255,255,255,0.14)' },
            }}
          >
            <NavigateNext sx={{ fontSize: { xs: 36, md: 48 } }} />
          </IconButton>
        </Box>

        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: 1.25,
            py: 2,
            px: 2,
            overflowX: 'auto',
            overflowY: 'hidden',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            '&::-webkit-scrollbar': { height: 6 },
            '&::-webkit-scrollbar-thumb': {
              bgcolor: 'rgba(255,255,255,0.25)',
              borderRadius: 3,
            },
          }}
        >
          {images.map((img, i) => {
            const selected = i === active;
            return (
              <IconButton
                key={img.id}
                ref={(el) => {
                  thumbRefs.current[i] = el;
                }}
                onClick={() => setActive(i)}
                aria-label={`Show image ${i + 1}`}
                aria-current={selected ? 'true' : undefined}
                sx={{
                  p: 0,
                  width: 72,
                  height: 72,
                  flexShrink: 0,
                  borderRadius: 1.5,
                  overflow: 'hidden',
                  border: selected ? '2px solid #fff' : '2px solid transparent',
                  opacity: selected ? 1 : 0.65,
                  transition: 'opacity 0.2s, border-color 0.2s',
                  '&:hover': { opacity: 1 },
                }}
              >
                <Box
                  component="img"
                  src={img.src}
                  alt=""
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Modal>
  );
}
