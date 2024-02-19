import type { Meta, StoryObj } from '@storybook/react';

import { TagGroup } from './TagGroup';

const meta = {
  title: 'Components/Tag Group',
  component: TagGroup,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof TagGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tags: [
      { label: 'Tag Label 1', color: 'color-1', link: 'https://example.com' },
      { label: 'Tag Label 2', color: 'color-2' },
      { label: 'Tag Label 3', color: 'color-3' },
      { label: 'Tag Label 4', color: 'color-4' },
      { label: 'Tag Label 5', color: 'color-5' },
      { label: 'Tag Label 6', color: 'color-6' },
      { label: 'Tag Label 7', color: 'color-7' },
      { label: 'Tag Label 8', color: 'color-8' },
    ],
  },
};
