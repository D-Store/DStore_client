import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const MyInfoCardContainer = styled.section`
  .background {
    height: 300px;
    background-size: cover;
    background-image: url("../../public/static/image/main.png");
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
    margin-top: 20px;
    color: ${pallete.text_color};
    font-size: ${sizes.big_font};
    font-weight: bold;
  }
`;
