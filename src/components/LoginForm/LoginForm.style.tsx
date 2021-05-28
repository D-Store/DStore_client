import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const Container = styled.div`
  width: 480px;
  height: 614px;
  background-color: ${pallete.input_back};
  z-index: 11;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  h1 {
    margin-top: calc(60% / 2);
    margin-bottom: 30%;
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
    color: ${pallete.input_back};
    width: 300px;
    padding: 10px 0;
    border-radius: 5px;
    margin-bottom: 10px;
    ::placeholder {
      color: ${pallete.input_back};
    }
  }
  button {
    border-radius: 5px;
    width: 300px;
    padding: 10px 0;
    background-color: ${pallete.main_color};
    border: none;
    cursor: pointer;
  }
  .go-register {
    width: 300px;
    color: ${pallete.text_color};
    margin-top: 20px;
    text-align: end;
    span {
      color: ${pallete.main_color};
    }
  }
`;
