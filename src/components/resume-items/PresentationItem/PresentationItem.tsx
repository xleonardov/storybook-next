import React from 'react';

import '../resume-common.css';

interface PresentationItemProps {
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
   * The name of the section.
   */
  sectionName?: string;
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
  sectionName = 'Selected Presentations',
  className,
  ...props
}: PresentationItemProps) => {
  // Set up classes.
  const baseClass = 'mm-resume-item';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <h3 className={`${baseClass}__title`}>{presentationName}</h3>
      <h4 className={`${baseClass}__subtitle`}>
        <span className={`${baseClass}__event`}>{eventName}</span>
        <span className={`${baseClass}__divider`}>|</span>
        <span className={`${baseClass}__date`}>{eventDate}</span>
      </h4>
    </div>
  );
};
