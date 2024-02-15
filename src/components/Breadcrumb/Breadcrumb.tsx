import React from 'react';
import Link from 'next/link';

import './breadcrumb.css';

interface BreadcrumbProps {
  /**
   * The current page pathname.
   */
  pathname?: string;
  /**
   * Show the home breadcrumb.
   */
  showHome?: boolean;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Breadcrumb UI component
 */
export const Breadcrumb = ({
  pathname,
  className,
  showHome = true,
  ...props
}: BreadcrumbProps) => {
  // Set up classes.
  const baseClass = 'mm-breadcrumb';

  // Break the pathname into segments.
  const pathSegments = (pathname ?? '')
    .split('/')
    .filter((item) => item !== '');

  // Initiate the breadcrumb array.
  interface Crumb {
    label: string;
    url: string;
  }
  const crumbs = [] as Crumb[];

  // Add the home breadcrumb if specified.
  if (showHome) {
    crumbs.push({ label: 'Home', url: '/' });
  }

  // Add the other breadcrumb.
  pathSegments.forEach((segment, index) => {
    const segmentLabel = segment.charAt(0).toUpperCase() + segment.slice(1);
    const segmentUrl = '/' + pathSegments.slice(0, index + 1).join('/');
    crumbs.push({ label: segmentLabel, url: segmentUrl });
  });

  // Detect total number of breadcrumb.
  const totalCrumbs = crumbs.length;

  // Render the breadcrumb based on position in array.
  const breadcrumbs = crumbs.map((crumb, index) => {
    return (
      <>
        {index < totalCrumbs - 1 ? (
          <li key={index} className={`${baseClass}__item`}>
            <Link href={crumb.url}>{crumb.label}</Link>
          </li>
        ) : (
          <li
            key={index}
            className={`${baseClass}__item ${baseClass}__item--current`}
          >
            <Link href={crumb.url} aria-current='page'>
              {crumb.label}
            </Link>
          </li>
        )}
      </>
    );
  });

  // Render the output.
  return (
    <nav
      aria-label='Breadcrumb'
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <ol className={`${baseClass}__items`}>{breadcrumbs}</ol>
    </nav>
  );
};
