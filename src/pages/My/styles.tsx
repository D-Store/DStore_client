import styled from "@emotion/styled";
import pallete from "utils/pallete";
import sizes from "utils/sizes";

export const MyInfoCardContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  .background {
    width: 100%;
    height: 300px;
    background-size: cover;
    background: ${pallete.main_color};
    position: relative;
    display: flex;
    align-items: flex-end;
    justify-content: center;
  }
  img {
    position: absolute;
    bottom: -12px;
    width: 168px;
    height: 168px;
    border-radius: 50%;
    box-sizing: content-box;
    border: 7px solid ${pallete.background_color};
  }
  h1 {
    text-align: center;
    margin-top: 20px;
    color: ${pallete.text_color};
    font-size: ${sizes.big_font};
    font-weight: bold;
  }
  button {
    margin-top: 20px;
    border-radius: 5px;
    width: 300px;
    padding: 16px;
    font-size: ${sizes.mideum_font};
    font-family: 500;
    font-weight: bold;
    border: none;
    cursor: pointer;
    &.user-setting {
      width: 150px;
      position: absolute;
      background-color: ${pallete.green};
      bottom: 10px;
      right: 10px;
    }
  }
`;

export const Contaienr = styled.div`
  width: 600px;
  height: 600px;
  background-color: ${pallete.input_back};
  z-index: 999;
`;
