import type { Meta, StoryObj } from '@storybook/react';

import { ResumeItem } from './ResumeItem';

const meta = {
  title: 'Components/Resume/Resume Item',
  component: ResumeItem,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof ResumeItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    itemTitle: 'Project Management Professional (PMP)',
    subheadPart1: 'Project Management Institute',
    subheadPart2: 'Credential ID: 1980855',
  },
};
