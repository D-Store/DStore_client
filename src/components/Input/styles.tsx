import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const InputContainer = styled.input`
  border: none;
  color: ${pallete.text_color};
  background-color: ${pallete.input_back};
  font-size: ${sizes.mideum_font};
  font-weight: bold;
  width: ${sizes.max_width};
  padding: 16px;
  border-radius: 5px;
  margin-bottom: 50px;
  outline: none;
`;
