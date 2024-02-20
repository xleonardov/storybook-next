import Link from 'next/link';

import { Tile } from '@/components/Tile/Tile';
import { TileGrid } from '@/components/TileGrid/TileGrid';

import { getSortedProjectsData } from '@/lib/projects';

type AllProjectsData = {
  id: string;
  date: string;
  title: string;
  description?: string;
  role?: string;
  tags?: string[];
  image?: string;
  imageAlt?: string;
}[];

export default function ProjectList() {
  const allProjectsData: AllProjectsData = getSortedProjectsData();
  return (
    <TileGrid
      tiles={allProjectsData.map(
        ({ id, title, description, image, imageAlt }) => ({
          heading: title,
          image: image ?? '',
          link: `/portfolio/${id}`,
          subhead: description ?? '',
          alt: imageAlt ?? '',
        }),
      )}
    ></TileGrid>
  );
}
