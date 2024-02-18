import type { Meta, StoryObj } from '@storybook/react';

import { SkillsItem } from './SkillsItem';

const meta = {
  title: 'Components/Resume/Skills Item',
  component: SkillsItem,
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof SkillsItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    topicItems: ['React', 'Next.js', 'Gatsby', 'Drupal'],
    topicTitle: 'Development Frameworks',
  },
};
