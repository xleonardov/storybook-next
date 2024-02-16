import React from 'react';

import '../resume-common.css';

export interface ResumeItemProps {
  /**
   * The title of the item.
   */
  itemTitle: string;
  /**
   * The first part of the subhead.
   */
  subheadPart1: string;
  /**
   * The second part of the subhead. Will be rendered after the divider.
   */
  subheadPart2?: string;
  /**
   * A description of the item.
   */
  description?: string | React.ReactNode;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Resume Item UI component — for generic resume items.
 */
export const ResumeItem = ({
  itemTitle,
  subheadPart1,
  subheadPart2,
  description,
  className,
  ...props
}: ResumeItemProps) => {
  // Set up classes.
  const baseClass = 'mm-resume-item';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <h3 className={`${baseClass}__title`}>{itemTitle}</h3>
      <h4 className={`${baseClass}__subtitle`}>
        <span className={`${baseClass}__part1`}>{subheadPart1}</span>
        {subheadPart2 && (
          <>
            <span className={`${baseClass}__divider`}>|</span>
            <span className={`${baseClass}__part2`}>{subheadPart2}</span>
          </>
        )}
      </h4>
      {description && (
        <div className={`${baseClass}__description`}>{description}</div>
      )}
    </div>
  );
};
