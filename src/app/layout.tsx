import { Inter } from 'next/font/google';
import { Providers } from '@/components/providers';

import '@/styles/globals.css';

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
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} dark h-full `}>
      <body className="min-h-screen bg-[linear-gradient(to_bottom,_#1c1e26,_#2a1f2f,_#332232)] text-foreground">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
