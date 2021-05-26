import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";
import pallete from "./pallete";
import sizes from "./sizes";

const globalStyle = css`
  ${reset};

  * {
    box-sizing: border-box;
  }
  body {
    font-family: Noto Sans, Noto Sans KR;
    background-color: ${pallete.background_color};
    color: ${pallete.text_color};
    /* max-width: ${sizes.max_width} !important;
    margin-left: auto;
    margin-right: auto; */
  }
`;

const GlobalStyle = createGlobalStyle`
    ${globalStyle}
  
`;

export default GlobalStyle;
