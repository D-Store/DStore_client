import styled from "styled-components";
import pallete from "../../style/pallete";
import sizes from "../../style/sizes";

export const BannerContainer = styled.section`
  width: 100%;
  height: 320px;
`;

interface IBannerItem {
  url: string;
}

export const BannerItem = styled.div<IBannerItem>`
  background-image: url(${(props) => props.url});
  height: 180px;
  width: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const CustomDots = styled.ul`
  .slick-active div {
    background-color: ${pallete.main_color};
  }
`;

export const CustomDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-top: 10px;
  background-color: white;
`;
