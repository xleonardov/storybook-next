import Link from 'next/link';
import React from 'react';

import './main-menu.css';

interface MainMenuProps {
  /**
   * Menu items.
   */
  menuItems: { label: string; url: string }[];
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * MainMenu UI component
 */
export const MainMenu = ({ menuItems, className, ...props }: MainMenuProps) => {
  // Set up classes.
  const baseClass = 'mm-main-menu';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <ul className={`${baseClass}__items`}>
        {menuItems.map((item, index) => (
          <li key={index} className={`${baseClass}__item`}>
            <Link href={item.url} className={`${baseClass}__link`}>
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
