import { TagProps } from '../components/Tag/Tag';
import { TagGroup } from '../components/TagGroup/TagGroup';

const tagMapping = {
	'design-system': {
		label: 'Design System',
		color: 'color-2',
	},
	development: {
		label: 'Development',
		color: 'color-1',
	},
	'project-management': {
		label: 'Project Management',
		color: 'color-3',
	},
	react: {
		label: 'React',
		color: 'color-5',
	},
	drupal: {
		label: 'Drupal',
		color: 'color-4',
	},
	'design-tokens': {
		label: 'Design Tokens',
		color: 'color-8',
	},
	design: {
		label: 'Design',
		color: 'color-6',
	},
	'information-architecture': {
		label: 'Information Architecture',
		color: 'color-7',
	},
	'product-strategy': {
		label: 'Product Strategy',
		color: 'color-6',
	},
	branding: {
		label: 'Branding',
		color: 'color-2',
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
