import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  svg {
    width: 300px;
    height: 100px;
  }
  h1 {
    padding: 40px 0;
    font-weight: bold;
    font-size: ${sizes.big_font};
    color: ${pallete.text_color};
  }
  form {
    display: flex;
    align-items: center;
    flex-direction: column;
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
    margin-top: 20px;
    border-radius: 5px;
    width: 100%;
    padding: 16px;
    font-size: ${sizes.mideum_font};
    font-family: 500;
    font-weight: bold;
    background-color: ${pallete.main_color};
    border: none;
    cursor: pointer;
  }
  .go-register {
    width: 300px;
    color: ${pallete.text_color};
    margin-top: 20px;
    text-align: end;
    a {
      color: ${pallete.main_color};
    }
  }
`;
