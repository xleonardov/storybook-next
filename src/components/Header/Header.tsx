import React from 'react';

import Link from 'next/link';

import { Container } from '../Container/Container';
import { MainMenu } from '../MainMenu/MainMenu';

import './header.css';

interface HeaderProps {
  /**
   * The current page pathname.
   */
  pathname?: string;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Header Layout component
 */
export const Header = ({ className, pathname, ...props }: HeaderProps) => {
  // Set up classes.
  const baseClass = 'mm-header';

  return (
    <header
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <Container width='standard' className={`${baseClass}__container`}>
        <Link href='/' className={`${baseClass}__home-link`}>
          <h1 className={`${baseClass}__site-name`}>Melissa Miller</h1>
        </Link>
        <MainMenu pathname={pathname} />
      </Container>
    </header>
  );
};
