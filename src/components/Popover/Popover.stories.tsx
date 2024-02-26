import type { Meta, StoryObj } from '@storybook/react';

import { Popover } from './Popover';

const meta = {
  title: 'Components/Popover',
  component: Popover,
  tags: ['autodocs'],
  parameters: {},
  decorators: [
    (Story: any) => (
      <div style={{ padding: '10rem 4rem' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    placement: {
      control: {
        type: 'select',
      },
    },
    triggerSize: {
      control: {
        type: 'select',
      },
    },
    triggerIcon: {
      control: {
        type: 'select',
      },
    },
  },
  args: {},
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Popover content',
    placement: 'top',
    triggerBackground: false,
    triggerIcon: 'info',
    triggerSize: 'md',
  },
};
