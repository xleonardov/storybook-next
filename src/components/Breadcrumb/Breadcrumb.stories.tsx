import type { Meta, StoryObj } from '@storybook/react';

import { Breadcrumb } from './Breadcrumb';

const meta = {
	title: 'Components/Breadcrumb',
	component: Breadcrumb,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {},
	args: { pathname: '/portfolio/bux', showHome: true },
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {},
};

export const WithPageTitle: Story = {
	args: { pageTitle: 'Buckeye UX' },
};
