import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const CreateForm = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .hashs {
    display: flex;
    width: 500px;
    flex-wrap: wrap;
  }
  .hash-tag {
    /* font-weight: bold;
    color: ${pallete.main_color};
    text-decoration: none;
    margin-right: 10px;
    padding: 10px; */

    background-color: ${pallete.main_color};
    border-radius: 20px;
    padding: 10px 20px;
    margin: 3px;
    display: flex;
    justify-content: space-between;
  }
  svg {
    width: 10%;
    height: 10%;
  }
  h1 {
    font-weight: bold;
    font-size: ${sizes.big_font};
    margin: 10px;
    text-align: start;
  }
  span {
    margin: 10px;
    font-weight: lighter;
  }
  .error {
    border: 2px solid ${pallete.red};
  }
`;

export const Error = styled.span`
  color: ${pallete.red};
`;

export const HashInput = styled.input`
  border: none;
  color: ${pallete.text_color};
  background-color: ${pallete.input_back};
  font-size: ${sizes.mideum_font};
  font-weight: bold;
  width: ${sizes.max_width};
  padding: 16px;
  border-bottom: 2px solid ${pallete.main_color};
  outline: none;
  margin-top: 50px;
`;

export const ImageUpload = styled.div`
  .DragDrop {
    width: 100%;
    height: 100vh;
    display: flex;
    display: -webkit-flex;
    flex-direction: column;
    -ms-flex-direction: column;
    justify-content: center;
    align-items: center;
    &-File {
      width: 400px;
      height: 200px;
      border: 2px solid ${pallete.main_color};
      background-color: ${pallete.input_back};
      border-radius: 10px;
      display: flex;
      display: -webkit-flex;
      flex-direction: column;
      -ms-flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: 0.12s ease-in;

      &-Dragging {
        background-color: ${pallete.main_color};
        color: white;
      }
    }
  }
`;

export const SearchedMakerList = styled.ul`
  background-color: ${pallete.text_color};
  li {
    padding: 10px;
    width: 500px;
    color: ${pallete.background_color};
    display: flex;
    background-color: white;
    &:hover {
      filter: brightness(70%);
      cursor: pointer;
    }
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      border: 1px solid black;
      overflow: hidden;
    }
    p {
      &::before {
        content: "이름 : ";
        font-size: ${sizes.mideum_font};
        margin-left: 10px;
      }
      font-size: ${sizes.big_font};
    }
    span {
      color: ${pallete.green};
    }
  }
`;

export const MakerList = styled.ul`
  width: 500px;
  display: flex;
  flex-wrap: wrap;
  & > .total-maker {
    padding: 10px;
    width: 100%;
    text-align: center;
    color: ${pallete.main_color};
    font-size: ${sizes.big_font};
    font-weight: bold;
  }
`;

export const MakerItem = styled.li`
  width: 100%;
  background-color: ${pallete.text_color};
  color: ${pallete.main_color};
  padding: 10px 20px;
  margin: 3px;
  display: flex;
  justify-content: space-between;
  .meta {
    display: flex;
    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
    }
    p::before {
      content: "이름 : ";
      font-size: ${sizes.mideum_font};
      margin-left: 10px;
    }
    p {
      font-size: ${sizes.big_font};
    }
  }
  .maker-delete {
    display: none;
    color: ${pallete.red};
    padding: 0px 3px;
    cursor: pointer;
  }
  &:hover .maker-delete {
    display: flex;
  }
  &:first-child {
    margin-top: 10px;
  }
`;

export const Input = styled.input`
  border: none;
  color: ${pallete.text_color};
  background-color: ${pallete.input_back};
  font-size: ${sizes.mideum_font};
  font-weight: bold;
  width: ${sizes.max_width};
  padding: 16px;
  border-radius: 5px;
  outline: none;
`;

export const TextArea = styled.textarea`
  border: none;
  color: ${pallete.text_color};
  background-color: ${pallete.input_back};
  font-size: ${sizes.mideum_font};
  font-weight: bold;
  width: ${sizes.max_width};
  padding: 16px;
  border-radius: 5px;
  outline: none;
  resize: none;
  font-family: "Noto Sans KR", sans-serif;
`;

export const Button = styled.button`
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
`;
