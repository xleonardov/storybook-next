'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../../components/Page/Page';

export interface BlogContentProps {
  children?: React.ReactNode;
  pageTitle?: string;
}

export default function BlogContent({ children, pageTitle }: BlogContentProps) {
  const pathname = usePathname();

  return (
    <PageLayout
      containerWidth='standard'
      pathname={pathname}
      showBreadcrumb={true}
    >
      {pageTitle && <h1>{pageTitle}</h1>}
      <p>This is the blog page content.</p>
      {children}
    </PageLayout>
  );
}
