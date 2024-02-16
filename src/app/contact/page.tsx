import React from 'react';
import { Metadata } from 'next';

import ContactContent from '@/app/contact/ContactContent';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {
  const title = metadata.title?.toString();

  return <ContactContent pageTitle={title} />;
}
