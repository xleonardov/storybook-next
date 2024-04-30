import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { socialData } from '../../data/social-data';

import './social-links.css';

type SocialOptions =
	| 'drupal'
	| 'email'
	| 'github'
	| 'instagram'
	| 'linkedin'
	| 'rss'
	| 'xTwitter';

interface SocialLinksProps {
	/**
	 * Array of social media links.
	 */
	linkItems: SocialOptions[];
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * SocialLinks UI component
 */
export const SocialLinks = ({
	linkItems,
	className,
	...props
}: SocialLinksProps) => {
	// Set up classes.
	const baseClass = 'mm-social-links';

	// Render the output.
	return (
		<ul
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			{linkItems &&
				linkItems.map((link, index) => {
					return (
						<li key={index} className={`${baseClass}__item`}>
							<a
								href={socialData[link].url}
								target='_blank'
								rel='noopener noreferrer'
								aria-label={socialData[link].label}
								title={socialData[link].label}
								className={`${baseClass}__link`}
							>
								<FontAwesomeIcon
									icon={socialData[link].icon}
									className={`${baseClass}__icon`}
								/>
							</a>
						</li>
					);
				})}
		</ul>
	);
};
