import type { Meta, StoryObj } from '@storybook/react';

import { Footer } from './Footer';

const meta = {
	title: 'Layout/Footer',
	component: Footer,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {},
	args: {},
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};
