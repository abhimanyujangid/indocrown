import { notFound } from 'next/navigation';

import { getDictionary, hasLocale } from '../dictionaries';
import Navbar from '@/src/features/navigation/view/Navbar';
import PageHero from '@/src/components/PageHero';
import ContactForm from '@/src/features/contactForm/view/ContactForm';
import { Locale } from '@/src/i18n/config';
import WhyChooseUs from '@/src/features/whyChooseUs/view/WhyChooseUs';
import Sustainability from '@/src/features/sustainability/view/Sustainability';
import Footer from '@/src/features/footer/view/Footer';

type PageProps = {
  params: Promise<{ lang: string }>;
};

export default async function ContactPage({ params }: PageProps) {
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
      <ContactForm dict={dict} />
      <WhyChooseUs dict={dict} />
      <Sustainability dict={dict} />
      <Footer dict={dict} locale={locale} />
    </>
  );
}
