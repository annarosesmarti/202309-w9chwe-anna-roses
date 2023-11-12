import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
  *,
  ::before,
  ::after {
    box-sizing: border-box;
  }

  body, 
  h1,
  h2 {
    margin: 0;
  }

  body {
    font-family: ${({ theme }) => theme.typography.mainFontFamily};
    color: ${({ theme }) => theme.color.mainFontColor};
    font-size: ${({ theme }) => theme.typography.cardTextSize};
    background-color: ${({ theme }) => theme.color.hufflepuffMainColor};
  }

  ul {
    list-style: none;
    margin-top: 0;
    padding: 0;
  }

  img {
    width: 100%;
  }

  a {
    text-decoration: none;
    color: inherit
  }

  button {
    border: none;
    background-color: transparent;
    font: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyled;
