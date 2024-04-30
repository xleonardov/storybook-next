import React from 'react';
import Image from 'next/image';

import './biography.css';

interface BiographyProps {
	/**
	 * Optional image to display.
	 */
	image?: string;
	/**
	 * Optional alt text for the image.
	 */
	imageAlt?: string;
	/**
	 * Optional caption for the image.
	 */
	imageCaption?: string;
	/**
	 * Lead text.
	 */
	leadText?: string;
	/**
	 * Main text.
	 */
	mainText: string | React.ReactNode;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Biography UI component
 */
export const Biography = ({
	image,
	imageAlt,
	imageCaption,
	leadText,
	mainText,
	className,
	...props
}: BiographyProps) => {
	// Set up classes.
	const baseClass = 'mm-biography';

	// Preprocess the main text based on type of data.
	const mainTextType = typeof mainText;
	const renderedMainText =
		mainTextType === 'string' ? <p>{mainText}</p> : mainText;

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<div className={`${baseClass}__text`}>
				<div className={`${baseClass}__lead-text`}>{leadText}</div>
				<div className={`${baseClass}__main-text`}>{renderedMainText}</div>
			</div>
			{image && (
				<div className={`${baseClass}__image`}>
					<figure>
						<Image src={image} width={260} height={260} alt={imageAlt || ''} />
						<figcaption>{imageCaption}</figcaption>
					</figure>
				</div>
			)}
		</div>
	);
};
