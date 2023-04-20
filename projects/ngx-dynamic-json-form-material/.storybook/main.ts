import type { StorybookConfig } from '@storybook/angular';
const config: StorybookConfig = {
  stories: [
    // '../src/stories/getting-started.mdx',
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    // '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  docs: {
    // autodocs: 'tag',
    autodocs: true,
    defaultName: 'Documentation',
  },
  core: {
    disableTelemetry: true,
  },
};
export default config;
