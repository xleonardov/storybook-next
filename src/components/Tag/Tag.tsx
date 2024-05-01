import React from 'react';
import Link from 'next/link';

import './tag.css';

export interface TagProps {
	/**
	 * The color of the tag.
	 */
	color?:
		| 'color-1'
		| 'color-2'
		| 'color-3'
		| 'color-4'
		| 'color-5'
		| 'color-6'
		| 'color-7'
		| 'color-8';
	/**
	 * The label of the tag.
	 */
	label: string;
	/**
	 * The link of the tag.
	 */
	link?: string;
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Tag UI component
 */
export const Tag = ({ color, label, link, className, ...props }: TagProps) => {
	// Set up classes.
	const baseClass = 'mm-tag';
	const colorClass = color ? `mm-tag--${color}` : '';

	// Render the output.
	return (
		<div
			className={[baseClass, colorClass, className]
				.join(' ')
				.trim()
				.replace(/\s+/g, ' ')}
			{...props}
		>
			{link ? <Link href={link}>{label}</Link> : <span>{label}</span>}
		</div>
	);
};
