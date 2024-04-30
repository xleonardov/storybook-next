import type { Meta, StoryObj } from '@storybook/react';

import { Hero } from './Hero';

const meta = {
	title: 'Components/Hero',
	component: Hero,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {},
	args: {},
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		description:
			'I’m a UX engineer and design systems leader living in Oakland, California.',
		headline: 'Hello!',
		image: '/images/about/me.png',
		imageAlt: '',
	},
};
