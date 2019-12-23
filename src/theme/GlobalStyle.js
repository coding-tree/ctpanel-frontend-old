import {createGlobalStyle} from 'styled-components';
import variables from 'settings/variables';
import '@fortawesome/fontawesome-free/css/all.min.css';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    margin: 0;
    padding: 0;
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
    font-size: 1.6rem;
    font-family: ${variables.mainFont};
    background-color: ${variables.backgroundColor}
  }

  div, span, nav, li, a{
    display: flex;
  }

  #root {
    position: absolute;
    left: 340px;
    width: calc(100% - 340px);
    flex-direction: column;
  }

  ul{
    list-style-type: none;
  }

  a{
    color: ${variables.colorWhite};
    text-decoration: none;
  }
`;

export default GlobalStyle;
