import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    font-size: 62.5%; 
  }
  
  body {
    width: 100vw;
    height: 100vh;
    margin: 0;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  div, span, nav, li, a{
    display: flex;
  }

  ul{
    padding: 0;
    margin: 0;
    list-style-type: none;
  }

  a{
    color: #ffffff;
    text-decoration: none;
  }
`;

export default GlobalStyle;