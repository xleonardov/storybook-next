import { TagProps } from '../components/Tag/Tag';
import { TagGroup } from '../components/TagGroup/TagGroup';

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

type SiteTagsProps = {
  siteTags: string[];
};

export default function SiteTags({ siteTags }: SiteTagsProps) {
  // Assign tags for projects.
  const processedTags: TagProps[] = [];
  siteTags.map((tag) => {
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
