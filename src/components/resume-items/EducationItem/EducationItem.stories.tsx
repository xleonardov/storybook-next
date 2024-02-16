import type { Meta, StoryObj } from '@storybook/react';

import { EducationItem } from './EducationItem';

const meta = {
  title: 'Components/Resume/Education Item',
  component: EducationItem,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {
    graduationDate: {
      control: {
        type: 'text',
      },
    },
  },
  args: {},
} satisfies Meta<typeof EducationItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    degreeName: 'MCRP, City and Regional Planning',
    schoolName: 'The Ohio State University',
    schoolLocation: 'Columbus, OH',
    graduationDate: 'December 2009',
  },
};
