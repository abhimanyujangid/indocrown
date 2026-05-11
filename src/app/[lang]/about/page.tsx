import { notFound } from 'next/navigation';


import Navbar from '@/src/features/navigation/view/Navbar';
import Footer from '@/src/features/footer/view/Footer';
import AboutSplitHero from '@/src/features/about/view/AboutSplitHero';

import { getDictionary, hasLocale } from '../dictionaries';
import type { Locale } from '@/src/i18n/config';
import { Box } from '@mui/material';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function AboutStandalonePage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} navbarTone="onLight" />
      <AboutSplitHero dict={dict} />
      <Footer dict={dict} />
    </>
  );
}
