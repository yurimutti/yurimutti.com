import React from 'react';

import { Footer } from '@/components/layouts/footer';
import { Navbar } from '@/components/layouts/navbar';

interface Props {
  children: React.ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
