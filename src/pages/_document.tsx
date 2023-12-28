import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

import { getCssText } from '@/libs/stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <meta charSet="utf-8" />
        <meta content="Yuri Mutti" name="author" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <Script src="https://www.googletagmanager.com/gtag/js?id=G-TCHCF39EFW" />
          <Script id="google-analytics">
            {`
         window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-TCHCF39EFW');
        `}
          </Script>
        </Head>
        <body style={{ position: 'relative' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
