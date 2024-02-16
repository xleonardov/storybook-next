import React from 'react';
import Link from 'next/link';

import './breadcrumb.css';

interface BreadcrumbProps {
  /**
   * The title of the current page.
   */
  pageTitle?: string;
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
  pageTitle,
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

  // If the page title is available, swap it in for the label of the last breadcrumb.
  if (pageTitle) {
    crumbs[crumbs.length - 1].label = pageTitle;
  }

  // Detect total number of breadcrumb.
  const totalCrumbs = crumbs.length;

  // Render the breadcrumb based on position in array.
  const breadcrumbs = crumbs.map((crumb, index) => {
    const currentClass =
      index < totalCrumbs - 1 ? null : `${baseClass}__item--current`;
    const itemClasses = [`${baseClass}__item`, currentClass]
      .join(' ')
      .trim()
      .replace(/\s+/g, ' ');

    return (
      <li key={crumb.label} className={itemClasses}>
        {index < totalCrumbs - 1 ? (
          <Link href={crumb.url}>{crumb.label}</Link>
        ) : (
          <Link href={crumb.url} aria-current='page'>
            {crumb.label}
          </Link>
        )}
      </li>
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
