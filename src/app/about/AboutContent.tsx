'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Biography } from '@/layout-components/Biography/Biography';
import { Page as PageLayout } from '@/layout-components/Page/Page';
import { Resume } from '@/layout-components/Resume/Resume';

import { bioData, resumeData } from '@/data/about-data';

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
			<Biography
				image={bioData.image}
				imageAlt={bioData.imageAlt}
				imageCaption={bioData.imageCaption}
				leadText={bioData.leadText}
				mainText={bioData.mainText}
			/>
			<hr />
			<Resume resumeItems={resumeData} />
		</PageLayout>
	);
}
