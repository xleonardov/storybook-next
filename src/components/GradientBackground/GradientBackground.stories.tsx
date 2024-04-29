import type { Meta, StoryObj } from '@storybook/react';

import { GradientBackground } from './GradientBackground';

const meta = {
	title: 'Components/Gradient Background',
	component: GradientBackground,
	tags: ['autodocs'],
	parameters: {
		layout: 'fullscreen',
	},
	argTypes: {},
	args: {},
} satisfies Meta<typeof GradientBackground>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: <h1>Hello, world!</h1>,
	},
};
