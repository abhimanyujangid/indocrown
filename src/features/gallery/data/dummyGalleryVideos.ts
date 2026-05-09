export type GalleryVideoItem = {
  id: string;
  title: string;
  description?: string;
  /** Full YouTube URL (watch, youtu.be, or embed) — swap for your own links */
  youtubeUrl: string;
};

/** Replace `youtubeUrl` entries with your YouTube links; thumbnails use YouTube’s poster API. */
export const DUMMY_GALLERY_VIDEOS: GalleryVideoItem[] = [
  {
    id: 'v1',
    title: 'Soil health and resilient farms',
    description: 'Why healthy soil is the foundation of sustainable production.',
    youtubeUrl: 'https://www.youtube.com/watch?v=K5KAc5CoCjI',
  },
  {
    id: 'v2',
    title: 'Water-smart irrigation',
    description: 'Using less water while keeping fields productive.',
    youtubeUrl: 'https://www.youtube.com/watch?v=8pWtPY5uFao',
  },
  {
    id: 'v3',
    title: 'From field to market',
    description: 'How strong partnerships move harvests to people who need them.',
    youtubeUrl: 'https://youtu.be/M7lc1UVf-VE',
  },
  {
    id: 'v4',
    title: 'Growing with the seasons',
    description: 'Planning around climate and natural cycles.',
    youtubeUrl: 'https://www.youtube.com/watch?v=aqz-KE-bpKQ',
  },
  {
    id: 'v5',
    title: 'People behind the harvest',
    description: 'Teams and communities that make every season possible.',
    youtubeUrl: 'https://www.youtube.com/watch?v=jNQXAC9IVRw',
  },
  {
    id: 'v6',
    title: 'Innovation in the field',
    description: 'Tools and ideas shaping the next generation of agriculture.',
    youtubeUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
  },
];

export function youtubeVideoIdFromUrl(url: string): string | null {
  const u = url.trim();
  const short = u.match(/youtu\.be\/([^?&#/]+)/);
  if (short?.[1]) return short[1];
  const watch = u.match(/[?&]v=([^&]+)/);
  if (watch?.[1]) return watch[1];
  const embed = u.match(/youtube\.com\/embed\/([^?&#/]+)/);
  if (embed?.[1]) return embed[1];
  const shorts = u.match(/youtube\.com\/shorts\/([^?&#/]+)/);
  if (shorts?.[1]) return shorts[1];
  return null;
}

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
}

export function youtubeEmbedSrc(videoId: string, autoplay: boolean): string {
  const qs = new URLSearchParams({
    autoplay: autoplay ? '1' : '0',
    rel: '0',
    modestbranding: '1',
    playsinline: '1',
  });
  return `https://www.youtube-nocookie.com/embed/${videoId}?${qs}`;
}
