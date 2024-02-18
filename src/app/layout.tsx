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
    'React',
    'Next.js',
    'Gatsby',
    'Drupal',
    'CSS',
    'HTML',
    'Twig',
    'React',
    'Next.js',
    'Storybook',
    'Style Dictionary',
    'Design Systems',
    'Design Tokens',
    'Figma',
    'Adobe Creative Suite',
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
