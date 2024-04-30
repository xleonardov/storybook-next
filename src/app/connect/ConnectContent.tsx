'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import { ContactBlock } from '@/layout-components/ContactBlock/ContactBlock';
import { Page as PageLayout } from '../../layout-components/Page/Page';

import { contactData } from '../../data/contact-data';

export interface ContactContentProps {
	pageTitle?: string;
}

export default function ContactContent({ pageTitle }: ContactContentProps) {
	const pathname = usePathname();

	return (
		<PageLayout
			alignment='center'
			containerWidth='wide'
			pageTitle={pageTitle}
			pathname={pathname}
			showBreadcrumb={false}
			showSocialLinks={false}
		>
			<ContactBlock
				leadText={contactData.leadText}
				mainText={contactData.mainText}
				socialLinks={['email', 'linkedin', 'instagram', 'github', 'drupal']}
			/>
		</PageLayout>
	);
}
