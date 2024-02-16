import React from 'react';
import { Metadata } from 'next';

import '../styles/main.css';

export const metadata: Metadata = {
  title: {
    template: '%s | Melissa Miller',
    default: 'Melissa Miller',
  },
  description:
    'The work and thoughts of Melissa Miller, UX Engineer and Designer.',
  keywords: [
    'JavaScript',
    'TypeScript',
    'CSS',
    'HTML',
    'Twig',
    'React',
    'Next.js',
    'Storybook',
    'Drupal',
    'Design Systems',
    'Design Tokens',
    'UX Engineer',
    'UX Designer',
    'Photographer',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
