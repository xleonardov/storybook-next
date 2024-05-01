import type { Meta, StoryObj } from '@storybook/react';

import { {{ properCase componentName }} } from './{{ properCase componentName }}';

const meta = {
  title: 'Components/{{ titleCase componentName }}',
  component: {{ properCase componentName }},
  tags: ['autodocs'],
  parameters: {},
  argTypes: {},
  args: {},
} satisfies Meta<typeof {{ properCase componentName }}>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
