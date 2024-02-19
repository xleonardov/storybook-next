import { TagProps } from '../../components/Tag/Tag';
import { TagGroup } from '../../components/TagGroup/TagGroup';

const tagMapping = {
  'design-system': {
    label: 'Design System',
    color: 'color-1',
  },
  development: {
    label: 'Development',
    color: 'color-2',
  },

  'project-management': {
    label: 'Project Management',
    color: 'color-3',
  },
};

type ProjectTagsProps = {
  projectTags: string[];
};

export default function ProjectTags({ projectTags }: ProjectTagsProps) {
  // Assign tags for projects.
  const processedTags: TagProps[] = [];
  projectTags.map((tag) => {
    const tagInfo = tagMapping[tag];
    if (tagInfo) {
      processedTags.push(tagInfo);
    }
  });

  // Put tags in alphabetical order.
  processedTags.sort((a, b) => {
    return a.label.localeCompare(b.label);
  });

  return <TagGroup tags={processedTags} />;
}
