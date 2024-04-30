'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Hero } from '@/components/Hero/Hero';
import { Page as PageLayout } from '../layout-components/Page/Page';

import { bioData } from '@/data/about-data';

export interface HomeContentProps {
	pageTitle?: string;
}

export default function HomeContent({ pageTitle }: HomeContentProps) {
	const pathname = usePathname();

	return (
		<PageLayout containerWidth='wide' showBreadcrumb={false}>
			<Hero
				headline={bioData.headline}
				description={bioData.description}
				image={bioData.image}
			/>
		</PageLayout>
	);
}
