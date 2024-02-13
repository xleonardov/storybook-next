import React from 'react';

import './container.css';

interface ContainerProps {
  /**
   * The content to display inside the container.
   */
  children: React.ReactNode;
  /**
   * Relative width of the container.
   */
  width: 'narrow' | 'standard' | 'wide';
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Container UI component
 */
export const Container = ({
  children,
  width = 'standard',
  className,
  ...props
}: ContainerProps) => {
  // Set up classes.
  const baseClass = 'mm-container';
  const widthClass = width !== 'standard' ? `mm-container--${width}` : null;

  // Render the output.
  return (
    <div
      className={[baseClass, widthClass, className]
        .join(' ')
        .trim()
        .replace(/\s+/g, ' ')}
      {...props}
    >
      {children}
    </div>
  );
};
