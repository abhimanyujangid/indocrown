import { notFound } from 'next/navigation';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import PageHero from '@/src/components/PageHero';
import Footer from '@/src/features/footer/view/Footer';
import Navbar from '@/src/features/navigation/view/Navbar';
import GallerySubNav from '@/src/features/gallery/view/GallerySubNav';

import { getDictionary, hasLocale } from '../dictionaries';
import type { Locale } from '@/src/i18n/config';

type GalleryLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function GalleryLayout({ children, params }: GalleryLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const dict = await getDictionary(locale);

  return (
    <>
      <Navbar dict={dict} locale={locale} />
      <PageHero section={(dict as any).galleryHero} />
      <Box sx={{ bgcolor: 'common.white', pb: { xs: 8, md: 12 }, pt: { xs: 0, md: 1 } }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <GallerySubNav locale={locale} labels={(dict as any).galleryNav} />
          {children}
        </Container>
      </Box>
      <Footer dict={dict} />
    </>
  );
}
