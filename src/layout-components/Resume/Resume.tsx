import React from 'react';

import './resume.css';

import { ResumeSection, ResumeSectionProps } from './ResumeSection';

interface ResumeProps {
	/**
	 * The resume items to display.
	 */
	resumeItems: ResumeSectionProps[];
	/**
	 * The sidebar items to display.
	 */
	sidebarItems?: ResumeSectionProps[];
	/**
	 * Optional additional class names.
	 */
	className?: string;
}

/**
 * Resume UI component
 */
export const Resume = ({
	resumeItems,
	sidebarItems,
	className,
	...props
}: ResumeProps) => {
	// Set up classes.
	const baseClass = 'mm-resume';

	// Render the output.
	return (
		<div
			className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
			{...props}
		>
			<div className={`${baseClass}__main`}>
				{resumeItems.map((section, index) => {
					return <ResumeSection key={index} {...section} />;
				})}
			</div>

			{sidebarItems && (
				<div className={`${baseClass}__sidebar`}>
					{sidebarItems.map((section, index) => {
						return <ResumeSection key={index} {...section} />;
					})}
				</div>
			)}
		</div>
	);
};
