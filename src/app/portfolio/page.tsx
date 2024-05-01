import React from 'react';
import { Metadata } from 'next';

import PortfolioContent from '@/app/portfolio/PortfolioContent';
import ProjectList from './ProjectList';

export const metadata: Metadata = {
	title: 'Portfolio',
};

export default function Page() {
	const title = metadata.title?.toString();

	return (
		<PortfolioContent pageTitle={title}>
			<ProjectList />
		</PortfolioContent>
	);
}
