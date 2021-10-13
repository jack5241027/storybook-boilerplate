import { createTheme } from '@mui/material/styles'
import colors from './colors'
import MuiButton from './override/MuiButton'

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
  },
  components: {
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
    MuiButton: MuiButton.light,
  },
})
