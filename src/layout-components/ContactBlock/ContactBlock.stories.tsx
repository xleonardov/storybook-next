import type { Meta, StoryObj } from '@storybook/react';

import { ContactBlock } from './ContactBlock';

import { contactData } from '../../data/contact-data';

const meta = {
	title: 'Layout/Contact Block',
	component: ContactBlock,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {},
	args: {},
} satisfies Meta<typeof ContactBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		leadText: contactData.leadText,
		mainText: contactData.mainText,
		socialLinks: ['email', 'github', 'linkedin'],
	},
};
