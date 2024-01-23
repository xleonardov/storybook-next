import React from 'react';

import './link.css';

interface LinkProps {
  /**
   * Optional additional class names
   */
  className?: string;
}

/**
 * Link UI component
 */
export const Link = ({ className, ...props }: LinkProps) => {
  // Set up classes.
  const baseClass = 'mm-link';

  // Render the output
  return (
    <div className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')} {...props}>
      <div>!!!Content goes here</div>
    </div>
  );
};
