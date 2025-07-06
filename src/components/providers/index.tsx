'use client';

import 'react-toastify/dist/ReactToastify.css';

import { ToastContainer } from 'react-toastify';

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}

      <ToastContainer />
    </>
  );
};
