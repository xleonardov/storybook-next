'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../../layout-components/Page/Page';

export interface ContactContentProps {
  pageTitle?: string;
}

export default function ContactContent({ pageTitle }: ContactContentProps) {
  const pathname = usePathname();

  return (
    <PageLayout
      containerWidth='standard'
      pageTitle={pageTitle}
      pathname={pathname}
      showBreadcrumb={false}
    >
      <p>This is the page content.</p>
    </PageLayout>
  );
}
