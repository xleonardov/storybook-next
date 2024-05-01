import type { Meta, StoryObj } from '@storybook/react';

import { PresentationItem } from './PresentationItem';

const meta = {
	title: 'Components/Resume/Presentation Item',
	component: PresentationItem,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {
		eventDate: {
			control: {
				type: 'text',
			},
		},
	},
	args: {},
} satisfies Meta<typeof PresentationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		presentationName: 'How to Hack Storybook for Drupal',
		eventName: 'Design4Drupal Webinar Series',
		eventDate: 'February 2023',
	},
};
