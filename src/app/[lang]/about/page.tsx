import { notFound } from 'next/navigation';


import Navbar from '@/src/features/navigation/view/Navbar';
import Footer from '@/src/features/footer/view/Footer';
import AboutSplitHero from '@/src/features/about/view/AboutSplitHero';
import AboutStats from '@/src/features/about/view/AboutStats';
import AboutWhoWeAre from '@/src/features/about/view/AboutWhoWeAre';
import AboutHistory from '@/src/features/about/view/AboutHistory';

import { getDictionary, hasLocale } from '../dictionaries';
import type { Locale } from '@/src/i18n/config';
import Cta from '@/src/features/cta/view/Cta';

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
      <AboutStats dict={dict} />
      <AboutWhoWeAre dict={dict} />
      <AboutHistory dict={dict} />
      <Cta dict={dict} locale={locale} />
      <Footer dict={dict} locale={locale} />
    </>
  );
}
