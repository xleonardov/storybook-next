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
			'My name is Melissa Miller, and I’m a UX engineer and designer living in Oakland, California.',
		headline: 'Hello!',
		image: '/images/about/me.png',
		imageAlt: '',
	},
};
