import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';
// import Script from 'next/script';

import '@/styles/globals.css';
import { Footer } from '@/components/layouts/footer';
import { Header } from '@/components/layouts/header';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  title: 'Yuri Mutti',
  description:
    'Personal website of Yuri Mutti, a software engineer and open-source enthusiast.',
  icons: [{ rel: 'icon', url: '/favicon.png' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="85e641a5-a4b5-4af0-ad1b-0f7b15dc61f9"
          strategy="afterInteractive"
          defer
        /> */}
      </head>
      <body className="min-h-screen text-foreground">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
