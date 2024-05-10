import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from './Icon';

const meta = {
	title: 'Components/Icon',
	component: Icon,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {
		name: {
			control: {
				type: 'select',
			},
		},
		size: {
			control: {
				type: 'select',
			},
		},
	},
	args: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: { size: 'md', name: 'check' },
};
