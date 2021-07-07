import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const CommentInput = styled.div`
  background-color: ${pallete.input_back};
  padding: 10px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 20px;
  }
  textarea {
    width: 90%;
    font-size: ${sizes.mideum_font};
    background-color: ${pallete.input_back};
    resize: none;
    outline: none;
    border: none;
    color: ${pallete.text_color};
    font-family: "Noto Sans KR", sans-serif;
  }
  button {
    width: 10%;
    padding: 16px;
    font-size: ${sizes.mideum_font};
    font-family: 500;
    font-weight: bold;
    border-radius: 7px;
    background-color: ${pallete.main_color};
    border: none;
    cursor: pointer;
  }
`;

export const CommentList = styled.ul`
  margin-top: 20px;
`;

export const CommentItem = styled.li`
  border-bottom: 1px solid ${pallete.input_back};
  padding: 10px;
  .header {
    display: flex;
    align-items: center;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    h1 {
      padding: 0 10px;
      font-size: ${sizes.mideum_font};
      font-weight: bold;
      display: inline-block;
    }
    & .createdAt {
      display: inline-block;
    }
  }
  & .comment {
    margin-top: 20px;
    word-break: break-all;
    display: block;
  }
`;
