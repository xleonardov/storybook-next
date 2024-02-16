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
      pathname={pathname}
      showBreadcrumb={true}
    >
      {pageTitle && <h1>{pageTitle}</h1>}
      <p>This is the portfolio page content.</p>
      {children}
    </PageLayout>
  );
}
