import { createGlobalStyle } from 'styled-components'

const globalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    margin: 0;
    transition: background-color .3s ease;
    background-color: ${(props) => props.theme.bodyColor};
    overflow-y: scroll;
    font-family: 'Inter', sans-serif;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
`
export default globalStyle