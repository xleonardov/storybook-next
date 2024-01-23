import React from 'react';

import './{{ dashCase componentName }}.css';

interface {{ properCase componentName }}Props {
    /**
   * Optional additional class names.
   */
  className?: string;
}


/**
 * {{ properCase componentName }} UI component
 */
export const {{ properCase componentName }} = ({ className, ...props }: {{ properCase componentName }}Props) => {

	// Set up classes.
	const baseClass = 'mm-{{ dashCase componentName }}';

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
