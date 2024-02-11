import React from 'react';

import { SocialLinks } from '../SocialLinks/SocialLinks';

import './footer.css';

interface FooterProps {
  /**
   * Optional additional class names.
   */
  className?: string;
}

const YEAR = new Date().getFullYear();

/**
 * Footer UI component
 */
export const Footer = ({ className, ...props }: FooterProps) => {
  // Set up classes.
  const baseClass = 'mm-footer';

  // Render the output.
  return (
    <footer
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <SocialLinks
        className={`${baseClass}__social-links`}
        linkItems={['github', 'drupal', 'linkedin', 'instagram', 'email']}
      />
      <div className={`${baseClass}__fine-print`}>
        <time>{YEAR}</time> © mel-miller
      </div>
    </footer>
  );
};
