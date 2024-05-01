import type { Meta, StoryObj } from '@storybook/react';

import { WorkExperienceItem } from './WorkExperienceItem';

const meta = {
	title: 'Components/Resume/Work Experience Item',
	component: WorkExperienceItem,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {
		startDate: {
			control: {
				type: 'text',
			},
		},
		endDate: {
			control: {
				type: 'text',
			},
		},
	},
	args: {},
} satisfies Meta<typeof WorkExperienceItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		companyName: 'The Ohio State University',
		jobLocation: 'Columbus, OH',
		jobTitle: 'Director, Web Development & Design',
		startDate: 'August 2012',
		endDate: 'December 2021',
		description:
			'Led a diverse team of developers and designers and was responsible for a large portfolio of websites, a website-building platform, web applications, digital assets, component libraries, and accessible document templates for The Office of the Chief Information Officer.',
	},
};
