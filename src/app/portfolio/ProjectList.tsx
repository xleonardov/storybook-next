import Link from 'next/link';

import { TileGrid } from '@/components/TileGrid/TileGrid';

import { getSortedProjectsData } from '@/lib/projects';

type AllProjectsData = {
  id: string;
  date: string;
  title: string;
  description?: string;
  role?: string;
  tags?: string[];
  tileImage?: string;
}[];

export default function ProjectList() {
  const allProjectsData: AllProjectsData = getSortedProjectsData();
  return (
    <TileGrid
      tiles={allProjectsData.map(
        ({ id, title, description, tags, tileImage }) => ({
          heading: title,
          image: tileImage ?? '',
          link: `/portfolio/${id}`,
          subhead: description ?? '',
          tags: tags ?? [],
        }),
      )}
    ></TileGrid>
  );
}
