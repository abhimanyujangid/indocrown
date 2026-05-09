import { notFound, redirect } from 'next/navigation';

import { hasLocale } from '../dictionaries';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function GalleryIndexPage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  redirect(`/${lang}/gallery/images`);
}
