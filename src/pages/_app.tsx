import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { Radial } from '@/components/layouts/radial';

import { globalStyles } from '@/libs/stitches/global';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Radial />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default MyApp;
