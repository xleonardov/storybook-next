import React from 'react';

import '../resume-common.css';
import './presentation-item.css';

export interface PresentationItemProps {
	/**
	 * The name of the presentation.
	 */
	presentationName: string;
	/**
	 * The name of the event.
	 */
	eventName: string;
	/**
	 * The event date.
	 */
	eventDate: string;

	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Presentation Item UI component
 */
export const PresentationItem = ({
	presentationName,
	eventName,
	eventDate,
	className,
	...props
}: PresentationItemProps) => {
	// Set up classes.
	const baseClass = 'mm-resume-presentation';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<h3 className={`${baseClass}__title`}>{presentationName}</h3>
			<div className={`${baseClass}__event`}>{eventName}</div>
			<div className={`${baseClass}__date`}>{eventDate}</div>
		</div>
	);
};
