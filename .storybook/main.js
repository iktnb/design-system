

import { mergeConfig } from 'vite'

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ['../stories/**/*.stories.@(ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
  ],
  framework: '@storybook/react-vite',
  async viteFinal(baseConfig) {
    return mergeConfig(baseConfig, {
      esbuild: {
        jsx: 'automatic',
      },
    })
  },
}
export default config;