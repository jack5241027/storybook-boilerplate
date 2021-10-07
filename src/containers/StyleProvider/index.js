import React from 'react'
import { ThemeProvider } from 'styled-components'
import theme from '@/theme'
import GlobalStyle from './global-styles'

const StyleProvider = ({ children, theme: themeName }) => (
  <ThemeProvider theme={theme[themeName]}>
    <React.Fragment>
      <GlobalStyle />
      {children}
    </React.Fragment>
  </ThemeProvider>
)

export default StyleProvider
