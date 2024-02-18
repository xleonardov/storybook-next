import React from 'react';

import '../resume-common.css';

export interface SkillsItemProps {
  /**
   * The list of items in the group.
   */
  topicItems: string[];
  /**
   * The title of the item.
   */
  topicTitle: string;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Skills Item UI component
 */
export const SkillsItem = ({
  topicItems,
  topicTitle,
  className,
  ...props
}: SkillsItemProps) => {
  // Set up classes.
  const baseClass = 'mm-resume-item';

  // Render the output.
  return (
    <div
      className={[baseClass, `${baseClass}--skills`, className]
        .join(' ')
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      <h3 className={`${baseClass}__title ${baseClass}__title--skills`}>
        {topicTitle}
      </h3>
      <span className={`${baseClass}__skills-topic-items`}>
        {topicItems?.join(', ')}
      </span>
    </div>
  );
};
