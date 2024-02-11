import type { Preview } from '@storybook/react';

import '../src/styles/main.css';
import '../src/styles/tokens.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
    values: [
      {
        name: 'light',
        value: 'var(--mm-color-background-default)',
      },
      {
        name: 'dark',
        value: 'var(--mm-color-background-reverse)',
      },
    ],
  },
  },

};

export default preview;
