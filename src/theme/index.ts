import { createTheme } from '@mui/material/styles'
import MuiButton from './override/MuiButton'
import MuiCssBaseline from './override/MuiCssBaseline'
import colors from './base/colors'
import './override/index.d'

export * from './base'

// A custom theme for this app
export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: colors.dark.primary.accent.base,
    },
    secondary: {
      main: colors.dark.secondary.teal,
    },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
  },
  components: {
    MuiCssBaseline,
    MuiButton: MuiButton.dark,
  },
})

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: colors.light.primary.accent.base,
    },
    secondary: {
      main: colors.light.secondary.teal,
    },
  },
  components: {
    MuiCssBaseline,
    MuiButton: MuiButton.light,
  },
})
