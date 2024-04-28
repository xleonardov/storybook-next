'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Page as PageLayout } from '../layout-components/Page/Page';
import { Resume } from '@/layout-components/Resume/Resume';

import { bioData, resumeData, resumeSidebarData } from '@/data/about-data';

export interface HomeContentProps {
	pageTitle?: string;
}

export default function HomeContent({ pageTitle }: HomeContentProps) {
	const pathname = usePathname();

	return (
		<PageLayout containerWidth='wide' showBreadcrumb={false} showHeader={false}>
			<Resume resumeItems={resumeData} sidebarItems={resumeSidebarData} />
		</PageLayout>
	);
}
