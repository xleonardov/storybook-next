import React from 'react';
import { Metadata } from 'next';

import HomeContent from '@/app/HomeContent';

export const metadata: Metadata = {
	title: 'LeonV',
};

export default function Page() {
	return <HomeContent />;
}
