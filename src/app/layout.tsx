import { ReactNode } from 'react';

import { Providers } from '@/components/providers';

import { getCssText } from '@/libs/stitches';

export const metadata = {
  title: 'Yuri Mutti',
  description:
    'Personal website of Yuri Mutti, a software engineer and open-source enthusiast.',
  icons: [{ rel: 'icon', url: '/favicon.svg' }],
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />

        {/* TODO: update next font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        {/* TODO: remove this */}
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>

      <body style={{ position: 'relative' }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
