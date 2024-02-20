import React from 'react';

import { Tile, TileProps } from '../Tile/Tile';

import './tile-grid.css';

interface TileGridProps {
  /**
   * The tiles to display in the grid.
   */
  tiles: TileProps[];
  /**
   * Optional additional class names.
   */
  className?: string;
}

/**
 * TileGrid UI component
 */
export const TileGrid = ({ tiles, className, ...props }: TileGridProps) => {
  // Set up classes.
  const baseClass = 'mm-tile-grid';

  // Render the output.
  return (
    <div
      className={[baseClass, className].join(' ').trim().replace(/\s+/g, ' ')}
      {...props}
    >
      {tiles.map((tile, index) => (
        <Tile
          key={index}
          heading={tile.heading}
          image={tile.image}
          link={tile.link}
          subhead={tile.subhead}
          className={`${baseClass}__item`}
        ></Tile>
      ))}
    </div>
  );
};
