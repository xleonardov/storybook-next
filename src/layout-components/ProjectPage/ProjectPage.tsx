import React from 'react';
import Image from 'next/image';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faUser } from '@fortawesome/free-solid-svg-icons';

import { Container } from '../../components/Container/Container';

import './project-page.css';

interface ProjectPageProps {
  /**
   * The content of the page.
   */
  children?: React.ReactNode;
  /**
   * The date of the project.
   */
  date?: string;
  /**
   * The description of the project.
   */
  description?: string;
  /**
   * The main image for the project.
   */
  mainImage?: string;
  /**
   * The alt text for the main image.
   */
  mainImageAlt?: string;
  /**
   * My role in the project.
   */
  role?: string;
  /**
   * The tags for the project.
   */
  tags?: string[];
  /**
   * The title of the project.
   */
  title: string;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * ProjectPage UI component
 */
export const ProjectPage = ({
  children,
  date,
  description,
  mainImage,
  mainImageAlt,
  role,
  tags,
  title,
  className,
  ...props
}: ProjectPageProps) => {
  // Set up classes.
  const baseClass = 'mm-project-page';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <div className={`${baseClass}__header`}>
        <h1 className={`${baseClass}__title`}>{title}</h1>
        <div className={`${baseClass}__description`}>{description}</div>
        <div className={`${baseClass}__meta`}>
          <div className={`${baseClass}__role`}>
            <FontAwesomeIcon
              icon={faUser}
              className={`${baseClass}__meta-icon`}
            />
            {role}
          </div>
          {role && date && (
            <span className={`${baseClass}__meta-divider`}>|</span>
          )}
          <div className={`${baseClass}__date`}>
            <FontAwesomeIcon
              icon={faCalendarDays}
              className={`${baseClass}__meta-icon`}
            />
            {date}
          </div>
        </div>
      </div>
      <div className={`${baseClass}__image`}>
        <Image
          src={mainImage || ''}
          width={960}
          height={540}
          alt={mainImageAlt || ''}
        />
      </div>
      <Container width='narrow' className={`${baseClass}__content`}>
        {children}
      </Container>
    </div>
  );
};
