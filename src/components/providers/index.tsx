'use client';

import 'react-toastify/dist/ReactToastify.css';
import '@/libs/stitches/global';

import { ToastContainer } from 'react-toastify';

import { ThemeProvider } from 'next-themes';
import Script from 'next/script';

import { Radial } from '@/components/layouts/radial';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      {/* Google Analytics */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        strategy="afterInteractive"
      />
      <Script id="ga" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');`}
      </Script>

      {/* Background radial + conteúdo */}
      <Radial />
      {children}

      {/* Toasts */}
      <ToastContainer />
    </ThemeProvider>
  );
};
