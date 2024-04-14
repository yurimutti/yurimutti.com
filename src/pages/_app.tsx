import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import { Radial } from '@/components/layouts/radial';

import { globalStyles } from '@/libs/stitches/global';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="google-analytics">
        {`
         window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());

           gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
        `}
      </Script>
      <Radial />
      <Component {...pageProps} />
      <ToastContainer />
    </ThemeProvider>
  );
};

export default MyApp;
