import type { Meta, StoryObj } from '@storybook/react';

import { SocialLinks } from './SocialLinks';

const meta = {
  title: 'Components/Social Links',
  component: SocialLinks,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof SocialLinks>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    linkItems: [
      'github',
      'drupal',
      'linkedin',
      'instagram',
      'xTwitter',
      'email',
      'rss',
    ],
  },
};
