const path = require('path')
const toPath = filePath => path.join(process.cwd(), filePath)

module.exports = {
  webpackFinal: async config => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': toPath('node_modules/@emotion/react'),
          'emotion-theming': toPath('node_modules/@emotion/react'),
        },
      },
    }
  },
  stories: ['../**/*.stories.tsx'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-controls',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
  ],
}
