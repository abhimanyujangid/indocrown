import type { Metadata } from 'next';
import { Geist, Geist_Mono, Noto_Sans_Devanagari } from 'next/font/google';
import { notFound } from 'next/navigation';

import '../globals.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v16-appRouter';

import AppProviders from '../../components/AppProviders';
import { hasLocale } from './dictionaries';
import type { Locale } from '../../i18n/config';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: '--font-noto-devanagari',
  subsets: ['devanagari'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Dhannalal Surendra Kumar Krishi Yantra Udyog',
  description:
    'Trusted agricultural machinery manufacturer — durable tractor-operated farming machines for Indian farmers.',
};

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'hi' }];
}

type LangLayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export default async function LangLayout({ children, params }: LangLayoutProps) {
  const { lang } = await params;

  if (!hasLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const bodyClass =
    locale === 'hi'
      ? `${geistSans.variable} ${geistMono.variable} ${notoDevanagari.variable}`
      : `${geistSans.variable} ${geistMono.variable}`;

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={bodyClass}
        style={
          locale === 'hi'
            ? {
                fontFamily:
                  'var(--font-noto-devanagari), var(--font-geist-sans), sans-serif',
              }
            : undefined
        }
      >
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <AppProviders>{children}</AppProviders>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
