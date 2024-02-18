'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../../layout-components/Page/Page';
import { Resume } from '../../layout-components/Resume/Resume';

import { resumeData } from '@/data/resume-data';

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
      <Resume resumeItems={resumeData} />
    </PageLayout>
  );
}
