import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: ${sizes.big_font};
    margin-bottom: 20px;
    font-weight: bold;
  }
  input {
    border: none;
    color: ${pallete.text_color};
    background-color: ${pallete.input_back};
    font-size: ${sizes.mideum_font};
    font-weight: bold;
    width: 300px;
    padding: 16px;
    border-radius: 5px;
    margin-bottom: 10px;
    outline: none;
  }
  button {
    border-radius: 5px;
    width: 300px;
    font-size: ${sizes.mideum_font};
    font-family: 500;
    padding: 16px;
    background-color: ${pallete.main_color};
    border: none;
    cursor: pointer;
    margin-bottom: 10px;
    &:hover {
      filter: brightness(80%);
    }
  }
  .register {
    margin-top: 20px;
  }
`;
