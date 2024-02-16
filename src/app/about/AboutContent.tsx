'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../../components/Page/Page';

export interface AboutContentProps {
  pageTitle?: string;
}

export default function AboutContent({ pageTitle }: AboutContentProps) {
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