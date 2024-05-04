import React from 'react';
import Image from 'next/image';

import { Container } from '@/components/Container/Container';

import { socialData } from '../../data/social-data';

import './contact-block.css';

type SocialOptions =
	| 'drupal'
	| 'email'
	| 'github'
	| 'instagram'
	| 'linkedin'
	| 'rss'
	| 'xTwitter';

interface ContactBlockProps {
	/**
	 * Optional lead text.
	 */
	leadText?: string;
	/**
	 * Main text.
	 */
	mainText?: string | JSX.Element;
	/**
	 * Array of social media links.
	 */
	socialLinks?: SocialOptions[];
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * ContactBlock UI component
 */
export const ContactBlock = ({
	leadText,
	mainText,
	socialLinks,
	className,
	...props
}: ContactBlockProps) => {
	// Set up classes.
	const baseClass = 'mm-contact-block';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<Container>
				{leadText && (
					<div className={`${baseClass}__lead-text`}>{leadText}</div>
				)}
				{mainText && (
					<div className={`${baseClass}__main-text`}>{mainText}</div>
				)}

				<ul className={`${baseClass}__social-links`}>
					{socialLinks &&
						socialLinks.map((link, index) => {
							return (
								<li key={index} className={`${baseClass}__social-link-item`}>
									<a
										href={socialData[link].url}
										target='_blank'
										rel='noopener noreferrer'
										aria-label={socialData[link].label}
										title={socialData[link].label}
										className={`${baseClass}__social-link-link`}
									>
										<Image
											src={socialData[link].icon}
											alt=''
											width={28}
											height={28}
											className='mm-social-links__icon'
										/>
									</a>
								</li>
							);
						})}
				</ul>
			</Container>
		</div>
	);
};
