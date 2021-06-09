import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const Container = styled.div`
  width: 480px;
  height: 614px;
  background-color: #222222;
  z-index: 11;
  color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 1rem;
  box-sizing: border-box;
  h1 {
    margin-top: calc(60% / 2);
    margin-bottom: 20%;
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
    background-color: ${pallete.background_color};
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
  }
  .go-register {
    width: 300px;
    color: ${pallete.text_color};
    margin-top: 20px;
    text-align: start;
    a {
      color: ${pallete.main_color};
    }
  }
`;
