import React from 'react';

import { Breadcrumb } from '../../components/Breadcrumb/Breadcrumb';
import { Container } from '../../components/Container/Container';
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
   * The page title.
   */
  pageTitle?: string;
  /**
   * The current page pathname.
   */
  pathname?: string;
  /**
   * Show breadcrumb trail on this page.
   */
  showBreadcrumb?: boolean;
  /**
   * Show the header on this page.
   */
  showHeader?: boolean;
  /**
   * Show the page title. Set to false if the title is provided by another component.
   */
  showTitle?: boolean;
  /**
   * Optional additional class names.
   */
  className?: string;
}

export const Page = ({
  children,
  containerWidth = 'standard',
  pageTitle,
  pathname,
  showBreadcrumb,
  showHeader = true,
  showTitle = true,
  className,
  ...props
}: PageProps) => {

  // Set up classes.
  const pageClasses = ['mm-page', className].join(' ').trim().replace(/\s+/g, ' ');

  return (
    <div className={pageClasses} {...props}>
      <div>
      {showHeader && <Header pathname={pathname} />}
      {showBreadcrumb && (
        <Container width={containerWidth}>
          <Breadcrumb pathname={pathname} pageTitle={pageTitle} />
        </Container>
      )}
      <Container width={containerWidth}>
        <main id='main' className='mm-main-content' role='main'>
          {showTitle && <h1 className='mm-page-title'>{pageTitle}</h1>}
          {children}
        </main>
        </Container>
        </div>
      <Footer />
    </div>
  );
};
