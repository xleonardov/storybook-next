import React from 'react';

import './resume.css';

interface ResumeProps {
    /**
   * Optional additional class names.
   */
  className?: string;
}


/**
 * Resume UI component
 */
export const Resume = ({ className, ...props }: ResumeProps) => {

	// Set up classes.
	const baseClass = 'mm-resume';

	// Render the output.
	return (
	<div
		className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
		{...props}
	>
		<div>!!!Content goes here</div>
	</div>
	);
};
