import { normalize } from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

/* eslint no-unused-expressions: 0 */
const GlobalStyle = createGlobalStyle`
  ${normalize}
  html {
  }
  body {
    font-size: 16px;
    /* smooth scrolling in ios */
    -webkit-overflow-scrolling: touch;
  }
  iframe {
    border: none;
  }
  *:focus {
    outline: none;
  }
  ol, ul {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }
  a, address {
    text-decoration: none;
    color: inherit;
    font-style: normal;
  }
  input, button, html [type="button"], [type="reset"], [type="submit"] {
    -webkit-appearance: none;
    border: 0;
    padding: 0;
    color: inherit;
    background-color: transparent;
  }
`

export default GlobalStyle
