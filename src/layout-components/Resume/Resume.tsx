import React from 'react';

import './resume.css';

import { ResumeSection, ResumeSectionProps } from './ResumeSection';

interface ResumeProps {
  /**
   * The resume items to display.
   */
  resumeItems: ResumeSectionProps[];
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Resume UI component
 */
export const Resume = ({ resumeItems, className, ...props }: ResumeProps) => {
  // Set up classes.
  const baseClass = 'mm-resume';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {resumeItems.map((section, index) => {
        return <ResumeSection key={index} {...section} />;
      })}
    </div>
  );
};
