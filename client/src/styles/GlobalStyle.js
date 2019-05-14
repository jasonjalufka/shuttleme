import { createGlobalStyle } from "styled-components";
import theme from "./theme";
const { colors, fontSizes, fonts } = theme;

const GlobalStyle = createGlobalStyle`

  body {
    margin: 0;
    width: 100%;
    min-height: 100%;
    overflow-x: hidden;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    line-height: 1.3;
    font-family: ${fonts.Varela};
    font-size: ${fontSizes.xlarge};
    
    &.hidden {
      overflow: hidden;
    }
  }

  ::selection {
    background-color: ${colors.highlight};
  }
`;

export default GlobalStyle;
