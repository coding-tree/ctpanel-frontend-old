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
    width: 100%;
    min-height: 100vh;
    font-size: 1.6rem;
    font-family: ${variables.mainFont};
    background-color: ${variables.backgroundColor};
    color: ${variables.colorFont};
  }

  div, span, nav, li, a{  
    display: flex;
  }

  ::selection {
    background-color: ${variables.colorMain};
    color:${variables.colorWhite};
  }

  #root {
    display: grid;
    grid-template-areas: 'aside header'
                          'aside body';
    grid-template-columns: 34rem 1fr;
    row-gap: 10rem;
    grid-template-rows: max-content 1fr;

    @media only screen and (max-width: ${variables.bpDesktop}) {
      grid-template-columns: 10rem 1fr;
    }

    @media only screen and (max-width: ${variables.bpTablet}) {
      grid-template-areas: 'aside'
      'header'
      'body';
      grid-template-columns: 1fr;
      grid-template-rows: max-content max-content 1fr;
      row-gap: 0;
    }
  }

  ul{
    list-style-type: none;
  }

  a{
    color: ${variables.colorWhite};
    text-decoration: none;
  }
  .Toastify__toast-container {
    width:auto;
  }
  .Toastify__toast--success {
    background: ${variables.colorMain} !important;
  }
  .Toastify__toast--error {
    background: ${variables.colorError} !important;
  }
  .Toastify__close-button {
    margin-left: 1rem !important;
    & > svg {
      height: 20px;
      width: 18px;
    }
  }
  .Toastify__toast {
    font-weight: bold;
    padding: 28px;
    font-family: inherit;
}
`;

export default GlobalStyle;
