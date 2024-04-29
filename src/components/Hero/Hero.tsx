import React from 'react';

import Image from 'next/image';

import './hero.css';

interface HeroProps {
	/**
	 * The description of the hero.
	 */
	description?: string;
	/**
	 * The headline of the hero.
	 */
	headline?: string;
	/**
	 * The image of the hero.
	 */
	image?: string;
	/**
	 * The alt text for the image.
	 */
	imageAlt?: string;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Hero UI component
 */
export const Hero = ({
	description,
	headline,
	image,
	imageAlt,
	className,
	...props
}: HeroProps) => {
	// Set up classes.
	const baseClass = 'mm-hero';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			{image && (
				<div className={`${baseClass}__image`}>
					<Image src={image} alt={imageAlt} width='160' height='160' />
				</div>
			)}
			<div className={`${baseClass}__text`}>
				<h1 className={`${baseClass}__headline`}>{headline}</h1>
				<div className={`${baseClass}__description`}>{description}</div>
			</div>
		</div>
	);
};
