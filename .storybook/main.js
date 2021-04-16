const path = require('path');
const babelConfig = require('../babel.config.js');

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  babel: () => babelConfig,
  webpackFinal: async (config) => {
    const cwd = process.cwd();
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': path.join(cwd, 'node_modules', '@emotion', 'react'),
          '@emotion/styled': path.join(
            cwd,
            'node_modules',
            '@emotion',
            'styled'
          ),
          '@emotion/styled-base': path.join(
            cwd,
            'node_modules',
            '@emotion',
            'styled'
          ),
          'emotion-theming': path.join(
            cwd,
            'node_modules',
            '@emotion',
            'react'
          ),
        },
      },
    };
  },
};
