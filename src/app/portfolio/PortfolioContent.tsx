'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../../components/Page/Page';

export interface PortfolioContentProps {
  children?: React.ReactNode;
  pageTitle?: string;
}

export default function PortfolioContent({
  children,
  pageTitle,
}: PortfolioContentProps) {
  const pathname = usePathname();

  return (
    <PageLayout
      containerWidth='standard'
      pageTitle={pageTitle}
      pathname={pathname}
      showBreadcrumb={false}
    >
      <p>This is the portfolio page content.</p>
      {children}
    </PageLayout>
  );
}
