import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const FooterContainer = styled.section`
  max-width: ${sizes.max_width};
  margin: 0 auto;
  padding: 30px 0;
  font-size: ${sizes.mideum_font};
  color: ${pallete.text_color};
  display: flex;
  justify-content: center;
  align-items: center;
  .logo {
    width: 80px;
    margin-left: 10px;
  }
`;
