import space from '../space'
import borderRadius from '../base/border-radius'

const mediumLayout = {
  fontSize: space.s,
  width: '114px',
  padding: `${space.xs} ${space.l}`,
  borderRadius: borderRadius.small,
}

const light = {
  styleOverrides: {
    text: {},
    outlined: {},
    contained: {},
    sizeMedium: mediumLayout,
  },
}

const dark = {
  styleOverrides: {
    text: {},
    outlined: {},
    contained: {},
    sizeMedium: mediumLayout,
  },
}

const MuiButton = {
  light,
  dark,
}

export default MuiButton
