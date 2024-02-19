import Date from '@/utilities/date';

import { Page as PageLayout } from '../../../layout-components/Page/Page';
import { ProjectPage } from '@/layout-components/ProjectPage/ProjectPage';

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
  image: string;
  imageAlt: string;
};

export async function generateMetadata({ params }: Props) {
  const projectData: ProjectData = await getProjectData(params.id);

  return {
    title: projectData.title,
  };
}

export default async function Project({ params }: Props) {
  const projectData: ProjectData = await getProjectData(params.id);
  const pathname = `/portfolio/${params.id}`;

  return (
    <PageLayout
      containerWidth='standard'
      pageTitle={projectData.title}
      pathname={pathname}
      showBreadcrumb={true}
      showTitle={false}
    >
      <ProjectPage
        date={projectData.date}
        description={projectData.description}
        role={projectData.role}
        tags={projectData.tags}
        title={projectData.title}
        mainImage={projectData.image}
        mainImageAlt={projectData.imageAlt}
      >
        <div dangerouslySetInnerHTML={{ __html: projectData.contentHtml }} />
      </ProjectPage>
    </PageLayout>
  );
}
