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
  .user-setting {
    position: absolute;
    bottom: 0;
    left: 100%;
    z-index: 2;
    width: 38px;
    height: 38px;
    margin-bottom: 32px;
    margin-left: -40px;
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
  }
`;
