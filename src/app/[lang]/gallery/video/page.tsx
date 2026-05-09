import { notFound } from 'next/navigation';

import GalleryVideoGrid from '@/src/features/gallery/view/GalleryVideoGrid';

import { getDictionary, hasLocale } from '../../dictionaries';
import type { Locale } from '@/src/i18n/config';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function GalleryVideoPage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const dict = await getDictionary(lang as Locale);
  const gv = (dict as any).galleryVideo as {
    closeVideo: string;
    playVideo: string;
    noVideos: string;
  };

  return (
    <GalleryVideoGrid
      labels={{
        closeVideo: gv.closeVideo,
        playVideo: gv.playVideo,
        noVideos: gv.noVideos,
      }}
    />
  );
}
