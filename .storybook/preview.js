import React from 'react'
import StyleProvider from '@/containers/StyleProvider'

export const decorators = [
  (Story, context) => {
    return (
      <StyleProvider theme={context.globals.theme}>
        <Story {...context} />
      </StyleProvider>
    )
  },
]

export const parameters = {
  layout: 'fullscreen',
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'light',
    toolbar: {
      items: ['light', 'dark'],
      showName: true,
    },
  },
}
