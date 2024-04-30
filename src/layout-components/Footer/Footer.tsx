import React from 'react';

import { Container } from '../../components/Container/Container';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';

import './footer.css';

interface FooterProps {
	/**
	 * Show social links in the footer.
	 */
	showSocialLinks?: boolean;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

const YEAR = new Date().getFullYear();

/**
 * Footer Layout component
 */
export const Footer = ({
	showSocialLinks = true,
	className,
	...props
}: FooterProps) => {
	// Set up classes.
	const baseClass = 'mm-footer';

	// Render the output.
	return (
		<footer
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<Container width='standard' className={`${baseClass}__container`}>
				{showSocialLinks && (
					<SocialLinks
						className={`${baseClass}__social-links`}
						linkItems={['email', 'linkedin', 'instagram', 'github', 'drupal']}
					/>
				)}
				<div className={`${baseClass}__fine-print`}>
					©<time>{YEAR}</time> mel-miller
				</div>
			</Container>
		</footer>
	);
};
