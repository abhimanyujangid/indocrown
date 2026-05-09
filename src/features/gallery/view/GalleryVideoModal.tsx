'use client';

import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Close from '@mui/icons-material/Close';

import type { GalleryVideoItem } from '../data/dummyGalleryVideos';
import { youtubeEmbedSrc, youtubeVideoIdFromUrl } from '../data/dummyGalleryVideos';

export type GalleryVideoModalProps = {
  open: boolean;
  onClose: () => void;
  video: GalleryVideoItem | null;
  closeLabel: string;
};

export default function GalleryVideoModal({
  open,
  onClose,
  video,
  closeLabel,
}: GalleryVideoModalProps) {
  const videoId = video ? youtubeVideoIdFromUrl(video.youtubeUrl) : null;

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  if (!videoId) return null;

  return (
    <Modal
      open={open && Boolean(video)}
      onClose={onClose}
      closeAfterTransition
      slotProps={{
        backdrop: { sx: { bgcolor: 'rgba(0,0,0,0.9)' } },
      }}
    >
      <Box
        role="dialog"
        aria-modal="true"
        aria-label={video?.title ?? closeLabel}
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 'min(100vw - 32px, 1100px)',
          outline: 'none',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          maxHeight: 'min(92dvh, 900px)',
        }}
      >
        <IconButton
          onClick={onClose}
          aria-label={closeLabel}
          sx={{
            position: 'absolute',
            top: { xs: -44, sm: -48 },
            right: { xs: 0, sm: -8 },
            zIndex: 2,
            color: 'common.white',
            bgcolor: 'rgba(255,255,255,0.1)',
            '&:hover': { bgcolor: 'rgba(255,255,255,0.2)' },
          }}
        >
          <Close sx={{ fontSize: 28 }} />
        </IconButton>

        <Typography
          variant="subtitle1"
          sx={{
            color: 'common.white',
            mb: 2,
            textAlign: 'center',
            px: 2,
            alignSelf: 'stretch',
          }}
        >
          {video?.title}
        </Typography>

        <Box
          sx={{
            width: '100%',
            maxWidth: 960,
            borderRadius: 2,
            overflow: 'hidden',
            bgcolor: 'black',
            boxShadow: '0 24px 80px rgba(0,0,0,0.55)',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              pt: `${(9 / 16) * 100}%`,
            }}
          >
            {open ? (
              <Box
                sx={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  border: 'none',
                }}
                component="iframe"
                src={youtubeEmbedSrc(videoId, true)}
                title={video?.title ?? 'YouTube video'}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            ) : null}
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
