import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const FloatMenu = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
  padding: 20px;
  background-color: ${pallete.main_color};
  font-size: ${sizes.mideum_font};
  font-weight: bold;
  border-radius: 20px;
  cursor: pointer;
  transition: ease-in 0.2s;
  &:hover {
    filter: brightness(80%);
  }
`;
