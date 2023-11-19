'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type ToastProviderProps = {
  children: React.ReactNode;
};

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
