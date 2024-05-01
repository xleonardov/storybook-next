import type { Meta, StoryObj } from '@storybook/react';

import { Tile } from './Tile';

const meta = {
	title: 'Components/Tile',
	component: Tile,
	tags: ['autodocs'],
	parameters: {},
	decorators: [
		(Story) => (
			<div style={{ maxWidth: '360px' }}>
				<Story />
			</div>
		),
	],
	argTypes: {},
	args: {},
} satisfies Meta<typeof Tile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		heading: 'Tile heading',
		image: 'https://picsum.photos/420/236',
		link: 'https://example.com',
		subhead: 'Tile subhead',
		tags: ['design-system', 'development', 'design', 'project-management'],
	},
};
