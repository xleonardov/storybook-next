'use client';

import React from 'react';

import { Hero } from '@/components/Hero/Hero';
import { Page as PageLayout } from '../layout-components/Page/Page';

import { heroData } from '@/data/about-data';

export default function HomeContent() {
	return (
		<PageLayout
			containerWidth='standard'
			showBreadcrumb={false}
			className='mm-site-home'
		>
			<Hero
				headline={heroData.headline}
				description={heroData.description}
				image={heroData.image}
			/>
		</PageLayout>
	);
}
