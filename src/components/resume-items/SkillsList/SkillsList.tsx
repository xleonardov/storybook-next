import React from 'react';

import './skills-list.css';

export interface SkillsListProps {
	/**
	 * The list of items in the group.
	 */
	skills: string[];
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * SkillsList UI component
 */
export const SkillsList = ({
	skills,
	className,
	...props
}: SkillsListProps) => {
	// Set up classes.
	const baseClass = 'mm-skills-list';

	// Render the output.
	return (
		<ul
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			{skills.map((skill, index) => {
				return (
					<li key={index} className={`${baseClass}__item`}>
						{skill}
					</li>
				);
			})}
		</ul>
	);
};
