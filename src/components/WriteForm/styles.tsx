import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const WriteFormContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 1620px;
  align-items: center;
`;

export const WriteFormContext = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1000px;
  height: 1620px;
  background-color: ${pallete.input_back};
  input {
    width: 800px;
    background-color: ${pallete.input_back};
    border: 0;
    padding-top: 100px;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${pallete.bright};
    transition: 0.5s cubic-bezier(0, 1, 1, 1);
    outline: none;
    font-size: ${sizes.title_font};
    color: ${pallete.text_color};
  }
  input:focus {
    border-bottom: 3px solid ${pallete.bright};
    transition: ${`0.5s cubic-bezier(0, ${Math.random() * 10}, 1, 10)`};
  }
  textarea {
    width: 800px;
    height: 100%;
    padding-top: 1rem;
    background-color: ${pallete.input_back};
    resize: none;
    border: 0;
    outline: none;
    font-size: ${sizes.mideum_font};
    color: ${pallete.text_color};
    font-family: Noto Sans, Noto Sans KR;
  }
`;
