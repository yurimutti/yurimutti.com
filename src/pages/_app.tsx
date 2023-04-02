import type { AppProps } from 'next/app';

import { globalStyles } from '@/styles/global';

globalStyles();

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
