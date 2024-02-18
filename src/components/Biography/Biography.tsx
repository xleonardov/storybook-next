import React from 'react';
import Image from 'next/image';

import './biography.css';
import { R } from '@storybook/react/dist/types-bf5e6555';

interface BiographyProps {
  /**
   * Optional image to display.
   */
  image: string;
  /**
   * Optional alt text for the image.
   */
  imageAlt: string;
  /**
   * Lead text.
   */
  leadText: string;
  /**
   * Main text.
   */
  mainText: string | React.ReactNode;
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Biography UI component
 */
export const Biography = ({
  image,
  imageAlt,
  leadText,
  mainText,
  className,
  ...props
}: BiographyProps) => {
  // Set up classes.
  const baseClass = 'mm-biography';

  // Preprocess the main text based on type of data.
  const mainTextType = typeof mainText;
  const renderedMainText =
    mainTextType === 'string' ? <p>{mainText}</p> : mainText;

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <div className={`${baseClass}__text`}>
        <div className={`${baseClass}__lead-text`}>{leadText}</div>
        <div className={`${baseClass}__main-text`}>{renderedMainText}</div>
      </div>
      <div className={`${baseClass}__image`}>
        <Image src={image} width={240} height={240} alt={imageAlt} />
      </div>
    </div>
  );
};
