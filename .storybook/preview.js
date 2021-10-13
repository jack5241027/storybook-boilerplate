import React from 'react'
import ThemeProvider from '@/containers/ThemeProvider'

export const decorators = [
  (Story, context) => {
    return (
      <ThemeProvider theme={context.globals.theme}>
        <Story {...context} />
      </ThemeProvider>
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
