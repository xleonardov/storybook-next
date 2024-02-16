import React from 'react';

import '../resume-common.css';

export interface EducationItemProps {
  /**
   * The name of the degree.
   */
  degreeName: string;
  /**
   * The name of the school.
   */
  schoolName: string;
  /**
   * The location of the school.
   */
  schoolLocation?: string;
  /**
   * The graduation date.
   */
  graduationDate: string;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Education Item UI component
 */
export const EducationItem = ({
  degreeName,
  schoolName,
  schoolLocation,
  graduationDate,
  className,
  ...props
}: EducationItemProps) => {
  // Set up classes.
  const baseClass = 'mm-resume-item';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <h3 className={`${baseClass}__title`}>{degreeName}</h3>
      <h4 className={`${baseClass}__subtitle`}>
        <span className={`${baseClass}__school-info`}>
          {schoolName}
          {schoolLocation && `, ${schoolLocation}`}
        </span>
        <span className={`${baseClass}__divider`}>|</span>
        <span className={`${baseClass}__date`}>{graduationDate}</span>
      </h4>
    </div>
  );
};
