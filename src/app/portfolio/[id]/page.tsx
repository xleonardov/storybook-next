import Date from '@/utilities/date';

import { getProjectData } from '@/lib/projects';

type Params = {
  id: string;
};

type Props = {
  params: Params;
};

type ProjectData = {
  date: string;
  title: string;
  description?: string;
  role?: string;
  tags?: string[];
  contentHtml: string;
};

export async function generateMetadata({ params }: Props) {
  const projectData: ProjectData = await getProjectData(params.id);

  return {
    title: projectData.title,
  };
}

export default async function Project({ params }: Props) {
  const projectData: ProjectData = await getProjectData(params.id);
  const tags = projectData.tags?.join(', ');
  return (
    <div>
      <h1>{projectData.title}</h1>
      <p>{projectData.description}</p>
      <p>{projectData.role}</p>
      <p>
        <Date dateString={projectData.date} />
      </p>
      <p>{tags}</p>
      <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
    </div>
  );
}
