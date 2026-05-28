export type GalleryVideoItem = {
  id: string;
  title: string;
  description?: string;
  youtubeUrl: string;
};

export const galleryVideos: GalleryVideoItem[] = [
  {
    id: "xOpSl2QJJcQ",
    title: "INDOCROWN Video 1",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=xOpSl2QJJcQ",
  },
  {
    id: "gHmM31EOszo",
    title: "INDOCROWN Video 2",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=gHmM31EOszo",
  },
  {
    id: "5yA5LUiw93g",
    title: "INDOCROWN Video 3",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=5yA5LUiw93g",
  },
  {
    id: "6ooynWYfRnY",
    title: "INDOCROWN Video 4",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=6ooynWYfRnY",
  },
  {
    id: "XzIDSQdK7WM",
    title: "INDOCROWN Video 5",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=XzIDSQdK7WM",
  },
  {
    id: "w4ZgU5Pql8Y",
    title: "INDOCROWN Video 6",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=w4ZgU5Pql8Y",
  },
  {
    id: "z2xyU9nkjmc",
    title: "INDOCROWN Video 7",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=z2xyU9nkjmc",
  },
  {
    id: "rQp-7RccOJs",
    title: "INDOCROWN Video 8",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=rQp-7RccOJs",
  },
  {
    id: "MX7TTeZJovo",
    title: "INDOCROWN Video 9",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=MX7TTeZJovo",
  },
  {
    id: "tUCOUWvhjfI",
    title: "INDOCROWN Video 10",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=tUCOUWvhjfI",
  },
  {
    id: "aysvfTJEEzE",
    title: "INDOCROWN Video 11",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=aysvfTJEEzE",
  },
  {
    id: "5mZFS2BVCJM",
    title: "INDOCROWN Video 12",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=5mZFS2BVCJM",
  },
  {
    id: "8M6JE8d3QF4",
    title: "INDOCROWN Video 13",
    description: "",
    youtubeUrl: "https://www.youtube.com/watch?v=8M6JE8d3QF4",
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
