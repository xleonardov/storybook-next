import React from 'react';
import { Metadata } from 'next';

import AboutContent from '@/app/about/AboutContent';

export const metadata: Metadata = {
	title: 'About Me',
};

export default function Page() {
	const title = metadata.title?.toString();

	return <AboutContent pageTitle={title} />;
}
