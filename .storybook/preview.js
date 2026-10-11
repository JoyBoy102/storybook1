/** @type { import('@storybook/html-vite').Preview } */
import '../src/styles/tokens.css';
import '../src/styles/tokens-dark.css';

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Глобальная тема дизайн-системы',
    defaultValue: 'light',
    toolbar: {
      title: 'Theme',
      icon: 'circlehollow',
      items: ['light', 'dark'],
      dynamicTitle: true,
    },
  },
};

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
  decorators: [
    (story, context) => {
      document.documentElement.setAttribute(
        'data-theme',
        context.globals.theme || 'light'
      );
      return story();
    },
  ],
};

export default preview;
