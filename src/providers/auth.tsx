'use client';

import { SessionProvider, SessionProviderProps } from 'next-auth/react';

export function AuthProvider({ children }: SessionProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
