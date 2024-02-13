import React from 'react';

import { Container } from '../Container/Container';
import { MainMenu } from '../MainMenu/MainMenu';

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
      <Container width='standard' className={`${baseClass}__container`}>
        <a href='/' className={`${baseClass}__home-link`}>
          <h1 className={`${baseClass}__site-name`}>Melissa Miller</h1>
        </a>
        <MainMenu />
      </Container>
    </header>
  );
};
