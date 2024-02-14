import React from 'react';

import Link from 'next/link';

import './main-menu.css';

interface MainMenuProps {
  /**
   * Menu items.
   */
  menuItems?: { label: string; url: string }[];
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
 * MainMenu UI component
 */
export const MainMenu = ({
  menuItems = [
    {
      label: 'About',
      url: '/about',
    },
    {
      label: 'Portfolio',
      url: '/portfolio',
    },
    {
      label: 'Blog',
      url: '/blog',
    },
    {
      label: 'Contact',
      url: '/contact',
    },
  ],
  pathname,
  className,
  ...props
}: MainMenuProps) => {
  // Set up classes.
  const baseClass = 'mm-main-menu';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <ul className={`${baseClass}__items`}>
        {menuItems.map((item, index) => {
          const activeClass =
            item.url === pathname ? `${baseClass}__item--active` : null;
          const itemClasses = [`${baseClass}__item`, activeClass]
            .join(' ')
            .trim()
            .replace(/\s+/g, ' ');
          return (
            <li key={index} className={itemClasses}>
              <Link href={item.url} className={`${baseClass}__link`}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
