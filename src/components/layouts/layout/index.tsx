import { PropsWithChildren } from 'react';

import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};
