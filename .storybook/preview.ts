import type { Preview } from '@storybook-astro/framework';
import '../src/styles/global.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#111827',
        },
        {
          name: 'light',
          value: '#ffffff',
        },
      ],
    },
  },
  decorators: [
    (Story) => {
      // Set the html theme data attribute to dark mode (Electric Cyan Tech Matrix default)
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', 'dark');
      }
      return Story();
    },
  ],
};

export default preview;
