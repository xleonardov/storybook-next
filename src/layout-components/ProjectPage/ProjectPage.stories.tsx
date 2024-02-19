import type { Meta, StoryObj } from '@storybook/react';

import { ProjectPage } from './ProjectPage';

const meta = {
  title: 'Layout/Project Page',
  component: ProjectPage,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof ProjectPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Buckeye UX',
    description: 'A design system for The Ohio State University',
    role: 'Co-creator and tech lead',
    tags: ['design-system', 'development', 'design', 'project-management'],
    date: '2019-2021',
    mainImage: 'https://picsum.photos/960/540',
    mainImageAlt: 'A placeholder image',
    children: (
      <p>
        I co-created the Buckeye UX design system with a small team of designers
        and developers at The Ohio State University. The system is built with
        React and TypeScript, and it is used to build and maintain the
        university’s web properties. I was the tech lead and a designer on the
        project, and I was responsible for the architecture, documentation, and
        implementation of the system. I also worked with stakeholders to ensure
        that the system met the needs of the university and its users.
      </p>
    ),
  },
};
