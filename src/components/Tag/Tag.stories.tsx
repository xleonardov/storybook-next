import type { Meta, StoryObj } from '@storybook/react';

import { Tag } from './Tag';

const meta = {
	title: 'Components/Tag',
	component: Tag,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {
		color: {
			control: {
				type: 'select',
			},
		},
	},
	args: {},
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		label: 'Tag Label',
		color: 'color-1',
		link: 'https://example.com',
	},
};
