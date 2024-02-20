import type { Meta, StoryObj } from '@storybook/react';

import { TileGrid } from './TileGrid';

const meta = {
  title: 'Components/Tile Grid',
  component: TileGrid,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  argTypes: {},
  args: {},
} satisfies Meta<typeof TileGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    tiles: [
      {
        heading: 'Tile 1',
        image: 'https://picsum.photos/420/236',
        link: '#',
        subhead: 'This is a subhead for tile 1.',
      },
      {
        heading: 'Tile 2',
        image: 'https://picsum.photos/420/236',
        link: '#',
        subhead: 'This is a subhead for tile 2.',
      },
      {
        heading: 'Tile 3',
        image: 'https://picsum.photos/420/236',
        link: '#',
        subhead: 'This is a subhead for tile 3.',
      },
    ],
  },
};
