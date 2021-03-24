/* @import url('https://fonts.googleapis.com/css2?family=Poppins'); */

/* html,
body {
  padding: 0;
  margin: 0;
  font-family: 'Poppins';
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box; 
} */

import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    src: @import url('https://fonts.googleapis.com/css2?family=Poppins');
    font-weight: 400;
    font-style: normal
    font-display: swap;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  
  ${({ theme }) => css`
    html {
      font-family: ${theme.font.family};
      font-size: 62.5%;
      scroll-behavior: smooth;
    }
    body {
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export default GlobalStyle;
