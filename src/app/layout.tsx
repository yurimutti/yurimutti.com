import localFont from 'next/font/local';
import type { Metadata } from 'next';
import { Providers } from '@/components/providers';
import Script from 'next/script';

import '@/styles/globals.css';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';
import { TopFade } from '@/components/layouts/top-fade';
import { prodUrl } from './sitemap';

// Self-hosted Inter (variable). Avoids a build-time fetch to Google Fonts,
// which fails when fonts.gstatic.com is unreachable.
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  variable: '--font-inter',
  display: 'swap',
  weight: '100 900',
});

export const metadata: Metadata = {
  metadataBase: new URL(prodUrl),
  title: {
    default: 'Yuri Mutti',
    template: '%s | Yuri Mutti',
  },
  description:
    'Personal website of Yuri Mutti, a software engineer and open-source enthusiast.',
  alternates: {
    types: {
      'application/rss+xml': '/posts/feed/rss.xml',
      'application/atom+xml': '/posts/feed/atom.xml',
      'application/feed+json': '/posts/feed/articles.json',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="85e641a5-a4b5-4af0-ad1b-0f7b15dc61f9"
          strategy="afterInteractive"
          defer
        />
      </head>
      <body className="min-h-screen text-foreground">
        <Providers>
          <TopFade />
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
