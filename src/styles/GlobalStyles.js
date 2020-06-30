import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 0.625rem; /* will set the rem value = 10px on browser configuration font-size medium (recommended by browser) */
  }

  body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    font-size: 1.4rem;
    background-color: #fff;
    line-height: 1.4;
  }
  
  *,
  *::after,
  *::before {
    font-family: inherit;
    box-sizing: border-box;
    outline: none;
  }

  button,
  input {
    font-size: inherit;
    line-height: inherit;
    color: inherit;
  }

  button {
    border-style: none;
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }
`

export default GlobalStyle
