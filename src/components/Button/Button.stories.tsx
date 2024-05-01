import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta = {
	title: 'Components/Button',
	component: Button,
	tags: ['autodocs'],
	parameters: {},
	argTypes: {
		size: {
			control: {
				type: 'select',
			},
		},
		type: {
			control: {
				type: 'select',
			},
		},
		variant: {
			control: {
				type: 'select',
			},
		},
	},
	args: {
		type: 'button',
		size: 'md',
		variant: 'primary',
	},
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		label: 'Primary button',
	},
};

export const Secondary: Story = {
	args: {
		label: 'Secondary button',
		variant: 'secondary',
	},
};

export const ButtonGroup = () => (
	<div className='mm-button-group'>
		<Button label='Primary button' />
		<Button label='Secondary button' variant='secondary' />
	</div>
);
