import React from 'react';

import { Tag, TagProps } from '../Tag/Tag';

import './tag-group.css';

interface TagGroupProps {
	/**
	 * An array of tags.
	 */
	tags: TagProps[];
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * TagGroup UI component
 */
export const TagGroup = ({ tags, className, ...props }: TagGroupProps) => {
	// Set up classes.
	const baseClass = 'mm-tag-group';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			{tags.map((tag, index) => (
				<Tag key={index} {...tag} />
			))}
		</div>
	);
};
