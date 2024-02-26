import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import SiteTags from '../../tags/SiteTags';

import './tile.css';

export interface TileProps {
  /**
   * Heading text.
   */
  heading: string;
  /**
   * Image URL.
   */
  image: string;
  /**
   * Link URL.
   */
  link: string;
  /**
   * Subhead text.
   */
  subhead: string;
  /**
   * Optional tags.
   */
  tags?: string[];
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * Tile UI component
 */
export const Tile = ({
  heading,
  image,
  link,
  subhead,
  tags,
  className,
  ...props
}: TileProps) => {
  // Set up classes.
  const baseClass = 'mm-tile';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      <Link href={link} className={`${baseClass}__link`}>
        <div className={`${baseClass}__image`}>
          <Image src={image} width={420} height={236} alt='' />
        </div>
        <div className={`${baseClass}__content`}>
          <h3 className={`${baseClass}__heading`}>{heading}</h3>
          <p className={`${baseClass}__subhead`}>{subhead}</p>
          {/* {tags && (
            <div className={`${baseClass}__tags`}>
              <SiteTags siteTags={tags} />
            </div>
          )} */}
        </div>
      </Link>
    </div>
  );
};
