import React from 'react';

import { Container } from '../Container/Container';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';

import './page.css';

interface PageProps {
  /**
   * The content to display inside the page.
   */
  children?: React.ReactNode;
  /**
   * The current page pathname.
   */
  pathname?: string;
  /**
   * Optional additional class names.
   */
  className?: string;
}

export const Page = ({
  children,
  pathname,
  className,
  ...props
}: PageProps) => {
  return (
    <div className={className} {...props}>
      <Header pathname={pathname} />
      <main>
        <Container className='mm-main-content'>{children}</Container>
      </main>
      <Footer />
    </div>
  );
};
