import Date from '@/utilities/date';
import Link from 'next/link';

import { getSortedProjectsData } from '@/lib/projects';

type AllProjectsData = {
  id: string;
  date: string;
  title: string;
  description?: string;
  role?: string;
  tags?: string[];
}[];

export default function Portfolio() {
  const allProjectsData: AllProjectsData = getSortedProjectsData();
  return (
    <ul>
      {allProjectsData.map(({ id, date, title, description, role, tags }) => {
        const tagsList = tags?.join(', ');

        return (
          <li key={id}>
            <Link href={`/portfolio/${id}`}>{title}</Link>
            <p>{description}</p>
            <p>{role}</p>
            <p>
              <Date dateString={date} />
            </p>
            <p>{tagsList}</p>
          </li>
        );
      })}
    </ul>
  );
}
