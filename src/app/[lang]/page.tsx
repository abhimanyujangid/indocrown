import { notFound } from 'next/navigation';

import { getDictionary, hasLocale } from './dictionaries';
import type { Locale } from '../../i18n/config';
import Navbar from '@/src/features/navigation/view/Navbar';
import Hero from '@/src/features/hero/view/Hero';
import About from '@/src/features/about/view/About';

import Solutions from '@/src/features/solutions/view/Solutions';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <Hero dict={dict} />
      <About dict={dict} />
      <Solutions dict={dict} />
    </>
  );
}
