import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';

import { globalStyles, darkTheme } from '@/styles/global';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      value={{
        light: 'light',
        dark: darkTheme.className,
      }}
    >
      <Component {...pageProps} />;
    </ThemeProvider>
  );
};

export default MyApp;
