'use client';

import { useMemo, useState } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PlayCircleOutlined from '@mui/icons-material/PlayCircleOutlined';
import {
  motion,
  useReducedMotion,
  useMotionValue,
  useSpring,
} from 'framer-motion';

import {
  DUMMY_GALLERY_VIDEOS,
  youtubeThumbnailUrl,
  youtubeVideoIdFromUrl,
  type GalleryVideoItem,
} from '../data/dummyGalleryVideos';
import GalleryVideoModal from './GalleryVideoModal';

/** Softer springs = slower trailing catch-up behind the pointer */
const CURSOR_SPRING = { stiffness: 48, damping: 16, mass: 0.55 };
/** Fast snap when prefers reduced motion */
const CURSOR_SPRING_SNAP = { stiffness: 500, damping: 45 };

const ICON_HALF_PX = 32;

/** Brand play cursor (fallback when reduced motion — no trailing layer) */
const VIDEO_CARD_CURSOR =
  'url("data:image/svg+xml,' +
  encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none"><circle cx="20" cy="20" r="18" stroke="rgba(255,255,255,0.95)" stroke-width="2.5" fill="#0A5A30"/><path fill="white" d="M17 14l12 7-12 7V14z"/></svg>'
  ) +
  '") 20 20, pointer';

export type GalleryVideoGridLabels = {
  closeVideo: string;
  playVideo: string;
  noVideos: string;
};

type GalleryVideoGridProps = {
  labels: GalleryVideoGridLabels;
  /** Optional override; defaults to demo list with YouTube URLs */
  videos?: GalleryVideoItem[];
};

type GalleryVideoCardProps = {
  item: GalleryVideoItem;
  thumb: string;
  index: number;
  reduceMotion: boolean | null;
  playAria: string;
  onOpen: () => void;
};

function GalleryVideoCard({
  item,
  thumb,
  index,
  reduceMotion,
  playAria,
  onOpen,
}: GalleryVideoCardProps) {
  const [pointerInside, setPointerInside] = useState(false);
  const mx = useMotionValue(ICON_HALF_PX);
  const my = useMotionValue(ICON_HALF_PX);
  const springCfg = reduceMotion ? CURSOR_SPRING_SNAP : CURSOR_SPRING;
  const sx = useSpring(mx, springCfg);
  const sy = useSpring(my, springCfg);

  const useLagCursor = Boolean(pointerInside && !reduceMotion);

  const setFromEvent = (e: React.MouseEvent<HTMLButtonElement>) => {
    mx.set(e.nativeEvent.offsetX);
    my.set(e.nativeEvent.offsetY);
  };

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 56 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: '0px 0px -10% 0px' }}
      transition={{
        duration: reduceMotion ? 0 : 0.55,
        delay: reduceMotion ? 0 : Math.min(index * 0.08, 0.4),
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      <Box
        component="button"
        type="button"
        onClick={onOpen}
        aria-label={playAria}
        onPointerEnter={(e) => {
          setPointerInside(true);
          setFromEvent(e);
        }}
        onPointerMove={(e) => {
          setFromEvent(e);
        }}
        onPointerLeave={() => setPointerInside(false)}
        onPointerCancel={() => setPointerInside(false)}
        sx={{
          position: 'relative',
          width: '100%',
          p: 0,
          m: 0,
          border: 'none',
          borderRadius: 2,
          overflow: 'hidden',
          cursor: useLagCursor ? 'none' : VIDEO_CARD_CURSOR,
          display: 'block',
          textAlign: 'left',
          bgcolor: 'grey.900',
          boxShadow: '0 10px 36px rgba(0,0,0,0.12)',
          transition:
            'transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94), box-shadow 0.55s ease',
          '&:hover': {
            transform: 'translateY(-7px) scale(1.02)',
            boxShadow: '0 22px 56px rgba(10, 90, 49, 0.22)',
          },
          '&:hover .video-card-media': {
            transform: 'scale(1.06)',
            filter: 'brightness(0.88)',
          },
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: 'primary.main',
            outlineOffset: 3,
          },
        }}
      >
        <Box
          className="video-card-media"
          sx={{
            display: 'block',
            width: '100%',
            aspectRatio: '16 / 10',
            backgroundImage: `url(${thumb})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transition:
              'transform 0.65s cubic-bezier(0.25, 0.46, 0.45, 0.94), filter 0.55s ease',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            inset: 0,
            zIndex: 1,
            background:
              'linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.15) 45%, transparent 65%)',
            pointerEvents: 'none',
          }}
        />

        {/* Center play — fades when the lag follower is active */}
        <Box
          className="video-card-play"
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            zIndex: 2,
            transform: 'translate(-50%, -50%) scale(1)',
            color: 'common.white',
            pointerEvents: 'none',
            opacity: useLagCursor ? 0 : 0.88,
            transition: 'opacity 0.35s ease',
            filter: 'drop-shadow(0 4px 16px rgba(0,0,0,0.45))',
          }}
        >
          <PlayCircleOutlined sx={{ fontSize: { xs: 56, sm: 64 } }} />
        </Box>

        {/* Slow-trailing custom “cursor” (pointer hidden while inside) */}
        <motion.div
          aria-hidden
          animate={{ opacity: useLagCursor ? 1 : 0 }}
          transition={{ duration: 0.22 }}
          style={{
            position: 'absolute',
            left: sx,
            top: sy,
            width: ICON_HALF_PX * 2,
            height: ICON_HALF_PX * 2,
            marginLeft: -ICON_HALF_PX,
            marginTop: -ICON_HALF_PX,
            zIndex: 4,
            pointerEvents: 'none',
          }}
        >
          <PlayCircleOutlined
            sx={{
              fontSize: { xs: 56, sm: 64 },
              color: 'common.white',
              display: 'block',
              filter: 'drop-shadow(0 6px 20px rgba(0,0,0,0.5))',
            }}
          />
        </motion.div>

        <Box sx={{ position: 'absolute', left: 0, right: 0, bottom: 0, p: 2, zIndex: 3 }}>
          <Typography
            variant="subtitle1"
            sx={{ color: 'common.white', fontWeight: 600, lineHeight: 1.35 }}
          >
            {item.title}
          </Typography>
          {item.description ? (
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255,255,255,0.85)',
                mt: 0.75,
                display: '-webkit-box',
                WebkitLineClamp: 2,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
              }}
            >
              {item.description}
            </Typography>
          ) : null}
        </Box>
      </Box>
    </motion.div>
  );
}

export default function GalleryVideoGrid({
  labels,
  videos = DUMMY_GALLERY_VIDEOS,
}: GalleryVideoGridProps) {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState<GalleryVideoItem | null>(null);

  const prepared = useMemo(() => {
    return videos
      .map((v) => {
        const vid = youtubeVideoIdFromUrl(v.youtubeUrl);
        return vid ? { item: v, thumb: youtubeThumbnailUrl(vid), videoId: vid } : null;
      })
      .filter(Boolean) as { item: GalleryVideoItem; thumb: string; videoId: string }[];
  }, [videos]);

  if (prepared.length === 0) {
    return (
      <Box sx={{ py: 8, textAlign: 'center' }}>
        <Typography color="text.secondary">{labels.noVideos}</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, minmax(0, 1fr))',
          md: 'repeat(3, minmax(0, 1fr))',
        },
        gap: { xs: 2.5, md: 3 },
        pb: { xs: 4, md: 6 },
      }}
    >
      {prepared.map(({ item, thumb }, index) => (
        <GalleryVideoCard
          key={item.id}
          item={item}
          thumb={thumb}
          index={index}
          reduceMotion={reduceMotion}
          playAria={`${labels.playVideo}: ${item.title}`}
          onOpen={() => setActive(item)}
        />
      ))}

      <GalleryVideoModal
        open={Boolean(active)}
        onClose={() => setActive(null)}
        video={active}
        closeLabel={labels.closeVideo}
      />
    </Box>
  );
}
