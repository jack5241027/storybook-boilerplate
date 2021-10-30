const lightPrimary = {
  monotone: {
    black: '#060606',
    white: '#FFFFFF',
    maxContrast: '#1C1C1C',
    highContrast: '#575757',
    mediumContrast: '#969696',
    lowContrast: '#CBCBCB',
  },
  accent: {
    base: '#9130DE',
    dark: ['#742682', '#571D85', '#3A1359'], // D20, D40, D60
    light: ['#A759E5', '#BD83EB', '#D3ACF2'], // L20, L40, L60
  },
}

const lightSecondary = {
  teal: '#98EBFD',
  success: '#00BA34',
  warning: '#F98600',
  danger: '#E92C2C',
  info: '#0084FF',
}

const lightExtended = {
  teal: {
    dark: ['#7BBDCC', '#5E8F9A', '#406269'],
    light: ['#ADEFFD', '#C1F3FE', '#D6F7FE'],
  },
  success: {
    dark: ['#00952A', '#00701F', '#004A15'],
    light: ['#33C85D', '#66D685', '#99E3AE'],
  },
  warning: {
    dark: ['#C76B00', '#955000', '#643600'],
    light: ['#FA9E33', '#FBB666', '#FDCF99'],
  },
  danger: {
    dark: ['#BA2323', '#8C1A1A', '#5D1212'],
    light: ['#ED5656', '#F28080', '#F6ABAB'],
  },
  info: {
    dark: ['#006ACC', '#004F99', '#003566'],
    light: ['#339DFF', '#66B5FF', '#99CEFF'],
  },
  surface: {
    primary: '#F0F0F0',
    secondary: '#EAEAEA',
    accent: '#E9D6F8',
    success: '#CCF1D6',
    warning: '#FEE7CC',
    danger: '#FBD5D5',
    info: '#CCE6FF',
  },
}

const darkPrimary = {
  monotone: {
    black: '#060606',
    white: '#FFFFFF',
    maxContrast: '#E6E6E6',
    highContrast: '#B4B4B4',
    mediumContrast: '#515151',
    lowContrast: '#1F1F1F',
  },
  accent: {
    base: '#A32FFF',
    dark: ['#8226CC', '#621C99', '#411366'], // D20, D40, D60
    light: ['#B559FF', '#C882FF', '#DAACFF'], // L20, L40, L60
  },
}

const darkSecondary = {
  teal: '#40E7E7',
  success: '#17CB49',
  warning: '#FF9F2D',
  danger: '#F74141',
  info: '#168FFF',
}

const darkExtended = {
  teal: {
    dark: ['#34BABA', '#298D8D', '#1D6060'],
    light: ['#66ECEC', '#8CF1F1', '#B3F5F5'],
  },
  success: {
    dark: ['#12A23A', '#0E7A2C', '#09511D'],
    light: ['#45D56D', '#74E092', '#A2EAB6'],
  },
  warning: {
    dark: ['#CC7F24', '#995F1B', '#664012'],
    light: ['#FFB257', '#FFC581', '#FFD9AB'],
  },
  danger: {
    dark: ['#C63434', '#942727', '#631A1A'],
    light: ['#F96767', '#FA8D8D', '#FCB3B3'],
  },
  info: {
    dark: ['#1272CC', '#0D5699', '#093966'],
    light: ['#45A5FF', '#73BCFF', '#A2D2FF'],
  },
  surface: {
    primary: '#1C1C1C',
    secondary: '#2B2B2B',
    accent: '#310E4C',
    success: '#003810',
    warning: '#4B2800',
    danger: '#460D0D',
    info: '#00284C',
  },
}

export const light = {
  primary: lightPrimary,
  secondary: lightSecondary,
  extended: lightExtended,
}

export const dark = {
  primary: darkPrimary,
  secondary: darkSecondary,
  extended: darkExtended,
}

export default {
  light,
  dark,
}
