import React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { darkTheme, lightTheme } from '../../theme'

export interface ThemedProps {
  themeName: string
}

const ThemeProvider: React.FC<ThemedProps> = ({ children, themeName: themeName }) => {
  const theme = themeName === 'dark' ? darkTheme : lightTheme
  return (
  <MuiThemeProvider theme={theme}>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    {children}
  </MuiThemeProvider>
)
}

export default ThemeProvider
