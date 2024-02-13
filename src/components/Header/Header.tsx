import React from 'react';

import { Container } from '../Container/Container';

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
      <Container width='wide' className={`${baseClass}__container`}>
        <h1 className={`${baseClass}__site-name`}>Melissa Miller</h1>
      </Container>
    </header>
  );
};
