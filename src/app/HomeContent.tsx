'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { Hero } from '@/components/Hero/Hero';
import { Page as PageLayout } from '../layout-components/Page/Page';

import { heroData } from '@/data/about-data';

export interface HomeContentProps {
	pageTitle?: string;
}

export default function HomeContent({ pageTitle }: HomeContentProps) {
	const pathname = usePathname();

	return (
		<PageLayout containerWidth='standard' showBreadcrumb={false}>
			<Hero
				headline={heroData.headline}
				description={heroData.description}
				image={heroData.image}
			/>
		</PageLayout>
	);
}
