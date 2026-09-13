'use client';

import { ThemeProvider } from 'next-themes';
import { ToastContainer } from 'react-toastify';
import { ThemeFavicon } from '@/components/theme-favicon';
import 'react-toastify/dist/ReactToastify.css';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ThemeFavicon />
      {children}
      <ToastContainer />
    </ThemeProvider>
  );
};
