module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    'jest/globals': true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'jest', '@emotion'],
  rules: {
    'react/prop-types': 'off',
    'react/display-name': 'off',
    quotes: ['warn', 'single'],
    semi: ['error', 'never'],
    '@emotion/pkg-renaming': 'error',
    'no-shadow': 'error',
  },
}
