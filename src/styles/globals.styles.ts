import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --black: #000000;
    --white: #ffffff;
    --red: #DB202C;
    --green: #33cc95;
    --blue: #5429cc;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;

    --background: #131627;
    --shape: #ffffff;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    vertical-align: baseline;
  }
  
  html {
    font-family: 'Poppins', sans-serif;
    scroll-behavior: smooth;

    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  body {
    background-color: var(--background);
    color: var(--shape);
    -webkit-font-smoothing: antialiased;
  }
  body,
  input,
  textarea,
  button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default GlobalStyle;
