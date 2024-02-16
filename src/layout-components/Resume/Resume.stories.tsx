import type { Meta, StoryObj } from '@storybook/react';

import { Resume } from './Resume';

import { resumeData } from './resume-sample-data';

const meta = {
  title: 'Layout/Resume',
  component: Resume,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Resume>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { resumeItems: resumeData },
};
