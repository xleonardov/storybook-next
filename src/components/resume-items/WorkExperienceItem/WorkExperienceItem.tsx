import React from 'react';

import '../resume-common.css';

export interface WorkExperienceItemProps {
  /**
   * The name of the company.
   */
  companyName: string;
  /**
   * The location of the job.
   */
  jobLocation?: string;
  /**
   * The job title.
   */
  jobTitle: string;
  /**
   * The start date.
   */
  startDate: string;
  /**
   * The end date.
   */
  endDate: string;
  /**
   * A description of the job duties and accomplishments.
   */
  description?: string | React.ReactNode;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Work Experience Item UI component
 */
export const WorkExperienceItem = ({
  companyName,
  jobLocation,
  jobTitle,
  startDate,
  endDate,
  description,
  className,
  ...props
}: WorkExperienceItemProps) => {
  // Set up classes.
  const baseClass = 'mm-resume-item';

  // Preprocess the description based on type of data.
  const descriptionType = typeof description;
  const renderedDescription =
    descriptionType === 'string' ? <p>{description}</p> : description;

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <h3 className={`${baseClass}__title`}>{jobTitle}</h3>
      <h4 className={`${baseClass}__subtitle`}>
        <span className={`${baseClass}__company-info`}>
          {companyName}
          {jobLocation && `, ${jobLocation}`}
        </span>
        <span className={`${baseClass}__divider`}>|</span>
        <span className={`${baseClass}__date`}>
          {startDate} - {endDate}
        </span>
      </h4>
      {description && (
        <div className={`${baseClass}__description`}>{renderedDescription}</div>
      )}
    </div>
  );
};
