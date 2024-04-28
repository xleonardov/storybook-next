import type { Meta, StoryObj } from '@storybook/react';

import { SkillsList } from './SkillsList';

const meta = {
	title: 'Components/Resume/Skills List',
	component: SkillsList,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {},
	args: {},
} satisfies Meta<typeof SkillsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		skills: [
			'Design Systems',
			'Design Tokens',
			'React/TypeScript',
			'Drupal',
			'HTML',
			'CSS/Sass',
			'UI Design',
			'Accessibility',
			'Project Management',
		],
	},
};
