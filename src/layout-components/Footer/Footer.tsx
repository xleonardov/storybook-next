import React from 'react';

import { Container } from '../../components/Container/Container';
import { SocialLinks } from '../../components/SocialLinks/SocialLinks';

import './footer.css';

interface FooterProps {
  /**
   * Optional additional class names.
   */
  className?: string;
}

const YEAR = new Date().getFullYear();

/**
 * Footer Layout component
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
      <Container width='standard' className={`${baseClass}__container`}>
        <SocialLinks
          className={`${baseClass}__social-links`}
          linkItems={['github', 'drupal', 'linkedin', 'instagram', 'email']}
        />
        <div className={`${baseClass}__fine-print`}>
          ©<time>{YEAR}</time> mel-miller
        </div>
      </Container>
    </footer>
  );
};