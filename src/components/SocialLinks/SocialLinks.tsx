import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faDrupal,
	faGithub,
	faInstagram,
	faLinkedin,
	faXTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faSquareRss } from '@fortawesome/free-solid-svg-icons';

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

	// social platform data
	const socialData = {
		drupal: {
			icon: faDrupal,
			url: 'https://www.drupal.org/u/mel-miller',
			label: 'Drupal',
		},
		email: {
			icon: faEnvelope,
			url: 'mailto:me@mel-miller.com',
			label: 'Email',
		},
		github: {
			icon: faGithub,
			url: 'https://github.com/mel-miller',
			label: 'GitHub',
		},
		instagram: {
			icon: faInstagram,
			url: 'https://www.instagram.com/__mel.miller__/',
			label: 'Instagram',
		},
		linkedin: {
			icon: faLinkedin,
			url: 'https://www.linkedin.com/in/melissa-a-miller-6a37744/',
			label: 'LinkedIn',
		},
		rss: {
			icon: faSquareRss,
			url: '/feed.xml',
			label: 'RSS feed',
		},
		xTwitter: {
			icon: faXTwitter,
			url: 'https://twitter.com/_mel_miller_',
			label: 'X',
		},
	};

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
