'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page } from '../components/Page/Page';

import '../styles/main.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang='en'>
      <body>
        <Page pathname={pathname ?? undefined}>{children}</Page>
      </body>
    </html>
  );
}
