'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../../layout-components/Page/Page';

export interface BlogContentProps {
  children?: React.ReactNode;
  pageTitle?: string;
}

export default function BlogContent({ children, pageTitle }: BlogContentProps) {
  const pathname = usePathname();

  return (
    <PageLayout
      containerWidth='standard'
      pageTitle={pageTitle}
      pathname={pathname}
      showBreadcrumb={false}
    >
      <p>This is the blog page content.</p>
      {children}
    </PageLayout>
  );
}
