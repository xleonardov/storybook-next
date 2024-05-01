import React, { ReactNode } from 'react';

import './link.css';

interface LinkProps {
	/**
	 * Fully-formed link element.
	 */
	linkContent: ReactNode;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Link UI component
 */
export const Link = ({ linkContent, className, ...props }: LinkProps) => {
	// Set up classes.
	const baseClass = 'mm-link';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			{linkContent}
		</div>
	);
};
