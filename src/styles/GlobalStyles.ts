import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
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
`;

export default GlobalStyles;
