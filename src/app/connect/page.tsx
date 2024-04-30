import React from 'react';
import { Metadata } from 'next';

import ConnectContent from '@/app/connect/ConnectContent';

export const metadata: Metadata = {
	title: 'Connect',
};

export default function Page() {
	const title = metadata.title?.toString();

	return <ConnectContent pageTitle={title} />;
}
