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
      pathname={pathname}
      showBreadcrumb={true}
    >
      {pageTitle && <h1>{pageTitle}</h1>}
      <p>This is the page content.</p>
    </PageLayout>
  );
}
