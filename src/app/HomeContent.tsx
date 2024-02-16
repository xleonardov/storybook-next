'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../components/Page/Page';

export interface HomeContentProps {
  pageTitle?: string;
}

export default function HomeContent({ pageTitle }: HomeContentProps) {
  const pathname = usePathname();

  return (
    <PageLayout containerWidth='standard' showBreadcrumb={false}>
      {pageTitle && <h1>{pageTitle}</h1>}
      <p>This is the page content.</p>
    </PageLayout>
  );
}
