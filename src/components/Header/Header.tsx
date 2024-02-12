import React from 'react';

import './header.css';

interface HeaderProps {
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Header Layout component
 */
export const Header = ({ className, ...props }: HeaderProps) => {
  // Set up classes.
  const baseClass = 'mm-header';

  return (
    <header
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <h1>Melissa Miller</h1>
    </header>
  );
};
