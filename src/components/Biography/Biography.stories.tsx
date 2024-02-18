import type { Meta, StoryObj } from '@storybook/react';

import { Biography } from './Biography';

import { bioData } from '../../data/about-data';

const meta = {
  title: 'Components/Biography',
  component: Biography,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof Biography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    image: bioData.image,
    imageAlt: bioData.imageAlt,
    imageCaption: bioData.imageCaption,
    leadText: bioData.leadText,
    mainText: bioData.mainText,
  },
};
