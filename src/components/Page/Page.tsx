import React from 'react';

import { Breadcrumb } from '../Breadcrumb/Breadcrumb';
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
   * The container width.
   */
  containerWidth?: 'narrow' | 'standard' | 'wide';
  /**
   * The current page pathname.
   */
  pathname?: string;
  /**
   * Show breadcrumb trail on this page.
   */
  showBreadcrumb?: boolean;
  /**
   * Optional additional class names.
   */
  className?: string;
}

export const Page = ({
  children,
  containerWidth = 'standard',
  pathname,
  showBreadcrumb,
  className,
  ...props
}: PageProps) => {
  return (
    <div className={className} {...props}>
      <Header pathname={pathname} />
      {showBreadcrumb && (
        <Container width={containerWidth}>
          <Breadcrumb pathname={pathname} />
        </Container>
      )}
      <main>
        <Container className='mm-main-content' width={containerWidth}>
          {children}
        </Container>
      </main>
      <Footer />
    </div>
  );
};
