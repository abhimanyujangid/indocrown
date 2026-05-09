import { notFound } from 'next/navigation';

import { getDictionary, hasLocale } from '../dictionaries';
import Navbar from '@/src/features/navigation/view/Navbar';
import PageHero from '@/src/components/PageHero';
import { Locale } from '@/src/i18n/config';
import Footer from '@/src/features/footer/view/Footer';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function GalleryPage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <PageHero section={(dict as any).contactHero} />
      <Footer dict={dict} />
    </>
  );
}
